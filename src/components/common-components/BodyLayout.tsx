import React from "react";
import Container from "./Container";
import MessageAlert from "../notifications/MessageAlert";
import Navigation from "./Navigation";
import Footer from "./Footer";

const BodyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-background">
      <MessageAlert />
      {children}
    </section>
  );
};

export default BodyLayout;
