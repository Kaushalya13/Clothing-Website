"use client";

import Image from "next/image";
import icon1 from "@/assets/images/menu.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Shop", href: "#Categories" },
  { label: "Arrivals", href: "#FeaturedProducts" },
  { label: "Collections", href: "#collections" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const logoUrl =
    "https://i.pinimg.com/736x/2d/27/c5/2d27c5d3f057e12bd741c2b39d27911e.jpg";

  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-6 md:px-8 items-center">
              {/* Logo */}
              <div>
                <img
                  src={logoUrl}
                  alt="Clothing Brand Logo"
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>

              {/* Desktop Nav */}
              <div className="hidden lg:flex justify-center items-center">
                <nav className="flex gap-x-8 font-medium">
                  {navLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      className="hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Buttons & Mobile Menu */}
              <div className="flex justify-end gap-4 items-center">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden cursor-pointer"
                >
                  <Image
                    src={icon1}
                    alt="menu"
                    width={28}
                    height={28}
                    className="filter invert"
                  />
                </div>
                <div className="hidden md:flex gap-3">
                  <Button variant="secondary" className="flex items-center gap-2">
                    🛒 Cart
                  </Button>
                  <Button variant="primary" className="flex items-center gap-2">
                    👤 Account
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden lg:hidden"
                >
                  <div className="flex flex-col items-center gap-6 py-6">
                    {navLinks.map((link) => (
                      <a
                        href={link.href}
                        key={link.label}
                        className="hover:text-gray-300 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                    <div className="flex gap-3">
                      <Button variant="secondary" className="flex items-center gap-2">
                        🛒 Cart
                      </Button>
                      <Button variant="primary" className="flex items-center gap-2">
                        👤 Account
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" />
    </>
  );
}
