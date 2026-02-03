import axios from 'axios';

export default class ApiService{

    static API_URL = "http://localhost:8080/api"

    static saveToken(token) {
        localStorage.setItem("token", token)
    }

    static getToken() {
        return localStorage.getItem("token")
    }

    static isAuthenticated() {
        return !!localStorage.getItem("token")
    }

    static logout() {
        localStorage.removeItem("token")
    }

    static getHeader() {
        const token = this.getToken()
        return {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json"
        }
    }

    // Register User
    static async registerUser(body) {
        const res = await axios.post(`${this.API_URL}/auth/register`, body)
        return res.data
    }

    // Login User
    static async loginUser(body) {
        const res = await axios.post(`${this.API_URL}/auth/login`, body)
        return res.data
    }

    // Tasks API
    static async createTask(body) {
        const res = await axios.post(`${this.API_URL}/tasks`, body, {
            headers: this.getHeader()
        })
        return res.data
    }

    static async updateTask(body) {
        const res = await axios.put(`${this.API_URL}/tasks`, body, {
            headers: this.getHeader()
        })
        return res.data
    }

    static async getAllMyTasks(body) {
        const res = await axios.get(`${this.API_URL}/tasks`, body, {
            headers: this.getHeader()
        })
        return res.data
    }

    static async getTaskById(taskId) {
        const res = await axios.get(`${this.API_URL}/tasks/${taskId}`, {
            headers: this.getHeader()
        })
        return res.data
    }

    static async deleteTask(taskId) {
        const res = await axios.delete(`${this.API_URL}/tasks/${taskId}`, {
            headers: this.getHeader()
        })
        return res.data
    }

    static async getTasksByCompletionStatus(completed) {
        const res = await axios.delete(`${this.API_URL}/tasks/status`, {
            headers: this.getHeader(),
            params: {
                completed: completed
            }
        })
        return res.data
    }

    static async getTasksByPriority(priority) {
        const res = await axios.delete(`${this.API_URL}/tasks/priority`, {
            headers: this.getHeader(),
            params: {
                priority: priority
            }
        })
        return res.data
    }

}