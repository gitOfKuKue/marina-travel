import { create } from "zustand";

// Image Import
import flight from "@/src/assets/images/flight.jpg";
import accommodation from "@/src/assets/images/accommodation.jpg";
import cruise from "@/src/assets/images/cruise.jpg";
import transportation from "@/src/assets/images/transportation.jpg";
import activity from "@/src/assets/images/activity.jpg";
import island from "@/src/assets/images/island.jpg";
import europianHistory from "@/src/assets/images/europian-history.jpg";
import mountain from "@/src/assets/images/mountain.jpg";
import roundTripFlight from "@/src/assets/images/airplane.jpg";

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
  bookings: [
    {
      category: "Individual",
      plans: [
        {
          title: "Flights",
          image: flight,
          description:
            "Tailored flight options for your schedule. Best fares for a smooth journey.",
          priceRange: "$100 - $1,500",
        },
        {
          title: "Accommodation",
          image: accommodation,
          description:
            "Relax in style with our top-rated hotels. Perfect stays for your comfort and budget.",
          priceRange: "$80 - $800 / night",
        },
        {
          title: "Cruises",
          image: cruise,
          description:
            "Voyage with premium cruise lines. Dining and entertainment in one trip.",
          priceRange: "$500 - $3,000",
        },
        {
          title: "Ground Transportation",
          image: transportation,
          description:
            "Easy travel with reliable rentals. Safe and seamless ground transport.",
          priceRange: "$30 - $200",
        },
        {
          title: "Tours and Activities",
          image: activity,
          description:
            "Immerse in local culture with guided tours. explore hidden gems and landmarks.",
          priceRange: "$50 - $400",
        },
      ],
      isSelected: true,
    },
    {
      category: "Packages",
      plans: [
        {
          title: "Island Paradise Retreat",
          image: island,
          description: "7 days of sun, sand, and relaxation in the Maldives.",
          priceRange: "$3,000 - $5,000",
        },
        {
          title: "European History Tour",
          image: europianHistory,
          description: "Explore 5 countries and their rich history in 10 days.",
          priceRange: "$4,500 - $6,000",
        },
        {
          title: "Mountain Adventure",
          image: mountain,
          description: "Cozy cabin stay with guided hiking and skiing options.",
          priceRange: "$1,200 - $2,000",
        },
        {
          title: "Round Trip Flight",
          image: roundTripFlight,
          description: "Premium round-trip flights to top global destinations.",
          priceRange: "$500 - $2,000",
        },
      ],
      isSelected: false,
    },
  ],
  setBookings: (bookings: any) => set({ bookings }),
}));

export default useBookings;
