package com.pavan.TasksApp.service.impl;

import com.pavan.TasksApp.dto.Response;
import com.pavan.TasksApp.dto.UserRequest;
import com.pavan.TasksApp.entity.User;
import com.pavan.TasksApp.enums.Role;
import com.pavan.TasksApp.exceptions.BadRequestException;
import com.pavan.TasksApp.exceptions.NotFoundException;
import com.pavan.TasksApp.repository.UserRepository;
import com.pavan.TasksApp.security.JwtUtils;
import com.pavan.TasksApp.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;

    @Override
    public Response<?> signUp(UserRequest userRequest) {
        log.info("Inside signUp()");
        Optional<User> existingUser = userRepository.findByUsername(userRequest.getUsername());

        if(existingUser.isPresent()) {
            throw new BadRequestException("Username is already taken");
        }

        User user = new User();
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());
        user.setRole(Role.USER);
        user.setUsername(userRequest.getUsername());
        user.setPassword(passwordEncoder.encode(userRequest.getPassword()));

        // save the user
        userRepository.save(user);

        return Response.builder()
                .statusCode(HttpStatus.OK.value())
                .message("User is registered successfully.")
                .build();
    }

    @Override
    public Response<?> login(UserRequest userRequest) {
        log.info("Inside login()");

        User user = userRepository.findByUsername(userRequest.getUsername())
                .orElseThrow(() -> new NotFoundException("User not found!"));

        if (!passwordEncoder.matches(userRequest.getPassword(), user.getPassword())) {
            throw new BadRequestException("Invalid Password");
        }

        String token = jwtUtils.generateToken(user.getUsername());

        return Response.builder()
                .statusCode(HttpStatus.OK.value())
                .message("Login Successfully.")
                .data(token)
                .build();
    }

    @Override
    public User getCurrentLoggedInUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();

        return userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException("User not found!"));
    }
}
