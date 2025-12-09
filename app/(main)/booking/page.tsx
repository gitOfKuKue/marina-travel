"use client";
import Container from "@/src/components/common-components/Container";
import { StaticImageData } from "next/image";
import React from "react";

import Button3 from "@/src/components/buttons/Button3";
import useBookings from "@/src/hook/useBookings";
import useAgentServices from "@/src/hook/useAgentServices";

const BookingPage = () => {
  const { bookings, setBookings } = useBookings();
  const { convertTitleToLink } = useAgentServices();
  const handleSwapButton = (category: string) => {
    const updatedBookings = bookings.map((booking) => ({
      ...booking,
      isSelected: booking.category === category,
    }));
    setBookings(updatedBookings);
  };

  return (
    <section className="mt-10 mb-50">
      <Container>
        <div className="">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary mb-6 drop-shadow-sm">
            Start Your Adventure
          </h1>
          <p className="text-lg md:text-xl font-medium text-secondary-font max-w-3xl leading-relaxed mb-12">
            Ready to embark on your dream journey? Choose from our wide range of
            premium travel options below. Whether you&apos;re looking for a
            relaxing cruise, a seamless flight connection, or an immersive local
            tour, we make booking your next adventure simple and stress-free.
          </p>
        </div>

        <div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
            {bookings.map((booking) => (
              <button
                type="button"
                key={booking.category}
                onClick={() => handleSwapButton(booking.category)}
                className={` text-primary w-40 md:w-50 h-12 md:h-15 text-center leading-12 md:leading-15 rounded-full font-bold transition-all duration-300 text-sm md:text-base ${
                  booking.isSelected
                    ? "bg-primary text-white"
                    : "bg-white border border-primary hover:bg-hover"
                }`}
              >
                {booking.category}
              </button>
            ))}
          </div>

          {/* Plans */}
          <div>
            {bookings.map((booking) => (
              <div key={booking.category}>
                {booking.isSelected && (
                  <div>
                    <h2 className="text-xl md:text-2xl text-secondary-font font-bold mb-5 text-center md:text-left">
                      <span className="text-primary font-bold">
                        {booking.plans.length}
                      </span>{" "}
                      Plans in {booking.category}.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                      {booking.plans.map((plan) => (
                        <Card
                          key={plan.title}
                          {...plan}
                          convertTitleToLink={convertTitleToLink}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

interface CardProps {
  title: string;
  image: StaticImageData;
  description: string;
  priceRange: string;
  convertTitleToLink: (title: string) => string;
}

const Card = ({
  title,
  image,
  description,
  priceRange,
  convertTitleToLink,
}: CardProps) => {
  return (
    <div
      className="flex flex-col justify-end rounded-2xl overflow-hidden w-full h-100 bg-no-repeat bg-cover bg-center shadow-xl hover:scale-102 transition-transform duration-500 hover:shadow-2xl relative"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
        {priceRange}
      </div>
      {/* Content */}
      <div className="p-5 bg-linear-to-t from-black/80 via-black/40 to-transparent">
        <h1 className="text-2xl text-white font-bold mb-2">{title}</h1>
        <p className="mb-4 w-80 text-white/90 font-medium">{description}</p>
        <Button3
          text="Book Now"
          href={`/booking/${convertTitleToLink(title)}`}
        />
      </div>
    </div>
  );
};

export default BookingPage;
