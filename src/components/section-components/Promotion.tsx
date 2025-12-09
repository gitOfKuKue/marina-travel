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
    <Container className="relative flex items-center justify-between">
      {/* Content */}
      <div
        className="relative bg-no-repeat w-full h-120"
        id="content-div"
        style={{ backgroundImage: `url(${worldMap.src})` }}
      >
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-center text-8xl font-bold text-primary-font">
            Explore The World
          </h1>
          <p className="text-center">Get 20% off on your first adventure!</p>
        </div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <Button2 text="Start your adventure" href="/mini-game" />
        </div>
      </div>

      {/* Picture */}
      <div>
        <NextImage
          src={mainPic.src}
          alt="Traveling pic"
          className="w-200 rotate-15"
          width={200}
          height={200}
        />
      </div>

      <div className="absolute w-100 -bottom-50 left-0">
        <Lottie animationData={explorePic} loop autoplay />
      </div>
    </Container>
  );
};

export default Promotion;
