import { ThemeProvider } from "next-themes";
import React, { Suspense } from "react";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import NavBar from "../components/NavBar";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <NavBar />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() =>
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 200)
        }
      >
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default MyApp;
