"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  // Array of menu items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Layout", path: "/layout" },
    { name: "Database", path: "/db" },
    { name: "Typography", path: "/typography" },
    { name: "Buttons", path: "/button" },
    { name: "Inputs", path: "/input" },
    { name: "Icons", path: "/icon" },
    { name: "Upload", path: "/upload" },
    { name: "Color", path: "/color" },
  ];

  return (
    <nav className="w-full bg-white border-b border-solid border-[#E4E6ED]">
      <div className="container h-16 px-8 flex items-center justify-between">
        {/* Logo / Brand Name - Left Side */}
        <div className="flex items-center">
          <Link href="/" className="text-xl">
            Merry. <span className="font-extrabold text-[#C70039]">Match</span>
            <p className="text-xs">Design System</p>
          </Link>
        </div>

        {/* Menu Items - Right Side */}
        <div className="flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`${
                pathname === item.path ? "text-pink-500 font-medium" : "text-gray-700 hover:text-pink-500"
              } transition-colors duration-200`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
