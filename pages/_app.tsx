import { ThemeProvider } from "next-themes";
import React from "react";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import NavBar from "../components/NavBar";
import ThemeSwitch from "../components/ThemeSwitch";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <header className="sticky top-0 bg-light dark:bg-dark border-b mb-8 border-fgLight dark:border-fgDark">
        <div className="max-w-[90vw] px-8 mx-auto">
          <div className="flex items-center justify-between py-5">
            <NavBar />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default MyApp;
