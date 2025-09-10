"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ServicesRailExact({
  services = DEFAULT_SERVICES,
  speed = 70,
  visibleCards = 4,   // desktop count (unchanged)
  widthScale = 0.95,  // desktop width scale (unchanged)
}) {
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Full list * 2 for seamless loop
  const doubled = [...services, ...services];
  const GAP_PX = 24; // gap-6

  // Detect mobile/tablet (≤ 1023px)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Continuous auto-scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduceMotion) {
      track.style.transform = "translateX(0px)";
      return;
    }

    let rafId;
    let start;
    let x = 0;

    const step = (ts) => {
      if (start === undefined) start = ts;
      const elapsed = ts - start;
      start = ts;

      const pxPerMs = speed / 1000;
      x -= pxPerMs * elapsed;

      const total = track.scrollWidth / 2; // because doubled
      if (Math.abs(x) >= total) x += total;

      track.style.transform = `translateX(${x}px)`;
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [speed]);

  // Per-card width: desktop uses 4 cards; mobile/tablet uses 3 wider cards
  const cardsPerViewport = isMobile ? 3 : visibleCards;
  const scale = isMobile ? 1.05 : widthScale; // slightly wider on mobile to fill space

  return (
    <section className="w-full overflow-hidden">
      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        {/* Mobile / tablet — centered */}
        <div className="mb-14 block lg:hidden text-center px-4">
          <p className="text-4xl font-bold tracking-widest  mb-4 text-orange-500">
            OUR PROJECTS
          </p>
          <h2 className="mt-2 text-xl sm:text-3xl leading-tight text-gray-900">
            Designs <span className="text-orange-500">That Define QTS</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Our Portfolio highlights a diverse range of projects, spanning from elegantly
            designed residential spaces to functional and stylish commercial interiors.
          </p>
        </div>

        {/* Desktop / TV — original (unchanged) */}
        <div className="mb-14 hidden lg:block">
          <h2 className="text-4xl ml-6  font-bold tracking-widest mb-6 text-orange-500">
            OUR PROJECTS
          </h2>
          <h2 className="mt-2 ml-6  text-xl sm:text-3xl  leading-tight text-gray-900">
            Designs <span className="text-orange-500">That Define QTS</span>
          </h2>
          <p className="mt-3  ml-6 text-base sm:text-lg text-gray-600">
            Our Portfolio highlights a diverse range of projects, spanning from elegantly designed residential spaces
            to functional and stylish commercial interiors.
          </p>
        </div>
      </div>

      {/* Full-bleed rail (edge to edge) */}
      <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
        <div className="relative overflow-hidden">
          <ul
            ref={trackRef}
            className="flex gap-6 will-change-transform"
            style={{ whiteSpace: "nowrap" }}
            aria-live="off"
          >
            {doubled.map((item, i) => (
              <li
                key={`${item.title}-${i}`}
                className="relative inline-block shrink-0"
                style={{
                  // Desktop: calc for 4; Mobile/Tablet: calc for 3 (wider cards)
                  width: `calc(((100vw - ${GAP_PX * (cardsPerViewport - 1)}px) / ${cardsPerViewport}) * ${scale})`,
                }}
              >
                {/* Image (rounded) */}
                <div className="relative w-full h-72 sm:h-80 lg:h-96 overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={i < 6}
                    className="object-cover"
                    sizes="(min-width:1280px) 24vw, (min-width:1024px) 30vw, 90vw"
                  />
                </div>

                {/* Details under image — travels with each card */}
                <div className="mt-3 px-1 text-center lg:text-left">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  {item.location && (
                    <p className="text-sm text-gray-500">{item.location}</p>
                  )}
                  {item.year && (
                    <p className="text-sm text-gray-500">{item.year}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Example data */
const DEFAULT_SERVICES = [
  {
    title: "Arabian Oud",
    location: "Jeddah, Saudi Arabia",
    year: "2024",
    image: "/images/oud.png",
  },
  {
    title: "Galaxy Hockey",
    location: "Taif, Saudi Arabia",
    year: "2025",
    image: "/images/hockey.png",
  },
  {
    title: "Hashim Villa",
    location: "Jeddah, Saudi Arabia",
    year: "2025",
    image: "/images/villa.png",
  },
  {
    title: "Jorgee",
    location: "Riyadh, Saudi Arabia",
    year: "2025",
    image: "/images/jorge.png",
  },
];
