import React from "react";
import { MetaProps } from "../types/layout";
import Head from "./Head";
import NavBar from "./NavBar";
import ThemeSwitch from "./ThemeSwitch";

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

const Layout: React.FC<LayoutProps> = ({ children, customMeta }) => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-[90vw] px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <NavBar />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-[950px] w-[90vw] px-8 py-4 mx-auto">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
