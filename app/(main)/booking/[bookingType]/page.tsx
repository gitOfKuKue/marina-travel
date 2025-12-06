"use client";

import Container from "@/src/components/common-components/Container";
import useAgentServices from "@/src/hook/useAgentServices";
import useBookings from "@/src/hook/useBookings";
import Lottie from "lottie-react";
import Image from "next/image";
import React, { use } from "react";

import bookingPic from "@/src/assets/animated-pics/animacion mobil.json";
import CountrySelector from "@/src/components/CountrySelector";
import "react-phone-number-input/style.css";
import PhoneInput, { Value } from "react-phone-number-input";
import Button3 from "@/src/components/buttons/Button3";
import Button1 from "@/src/components/buttons/Button1";
import Button2 from "@/src/components/buttons/Button2";
import useNotification from "@/src/hook/useNotification";
import Close from "@/src/components/buttons/Close";

const BookingForm = ({
  params,
}: {
  params: Promise<{ bookingType: string }>;
}) => {
  const { bookingType } = use(params);
  const { bookings } = useBookings();
  const { convertTitleToLink } = useAgentServices();
  const { setIsAlert, setAlertText, setAlertStatus } = useNotification();
  const [phoneValue, setPhoneValue] = React.useState<Value>();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [peopleCount, setPeopleCount] = React.useState(1);
  const [country, setCountry] = React.useState<{
    label: string;
    value: string;
  } | null>(null);

  const [fromCity, setFromCity] = React.useState<{
    label: string;
    value: string;
  } | null>(null);
  const [toCity, setToCity] = React.useState<{
    label: string;
    value: string;
  } | null>(null);

  const booking = bookings.find((booking) =>
    booking.plans.some(
      (plan) => convertTitleToLink(plan?.title) === bookingType
    )
  );

  const plan = booking?.plans.find(
    (plan) => convertTitleToLink(plan?.title) === bookingType
  );

  const handleSubmit = () => {
    setIsAlert(true);
    setAlertText("Booking successfully!");
    setAlertStatus(200);
  };

  if (!plan) return null;

  return (
    <section className="mb-50 mt-5">
      <Container>
        <form
          action="#"
          className="flex justify-between items-stretch gap-10"
          onSubmit={handleSubmit}
        >
          {/* Personal Info */}
          <div className="flex-1 bg-white rounded-4xl overflow-hidden shadow-2xl">
            {/* Image */}
            <div
              style={{ backgroundImage: `url(${plan?.image.src})` }}
              className="w-full h-80 bg-cover bg-no-repeat bg-center"
            ></div>

            {/* Form */}
            <div className="p-8">
              <h1 className="text-4xl">
                Book for{" "}
                <span className="text-primary font-bold">{plan?.title}</span>
              </h1>
              <p className="text-secondary-font mb-10">
                Fill out the form below to book your {plan?.title}.
              </p>

              {/* Name */}
              <div className="mb-5">
                <label htmlFor="name" className="text-lg text-secondary-font">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#F4F4F4] w-full h-15 px-5 py-2 rounded-(--standard-radius) text-xl box-border"
                  required
                />
              </div>

              {/* Email and Phone */}
              <div className="flex items-center justify-between gap-5 mb-5">
                {/* Email */}
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="text-lg text-secondary-font"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <input
                    type="email"
                    placeholder="e.g. johndoe@example.com"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#F4F4F4] w-full h-15 px-5 py-2 rounded-(--standard-radius) text-xl box-border"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="flex-1">
                  <label
                    htmlFor="phone"
                    className="text-lg text-secondary-font"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <PhoneInput
                    defaultCountry="VN"
                    international
                    limitMaxLength
                    placeholder="Enter phone number"
                    value={phoneValue}
                    onChange={setPhoneValue}
                    id="phone"
                    className="bg-[#F4F4F4] w-full h-15 px-5 py-2 rounded-(--standard-radius) text-xl box-border [&>input]:bg-transparent [&>input]:outline-none [&>input]:text-xl"
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div className="mb-5">
                <label
                  htmlFor="address"
                  className="text-lg text-secondary-font"
                >
                  Current Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  id="address"
                  className="w-full h-30 bg-[#F4F4F4] px-5 py-2 rounded-(--standard-radius) text-xl box-border resize-none"
                  placeholder="e.g. 123 Main St, City, Country"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          {/* Trip routes */}
          <div className="flex-1 flex flex-col bg-white rounded-4xl overflow-hidden shadow-2xl p-8">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h1 className="text-2xl font-bold">Travel Routes</h1>
                <p className="text-secondary-font">Choose your trip route</p>
              </div>

              <div>
                <Close />
              </div>
            </div>
            {/* City */}
            <div className="mb-10">
              <CountrySelector
                value={country}
                onChange={setCountry}
                fromCity={fromCity}
                toCity={toCity}
                onChangeFromCity={setFromCity}
                onChangeToCity={setToCity}
                showCities={true}
                required
                onlyDestination={
                  !(
                    plan?.title === "Flights" ||
                    plan?.title === "Ground Transportation" ||
                    plan?.title === "Round Trip Flight" ||
                    plan?.title === "Cruises"
                  )
                }
              />
            </div>

            {/* People Count and Price */}
            <div className="mb-5">
              <label
                htmlFor="people"
                className="text-lg text-secondary-font block mb-2"
              >
                Number of Persons
              </label>
              <input
                type="number"
                id="people"
                min="1"
                value={peopleCount}
                onChange={(e) => setPeopleCount(parseInt(e.target.value) || 1)}
                className="bg-[#F4F4F4] w-full h-15 px-5 py-2 rounded-(--standard-radius) text-xl box-border"
              />

              <p className="text-red-500 text-sm mb-5">At least 1 person</p>

              <div className="bg-[#F4F4F4] p-5 rounded-(--standard-radius)">
                <h3 className="text-xl text-secondary-font mb-2">
                  Estimated Total
                </h3>
                <p className="text-3xl font-bold text-primary">
                  {(() => {
                    const isTransportation =
                      plan?.title === "Flights" ||
                      plan?.title === "Ground Transportation" ||
                      plan?.title === "Round Trip Flight" ||
                      plan?.title === "Cruises";

                    // Extract numbers from price range string e.g. "$100 - $1,500"
                    const matches = plan?.priceRange?.match(/[\d,]+/g);
                    let minPrice = 0;
                    let maxPrice = 0;

                    if (matches && matches.length >= 2) {
                      minPrice = parseInt(matches[0].replace(/,/g, ""));
                      maxPrice = parseInt(matches[1].replace(/,/g, ""));
                    } else if (matches && matches.length === 1) {
                      minPrice = parseInt(matches[0].replace(/,/g, ""));
                      maxPrice = minPrice;
                    } else {
                      return plan?.priceRange;
                    }

                    if (isTransportation) {
                      // Transportation Pricing (Route Based: From + To)
                      if (!fromCity || !toCity) {
                        return "Select origin and destination";
                      }

                      const avgBase = (minPrice + maxPrice) / 2;
                      // Mock logic: Length of city names as a proxy for distance/route variation
                      const routeFactor =
                        (fromCity.value.length + toCity.value.length) * 10;

                      const specificPrice = avgBase + routeFactor;

                      return `$${(specificPrice * peopleCount).toLocaleString(
                        undefined,
                        { maximumFractionDigits: 0 }
                      )}`;
                    } else {
                      // Non-Transportation: Specific City Pricing (Country + City)
                      if (!toCity) {
                        return "Select a city";
                      }

                      let multiplier = 1;
                      if (country) {
                        if (country.value === "VN") multiplier = 0.8;
                        else if (
                          ["US", "GB", "FR", "DE", "JP", "AU"].includes(
                            country.value
                          )
                        )
                          multiplier = 1.5;
                        else multiplier = 1.2;
                      }

                      // City Specific Factor: Mock variation based on name length
                      // Shorter city names = Slightly cheaper? Or random logic deterministic by name
                      const cityFactor = toCity.value.length * 20;

                      // Calculate average base price
                      const avgBasePrice = (minPrice + maxPrice) / 2;
                      const finalPrice = avgBasePrice * multiplier + cityFactor;

                      return `$${(finalPrice * peopleCount).toLocaleString(
                        undefined,
                        {
                          maximumFractionDigits: 0,
                        }
                      )}`;
                    }
                  })()}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {(() => {
                    const isTransportation =
                      plan?.title === "Flights" ||
                      plan?.title === "Ground Transportation" ||
                      plan?.title === "Round Trip Flight" ||
                      plan?.title === "Cruises";

                    if (isTransportation && fromCity && toCity) {
                      return `Computed for route: ${fromCity.label} -> ${toCity.label}`;
                    }

                    if (!isTransportation && toCity) {
                      return `Computed for ${toCity.label}, ${country?.label}`;
                    }

                    return `Based on ${plan?.priceRange} per person`;
                  })()}
                </p>
              </div>
            </div>

            <button type="submit" className="mt-auto">
              <Button2 text="Submit" />
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default BookingForm;
