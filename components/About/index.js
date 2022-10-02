import Image from "next/image";
import me from "../../public/pp.png";
import { motion } from "framer-motion";
import Social from "./socials";
import Experience from "./experiences";
import experiences from "../../Data/Experience/index.json";
export default function index() {
  console.log(experiences);
  return (
    <motion.section
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -8, opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="custom-container "
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-3 justify-self-center md:justify-self-start">
          <Image
            className="rounded-md"
            src={me}
            alt="Barış Emren"
            width={350}
            height={406}
            quality={100}
          />
        </div>
        <div className="col-span-12 lg:col-span-8 lg:col-start-5 lg:border-t border-b5 ">
          <div className="pt-14 h-full flex flex-col justify-between">
            <p className="text-3xl">
              As an self-taught developer, I am passionate about creating web
              applications. Currently, I am working as a Frontend Developer{" "}
              <a
                className="text-b6"
                target="_blank"
                rel="noreferrer"
                href="https://saypr.com/"
              >
                @Saypr
              </a>{" "}
              and trying to gradute from electrical and electronics engineering.
            </p>
            <div className="mt-10 lg:mt-0">
              <Social />
            </div>
          </div>
        </div>
        <div className="mt-8 col-span-12 lg:col-span-12 lg:border-b border-b5"></div>
        <div className="col-span-12 lg:col-span-6 mt-8">
          <h3 className="text-4xl text-b5 underline underline-offset-8">
            Experience.
          </h3>
          {experiences?.map((experience, index) => {
            return <Experience key={index} exp={experience} />;
          })}
        </div>
      </div>
    </motion.section>
  );
}
