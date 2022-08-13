/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import memoji from "../../public/me.png";
export default function index() {
  return (
    <section className="container pt-8">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-2 place-self-end memoji justify-self-start w-60 h-60 lg:order-last lg:w-80 lg:h-80 mb-12 lg:mb-0 ">
          <Image
            src={memoji}
            alt="Barış Emren"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
        <div className="col-span-12 lg:col-span-9">
          <p className="text-b6 text-[10.5vw] leading-none home-text">
            <span>Hi!</span> <span>I am</span> <span>Barış,</span>{" "}
            <span>a</span> <span>frontend</span> <span>developer</span>{" "}
            <span>based</span> <span>in</span> <span>Turkey.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
