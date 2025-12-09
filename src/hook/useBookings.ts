import { create } from "zustand";

// Image Import
import { BOOKINGS_DATA } from "../data/bookings";

interface Booking {
  category: string;
  plans: {
    title: string;
    image: any;
    description: string;
    priceRange: string;
  }[];
  isSelected: boolean;
}

interface BookingStore {
  bookings: Booking[];
  setBookings: (bookings: Booking[]) => void;
}

const useBookings = create<BookingStore>((set) => ({
  bookings: BOOKINGS_DATA,
  setBookings: (bookings: any) => set({ bookings }),
}));

export default useBookings;
