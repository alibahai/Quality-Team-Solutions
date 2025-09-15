"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

/* ================= ICONS ================= */
const IconBook = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z" stroke="white" strokeWidth="1.5" />
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3V19" stroke="white" strokeWidth="1.5" />
  </svg>
);
const IconPencil = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25Z" stroke="white" strokeWidth="1.5" />
    <path d="M14.06 4.19 17.81 7.94" stroke="white" strokeWidth="1.5" />
  </svg>
);
const IconCompass = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="white" strokeWidth="1.5" />
    <path d="m15.5 8.5-2.12 4.88L8.5 15.5l2.12-4.88L15.5 8.5Z" fill="white" />
  </svg>
);
const IconGauge = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M4.93 19.07A10 10 0 1 1 19.07 4.93" stroke="white" strokeWidth="1.5" />
    <path d="M14 10l5 5" stroke="white" strokeWidth="1.5" />
  </svg>
);
const IconBarcode = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M4 6v12M8 6v12M12 6v12M16 6v12M20 6v12" stroke="white" strokeWidth="1.5" />
  </svg>
);
const IconBuilding = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M4 20h16M6 20V8h12v12M10 12h4" stroke="white" strokeWidth="1.5" />
  </svg>
);

/* ================= DATA ================= */
const SERVICES = [
  { title: "Design & Space Planning", Icon: IconBook, href: "#" },
  { title: "Joinery Works", Icon: IconPencil, href: "#" },
  { title: "Drawings & Approvals", Icon: IconCompass, href: "#" },
  { title: "MEP Works", Icon: IconGauge, href: "#" },
  { title: "Turnkey Fit-Outs", Icon: IconBarcode, href: "#" },
  { title: "Demolition, Construction & Refurbishment", Icon: IconBuilding, href: "#" },
];

export default function Navbar({
  firstSectionId = "hero",
  includeSpacer = true,
  videoSrc = "",
}) {
  const [open, setOpen] = useState(false);           // mobile drawer
  const [openMenu, setOpenMenu] = useState("none");  // desktop services popover
  const [mServices, setMServices] = useState(false); // mobile services accordion
  const [showBg, setShowBg] = useState(false);

  const navRef = useRef(null);
  const thresholdRef = useRef(80);
  const closeTimerRef = useRef(null);
  const pathname = usePathname();
  const servicesRef = useRef(null);

  /* ===== Scroll background ===== */
  useEffect(() => {
    const navEl = navRef.current;
    const hero = document.getElementById(firstSectionId);
    let threshold = 80;

    if (navEl && hero) {
      const heroTop = hero.offsetTop;
      const heroHeight = hero.offsetHeight;
      const heroCenter = heroTop + heroHeight * 0.5;
      const navH = navEl.offsetHeight || 80;
      threshold = heroCenter - navH * 0.5;
    }
    thresholdRef.current = Math.max(0, threshold);

    const apply = () => {
      const navHNow = (navRef.current && navRef.current.offsetHeight) || 80;
      const current = window.scrollY + navHNow * 0.5;
      setShowBg(current >= thresholdRef.current);
    };
    apply();

    const onScroll = () => apply();
    const onResize = () => apply();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [firstSectionId, pathname]);

  /* ===== Close on ESC ===== */
  const onKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setOpen(false);
      setOpenMenu("none");
      setMServices(false);
    }
  }, []);
  useEffect(() => {
    if (!open && openMenu === "none") return;
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, openMenu, onKeyDown]);

  /* ===== Body scroll lock while drawer is open ===== */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  /* ===== Desktop hover delay (services only) ===== */
  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpenMenu("none");
    }, 160);
  };

  const LOGO_SRC = "/images/2.png";

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
            <li>
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-sm xl:text-base font-medium tracking-wide transition hover:text-white/80"
              >
                Home
              </Link>
            </li>

            {/* Desktop Services dropdown (gray bg, white text, hover red, bigger icons, no circles) */}
            <li
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => {
                clearCloseTimer();
                setOpenMenu("services");
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={openMenu === "services"}
                aria-controls="services-menu"
                onClick={() =>
                  setOpenMenu(openMenu === "services" ? "none" : "services")
                }
                className="inline-flex items-center gap-1 text-sm xl:text-base font-medium tracking-wide transition hover:text-white/80"
              >
                Services
                <svg
                  aria-hidden="true"
                  className={`h-3.5 w-3.5 opacity-90 transition-transform ${
                    openMenu === "services" ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                </svg>
              </button>

              <div
                id="services-menu"
                role="menu"
                aria-label="Services"
                className={`${
                  openMenu === "services" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                } absolute left-1/2 top-full -translate-x-1/2 mt-4 z-[60] w-[720px]
                   rounded-2xl bg-gray-800 text-white shadow-2xl transition duration-150 origin-top`}
              >
                <div className="p-4 sm:p-5">
                  <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                    {SERVICES.map(({ title, Icon, href }, i) => (
                      <Link
                        key={i}
                        href={href}
                        role="menuitem"
                        className="group flex items-center gap-3 rounded-xl p-2.5 hover:bg-red-600"
                        onClick={() => setOpenMenu("none")}
                      >
                        <Icon className="h-6 w-6" />
                        <span className="text-sm font-medium leading-snug">{title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/About"
                className="inline-flex items-center gap-1 text-sm xl:text-base font-medium tracking-wide transition hover:text-white/80"
              >
                About Us
              </Link>
            </li>

            {/* Contact Us simple button (NO dropdown on desktop) */}
            <li>
              <Link
                href="/Contact"
                className="px-4 py-2 rounded-md text-white font-medium"
              >
                Contact Us
              </Link>
            </li>
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
<nav className="px-4 py-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
          <ul className="space-y-4">
            {/* Home */}
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between text-base font-medium hover:text-white/80"
              >
                <span>Home</span>
              </Link>
            </li>

            {/* Services (MOBILE — the ONLY dropdown/accordion) */}
            <li>
              <button
                type="button"
                onClick={() => setMServices((v) => !v)}
                className="w-full flex items-center justify-between text-base font-medium hover:text-white/80"
                aria-expanded={mServices}
                aria-controls="m-services"
              >
                <span>Services</span>
                <svg
                  aria-hidden="true"
                  className={`h-4 w-4 transition-transform ${mServices ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                </svg>
              </button>

              <div
                id="m-services"
                className={`overflow-hidden transition-all duration-200 ${mServices ? "max-h-[1000px] mt-3" : "max-h-0"}`}
              >
                <div className="grid grid-cols-1 gap-2">
                  {SERVICES.map(({ title, Icon, href }, i) => (
                    <Link
                      key={i}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-3 rounded-lg p-2.5 hover:bg-red-600"
                    >
                      <Icon className="h-6 w-6" />
                      <span className="text-sm font-medium">{title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* About */}
            <li>
              <Link
                href="/About"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between text-base font-medium hover:text-white/80"
              >
                <span>About Us</span>
              </Link>
            </li>

            {/* Contact — SIMPLE LINK (no dropdown on mobile) */}
            <li>
              <Link
                href="/Contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between text-base font-medium hover:text-white/80"
              >
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>

          {/* OPTIONAL: small video */}
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
          {/* <div className="mt-8">
            <Link
              href="/Contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-md bg-gradient-to-r from-[#F58321] to-red-600 py-3 text-white font-semibold shadow hover:opacity-95 active:opacity-90"
            >
              Contact Us
            </Link>
          </div> */}
        </nav>
      </aside>
    </>
  );
}
