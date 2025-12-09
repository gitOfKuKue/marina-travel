"use client";

import Lottie from "lottie-react";
import React from "react";

import aboutPic from "@/src/assets/animated-pics/team.json";
import Container from "@/src/components/common-components/Container";
import FounderSays from "./FounderSays";

const AboutPage = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary-font mb-6 leading-tight">
              About{" "}
              <span className="relative inline-block px-2">
                <span className="relative z-10 text-white">Us</span>
                <span className="absolute inset-0 bg-primary -skew-y-3 rounded-md shadow-lg" />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-font leading-relaxed font-medium max-w-2xl mx-auto md:mx-0">
              At Marina Travel, we believe that every journey is a story waiting
              to be told. From pristine beaches in the Maldives to the historic
              streets of Europe, our mission is to craft unforgettable
              experiences tailored just for you. Explore the world with
              confidence, comfort, and style.
            </p>
          </div>

          {/* Picture */}
          <div className="flex-1 flex justify-center w-full">
            <Lottie
              animationData={aboutPic}
              loop
              autoplay
              className="w-full max-w-[400px] md:max-w-[600px]"
            />
          </div>
        </div>

        {/* Founder Says */}
        <div>
          <FounderSays />
        </div>
      </Container>
    </section>
  );
};

export default AboutPage;
