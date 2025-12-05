import React from "react";
import "./global.css";
import BodyLayout from "@/src/components/common-components/BodyLayout";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <BodyLayout>{children}</BodyLayout>
      </body>
    </html>
  );
};

export default RootLayout;
