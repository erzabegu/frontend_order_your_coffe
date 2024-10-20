import {create} from "zustand/react";

interface StoreState {
    userEmail: string;
    setUserEmail: (userEmail: string) => void;
}

const useUserStore = create<StoreState>((set) => ({
    userEmail: "",
    setUserEmail: (userEmail: string) => set({ userEmail })
}));

export default useUserStore;
