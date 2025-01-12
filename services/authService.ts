import axiosInstance from "@/config/axiosInstance";
import axios from "axios";
import userLoginSchema, {userLoginHttpResponse} from "@/schemas /UserLoginSchema";

export class AuthService {
    public static async login(email: string, password: string) {
        const response = await axios.post(`${process.env.EXPO_PUBLIC_BASE_URL}/api/auth/login`, {
            email: email.toLowerCase(),
            password,
        })
        return userLoginHttpResponse.parse(response)?.data
    }

    public static async register(email: string, password: string, name: string, phone: string) {
        try {
            return await axios.post(`${process.env.EXPO_PUBLIC_BASE_URL}/api/auth/signup`, {
                email: email.toLowerCase(),
                password,
                name,
                phone
            })
        } catch (err) {
            throw err;
        }
    }

    public static async sendCode(email: string) {
        try {
            return await axios.post(`${process.env.EXPO_PUBLIC_BASE_URL}/api/auth/request_password_reset`, {
                email: email?.toLowerCase(),
            })
        } catch (err) {
            throw err;
        }
    }

    public static async verifyCode(email: string, code: string) {
        try {
            return await axios.post(`${process.env.EXPO_PUBLIC_BASE_URL}/api/auth/verify_code`, {
                email: email?.toLowerCase(),
                code: code
            })
        } catch (err) {
            throw err;
        }
    }

    public static async resetPassword(email: string, newPassword: string) {
        try {
            return await axios.post(`${process.env.EXPO_PUBLIC_BASE_URL}/api/auth/reset_password`, {
                email: email?.toLowerCase(),
                newPassword: newPassword
            })
        } catch (err) {
            throw err;
        }
    }
}