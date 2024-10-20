import axiosInstance from "@/config/axiosInstance";
import axios from "axios";

export class AuthService {
    public static login = (email: string, password: string) => {
        try {
            return axios.post(`${process.env.EXPO_PUBLIC_BASE_URL}/api/auth/login`, {
                email: email.toLowerCase(),
                password: password,
            })
        } catch (err) {
            throw err;
        }
    }
    public static register = (email: string, password: string, name: string, phone: string) => {
        try {
            return axiosInstance.post(`${process.env.EXPO_PUBLIC_BASE_URL}/api/auth/signup`, {
                email: email.toLowerCase(),
                password,
                name,
                phone
            })
        } catch (err) {
            throw err;
        }
    }
    public static sendCode = (email: string) => {
        try {
            return axiosInstance.post(`${process.env.EXPO_PUBLIC_BASE_URL}/api/auth/request_password_reset`, {
                email: email?.toLowerCase(),
            })
        } catch (err) {
            throw err;
        }
    }
    public static verifyCode = (email: string, code: string) => {
        try {
            return axiosInstance.post(`${process.env.EXPO_PUBLIC_BASE_URL}/api/auth/verify_code`, {
                email: email?.toLowerCase(),
                code: code
            })
        } catch (err) {
            throw err;
        }
    }
    public static resetPassword = (email: string, newPassword: string) => {
        try {
            return axiosInstance.post(`${process.env.EXPO_PUBLIC_BASE_URL}/api/auth/reset_password`, {
                email: email?.toLowerCase(),
                newPassword: newPassword
            })
        } catch (err) {
            throw err;
        }
    }
}