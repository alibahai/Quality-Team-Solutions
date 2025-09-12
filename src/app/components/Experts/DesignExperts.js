"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function DesignExperts({
  backgroundSrc = "/images/background2.jpg",
}) {
  const members = useMemo(
    () => [
      { key: "omar",  name: "Omar Sheikh",  role: "Senior Architect",                image: "/images/Omar.jpg" },
      { key: "sara",  name: "Sara Malik",   role: "Lighting Specialist",             image: "/images/Omar.jpg" },
      { key: "amina", name: "Amina Zahra",  role: "3D Visualization Artist",         image: "/images/Omar.jpg" },
      { key: "karim", name: "Karim Haddad", role: "Furniture & Material Consultant", image: "/images/Omar.jpg" },
      { key: "layla", name: "Layla Al-Farouq", role: "Interior Designer",            image: "/images/Omar.jpg" },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState(members[0].key);
  const active = members.find((m) => m.key === activeKey) || members[0];

  return (
    <section className="relative">
      {/* Background (decorative) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={backgroundSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/5 md:bg-gradient-to-r md:from-black/75 md:via-black/50 md:to-black/20" />
      </div>

      {/* Foreground */}
      <div className="relative z-10 bg-neutral-900/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
          {/* MOBILE/TABLET: centered heading & text */}
          <div className="block lg:hidden text-center">
            <h2 className="text-4xl font-bold tracking-widest mb-6 text-orange-500">
              OUR DESIGN EXPERTS
            </h2>
            <p className="mt-2 text-xl sm:text-3xl  leading-tight text-white">
              The <span className="text-orange-500">Creative Force</span> Behind Our Work <br/> Is Unmatched
            </p>
            <p className="mt-3 text-base sm:text-lg text-white/80">
              Our team of passionate designers, architects, and specialists bring together
              innovation, craftsmanship, and vision to create spaces that are both functional
              and inspiring. With expertise across interiors, lighting, and design strategy,
              we transform ideas into timeless experiences tailored to every client’s lifestyle and needs.
            </p>
          </div>

          {/* DESKTOP: original heading & text (unchanged) */}
          <div className="hidden lg:block">
            <h2 className="text-4xl font-bold tracking-widest mb-6 text-orange-500">
              OUR DESIGN EXPERTS
            </h2>
            <p className="mt-2 text-xl sm:text-3xl  leading-tight text-white">
              The <span className="text-orange-500">Creative Force</span> Behind Our Work
            </p>
            <p className="mt-3 text-base sm:text-lg text-white/80">
              Our team of passionate designers, architects, and specialists bring together
              innovation, craftsmanship, and vision to create spaces that are both functional
              and inspiring. With expertise across interiors, lighting, and design strategy,
              we transform ideas into timeless experiences tailored to every client’s lifestyle and needs.
            </p>
          </div>

          {/* ===== MOBILE/TABLET LAYOUT ===== */}
          {/* Image first, then the 4 links as a single-row grid with underline */}
          <div className="mt-8 lg:hidden">
            {/* Active portrait */}
          <div className="relative h-96 sm:h-[28rem] lg:h-[32rem] overflow-hidden mt-3 rounded-lg mr-auto">
    <Image
      key={active.image}
      src={active.image}
      alt={active.name}
      fill
      className="object-cover object-[center_03%]" // 👈 shifted downward
      sizes="(min-width:1024px) 40vw, 90vw"
      priority
    />
  </div>

            {/* Links row: grid of 4, name + underline that turns orange when active */}
            <ul className="mt-6 grid grid-cols-4 gap-3 text-center">
              {members.slice(0, 4).map((m) => {
                const isActive = m.key === activeKey;
                return (
                  <li key={m.key}>
                    <button
                      type="button"
                      onClick={() => setActiveKey(m.key)}
                      className="group w-full"
                      aria-pressed={isActive}
                    >
                      <span
                        className={`block text-xs sm:text-sm font-semibold transition-colors ${
                          isActive ? "text-orange-500" : "text-white"
                        }`}
                      >
                        {m.name}
                      </span>
                      <span
                        className={`mx-auto mt-1 block h-[2px] w-10 rounded-full transition-colors ${
                          isActive ? "bg-orange-500" : "bg-white/70"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ===== DESKTOP LAYOUT (unchanged) ===== */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-1">
            {/* Left: List (desktop with roles & underline like before) */}
            <div className="lg:col-span-7 hidden lg:block">
              <ul>
                {members.map((m) => {
                  const isActive = m.key === activeKey;
                  return (
                    <li key={m.key} className="relative py-5 sm:py-6">
                      <button
                        type="button"
                        onClick={() => setActiveKey(m.key)}
                        className="group w-full text-left"
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-lg font-semibold ${
                              isActive
                                ? "text-orange-500"
                                : "text-white group-hover:text-orange-500 transition-colors"
                            }`}
                          >
                            {m.name}
                          </span>
                        </div>
                        <p
                          className={`mt-1.5 text-sm ${
                            isActive ? "text-white/85" : "text-white/65"
                          }`}
                        >
                          {m.role}
                        </p>
                      </button>

                      {/* underline (white → orange if active) */}
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] w-3/4 sm:w-2/3 transition-colors duration-300 ${
                          isActive ? "bg-orange-500" : "bg-white"
                        }`}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right: Active portrait (desktop) */}
            <div className="lg:col-span-5 lg:block hidden">
              <div className="relative h-96 sm:h-[28rem] lg:h-[32rem] overflow-hidden mt-3 rounded-lg mr-auto">
                <Image
                  key={active.image}
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover object-[center_08%]"
                  sizes="(min-width:1024px) 40vw, 90vw"
                  priority
                />
              </div>
            </div>
          </div>
          {/* ===== /DESKTOP ===== */}
        </div>
      </div>

      {/* Fallback bg */}
      <div className="absolute inset-0 -z-20 bg-neutral-900" />
    </section>
  );
}
