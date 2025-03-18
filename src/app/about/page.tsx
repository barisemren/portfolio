import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import Annotate from "@/components/annotate";

export const metadata: Metadata = {
  title: "About | Barış Emren",
  description:
    "Learn more about Barış Emren, a self-taught developer with a passion for front-end development and creating user-friendly web applications",
  alternates: {
    canonical: "https://barisemren.dev/about",
  },
};

export default function page() {
  return (
    <div className="h-full flex flex-col justify-center container animate-enter text-soft">
      <article itemScope itemType="http://schema.org/Person">
        <h1 className="text-2xl lg:text-4xl text-b2">
          <Annotate
            type="underline"
            color="oklch(85.6% 0.0532 118.09)"
            className="mb-10 lg:mb-20"
            animationDuration={1500}
          >
            the bit about myself
          </Annotate>
        </h1>
        <div className="text-lg md:text-xl lg:text-3xl" itemProp="description">
          <p>
            As a self-taught developer with a particular interest in front-end
            development, I am passionate about creating modern and user-friendly
            web applications.
          </p>
          <br />
          <p>
            Currently developing{" "}
            <Annotate
              type="underline"
              color="oklch(69.07% 0.1428 160.38)"
              className="text-green"
              animationDuration={1500}
            >
              serverless web applications
            </Annotate>{" "}
            at{" "}
            <Link
              id="myElement"
              href={"https://sufle.io/"}
              target="_blank"
              rel="noreferrer"
              className="text-purple hover:text-green"
              itemProp="worksFor"
            >
              <Annotate
                type="underline"
                color="oklch(52.92% 0.2326 282.81)"
                hoverColor="oklch(69.07% 0.1428 160.38)"
                className="text-purple hover:text-green"
                showOnHover={true}
                showOnLoad={false}
                animationDuration={500}
              >
                Sufle.
              </Annotate>
            </Link>
          </p>
          <br />
          <br className="md:block hidden" />
          <p>
            I am really into listening all kind of music, so if you want to take
            a look{" "}
            <Link
              href={
                "https://open.spotify.com/user/baris.emren?si=30ce30489b034072"
              }
              target="_blank"
              rel="noopener"
              className="text-purple hover:text-green"
            >
              <Annotate
                type="underline"
                color="oklch(52.92% 0.2326 282.81)"
                hoverColor="oklch(69.07% 0.1428 160.38)"
                className="text-purple hover:text-green"
                showOnHover={true}
                showOnLoad={false}
                animationDuration={500}
              >
                here
              </Annotate>
            </Link>{" "}
            is my spotify.
          </p>
          <br />
          <p>
            Although I rarely post,{" "}
            <Link
              href={"https://vsco.co/barisemren/gallery"}
              target="_blank"
              rel="noopener"
              className="text-purple hover:text-green"
            >
              <Annotate
                type="underline"
                color="oklch(52.92% 0.2326 282.81)"
                hoverColor="oklch(69.07% 0.1428 160.38)"
                className="text-purple hover:text-green"
                showOnHover={true}
                showOnLoad={false}
                animationDuration={500}
              >
                here
              </Annotate>
            </Link>{" "}
            is my vsco.
          </p>
        </div>
      </article>
    </div>
  );
}
