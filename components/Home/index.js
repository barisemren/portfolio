import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <motion.section
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -8, opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="custom-container h-full"
    >
      <div className="flex flex-col gap-10 h-full justify-center lg:gap-20 text-soft">
        <p className="text-3xl lg:text-5xl ">Hello!</p>
        <div className="text-3xl lg:text-7xl">
          I am Barış, <br /> a{" "}
          <span className="text-green">Software Developer</span> <br />
          based in <span className="text-purple">Turkey</span>
        </div>
      </div>
    </motion.section>
  );
}
