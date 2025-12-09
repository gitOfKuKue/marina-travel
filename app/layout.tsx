import React from "react";
import { Metadata } from "next";
import "./global.css";
import BodyLayout from "@/src/components/common-components/BodyLayout";

export const metadata: Metadata = {
  title: "Marina Travel",
  description: "Travel Agency",
  icons: {
    icon: "/logo/marina-logo.png",
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
