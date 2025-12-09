import {
  faBusSide,
  faChampagneGlasses,
  faHandHoldingHand,
  faPersonWalkingWithCane,
  faPlaneDeparture,
  faScrewdriverWrench,
  faShip,
  faUsersBetweenLines,
} from "@fortawesome/free-solid-svg-icons";

import {
  faBuilding,
  faFileLines,
  faHandshake,
  faPenToSquare,
  faStar,
} from "@fortawesome/free-regular-svg-icons";

import { faComments } from "@fortawesome/free-regular-svg-icons/faComments";

export const SERVICES_DATA = [
  {
    title: "Core Booking and Travel Arrangements",
    description:
      "These are the fundamental services agents provide to secure all parts of a trip.",
    subServices: [
      {
        title: "Flights",
        icon: faPlaneDeparture,
        description:
          "Booking and arranging air travel, including finding the best fares and routes.",
        details:
          "Booking flights can be one of the most stressful parts of planning a trip, with fluctuating prices, confusing layover options, and hidden fees. We take the hassle out of air travel by finding the best routes and fares tailored to your schedule and budget. Whether you need a direct flight for a quick business trip or a multi-city itinerary for a complex vacation, we have access to global airline networks to secure the best seats. We also handle special requests, such as dietary meals, extra legroom, or assistance for passengers with reduced mobility, ensuring a smooth and comfortable journey from takeoff to landing.",
      },
      {
        title: "Accommodation",
        icon: faBuilding,
        description:
          "Reserving hotels, resorts, villas, or other types of lodging.",
        details:
          "Finding the perfect place to stay is crucial for a memorable trip. We go beyond simple bookings to match you with accommodations that suit your style, whether it’s a luxury resort, a charming boutique hotel, or a private villa. Our partnerships with top hotel chains and unique properties worldwide often allow us to offer exclusive perks like room upgrades, complimentary breakfasts, and late check-outs. We consider location, amenities, and reviews to ensure your “home away from home” meets your expectations for comfort, safety, and convenience.",
      },
      {
        title: "Cruises",
        icon: faShip,
        description: "Booking and managing all aspects of cruise line travel.",
        details:
          "Cruising offers a unique way to see the world, but with so many lines, ships, and itineraries, choosing the right one can be overwhelming. We specialize in matching travelers with the perfect cruise experience, from family-friendly mega-ships to intimate river cruises and luxury expeditions. We handle every detail, including cabin selection, dining reservations, shore excursions, and pre- or post-cruise packages. Let us help you set sail on an unforgettable journey with the peace of mind that every aspect of your voyage has been expertly managed.",
      },
      {
        title: "Ground Transportation",
        icon: faBusSide,
        description:
          "Arranging car rentals, airport transfers, and booking rail or bus tickets.",
        details:
          "Seamless ground transportation is the glue that holds a trip together. We ensure you get from point A to point B efficiently and comfortably. Our services include arranging private airport transfers, securing car rentals with reputable companies, and booking train or bus tickets for inter-city travel. Whether you need a luxury chauffeur service, a rugged 4x4 for an adventure, or a simple rail pass to explore Europe, we coordinate all logistics so you never have to worry about missing a connection or getting lost in a new city.",
      },
      {
        title: "Tours and Activities",
        icon: faChampagneGlasses,
        description:
          "Booking organized excursions, guided sightseeing, and special event tickets.",
        details:
          "The best travel memories are often made through unique experiences. We curate and book tours and activities that enrich your journey, from skip-the-line tickets at major museums to private guided tours of historical sites. Whether you want to take a cooking class in Italy, go zip-lining in Costa Rica, or attend a sold-out theater show in London, we can make it happen. We work with trusted local operators to provide authentic, high-quality experiences that align with your interests and pace.",
      },
    ],
  },
  {
    title: "Consultation and Customization",
    description:
      "Agents leverage their expertise and insider knowledge to craft the best travel experience.",
    subServices: [
      {
        title: "Personalized Itineraries",
        icon: faPersonWalkingWithCane,
        description:
          "Creating custom, detailed trip plans based on specific interests, time, and budget.",
        details:
          "No two travelers are alike, and your itinerary shouldn't be either. We specialize in crafting fully personalized trip plans that reflect your unique interests, travel style, and budget. From the moment you start dreaming of your trip until you return home, every day is planned to maximize your enjoyment. We balance must-see sights with hidden gems and ensure there’s enough downtime for you to relax. Our detailed itineraries include daily schedules, maps, and tips, giving you a structured yet flexible guide to your perfect vacation.",
      },
      {
        title: "Expert Advice",
        icon: faComments,
        description:
          "Providing in-depth knowledge and recommendations on destinations, logistics, and local customs.",
        details:
          "Benefit from our wealth of travel knowledge. We provide expert advice on destinations, helping you choose the best time to visit, understand local customs and etiquette, and navigate visa and entry requirements. We can recommend the best neighborhoods for dining, the safest areas to stay, and the cultural do's and don'ts that show respect to locals. Our goal is to empower you with the information you need to travel confidently and responsibly, ensuring a richer and more immersive experience.",
      },
      {
        title: "Access to Deals",
        icon: faHandshake,
        description:
          "Securing exclusive packages, upgrades, or discounts that may not be available to the general public.",
        details:
          "As industry insiders, we have access to exclusive deals and packages that aren't available to the general public. Through our strong relationships with airlines, hotels, and tour operators, we can often secure special rates, complimentary upgrades, and added value like spa credits or welcome amenities. We monitor price drops and seasonal promotions to get you the most value for your money. Let us leverage our connections to make your luxury travel dreams more affordable and attainable.",
      },
      {
        title: "Niche Specialization",
        icon: faStar,
        description:
          "Planning complex trips like destination weddings, corporate travel, or adventure tours.",
        details:
          "Some trips require a specialized touch. Whether you are planning a destination wedding with 100 guests, a complex corporate retreat, or an adrenaline-fueled adventure tour, we have the expertise to handle it. We understand the specific logistical challenges and nuances of these niche travel types. From coordinating group flights and venue contracts to arranging specialized equipment and permits, we manage the complexities so you can focus on the big event. Trust our specialized knowledge to execute flawless events and trips.",
      },
    ],
  },
  {
    title: "Support and Documentation",
    description:
      "Agents help manage complex administrative and support needs of travel.",
    subServices: [
      {
        title: "Travel Documentation Guidance",
        icon: faFileLines,
        description:
          "Advising on passport validity, visa requirements, and necessary health documents.",
        details:
          "Navigating the bureaucracy of international travel can be daunting. We provide essential guidance on travel documentation, ensuring your passport has sufficient validity and assisting with visa applications. We stay up-to-date with the latest entry requirements, including health declarations and vaccination certificates. We help you gather and organize all necessary paperwork well in advance, avoiding stressful last-minute rushes and ensuring you breeze through customs and immigration with ease.",
      },
      {
        title: "Travel Insurance",
        icon: faUsersBetweenLines,
        description:
          "Offering and arranging suitable travel insurance policies.",
        details:
          "Protect your investment and your well-being with the right travel insurance. We help you navigate the complex world of insurance policies to find coverage that suits your specific trip and needs. Whether you need coverage for trip cancellation, medical emergencies, lost luggage, or adventure sports, we can recommend reputable providers and policies. Travel with confidence knowing that you are financially protected against the unexpected, allowing you to relax and enjoy your journey worry-free.",
      },
      {
        title: "In-Trip Support",
        icon: faHandHoldingHand,
        description:
          "Providing 24/7 assistance for unforeseen issues, such as cancelled flights, lost reservations, or emergencies while traveling.",
        details:
          "Travel doesn't always go according to plan, but with our in-trip support, you're never alone. We provide 24/7 assistance for any issues that arise during your journey. Whether your flight is cancelled, you miss a connection, or you encounter an emergency, we are just a phone call or message away. We act fast to rebook flights, find alternative accommodations, and provide real-time solutions, minimizing disruption to your trip. Think of us as your personal travel concierge, always ready to help.",
      },
      {
        title: "Troubleshooting",
        icon: faScrewdriverWrench,
        description:
          "Acting as the intermediary to solve problems with suppliers (airlines, hotels, etc.) on behalf of the client.",
        details:
          "When things go wrong, dealing with customer service lines can be frustrating and time-consuming. We act as your advocate and intermediary, handling all communications with airlines, hotels, and tour operators on your behalf. If a refund is due, a service was not as described, or a reservation was lost, we fight to resolve the issue to your satisfaction. We leverage our industry standing to get results that individual travelers often can't, ensuring you are treated fairly and your entitlements are respected.",
      },
    ],
  },
];
