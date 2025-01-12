import axiosInstance from "@/config/axiosInstance";
import {limit} from "@firebase/firestore";

export default class StoresService {
    public static async getAllStores(limit: number, pageNumber: number) {
        return axiosInstance.get("/api/stores", {
            params: {
                limit,
                pageNumber
            }
        })
    }

    public static async getStoreItems(storeId: string, limit: number, pageNumber: number) {
        return axiosInstance.get(`/api/stores/${storeId}`, {
            params: {
                limit,
                pageNumber
            }
        })
    }
}