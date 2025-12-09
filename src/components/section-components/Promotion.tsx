import React from "react";
import NextImage from "next/image";

// Images Import
import mainPic from "../../../src/assets/images/travel selfie-pana.svg";
import worldMap from "../../../src/assets/images/world-map.svg";
import Container from "../common-components/Container";
import Button2 from "../buttons/Button2";
import Link from "next/link";

import explorePic from "@/src/assets/animated-pics/Businessman flies up with rocket.json";
import Lottie from "lottie-react";

const Promotion = () => {
  return (
    <Container className="relative flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Content */}
      <div
        className="relative bg-no-repeat w-full h-80 md:h-120 bg-contain bg-center md:bg-left"
        id="content-div"
        style={{ backgroundImage: `url(${worldMap.src})` }}
      >
        <div className="relative md:absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
          <h1 className="text-center text-5xl md:text-8xl font-bold text-primary-font mb-4">
            Explore The World
          </h1>
          <p className="text-center text-lg md:text-xl font-medium mb-8">
            Get 20% off on your first adventure!
          </p>
          <Button2 text="Start your adventure" href="/mini-game" />
        </div>
      </div>

      {/* Picture */}
      <div className="relative">
        <NextImage
          src={mainPic.src}
          alt="Traveling pic"
          className="w-60 md:w-80 lg:w-200 md:rotate-15"
          width={200}
          height={200}
        />
      </div>
      <div className="absolute w-40 md:w-60 lg:w-100 -bottom-40 md:-bottom-20 lg:-bottom-50 left-0">
        <Lottie animationData={explorePic} loop autoplay />
      </div>
    </Container>
  );
};

export default Promotion;
