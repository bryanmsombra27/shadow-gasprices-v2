import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = "not-authenticated" | "autenthicated" | "authenticating";

interface InitialState {
  authState: AuthState;
  token: string;
}

interface Actions {
  setAuthState: (authState: AuthState) => void;
  setToken: (token: string) => void;
}

type State = InitialState & Actions;

export const useauthStore = create<State>()(
  persist(
    (set, get) => ({
      authState: "not-authenticated",
      token: "",
      setToken: (token) => {
        set({ token: token });
      },
      setAuthState: (authState) => {
        set({
          authState,
        });
      },
    }),
    { name: "auth" }
  )
);
