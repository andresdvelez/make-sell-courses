import { AuthStore } from "@/types/auth";
import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

const storeApi: StateCreator<AuthStore> = (set) => ({
  user: null,
  isLoading: false,
  setUser: (user) => set(() => ({ user })),
});

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(storeApi, {
      name: "auth-store",
    })
  )
);
