"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const getIsActive = (menuLink: string) => {
    if (menuLink === "/#services") {
      return pathname === "/" && isServicesActive;
    }
    if (menuLink === "/") {
      // Home is active only if we are at root AND services is NOT active
      return pathname === "/" && !isServicesActive;
    }
    return pathname.startsWith(menuLink);
  };

  return (
    <header>
      <div
        className={`fixed top-0 left-0 right-0 z-100 ${
          scrolled || pathname !== "/" || isMobileMenuOpen
            ? "bg-background duration-500 transition-all shadow-md"
            : "duration-200"
        }`}
      >
        <Container className="flex justify-between items-center py-4 md:py-5">
          <Link href="/" className="flex items-center gap-2 z-50">
            <Image src={logo} alt="Marina Logo" className="w-12 md:w-15" />
            <h1 className="text-xl md:text-2xl font-extrabold text-primary-font italic uppercase leading-tight md:leading-6">
              <span className="text-secondary">Marina</span> <br />{" "}
              <span className="text-primary">Travel</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-between items-center gap-2">
            {menus.map((menu) => (
              <MenuButton
                key={menu.title}
                menu={menu.title}
                link={menu.link}
                isActive={getIsActive(menu.link)}
              />
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden ${
              isMobileMenuOpen
                ? "opacity-100 pointer-events-auto translate-x-0"
                : "opacity-0 pointer-events-none translate-x-full"
            }`}
          >
            <nav className="flex flex-col items-center gap-6">
              {menus.map((menu) => (
                <Link
                  key={menu.title}
                  href={menu.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-bold ${
                    getIsActive(menu.link)
                      ? "text-primary"
                      : "text-primary-font"
                  }`}
                >
                  {menu.title}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </div>
      {/* Spacer for fixed header */}
      <div className={`${pathname === "/" ? "" : "h-[80px] md:h-[100px]"}`}>
        {" "}
      </div>
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
      } w-24 lg:w-30 h-10 text-center leading-10 text-lg lg:text-xl`}
    >
      {menu}
    </Link>
  );
};

export default Navigation;
