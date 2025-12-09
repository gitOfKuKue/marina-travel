import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import cityBus from "../../assets/images/city bus-cuate.svg";

import logo from "../../../public/logo/marina-logo.png";

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
      {/* Image - Hidden on mobile, visible on lg screens to avoid overlapping */}
      <div className={`absolute -top-40 hidden lg:inline-block`}>
        <NextImage
          src={cityBus}
          alt="City Bus"
          className="w-80"
          loading="eager"
        />
      </div>

      <div className="bg-linear-to-t from-footer to-background p-6 lg:p-10">
        <Container className="flex flex-col lg:flex-row items-start justify-between gap-10 py-10 lg:py-20">
          {/* Content */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <Image src={logo} alt="Marina Logo" className="w-12 h-auto" />
              <h1 className="text-3xl lg:text-4xl font-bold">Marina Travel</h1>
            </div>
            <p className="mt-2 text-primary-font mb-6 leading-relaxed">
              Marina Travel is your ultimate guide to exploring the world. We
              provide curated travel experiences, exclusive deals, and
              personalized itineraries to help you create unforgettable
              memories.
            </p>
            {/* Contact */}
            <div className="flex items-center gap-5">
              {contacts.map((contact) => (
                <div key={contact.platform}>
                  <FontAwesomeIcon
                    icon={contact.icon}
                    className="text-3xl lg:text-4xl text-primary-font hover:text-primary transition-colors cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-20 w-full lg:w-auto gap-10">
            {/* Quick Links */}
            <div>
              <h1 className="text-xl font-bold mb-5">Quick Links</h1>
              <ul className="flex flex-col gap-3">
                {[
                  { title: "Home", link: "/" },
                  { title: "About", link: "/about" },
                  { title: "Services", link: "/#services" },
                  { title: "Booking", link: "/booking" },
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
                {[
                  "FAQ",
                  "Help Center",
                  "Terms of Service",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-primary-font hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h1 className="text-xl font-bold mb-5">Get in Touch</h1>
              <ul className="flex flex-col gap-3">
                <li className="text-primary-font">
                  123 Travel St, City, Country
                </li>
                <li className="text-primary-font">+1 234 567 890</li>
                <li className="text-primary-font">info@marinatravel.com</li>
              </ul>
            </div>
          </div>
        </Container>
        <p className="text-center text-primary-font text-sm mt-8 border-t border-slate-200/20 pt-8">
          &copy; {new Date().getFullYear()} Marina Travel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
