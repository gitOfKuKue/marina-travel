import React from "react";
import ServiceClientPage from "./ServiceClientPage";
import { SERVICE_TITLES } from "@/src/data/slugs";

export async function generateStaticParams() {
  return SERVICE_TITLES.map((title) => ({
    serviceTitle: title.toLowerCase().replaceAll(" ", "-"),
  }));
}

export default function Page(props: {
  params: Promise<{ serviceTitle: string }>;
}) {
  return <ServiceClientPage params={props.params} />;
}
