import { motion } from "framer-motion";
import Link from "next/link";

export default function index() {
  return (
    <motion.section
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -8, opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="custom-container h-full items-center flex"
    >
      <div className="text-soft w-full ">
        <h3 className="text-b2 text-2xl lg:text-4xl mb-10 lg:mb-20 underline underline-offset-8 lg:underline-offset-[14px] hover:text-b4">
          the bit about myself
        </h3>
        <p className="text-xl lg:text-3xl">
          As a self-taught developer with a particular interest in front-end
          development, I am passionate about creating modern and user-friendly
          web applications.
          <br />
          <br />
          Currently developing{" "}
          <span className="text-green">
            serverless web applications
          </span> at{" "}
          <Link href={"https://sufle.io/"}>
            <a
              href="https://sufle.io/"
              target="_blank"
              rel="noreferrer"
              className="text-purple hover:text-green"
            >
              Sufle.
            </a>
          </Link>
          <br />
          <br />
          <br />I am really into listening all kind of music, so if you want to
          take a look{" "}
          <Link
            href={
              "https://open.spotify.com/user/baris.emren?si=30ce30489b034072"
            }
            target="_blank"
          >
            <a
              href="https://open.spotify.com/user/baris.emren?si=30ce30489b034072"
              target="_blank"
              rel="noreferrer"
              className="text-green hover:text-purple"
            >
              here
            </a>
          </Link>{" "}
          is my spotify.
          <br />
          <br />
          Although I rarely post,{" "}
          <Link href={"https://vsco.co/barisemren/gallery"} target="_blank">
            <a
              href="https://vsco.co/barisemren/gallery"
              target="_blank"
              rel="noreferrer"
              className="text-green hover:text-purple"
            >
              here
            </a>
          </Link>{" "}
          is my vsco.
        </p>
        {/* 
        <h3 className="text-b2 text-2xl lg:text-4xl my-10 lg:my-20 underline underline-offset-8 lg:underline-offset-[14px] hover:text-b4">
          experiences
        </h3>
        <p className="text-xl lg:text-3xl">
          I did my intership at{" "}
          <Link href={"https://sufle.io/"}>
            <a
              href="https://sufle.io/"
              target="_blank"
              rel="noreferrer"
              className="text-purple hover:text-green"
            >
              Sufle.
            </a>
          </Link>
          <br />
          <br />
          After finished my intership, I joined{" "}
          <Link href={"https://saypr.com/"}>
            <a
              href="https://saypr.com/"
              target="_blank"
              rel="noreferrer"
              className="text-purple hover:text-green"
            >
              Saypr
            </a>
          </Link>{" "}
          as a front-end developer.
          <br />
          <br />
          As i mentioned before, I am currently working as a software developer
          at{" "}
          <Link href={"https://sufle.io/"}>
            <a
              href="https://sufle.io/"
              target="_blank"
              rel="noreferrer"
              className="text-purple hover:text-green"
            >
              Sufle.
            </a>
          </Link>
        </p>
        */}
      </div>
    </motion.section>
  );
}
