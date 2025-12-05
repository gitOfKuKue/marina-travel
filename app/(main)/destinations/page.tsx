import React from "react";
import NextImage from "next/image";
import mainPic from "../../../src/assets/images/travel selfie-pana.svg";
import worldMap from "../../../src/assets/images/world-map.svg";

const DestinationsPage = () => {
  return (
    <section>
      {/* Content */}
      <div
        className="relative bg-center bg-no-repeat w-full h-120"
        id="content-div"
        style={{ backgroundImage: `url(${worldMap.src})` }}
      >
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-center text-8xl font-bold">Let's Travel</h1>
          <p className="text-center">Discover the world with us</p>
        </div>
      </div>

      {/* Picture */}
      <div>
        <NextImage
          src={mainPic.src}
          alt="Traveling pic"
          className="w-200 rotate-15"
        />
      </div>
    </section>
  );
};

export default DestinationsPage;
