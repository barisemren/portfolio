import "../styles/globals.scss";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [innerLoading, setInnerLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setInnerLoading(false);
    }, 2700);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      {/* <motion.div
        initial={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.5, ease: [0.87, 0, 0.13, 1] }}
        animate={{ opacity: 0 }}
        className={cn(
          "transition-all fixed inset-0 bg-b3 z-[999] flex flex-col items-center justify-center ",
          !loading && "hidden"
        )}
      >
        <motion.div
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
          className={cn(" flex items-center justify-center",innerLoading ? "block" : "hidden")}
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
        </motion.div>
      </motion.div> */}
      <Component {...pageProps} />{" "}
    </AnimatePresence>
  );
}

export default MyApp;

const loadingCircle = {
  display: "block",
  width: "1.5rem",
  height: "1.5rem",
  backgroundColor: "#2a9d8f",
  borderRadius: "50%",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  }
};

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
};

const loadingCircleTransition = {
  duration: 0.7,
  yoyo: Infinity,
  ease: "easeInOut",
};
