import React from "react";
import NextImage from "next/image";
import Container from "../common-components/Container";

// Images Import
import planning from "../../assets/images/planning.svg";
import saving from "../../assets/images/saving.svg";
import support from "../../assets/images/support.svg";

const Benefits = () => {
  const benefits = [
    {
      title: "Effortless Planning",
      description:
        "Our team of experts will help you plan your next adventure with ease. We will help you choose the best destination.",
      image: planning,
    },
    {
      title: "Exclusive Savings",
      description:
        "Enjoy exclusive deals and discounts on flights, hotels, and activities. We are committed to making travel accessible and affordable.",
      image: saving,
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is here for you 24/7. From last-minute changes to emergency assistance, we ensure you act with confidence.",
      image: support,
    },
  ];
  return (
    <Container>
      <h1 className="text-center font-bold text-4xl md:text-5xl">
        Why Choose Us?
      </h1>
      <p className="text-center text-secondary-font mt-5 max-w-2xl mx-auto mb-10 md:mb-20">
        Discover why hundreds of travelers choose us for their next adventure.
        For expert guides to exclusive deals, we make your journey
        unforgettable. Join us and experience the difference.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-10">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.title} benefit={benefit} />
        ))}
      </div>
    </Container>
  );
};

const BenefitCard = ({
  benefit,
}: {
  benefit: { title: string; description: string; image: any };
}) => {
  return (
    <div className="flex flex-col items-center">
      <NextImage
        src={benefit.image}
        alt={benefit.title}
        className="w-40 mx-auto mb-5"
      />
      <p className="text-center font-bold text-2xl md:text-3xl mb-5">
        {benefit.title}
      </p>
      <p className="text-center text-secondary-font max-w-xs mx-auto">
        {benefit.description}
      </p>
    </div>
  );
};

export default Benefits;
