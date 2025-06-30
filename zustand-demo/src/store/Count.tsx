import {create} from "zustand";

type CountStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    update: (count: number) => void;
};
export const countStore = create<CountStore>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
    update: (count: number) => set({ count }),
}));