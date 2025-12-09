import React from "react";

import founderPic from "@/src/assets/images/founder-pic.jpg";
import Image from "next/image";

const FounderSays = () => {
  return (
    <div className="py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-primary mb-8 text-center">
        A Message from Our Founder
      </h1>

      <div className="w-80 h-80 overflow-hidden rounded-full mx-auto mb-10">
        <Image
          src={founderPic}
          alt="Founder"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-lg md:text-xl text-secondary-font leading-relaxed text-justify relative px-8 md:px-12 py-8 bg-white/50 rounded-2xl border border-primary/10 shadow-sm">
        <span className="absolute top-0 left-4 text-6xl text-primary/20 font-serif">
          &ldquo;
        </span>
        Friends, colleagues, and fellow explorers, I am profoundly honored to
        stand before you today. When I first envisioned this agency, it wasn't
        just about booking flights and hotels; it was about recognizing a
        fundamental human need: the desire to explore, connect, and be
        transformed by the world around us. We are not just travel agents; we
        are architects of memories, navigators of dreams, and the indispensable
        link between the known and the wonderfully unknown. In an age of
        algorithms and instant information, our value lies in our human touch,
        our deep expertise, and our unwavering commitment to crafting journeys
        that are seamless, authentic, and utterly unforgettable. Our purpose
        goes beyond profit; it is to open minds, bridge cultures, and show every
        traveler that the investment in an experience is the greatest return
        they will ever receive. I look forward to continuing this incredible
        journey with all of you, pushing the boundaries of what travel can be,
        and ensuring that every person who walks through our doors leaves ready
        to embrace the next great adventure.
        <span className="absolute bottom-[-20px] right-4 text-6xl text-primary/20 font-serif rotate-180">
          &rdquo;
        </span>
      </p>
    </div>
  );
};

export default FounderSays;
