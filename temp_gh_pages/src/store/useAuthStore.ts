import { create } from 'zustand';
import { AuthStore } from '../types/Auth';
import adminData from '../data/admin.json';

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  login: async (username: string, password: string) => {
    if (username === adminData.username && password === adminData.password) {
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false }),
}));