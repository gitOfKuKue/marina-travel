import React from "react";

const Container = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={`${className} w-[1500px] mx-auto`}>{children}</div>;
};

export default Container;
