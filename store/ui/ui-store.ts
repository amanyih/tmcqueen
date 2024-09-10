import { create } from "zustand";

type UIState = {
  modal: {
    isOpen: boolean;
    title: string;
    content: React.ReactNode;
  };
  toast: {
    isOpen: boolean;
    message: string;
    status: "success" | "error" | "warning" | "info";
  };
};

type UIActions = {
  openModal: (title: string, content: React.ReactNode) => void;
  closeModal: () => void;
  openToast: (
    message: string,
    status: "success" | "error" | "warning" | "info"
  ) => void;
  closeToast: () => void;
};

export const useUIStore = create<UIState & UIActions>((set) => ({
  modal: {
    isOpen: false,
    title: "",
    content: null,
  },
  toast: {
    isOpen: false,
    message: "",
    status: "success",
  },
  openModal: (title, content) =>
    set((state) => ({ modal: { isOpen: true, title, content } })),
  closeModal: () =>
    set((state) => ({ modal: { isOpen: false, title: "", content: null } })),
  openToast: (message, status) =>
    set((state) => ({ toast: { isOpen: true, message, status } })),
  closeToast: () =>
    set((state) => ({
      toast: { isOpen: false, message: "", status: "success" },
    })),
}));
