package com.pavan.TasksApp.service;

import com.pavan.TasksApp.dto.Response;
import com.pavan.TasksApp.dto.UserRequest;
import com.pavan.TasksApp.entity.User;

public interface UserService {

    Response<?> signUp(UserRequest userRequest);
    Response<?> login(UserRequest userRequest);
    User getCurrentLoggedInUser();
}
