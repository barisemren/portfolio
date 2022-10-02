/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import memoji from "../../public/me.png";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
export default function index() {
  return (
    <motion.section
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -8, opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="custom-container pt-8 lg:pt-0 h-full lg:h-[85vh] lg:overflow-hidden"
    >
      <div className="grid grid-cols-12 gap-y-16">
        <div className="col-span-12 lg:col-span-2 place-self-end memoji justify-self-start w-60 h-60 lg:order-last lg:w-[17rem] lg:h-[17rem] xl:w-[22.22vw] xl:h-[22.22vw] mb-12 lg:mb-0 ">
          <Image
            src={memoji}
            alt="Barış Emren"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
        <div className="col-span-12 lg:col-span-9 bgb ">
          <p className="text-b6 text-[10.5vw] leading-none home-text">
            <span>Hi!</span> <span>I am</span> <span>Barış,</span>
            <br />
            <span>a frontend</span> <span>developer</span> <span>based</span>{" "}
            <span>in</span> <span>Turkey.</span>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
