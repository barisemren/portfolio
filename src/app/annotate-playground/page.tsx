import Implementation from "@/components/playground/implementation";
import InteractiveArea from "@/components/playground/interactive-area";
import { Metadata } from "next";

export interface Config {
  type: string;
  color: string;
  hoverColor: string;
  animationDuration: number;
  iterations: number;
  strokeWidth: number;
  padding: number;
  animate: boolean;
  multiline: boolean;
  showOnLoad: boolean;
  showOnHover: boolean;
}

export const metadata: Metadata = {
  title: "Annotate Playground | Barış Emren",
  description:
    "Experiment with different settings for the Annotate component. Adjust the controls below to see how different configurations affect the annotation.",
  alternates: {
    canonical: "https://barisemren.dev/annotate-playground",
  },
};

export default function AnnotatePlayground() {
  return (
    <div className="container h-full animate-enter">
      <section className="flex flex-col gap-10 h-full pt-10 text-soft">
        <h1 className="text-3xl lg:text-5xl font-medium text-purple">
          Annotate Playground
        </h1>

        <p className="text-lg max-w-2xl">
          Experiment with different settings for the{" "}
          <span className="italic">Annotate</span>{" "}
          component. Adjust the controls below to see how different
          configurations affect the annotation.
        </p>

        <p className="text-lg max-w-2xl">
          This component is built on top of{" "}
          <a 
            href="https://roughnotation.com?ref=barisemren.dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple hover:underline"
          >
            Rough Notation
          </a>
          , a JavaScript library for creating hand-drawn-style annotations. 
          The component extends the original library with additional configuration options 
          for better control over animations and display behavior.
        </p>

        <InteractiveArea />

        <Implementation />
      </section>
    </div>
  );
}
