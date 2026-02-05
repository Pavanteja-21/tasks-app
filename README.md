# Task Management Application

A full-stack application for managing tasks, built with Spring Boot and React. This application provides secure user authentication and a comprehensive interface for creating, updating, and managing tasks.

## 🚀 Features

*   **User Authentication**: Secure Login and Registration using JWT (JSON Web Tokens).
*   **Task Management**:
    *   Create new tasks with title, description, and due dates.
    *   View a list of all tasks.
    *   View tasks by priority and completion status.
    *   Edit existing tasks.
    *   Delete tasks.
*   **Responsive UI**: Modern user interface built with React and Vite.
*   **Secure Backend**: RESTful API secured with Spring Security.

## 🛠️ Tech Stack

### Backend
*   **Java**
*   **Spring Boot**
*   **Spring Security** (Authentication & Authorization)
*   **Spring Data JPA** (Database Interaction)
*   **MySQL** (Database)
*   **Lombok** (Boilerplate code reduction)
*   **JWT** (Stateless Authentication)

### Frontend
*   **React.js**
*   **Vite** (Build tool)
*   **Axios** (HTTP Client)
*   **React Router Dom** (Navigation)
*   **CSS** (Styling)

## 📋 Prerequisites

Ensure you have the following installed on your machine:
*   [Java Development Kit (JDK) 25](https://www.oracle.com/java/technologies/downloads/)
*   [Node.js](https://nodejs.org/) (Latest LTS recommended)
*   [MySQL](https://www.mysql.com/)

## ⚙️ Installation & Setup

### 1. Database Setup

1.  Open your MySQL terminal or workbench.
2.  Create a database named `tasks`:
    ```sql
    CREATE DATABASE tasks;
    ```
    *Note: The application is configured to use `root` as the username and `root` as the password. You can change this in `backend/TasksApp/src/main/resources/application.properties` if needed.*

### 2. Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend/TasksApp
    ```
2.  Run the application using Maven:
    ```bash
    ./mvnw spring-boot:run
    ```
    The backend server will start at `http://localhost:8080`.

### 3. Frontend Setup

1.  Open a new terminal and navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173`.

## 🔒 Configuration

### Backend Configuration
The backend configuration is located in `backend/TasksApp/src/main/resources/application.properties`.
*   **Database URL**: `spring.datasource.url`
*   **Database User**: `spring.datasource.username`
*   **Database Password**: `spring.datasource.password`
*   **JWT Secret**: `secretJwtString`

## 📝 Usage

1.  Open your browser and navigate to `http://localhost:5173`.
2.  **Register** a new account.
3.  **Login** with your credentials.
4.  Start managing your tasks!
