import { User, UserData } from "@/types/types";
import { create } from "zustand";

type AuthState = {
  user: User | null;
  userData: UserData | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

type AuthActions = {
  login: (user: User) => void;
  logout: () => void;
  updateUserData: (userData: UserData) => void;
};

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  userData: null,
  isAuthenticated: false,
  isLoading: false,

  login: (user) => set((state) => ({ user, isAuthenticated: true })),
  logout: () => set((state) => ({ user: null, isAuthenticated: false })),
  updateUserData: (userData) => set((state) => ({ userData })),
}));
