import { create } from "zustand";

type AppStore = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
