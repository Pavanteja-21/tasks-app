

import axios from "axios";

export default class ApiService {

    static API_URL = "http://localhost:8080/api";

    // ================= TOKEN HANDLING =================

    static saveToken(token) {
        localStorage.setItem("token", token);
    }

    static getToken() {
        return localStorage.getItem("token");
    }

    static isAuthenticated() {
        return !!this.getToken();
    }

    static logout() {
        localStorage.removeItem("token");
    }

    // ================= HEADERS =================

    static getHeader() {
        const token = this.getToken();

        return token
            ? {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
              }
            : {
                "Content-Type": "application/json"
              };
    }

    // ================= AUTH APIs =================

    // Register
    static async registerUser(body) {
        const res = await axios.post(
            `${this.API_URL}/auth/register`,
            body,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        return res.data;
    }

    // Login
    static async loginUser(body) {
        const res = await axios.post(
            `${this.API_URL}/auth/login`,
            body,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        return res.data;
    }

    // ================= TASK APIs =================

    // Create Task
    static async createTask(body) {
        const res = await axios.post(
            `${this.API_URL}/tasks`,
            body,
            {
                headers: this.getHeader()
            }
        );
        return res.data;
    }

    // Update Task
    static async updateTask(body) {
        const res = await axios.put(
            `${this.API_URL}/tasks`,
            body,
            {
                headers: this.getHeader()
            }
        );
        return res.data;
    }

    // Get All Tasks (FIXED)
    static async getAllMyTasks() {
        const res = await axios.get(
            `${this.API_URL}/tasks`,
            {
                headers: this.getHeader()
            }
        );
        return res.data;
    }

    // Get Task By ID
    static async getTaskById(taskId) {
        const res = await axios.get(
            `${this.API_URL}/tasks/${taskId}`,
            {
                headers: this.getHeader()
            }
        );
        return res.data;
    }

    // Delete Task
    static async deleteTask(taskId) {
        const res = await axios.delete(
            `${this.API_URL}/tasks/${taskId}`,
            {
                headers: this.getHeader()
            }
        );
        return res.data;
    }

    // Get Tasks By Completion Status (FIXED METHOD)
    static async getTasksByCompletionStatus(completed) {
        const res = await axios.get(
            `${this.API_URL}/tasks/status`,
            {
                headers: this.getHeader(),
                params: { completed }
            }
        );
        return res.data;
    }

    // Get Tasks By Priority (FIXED METHOD)
    static async getTasksByPriority(priority) {
        const res = await axios.get(
            `${this.API_URL}/tasks/priority`,
            {
                headers: this.getHeader(),
                params: { priority }
            }
        );
        return res.data;
    }
}
