import {create} from "zustand/react";

interface StoreState {
    order: {
        storeId?: number;
        items: Array<{
            coffeeUrl?: string;
            itemId: number | string;
            amount: number | string;
            ristretto: number | string;
            onSite: boolean;
            volume: string;
            isCertainTimeEnabled: boolean;
            date: string;
            coffee_type?: number;
            roasting?: string;
            grinding?: string;
            ice?: string;
        }>;
    };
    setOrder: (order: {
        storeId?: number;
        items: Array<{
            coffeeUrl?: string;
            itemId: number | string;
            amount: number | string;
            ristretto: number | string;
            onSite: boolean;
            volume: string;
            isCertainTimeEnabled: boolean;
            date: string;
            coffee_type?: number;
            roasting?: string;
            grinding?: string;
            ice?: string;
        }>;
    }) => void;
}

const useOrderState = create<StoreState>((set) => ({
    order: {
        storeId: undefined,
        items: [],
    },
    setOrder: (order) =>
        set(() => ({
            order,
        })),
}));

export default useOrderState;
