"use client";

import { useState } from "react";

export default function about  ()  {
  return (
<main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section
        id="hero"                     // ✅ lets Navbar detect hero
        className="relative h-[300px] w-full -mt-20" // ✅ pull up 80px so hero sits behind fixed navbar
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/new4.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
            About Us
          </h1>
        </div>
      </section>  
        </main>
         );
}
