import React from "react";
import { MetaProps } from "../types/layout";
import Head from "./Head";
import { motion } from "framer-motion";

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

const variants = {
  hidden: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const Layout: React.FC<LayoutProps> = ({ children, customMeta }) => {
  return (
    <>
      <Head customMeta={customMeta} />
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="max-w-[950px] w-[90vw] px-8 py-4 mx-auto">
          {children}
        </div>
      </motion.main>
    </>
  );
};

export default Layout;
