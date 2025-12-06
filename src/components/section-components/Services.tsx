import React from "react";
import Container from "../common-components/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import useAgentServices from "@/src/hook/useAgentServices";

const Services = () => {
  const { services, convertTitleToLink } = useAgentServices();

  return (
    <Container>
      {/* Content div */}
      <div className="mb-20">
        <h1 className="text-center font-bold text-5xl mb-6">Services</h1>
        <p className="text-center text-lg text-secondary-font max-w-3xl mx-auto leading-relaxed">
          Discover a world of seamless travel possibilities. From crafting
          personalized itineraries and securing exclusive deals to providing
          24/7 in-trip support and managing complex logistics, our expert agents
          are dedicated to making your journey unforgettable. We handle the
          details so you can focus on the adventure.
        </p>
      </div>
      {/* Services div */}
      <div>
        {services.map((service) => (
          <div key={service.title} className="mb-20">
            <h1 className="text-3xl font-bold">{service.title}</h1>
            <p className="text-secondary-font mb-10">{service.description}</p>
            <div className="flex justify-between items-stretch gap-3">
              {service.subServices.map((subService) => (
                <ServiceCard
                  key={subService.title}
                  subService={subService}
                  convertTitleToLink={convertTitleToLink}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const ServiceCard = ({
  subService,
  convertTitleToLink,
}: {
  subService: { icon: any; title: string; description: string };
  convertTitleToLink: (title: string) => string;
}) => {
  return (
    <div className="w-100 flex flex-col bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-primary transition-all duration-300 group">
      <FontAwesomeIcon
        icon={subService.icon}
        className="text-6xl mb-3 group-hover:text-background transition-all duration-300"
      />
      <h1 className="text-2xl font-bold group-hover:text-background transition-all duration-300">
        {subService.title}
      </h1>
      <p className="text-lg text-secondary-font group-hover:text-background transition-all duration-300">
        {subService.description}
      </p>
      <Link
        href={`/services/${convertTitleToLink(subService.title)}`}
        className="text-primary font-bold group-hover:text-secondary transition-all duration-300 mt-auto"
      >
        Read More
      </Link>
    </div>
  );
};

export default Services;
