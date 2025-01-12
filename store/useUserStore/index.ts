import { create } from "zustand/react";

interface StoreState {
    userEmail: string;
    setUserEmail: (userEmail: string) => void;
    userData: {
        token: string;
        user: {
            email: string;
            name: string;
        };
    };
    setUserData: (userData: { token: string; user: { email: string; name: string } }) => void;
}

const useUserStore = create<StoreState>((set) => ({
    userEmail: "",
    setUserEmail: (userEmail: string) => set({ userEmail }),
    userData: {
        token: "",
        user: {
            email: "",
            name: "",
        },
    },
    setUserData: (userData) => set((state) => ({ ...state, userData })),
}));

export default useUserStore;
