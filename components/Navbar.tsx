"use client";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("#hero");

  // Optional: Highlight active link on click
  const handleClick = (href: string) => {
    setActive(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background text-foreground dark:bg-geist-white-900 dark:text-geist-white-50 backdrop-blur shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-bold text-xl text-blue-600">
          <Image
            src="/img/react-native.png"
            alt="Profile"
            width={50}
            height={50}
          ></Image>
        </span>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={`font-medium transition-colors hover:text-blue-600 ${
                active === link.href ? "text-blue-600" : "text-white-700"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
