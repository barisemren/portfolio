import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barış Emren",
  description: "Welcome to the portfolio of Barış Emren, a Software Developer based in Turkey specializing in web development and modern frontend technologies",
  alternates: {
    canonical: "https://barisemren.dev", // Replace with your actual domain
  }
};

export default function Home() {
  return (
    <div className="container h-full animate-enter">
      <section className="flex flex-col gap-10 h-full justify-center lg:gap-20 text-soft">
        <h1 className="text-3xl lg:text-5xl">Hello!</h1>
        <div className="text-3xl lg:text-7xl">
          I am <span itemProp="name">Barış</span>, <br /> a{" "}
          <span itemProp="jobTitle" className="text-green">Software Developer</span> <br />
          based in <span itemProp="homeLocation" className="text-purple">Turkey</span>
        </div>
      </section>
    </div>
  );
}
