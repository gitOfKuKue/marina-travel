"use client";

import React, { useState } from "react";
import Send from "../buttons/Send";
import Container from "../common-components/Container";
import Lottie from "lottie-react";

import news from "@/src/assets/animated-pics/News.json";
import useNotification from "@/src/hook/useNotification";

const QuickEmail = () => {
  const { setAlertText, setAlertStatus, setIsAlert } = useNotification();
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlertStatus(200);
    setAlertText("Email sent successfully");
    setIsAlert(true);
    setUserEmail("");
  };
  return (
    <Container className="flex items-center justify-center gap-5 my-16">
      <div>
        <Lottie animationData={news} loop autoPlay className="w-150" />
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-primary mb-3 tracking-tight">
            Subscribe to our{" "}
            <span className="italic text-secondary">Newsletter</span>
          </h2>
          <p className="text-secondary-font text-lg font-medium">
            Unlock exclusive travel deals & tips directly in your inbox.
          </p>
        </div>

        <div className="w-full max-w-lg">
          <form
            className="relative w-full flex items-center group"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full pl-8 pr-32 py-4 rounded-full border border-gray-200 bg-white focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all shadow-sm text-primary-font text-lg placeholder:text-gray-400"
            />
            <Send />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default QuickEmail;
