import { create } from "zustand";
import { StaticImageData } from "next/image";

// Image Import
import { BOOKINGS_DATA } from "../data/bookings";

interface Booking {
  category: string;
  plans: {
    title: string;
    image: StaticImageData;
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
  setBookings: (bookings: Booking[]) => set({ bookings }),
}));

export default useBookings;
