import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const NavBar: React.FC = () => {
  return (
    <header className="bg-light dark:bg-dark px-12 md:pl-16 lg:px-20 xl:px-28 mx-auto">
      <div className="flex items-center justify-between py-5 h-20">
        <nav>
          <Link href="/" scroll={false}>
            <a className="text-fgLight dark:text-fgDark pr-6 underline underline-and-vertical-align">
              Home
            </a>
          </Link>
          <Link href="/about" scroll={false}>
            <a className="text-fgLight dark:text-fgDark px-6 underline underline-and-vertical-align">
              About
            </a>
          </Link>
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default NavBar;
