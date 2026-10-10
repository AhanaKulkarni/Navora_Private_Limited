"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden mask-image-linear-gradient",
        className,
      )}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4 px-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative flex h-[400px] w-[85vw] md:w-[450px] max-w-full shrink-0 flex-col rounded-sm border border-abyss/10 bg-white p-8 md:p-10 shadow-sm"
            key={item.name + idx}
          >
            <blockquote className="flex h-full flex-col">
              <div className="relative z-20 flex-1 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-abyss/10">
                <span className="text-lg leading-relaxed font-accent italic text-abyss/80 whitespace-pre-wrap">
                  "{item.quote}"
                </span>
              </div>
              <div className="relative z-20 mt-8 flex shrink-0 flex-row items-center border-t border-abyss/10 pt-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image || "/candidates/candidate.png"}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover ring-1 ring-brass-signal/50"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-heading font-medium text-abyss">
                      {item.name}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-brass-signal mt-1">
                      {item.title}
                    </span>
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
