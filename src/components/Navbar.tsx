"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Menu from "./Menu";
import { links } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import { navVariants } from "@/utils/motion";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
    setIsActive(true);
  };

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex lg:justify-start justify-between items-center lg:gap-16 m-auto px-4 py-4 sm:w-[80%] w-[90%]"
    >
      {/* Logo */}
      <Link href={"/"} className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={160} height={160} />
      </Link>

      {/* Links */}
      <ul className="lg:flex hidden gap-2">
        {links.map((link, index) => (
          <li key={`link-${index}`} className="relative p-2">
            <Link
              href={link.url}
              className="text-base font-semibold hover:text-[red] duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-[red] before:rounded-2xl hover:before:w-full before:duration-300"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu */}
      <div onClick={handleMenu} className="lg:hidden block cursor-pointer">
        <Image src="/menu.png" alt="menu" width={40} height={40} />
      </div>

      <AnimatePresence mode="wait">
        {isActive && <Menu handleClick={handleClick} />}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
