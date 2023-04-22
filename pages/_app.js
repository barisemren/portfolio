import "../styles/globals.scss";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} />{" "}
    </AnimatePresence>
  );
}

export default MyApp;
