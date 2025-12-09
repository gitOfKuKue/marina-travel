import React from "react";

import MessageAlert from "../notifications/MessageAlert";

const BodyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-background">
      <MessageAlert />
      {children}
    </section>
  );
};

export default BodyLayout;
