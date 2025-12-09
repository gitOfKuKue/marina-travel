"use client";

import Lottie from "lottie-react";
import React from "react";

// import mainPic from "../../src/assets/animated-pics/loading.json";
import mainPic from "../../src/assets/images/travel selfie-pana.svg";
import worldMap from "../../src/assets/images/world-map.svg";
import background from "../../src/assets/images/background.svg";
import Button1 from "@/src/components/buttons/Button1";
import Promotion from "@/src/components/section-components/Promotion";
import Benefits from "@/src/components/section-components/Benefits";
import QuickEmail from "@/src/components/section-components/QuickEmail";
import Services from "@/src/components/section-components/Services";
import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      <section
        className="flex items-center justify-between bg-no-repeat bg-cover h-screen"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        {/* Content */}
        <div className="absolute w-full top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-center text-8xl font-extrabold mb-6">
            <span className="text-secondary italic">Let's Go</span> <br />{" "}
            <span className="uppercase text-primary">Travel </span>
          </h1>
          <p className="text-center text-xl text-secondary-font w-150 mx-auto mb-20">
            Discover the world with us. Dive into new adventures, explore hidden
            gems, and create unforgettable memories that will last a lifetime.
            Join our community of explorers today and start writing your own
            unique travel story.
          </p>
          <div className="w-fit mx-auto">
            <Button1 href="/booking" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-30">
        <Benefits />
      </section>

      {/* Promotion */}
      <section className="py-30 bg-linear-to-r from-primary to-[#94B4C1]">
        <Promotion />
      </section>

      {/* Services */}
      <section className="pt-30 pb-10" id="services">
        <Services />
      </section>

      {/* Quick Email */}
      <section className="pt-10 pb-30">
        <QuickEmail />
      </section>
    </main>
  );
};

export default HomePage;
