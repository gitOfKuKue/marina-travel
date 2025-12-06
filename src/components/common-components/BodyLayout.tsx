import React from "react";
import Container from "./Container";

const BodyLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className="bg-background">{children}</section>;
};

export default BodyLayout;
