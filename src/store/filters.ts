import { create } from "zustand";
import { persist } from "zustand/middleware";

export type FilterState = "location" | "all" | "top";

interface InitialState {
  type: FilterState;
}

interface Actions {
  setType: (type: FilterState) => void;
}

type State = InitialState & Actions;

export const usefiltersStore = create<State>()(
  persist(
    (set, get) => ({
      type: "location",

      setType: (type) => {
        set({
          type,
        });
      },
    }),
    { name: "filters" }
  )
);
