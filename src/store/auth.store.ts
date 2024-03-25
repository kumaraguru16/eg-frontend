import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type AuthStoreUser = {
  data: any;
  name: string;
  email: string;
  createdAt: string;
  id: number;
};

export type AuthStore = (
  | {
      isAuthenticated: false;
      user: null;
    }
  | {
      isAuthenticated: true;
      user: AuthStoreUser;
    }
) & {
  signedIn: (user: AuthStoreUser) => void;
  signedOut: () => void;
};

const useAuthStore = create(
  persist(
    // Wrap your store with persist middleware
    immer<AuthStore>((set) => ({
      isAuthenticated: false,
      user: null,
      signingOut: false,
      signedIn: (user) => {
        set((state) => {
          state.isAuthenticated = true;
          state.user = user;
        });
      },
      signedOut: () => {
        set((state) => {
          state.isAuthenticated = false;
          state.user = null;
        });
      },
    })),
    {
      name: "auth", // Name of your storage (used as a key in the local storage)
      getStorage: () => localStorage, // Specify the storage type, e.g., localStorage
      // You can also add a partialize option to selectively persist parts of the state
    }
  )
);

export { useAuthStore };
