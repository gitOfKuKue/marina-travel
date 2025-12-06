import { create } from "zustand";

interface Notification {
  isAlert: boolean;
  setIsAlert: (value: boolean) => void;
  alertText: string;
  setAlertText: (value: string) => void;
  alertStatus: number;
  setAlertStatus: (value: number) => void;
}

const useNotification = create<Notification>((set) => ({
  isAlert: false,
  setIsAlert: (value: boolean) => set({ isAlert: value }),
  alertText: "Something went wrong!",
  setAlertText: (value: string) => set({ alertText: value }),
  alertStatus: 500,
  setAlertStatus: (value: number) => set({ alertStatus: value }),
}));

export default useNotification;
