import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import cityBus from "../../assets/images/city bus-cuate.svg";
import moscow from "../../assets/images/Moscow-pana.svg";

import logo from "../../../public/logo/marina-logo.png";

import sunsetBg from "../../assets/images/sunset-background.svg";
import Container from "./Container";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Footer = ({ className }: { className?: string }) => {
  const contacts = [
    {
      platform: "Facebook",
      icon: faFacebook,
    },
    {
      platform: "Instagram",
      icon: faInstagram,
    },
    {
      platform: "Twitter",
      icon: faTwitter,
    },
    {
      platform: "Youtube",
      icon: faYoutube,
    },
  ];
  return (
    <footer className={`relative ${className}`}>
      {/* Image */}
      <div
        className={`absolute -top-40 flex items-center justify-between w-full`}
      >
        <NextImage src={cityBus} alt="City Bus" className="w-80" />
      </div>

      <div className="bg-linear-to-t from-footer to-background p-10">
        <Container className="h-100 flex items-start justify-between gap-10 py-20">
          {/* Content */}
          <div>
            <div>
              <Image src={logo} alt="Marina Logo" className="w-15" />
              <h1 className="text-4xl font-bold mb-3">Marina Travel</h1>
            </div>
            <p className="max-w-md mt-2 text-primary-font mb-5">
              Marina Travel is your ultimate guide to exploring the world. We
              provide curated travel experiences, exclusive deals, and
              personalized itineraries to help you create unforgettable
              memories.
            </p>
            {/* Contact */}
            <div className="flex items-center gap-5">
              {contacts.map((contact) => (
                <div key={contact.platform}>
                  <FontAwesomeIcon icon={contact.icon} className="text-4xl" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h1 className="text-xl font-bold mb-5">Quick Links</h1>
            <ul className="flex flex-col gap-3">
              {[
                { title: "Home", link: "/" },
                { title: "Destinations", link: "/destinations" },
                { title: "Booking", link: "/booking" },
                { title: "About", link: "/about" },
                { title: "Contact", link: "/contact" },
              ].map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.link}
                    className="text-primary-font hover:text-primary transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h1 className="text-xl font-bold mb-5">Support</h1>
            <ul className="flex flex-col gap-3">
              {["FAQ", "Help Center", "Terms of Service", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-primary-font hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h1 className="text-xl font-bold mb-5">Get in Touch</h1>
            <ul className="flex flex-col gap-3">
              <li className="text-primary-font">
                123 Travel St, City, Country
              </li>
              <li className="text-primary-font">+1 234 567 890</li>
              <li className="text-primary-font">info@marinatravel.com</li>
            </ul>
          </div>
        </Container>
        <p className="text-center text-primary-font">
          &copy; {new Date().getFullYear()} Marina Travel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
