"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

export default function RightContactRail({
  phone = "+971 56 806 8070",
  whatsappHref = "https://wa.me/971568068070",
  footerSelector = "footer", // change to "#site-footer" if your footer isn't a <footer>
}) {
  const railRef = useRef(null);
  const [pushUp, setPushUp] = useState(0); // how much to push up when footer is visible

  useEffect(() => {
    if (typeof window === "undefined") return;

    const btn = railRef.current;
    const footer = document.querySelector(footerSelector);
    if (!btn || !footer) return;

    const calc = () => {
      const footerTop = footer.getBoundingClientRect().top;
      const btnRect = btn.getBoundingClientRect();
      const overlap = btnRect.bottom - footerTop; // > 0 means overlapping footer
      setPushUp(overlap > 0 ? overlap + 12 : 0); // keep a 12px gap above footer
    };

    calc();
    window.addEventListener("scroll", calc, { passive: true });
    window.addEventListener("resize", calc);
    return () => {
      window.removeEventListener("scroll", calc);
      window.removeEventListener("resize", calc);
    };
  }, [footerSelector]);

  return (
    <>
      {/* ✅ Desktop vertical rail (unchanged) */}
      <div
        ref={railRef}
        className="hidden md:block fixed right-0 z-40"
        style={{ top: "50%", transform: `translateY(calc(-50% - ${pushUp}px))` }}
      >
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp ${phone}`}
          className="flex flex-col items-center justify-center h-48 w-12 bg-[red] text-white shadow-md rounded-l-md"
        >
          {/* number (vertical) */}
          <span className="text-sm font-semibold tracking-wider [writing-mode:vertical-rl] rotate-180">
            {phone}
          </span>

          {/* icon below */}
          <Icon icon="ic:round-whatsapp" className="mt-2 h-5 w-5" />
        </a>
      </div>

      {/* ✅ Mobile floating button (fixed so it moves with scroll) */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${phone}`}
        className="
          md:hidden
          fixed
          right-4
          z-50
          inline-flex h-12 w-12 items-center justify-center
          rounded-full bg-green-500 shadow-lg
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600
        "
        // Safe-area friendly bottom spacing on iOS
        style={{ bottom: "calc(16px + env(safe-area-inset-bottom))" }}
      >
        <Icon icon="ic:round-whatsapp" className="h-7 w-7 text-white" />
        <span className="sr-only">Open WhatsApp</span>
      </a>
    </>
  );
}
