"use client";

import React from "react";

import background from "../../src/assets/images/background.svg";
import Button1 from "@/src/components/buttons/Button1";
import Promotion from "@/src/components/section-components/Promotion";
import Benefits from "@/src/components/section-components/Benefits";
import QuickEmail from "@/src/components/section-components/QuickEmail";
import Services from "@/src/components/section-components/Services";

const HomePage = () => {
  return (
    <main>
      <section
        className="relative flex items-center justify-center bg-no-repeat bg-cover h-screen px-4"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        {/* Content */}
        <div className="z-10 text-center max-w-4xl mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6">
            <span className="text-secondary italic leading-tight">
              Let&apos;s Go
            </span>{" "}
            <br /> <span className="uppercase text-primary">Travel </span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-font max-w-2xl mx-auto mb-10 md:mb-20 leading-relaxed bg-white/50 backdrop-blur-xs p-4 rounded-xl md:bg-transparent md:backdrop-blur-none">
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
