"use client";

import Link from "next/link";
import Hamburger from "hamburger-react";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="header flex justify-between w-full items-center py-3 fixed top-0 z-50">
      {/* Brand Icon */}
      <h1 className="text-primary pl-10 text-4xl cursor-pointer">N</h1>
      <div className="lg:hidden">
        <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
      </div>

      <ul
        className={clsx(
          "fixed duration-500 transition-all lg:relative w-screen lg:w-[inherit] h-screen lg:h-[inherit] top-0 lg:top-[inherit] left-0 lg:left-[inherit] bg-[#1a918b] mt-[70px] lg:mt-[0px] lg:flex justify-end georgian-font text-primary pr-10 gap-5 pl-[40px] ",
          isOpen ? "left-0 opacity-100" : " opacity-0 left-[-100vw]"
        )}
      >
        <li className=" mt-4 lg:mt-0">
          <Link
            className="menu-text text-2xl xl:text-base relative transition-all duration-500 py-2 rounded-md hover:text-[#00ffff]"
            href="/about"
          >
            ჩემს შესახებ
          </Link>
        </li>
        <li className=" mt-4 lg:mt-0">
          <Link
            className="menu-text mt-5 text-2xl xl:text-base relative transition-all duration-500 py-2 rounded-md hover:text-[#00ffff]"
            href="/about"
          >
            მსოფლიო მოდა
          </Link>
        </li>
        <li className=" mt-4 lg:mt-0">
          <Link
            className="menu-text text-2xl xl:text-base relative transition-all duration-500 py-2 rounded-md hover:text-[#00ffff]"
            href="/about"
          >
            ცხოვრების სტილი
          </Link>
        </li>
        <li className=" mt-4 lg:mt-0">
          <Link
            className="menu-text text-2xl xl:text-base relative transition-all duration-500 py-2 rounded-md hover:text-[#00ffff]"
            href="/about"
          >
            მოგზაურობა
          </Link>
        </li>
        <li className=" mt-4 lg:mt-0">
          <Link
            className="menu-text text-2xl xl:text-base relative transition-all duration-500 py-2 rounded-md hover:text-[#00ffff]"
            href="/about"
          >
            კულინარია
          </Link>
        </li>
        <li className=" mt-4 lg:mt-0">
          <Link
            className="menu-text text-2xl xl:text-base relative transition-all duration-500 py-2 rounded-md hover:text-[#00ffff]"
            href="/about"
          >
            ჰოროსკოპი
          </Link>
        </li>
        <li className=" mt-4 lg:mt-0">
          <Link
            className="menu-text text-2xl xl:text-base relative transition-all duration-500 py-2 rounded-md hover:text-[#00ffff]"
            href="/about"
          >
            ოჯახი
          </Link>
        </li>
      </ul>
    </nav>
  );
}
