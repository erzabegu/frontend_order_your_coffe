import React, { createContext, useContext, ReactNode } from 'react';
import { create } from 'zustand';

interface AuthState {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
}));

const AuthContext = createContext<AuthState | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const store = useAuthStore();
    return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthState => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
