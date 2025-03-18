import Link from "next/link";
import React from "react";
import { Link as LinkIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Barış Emren",
  description:
    "Get in touch with Barış Emren - connect via GitHub, LinkedIn, or email to discuss web development projects and opportunities",
  alternates: {
    canonical: "https://barisemren.dev/contact",
  },
};

export default function page() {
  return (
    <div className="container h-full">
      <section className="text-soft h-full flex flex-col justify-center text-center lg:text-start">
        <h1 className="text-xl md:text-2xl lg:text-3xl mb-10 lg:mb-16">
          If you want to know more about me, you can;
        </h1>
        <nav
          className="flex flex-col lg:justify-center space-y-8 lg:space-y-12 items-center lg:items-start"
          itemScope
          itemType="http://schema.org/Person"
        >
          <meta itemProp="name" content="Barış Emren" />
          <Link
            href={"https://github.com/barisemren"}
            target="_blank"
            rel="noopener"
            className="text-purple hover:text-green text-lg md:text-xl lg:text-2xl inline-flex items-center space-x-3 w-fit"
            itemProp="sameAs"
          >
            <p>visit my GitHub profile.</p>
            <LinkIcon className="size-5" aria-hidden="true" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/barisemren/"}
            target="_blank"
            rel="noopener"
            className="text-purple hover:text-green text-lg md:text-xl lg:text-2xl inline-flex items-center space-x-3 w-fit"
            itemProp="sameAs"
          >
            <p>check my linkedin.</p>
            <LinkIcon className="size-5" aria-hidden="true" />
          </Link>

          <Link
            href={"mailto:baris.emren@yahoo.com"}
            target="_blank"
            rel="noopener"
            className="text-purple hover:text-green text-lg md:text-xl lg:text-2xl inline-flex items-center space-x-3 w-fit"
            itemProp="email"
          >
            <p>or say hi anytime!</p>
            <LinkIcon className="size-5" aria-hidden="true" />
          </Link>
        </nav>
      </section>
    </div>
  );
}
