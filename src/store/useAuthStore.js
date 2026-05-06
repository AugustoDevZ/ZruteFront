import { create } from "zustand";

export const useTokenStore = create((set) => ({

    token: null,
    setToken: (nuevoToken) =>
        set({
            token: nuevoToken,
        })
}));