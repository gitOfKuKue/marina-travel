import BodyLayout from "@/src/components/common-components/BodyLayout";
import Footer from "@/src/components/common-components/Footer";
import Navigation from "@/src/components/common-components/Navigation";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col min-h-screen">
      <Navigation />
      <BodyLayout>{children}</BodyLayout>
      <Footer className="mt-auto" />
    </section>
  );
};

export default MainLayout;
