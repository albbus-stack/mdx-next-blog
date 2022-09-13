import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
  return (
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
  );
};

export default NavBar;
