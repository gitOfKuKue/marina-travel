"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import logo from "../../../public/logo/marina-logo.png";

const Navigation = () => {
  const pathname = usePathname();
  const menus = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Services",
      link: "/#services",
    },
    {
      title: "Booking",
      link: "/booking",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [isServicesActive, setIsServicesActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrolling = window.scrollY;

      // Header background logic
      if (currentScrolling > 660) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Services section active logic
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        const { offsetTop, offsetHeight } = servicesSection;
        const scrollBuffer = 150; // Adjust for header height/visual comfort

        // Check if we are within the services section
        if (
          currentScrolling >= offsetTop - scrollBuffer &&
          currentScrolling < offsetTop + offsetHeight - scrollBuffer
        ) {
          setIsServicesActive(true);
        } else {
          setIsServicesActive(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getIsActive = (menuLink: string) => {
    if (menuLink === "/#services") {
      return pathname === "/" && isServicesActive;
    }
    if (menuLink === "/") {
      // Home is active only if we are at root AND services is NOT active
      return pathname === "/" && !isServicesActive;
    }
    // For other links (e.g. /booking), match if pathname starts with the link
    // strict checking for root is already handled above.
    return pathname.startsWith(menuLink);
  };

  return (
    <header>
      <div
        className={`fixed top-0 left-0 right-0 z-100 ${
          scrolled || pathname !== "/"
            ? "bg-background duration-500 transition-all"
            : "duration-200"
        }`}
      >
        <Container className="flex justify-between items-center py-5">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Marina Logo" className="w-15" />
            <h1 className="text-2xl font-extrabold text-primary-font italic uppercase leading-6">
              <span className="text-secondary">Marina</span> <br />{" "}
              <span className="text-primary">Travel</span>
            </h1>
          </div>
          <nav className="flex justify-between items-center gap-2">
            {menus.map((menu) => (
              <MenuButton
                key={menu.title}
                menu={menu.title}
                link={menu.link}
                isActive={getIsActive(menu.link)}
              />
            ))}
          </nav>
        </Container>
      </div>
      <div className={`${pathname === "/" ? "" : "h-[100px]"}`}> </div>
    </header>
  );
};

const MenuButton = ({
  menu,
  link,
  isActive,
}: {
  menu: string;
  link: string;
  isActive: boolean;
}) => {
  return (
    <Link
      href={link}
      className={`${
        isActive ? "text-primary font-bold underline" : " text-primary-font"
      } w-30 h-10 text-center leading-10 text-xl`}
    >
      {menu}
    </Link>
  );
};

export default Navigation;
