import axios from "axios";
import useUserStore from "@/store/useUserStore";


const axiosInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    async (config) => {
        config.headers.Authorization = `Barear ${useUserStore.getState().userData.token}`
        return config;
    },
);
export default axiosInstance;
