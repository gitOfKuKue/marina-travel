"use client";
import Container from "@/src/components/common-components/Container";
import useAgentServices from "@/src/hook/useAgentServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { use } from "react";

import { notFound } from "next/navigation";

const ServiceDetail = ({
  params,
}: {
  params: Promise<{ serviceTitle: string }>;
}) => {
  const { serviceTitle } = use(params);
  const { services, convertTitleToLink } = useAgentServices();

  const service = services
    .flatMap((ser) => ser.subServices)
    .find((s) => convertTitleToLink(s.title) === serviceTitle);

  if (!service) return notFound();

  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center p-6 my-10 md:p-10 md:my-20">
          <FontAwesomeIcon
            icon={service.icon}
            className="text-6xl md:text-8xl mb-6 text-primary"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-center px-4">
            {service?.title}
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-secondary-font max-w-4xl text-center">
            {service?.details}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ServiceDetail;
