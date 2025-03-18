// Installation example code
export const installationExamples = {
  pnpm: 'pnpm add rough-notation',
  npm: 'npm install rough-notation',
  yarn: 'yarn add rough-notation',
};

// Usage example code
export const usageExample = `import Annotate from '@/components/annotate'

export default function Example() {
  return (
    <div>
      <h1>
        <Annotate 
          type="highlight" 
          color="#FFC107"
          showOnHover={true}
        >
          Highlighted Text
        </Annotate>
      </h1>
      
      <p>
        You can <Annotate type="underline" color="#FF4081">underline text</Annotate> or
        <Annotate type="box" color="#4CAF50" padding={[2, 8]}> box it </Annotate>
        or even <Annotate type="strike-through" color="#F44336">strike it</Annotate>
      </p>
    </div>
  )
}`;

// Full component code
export const fullComponentCode = `"use client";

import { useEffect, useRef, ReactNode, useState, useCallback } from "react";
import { annotate } from "rough-notation";

type RoughAnnotationType = 
  | "underline"
  | "box"
  | "circle"
  | "highlight"
  | "strike-through"
  | "crossed-off"
  | "bracket";

type BracketType = "left" | "right" | "top" | "bottom";

// Interface for the annotation object returned by rough-notation
interface RoughNotation {
  show: () => void;
  hide: () => void;
  remove: () => void;
  color: string | undefined;
}

interface AnnotateProps {
  children: ReactNode;
  type?: RoughAnnotationType;
  color?: string;
  hoverColor?: string;
  animate?: boolean;
  animationDuration?: number;
  iterations?: number;
  padding?: number | [number, number] | [number, number, number, number];
  brackets?: BracketType | BracketType[];
  multiline?: boolean;
  strokeWidth?: number;
  showOnLoad?: boolean;
  className?: string;
  showOnHover?: boolean;
}

export default function Annotate({
  children,
  type = "underline",
  color = "#FFC107",
  hoverColor,
  animate = true,
  animationDuration = 800,
  iterations = 2,
  padding = 5,
  brackets = ["right", "left"],
  multiline = true,
  strokeWidth = 1,
  showOnLoad = true,
  className,
  showOnHover = false,
}: AnnotateProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<RoughNotation | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine if we should respond to hover events
  const shouldHandleHover = showOnHover || !!hoverColor;
  
  // Create annotation only once
  useEffect(() => {
    if (!elementRef.current) return;
    
    // Create the annotation once
    annotationRef.current = annotate(elementRef.current, {
      type,
      color: color,
      animate,
      animationDuration,
      iterations,
      padding,
      brackets,
      multiline,
      strokeWidth,
    }) as RoughNotation;

    // Initial show based on props
    if (showOnLoad && !showOnHover) {
      annotationRef.current.show();
    }

    // Cleanup
    return () => {
      if (annotationRef.current) {
        annotationRef.current.remove();
      }
    };
  // Only recreate annotation when these critical props change
  }, [type, animate, animationDuration, iterations, padding, brackets, multiline, strokeWidth, showOnLoad, showOnHover]);

  // Handle color updates separately without recreating annotation
  useEffect(() => {
    if (!annotationRef.current || !shouldHandleHover) return;

    // Update color without recreating the annotation
    const currentColor = isHovered && hoverColor ? hoverColor : color;
    if (annotationRef.current) {
      annotationRef.current.color = currentColor;
    }
  }, [color, hoverColor, isHovered, shouldHandleHover]);

  // Handle hover state showing/hiding
  useEffect(() => {
    if (!annotationRef.current) return;

    if (showOnHover) {
      if (isHovered) {
        annotationRef.current.show();
      } else {
        annotationRef.current.hide();
      }
    } else if (showOnLoad) {
      annotationRef.current.show();
    } else {
      annotationRef.current.hide();
    }
  }, [isHovered, showOnHover, showOnLoad]);

  // Memoize event handlers to prevent recreation on each render
  const handleMouseEnter = useCallback(() => {
    if (shouldHandleHover) {
      setIsHovered(true);
    }
  }, [shouldHandleHover]);

  const handleMouseLeave = useCallback(() => {
    if (shouldHandleHover) {
      setIsHovered(false);
    }
  }, [shouldHandleHover]);

  return (
    <span 
      ref={elementRef} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={\`\${className || ''} inline-block\`}
    >
      {children}
    </span>
  );
}`; 