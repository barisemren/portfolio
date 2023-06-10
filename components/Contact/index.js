import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Icon from "../Icon";

export default function index() {
  return (
    <motion.section
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -8, opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="custom-container h-full"
    >
      <div className="text-soft h-full flex flex-col lg:justify-center">
        <p className="text-3xl"> If you want to know more about me, you can;</p>
        <br />
        <br />
        <br />

        <Link href={"mailto:baris.emren@yahoo.com"}>
          <a
            href="mailto:baris.emren@yahoo.com"
            target="_blank"
            rel="noreferrer"
            className="text-green hover:text-purple text-2xl inline-flex items-center space-x-3"
          >
            <p>say hi anytime!</p>
            <Icon icon="link" size="20" className="" />
          </a>
        </Link>
        <br />
        <br />
        <Link href={"https://www.linkedin.com/in/barisemren/"}>
          <a
            href="https://www.linkedin.com/in/barisemren/"
            target="_blank"
            rel="noreferrer"
            className="text-green hover:text-purple text-2xl inline-flex items-center space-x-3"
          >
            <p>or check my linkedin.</p>
            <Icon icon="link" size="20" />
          </a>
        </Link>
      </div>
    </motion.section>
  );
}
