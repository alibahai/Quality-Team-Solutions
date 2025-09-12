"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function Navbar({
  firstSectionId = "hero",   // Har page ke hero ka id yahi rakhein
  includeSpacer = true,
  videoSrc = "",
}) {
  const [open, setOpen] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const navRef = useRef(null);
  const thresholdRef = useRef(80); // fallback
  const pathname = usePathname();

  // Recalculate threshold (hero center) and apply initial state
  useEffect(() => {
    const navEl = navRef.current;
    const hero = document.getElementById(firstSectionId);

    // Default fallback
    let threshold = 80;
    let navH = navEl ? navEl.offsetHeight : 80;

    if (hero) {
      const heroTop = hero.offsetTop;
      const heroHeight = hero.offsetHeight;
      const heroCenter = heroTop + heroHeight * 0.5;

      // Condition: jab NAVBAR ka "mid-line" hero ke center ko cross kare
      // window.scrollY => viewport top
      // Navbar mid ~ top + navH/2
      threshold = heroCenter - navH * 0.5;
    }

    thresholdRef.current = Math.max(0, threshold);

    const apply = () => {
      const navHNow = navRef.current ? navRef.current.offsetHeight : 80;
      const current = window.scrollY + navHNow * 0.5; // navbar mid
      setShowBg(current >= thresholdRef.current);
    };

    // Initial set + listeners
    apply();

    const onScroll = () => apply();
    const onResize = () => {
      // Recompute on resize/orientation change (hero height may change)
      const hero = document.getElementById(firstSectionId);
      const navEl = navRef.current;
      let navH = navEl ? navEl.offsetHeight : 80;

      if (hero) {
        const heroTop = hero.offsetTop;
        const heroHeight = hero.offsetHeight;
        const heroCenter = heroTop + heroHeight * 0.5;
        thresholdRef.current = Math.max(0, heroCenter - navH * 0.5);
      } else {
        thresholdRef.current = 80;
      }
      // Re-apply after recompute
      const current = window.scrollY + navH * 0.5;
      setShowBg(current >= thresholdRef.current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [firstSectionId, pathname]); // route change par bhi re-run (naya hero pick hoga)

  // Close with ESC
  const onKeyDown = useCallback((e) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onKeyDown]);

  // Body scroll lock while drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const LOGO_SRC = "/images/2.png";

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/Servicess", caret: true },
    { label: "Brand", href: "/" },
    { label: "About Us", href: "/About" },
    { label: "Contact Us", href: "/Contact" },
  ];

  return (
    <>
      {/* Fixed header */}
      <header
        ref={navRef}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          showBg
            ? "bg-gray-900/70 backdrop-blur supports-[backdrop-filter]:bg-gray-900/50 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-20 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20">
              <Image
                src={LOGO_SRC}
                alt="Site logo"
                fill
                sizes="80px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-10 text-white">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-sm xl:text-base font-medium tracking-wide transition hover:text-white/80"
                >
                  {item.label}
                  {item.caret && (
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 opacity-90"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden ml-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-white/90 hover:text-white"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Spacer under fixed header */}
      {includeSpacer && <div style={{ height: "80px" }} aria-hidden="true" />}

      {/* Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Drawer — slides from the RIGHT */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        className={`lg:hidden fixed inset-y-0 right-0 z-[60] w-[86%] max-w-sm bg-neutral-900 text-white shadow-2xl
                    will-change-transform transform-gpu transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image src={LOGO_SRC} alt="Site logo" fill sizes="32px" className="object-contain" />
            </div>
            <span className="sr-only">Home</span>
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/80 hover:text-white"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer content */}
        <nav className="px-4 py-6">
          <ul className="space-y-4">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between text-base font-medium hover:text-white/80"
                >
                  <span>{item.label}</span>
                  {item.caret && (
                    <svg aria-hidden="true" className="h-3.5 w-3.5 opacity-90" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* OPTIONAL: small video (mobile/tablet) */}
          {videoSrc ? (
            <div className="mt-6">
              <div className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden rounded-lg ring-1 ring-white/10">
                <video
                  src={videoSrc}
                  controls
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          ) : null}

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/Contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-md bg-gradient-to-r from-orange-600 to-red-600 py-3 text-white font-semibold shadow hover:opacity-95 active:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
