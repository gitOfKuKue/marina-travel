import React from "react";

const Container = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`${className} xs:w-[300px] sm:w-[500px] md:w-[1000px] lg:w-[1500px] mx-auto p-5`}
    >
      {children}
    </div>
  );
};

export default Container;
