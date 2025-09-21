import { create } from "zustand";
import { persist } from "zustand/middleware";

type LocationPermission = "GRANTED" | "DENIED" | "PROMPT";

interface InitialState {
  location: number[];
  permissionGranted: LocationPermission;
  isLoading: boolean;
}

interface Actions {
  setLocation: (location: number[]) => void;
  setPermissionGranted: (permission: LocationPermission) => void;
  setIsLoading: (value: boolean) => void;
}

type State = InitialState & Actions;

export const uselocationStore = create<State>()(
  persist(
    (set, get) => ({
      location: [],
      permissionGranted: "PROMPT",
      isLoading: false,
      setIsLoading: (value) => {
        set({
          isLoading: value,
        });
      },

      setPermissionGranted: (permission) => {
        switch (permission) {
          case "DENIED":
            set({
              location: [],
              permissionGranted: permission,
            });
            break;
          case "PROMPT":
            set({
              location: [],
              permissionGranted: permission,
            });
            break;

          default:
            set({
              permissionGranted: permission,
            });
            break;
        }
      },
      setLocation: (location) => {
        set({
          location,
        });
      },
    }),
    { name: "location" }
  )
);
