"use client"

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className="py-5">
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative mx-auto flex w-fit rounded-full border-2 border-white bg-black p-1"
      >
        <NavTab setPosition={setPosition}>Home</NavTab>
        <NavTab setPosition={setPosition}>About</NavTab>
        <NavTab setPosition={setPosition}>Projects</NavTab>
        <NavTab setPosition={setPosition}>Contact</NavTab>

        <motion.li
          animate={{
            ...position,
          }}
          className="absolute z-0 h-7 rounded-full bg-white md:h-12"
        />
      </ul>
    </nav>
  );
};

const NavTab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

export default Navbar;
