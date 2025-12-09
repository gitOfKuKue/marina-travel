import React from "react";
import { Metadata } from "next";
import "./global.css";
import BodyLayout from "@/src/components/common-components/BodyLayout";

const basePath = process.env.NODE_ENV === "production" ? "/marina-travel" : "";

export const metadata: Metadata = {
  title: "Marina Travel",
  description: "Travel Agency",
  keywords: ["Travel", "Vietnam", "Tours", "Booking", "Marina Travel"],
  openGraph: {
    title: "Marina Travel",
    description: "Experience the best travel agency services.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marina Travel",
    description: "Travel Agency",
  },
  icons: {
    icon: `${basePath}/logo/marina-logo.png`,
    shortcut: `${basePath}/logo/marina-logo.png`,
    apple: `${basePath}/logo/marina-logo.png`,
  },
  authors: [{ name: "Ku Kue" }],
  robots: {
    index: true,
    follow: true,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      data-scroll-behavior="smooth"
    >
      <body>
        <BodyLayout>{children}</BodyLayout>
      </body>
    </html>
  );
};

export default RootLayout;
