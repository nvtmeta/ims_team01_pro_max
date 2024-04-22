import { create } from "zustand";

export const useStoreMenuName = create((set) => ({
  menuName: "",
  setMenuName: (newState: string) => set({ menuName: newState }),
}));
