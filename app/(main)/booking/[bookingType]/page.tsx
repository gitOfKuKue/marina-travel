import React from "react";
import BookingClientPage from "./BookingClientPage";
import { BOOKING_TYPES } from "@/src/data/slugs";

export async function generateStaticParams() {
  return BOOKING_TYPES.map((title) => ({
    bookingType: title.toLowerCase().replaceAll(" ", "-"),
  }));
}

export default function Page(props: {
  params: Promise<{ bookingType: string }>;
}) {
  return <BookingClientPage params={props.params} />;
}
