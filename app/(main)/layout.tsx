import BodyLayout from "@/src/components/common-components/BodyLayout";
import Footer from "@/src/components/common-components/Footer";
import Navigation from "@/src/components/common-components/Navigation";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <BodyLayout>{children}</BodyLayout>
      <Footer />
    </>
  );
};

export default MainLayout;
