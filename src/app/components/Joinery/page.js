"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import ScrollingShowcase from "../Imagess/ScrollingShowcase";
import ServicesRail from "../Our-Services3/page.js";


export default function Joinery ()  {

 // Tabs for Designing & Space Planning
  const tabs = useMemo(
    () => [
      {
        key: "concept",
        title: "Bespoke Furniture & Cabinetry",
        desc: "Functional and aesthetic space dividers.",
        image: "/images/stands.png",
      },
      {
        key: "planning",
        title: "Wooden Partitions & Panels",
        desc: "Functional and aesthetic space dividers.",
        image: "/images/fit.jpg",
      },
      {
        key: "ergonomics",
        title: "Reception Counters & Wardrobes",
        desc: "Functional and aesthetic space dividers.",
        image: "/images/counter.jpg",
      },
      {
        key: "renders",
        title: "Shelving & Display Units",
        desc: "Functional and aesthetic space dividers.",
        image: "/images/shelves.jpeg",
      },
      {
        key: "sustainability",
        title: "Premium Finishes & Materials",
        desc: "Functional and aesthetic space dividers.",
        image: "/images/villa.png",
      },
      {
        key: "furnishing",
        title: "Custom Joinery Design Solutions",
        desc: "Functional and aesthetic space dividers.",
        image: "/images/about3.jpg",
      },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState(tabs[1].key);
  const active = tabs.find((t) => t.key === activeKey) || tabs[0];


  return (
<main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section
        id="hero"                     // ✅ lets Navbar detect hero
        className="relative h-[300px] w-full -mt-20" // ✅ pull up 80px so hero sits behind fixed navbar
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cardsImages.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
            Joinery Works
          </h1>
        </div>
      </section> 



      {/* Designing & Space Planning (tabs + image swap) */}
      <section className="w-full my-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Heading + intro */}
          <header className="mb-6 lg:mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Joinery<span className="text-[#F58321]"> Works</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-5xl">
             Craftsmanship is the foundation of exceptional interiors. Our joinery solutions combine precision, artistry, and durability to create unique elements that elevate your space.
            </p>
          </header>

          {/* Content */}
          <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Image: changes with active tab (mobile second, desktop left) */}
            <div className="order-2 lg:order-1 lg:col-span-7">
              <div className="relative h-64 sm:h-80 lg:h-[28rem] overflow-hidden rounded-lg ring-1 ring-black/10">
                <Image
                  key={active.image}
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(min-width:1024px) 55vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Tabs: mobile row (pills), desktop vertical list with only bottom borders + gap */}
            <div className="order-3 lg:order-2 lg:col-span-5">
              <ul
                className="
                  flex gap-3 overflow-x-auto no-scrollbar pb-4
                  lg:block lg:overflow-visible lg:pb-0
                  lg:border-b lg:border-gray-200 border-0
                "
              >
                {tabs.map((item, idx, arr) => {
                  const isActive = item.key === activeKey;
                  return (
                    <li
                      key={item.key}
                      className={[
                        "shrink-0 lg:shrink",
                        // desktop spacing between items
                        idx > 0 ? "lg:mt-4" : "",
                        // desktop bottom divider for every item except the last
                        idx !== arr.length - 1 ? "lg:border-b lg:border-gray-200" : "",
                        "py-0 lg:py-4",
                      ].join(" ")}
                    >
                      <button
                      type="button"
                      onClick={() => setActiveKey(item.key)}
                      onMouseEnter={() => setActiveKey(item.key)}   // 👈 hover changes image
                      onFocus={() => setActiveKey(item.key)}        // 👈 keyboard focus also changes
                      className={[
                        "px-3 py-2 rounded-none text-sm font-semibold",
                        isActive ? "bg-[#F58321] text-white" : "bg-white text-gray-900",
                        "shadow-sm ring-1 ring-black/5",
                        "lg:px-0 lg:py-0 lg:bg-transparent lg:text-left lg:shadow-none lg:ring-0 w-full text-left",
                      ].join(" ")}
                    >
                        {/* Mobile label */}
                        <span className="lg:hidden">{item.title}</span>

                        {/* Desktop label + optional description for the active one */}
                        <div className="hidden lg:block">
                          <div
                            className={`text-base font-semibold ${
                              isActive ? "text-[#F58321]" : "text-gray-900"
                            }`}
                          >
                            {item.title}
                          </div>
                          {isActive && item.desc && (
                            <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                          )}
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>



         <section >
          <div >
          <ScrollingShowcase />
          </div>
          </section>

            <section >
            <div >
            <ServicesRail />
            </div>
            </section>
 
 
        </main>
         );
}


