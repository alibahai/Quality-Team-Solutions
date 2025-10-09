"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

/* ================= ICONS ================= */
const IconBook = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path
      d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z"
      stroke="white"
      strokeWidth="1.5"
    />
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3V19" stroke="white" strokeWidth="1.5" />
  </svg>
);
const IconPencil = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path
      d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25Z"
      stroke="white"
      strokeWidth="1.5"
    />
    <path d="M14.06 4.19 17.81 7.94" stroke="white" strokeWidth="1.5" />
  </svg>
);
const IconCompass = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      stroke="white"
      strokeWidth="1.5"
    />
    <path d="m15.5 8.5-2.12 4.88L8.5 15.5l2.12-4.88L15.5 8.5Z" fill="white" />
  </svg>
);
const IconGauge = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path
      d="M4.93 19.07A10 10 0 1 1 19.07 4.93"
      stroke="white"
      strokeWidth="1.5"
    />
    <path d="M14 10l5 5" stroke="white" strokeWidth="1.5" />
  </svg>
);
const IconBarcode = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path
      d="M4 6v12M8 6v12M12 6v12M16 6v12M20 6v12"
      stroke="white"
      strokeWidth="1.5"
    />
  </svg>
);
const IconBuilding = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M4 20h16M6 20V8h12v12M10 12h4" stroke="white" strokeWidth="1.5" />
  </svg>
);

const Oud = (p) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...p}
  >
    <g fill="currentColor">
      <path d="M12 11c-.23 0-.4.077-.47.112a1.3 1.3 0 0 0-.19.118a2 2 0 0 0-.204.184c-.108.11-.221.247-.332.392c-.226.294-.492.69-.748 1.128c-.255.438-.512.941-.707 1.45C9.159 14.879 9 15.449 9 16a3 3 0 1 0 6 0c0-.551-.159-1.12-.349-1.616a10 10 0 0 0-.707-1.45a11 11 0 0 0-.748-1.128a5 5 0 0 0-.332-.392a2 2 0 0 0-.205-.184a1.2 1.2 0 0 0-.19-.118A1.06 1.06 0 0 0 12 11" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v1.094l-.21.129a14 14 0 0 0-.868.555C7.105 9.357 6 10.368 6 12v7.07c-.002.416-.006 1.206.448 1.855C6.993 21.703 7.942 22 9.143 22h5.714c1.201 0 2.15-.297 2.694-1.075c.454-.65.451-1.439.45-1.854L18 19v-7c0-1.633-1.105-2.643-1.922-3.222c-.302-.214-.627-.41-.867-.555L15 8.094V7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm2 6.5V7h2v1.5c0 .537.37.866.465.95c.15.133.33.25.474.34l.303.185c.223.134.442.266.68.435c.683.483 1.078.973 1.078 1.59v7c0 .248-.002.417-.023.565a.5.5 0 0 1-.065.214c-.007.01-.038.055-.17.105c-.152.058-.424.116-.885.116H9.143c-.461 0-.733-.058-.884-.116c-.133-.05-.165-.096-.172-.106a.5.5 0 0 1-.064-.213A4 4 0 0 1 8 19v-7c0-.617.395-1.107 1.078-1.59c.238-.169.457-.301.68-.435q.15-.09.303-.186a3.6 3.6 0 0 0 .474-.34c.095-.083.465-.412.465-.949"
      />
    </g>
  </svg>
);

const Hockey = (p) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...p}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        d="M14.634 16.517L22 3m-4.453 0l-5.173 9.787c-.635 1.2-1.028 1.362-2.34.962c-1.673-.51-5.02-2.28-6.686-1.507c-1.667.774-1.808 5.936-.31 6.994c1.678 1.185 6.649.758 8.758.274"
      />
      <path d="m8 13l-2 7" />
      <path
        strokeLinecap="round"
        d="M12 19c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2"
      />
    </g>
  </svg>
);

const Villa = (p) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="24"
    viewBox="0 0 36 24"
    {...p}
  >
    <path
      fill="currentColor"
      d="M20.912 18.228h2.091v2.091h-2.091zm7.228 0h2.091v2.091H28.14zm-1.754-7.416v-2.09h-2.898V9.74l1.081 1.073z"
    />
    <path
      fill="currentColor"
      d="M33.552 22.112v-4.409h.665l.618-.611l-7.322-7.322h-.909v1.269h-2.13L23.205 9.77h-3.516l-7.314 7.314l.618.618h.979v4.409h-1.911C9.203 19.377 8.443 13.176 8.71 8.563l.047-.094h.023c1.25 0 2.358.606 3.048 1.54l.007.01c.52.703.833 1.588.833 2.545c0 .66-.148 1.285-.414 1.844a3.84 3.84 0 0 0 1.518-.78a4.25 4.25 0 0 0 1.461-3.213c0-.955-.314-1.836-.844-2.546a3.71 3.71 0 0 0-3.923-1.66c.265-.165.57-.311.891-.422c.446-.155.886-.241 1.363-.241c1.083 0 2.064.433 2.781 1.134a3.5 3.5 0 0 0-.093-1.685a3.786 3.786 0 0 0-4.991-2.293a5 5 0 0 0-.702.303a4.6 4.6 0 0 0-.301-.909C8.478.407 6.46-.525 4.847.29a3 3 0 0 0-1.09.95A3.66 3.66 0 0 1 6.53 3.003a5 5 0 0 0-1.179-.417C2.846 2.063.486 3.41.063 5.611a3.74 3.74 0 0 0 .109 1.812a4.55 4.55 0 0 1 4.543-1.402c.409.086.771.21 1.11.373A4.11 4.11 0 0 0 1.708 8.59a4.6 4.6 0 0 0-.643 2.357c0 1.568.777 2.954 1.968 3.794a4 4 0 0 0 1.709.648a4.67 4.67 0 0 1-.671-2.423c0-.873.237-1.691.651-2.392a4.2 4.2 0 0 1 2.927-2.048c-1.417 6.453-1.809 10.949-.64 13.736H3.573v1.88h32.148v-1.88h-2.169zm-7.95-4.307h7.166v4.307h-7.166zm-10.861-.854l4.95-4.95l4.95 4.95v5.161h-5.435v-3.884h-2.749v3.884h-1.722v-5.161z"
    />
  </svg>
);

const Spark = (p) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...p}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m6 14l7-12v8h5l-7 12v-8z"
    />
  </svg>
);

const Coop = (p) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 1024 1024" {...p}>
    <path fill="currentColor" d="M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128s-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0z" />
  </svg>
);

const Villaa = (p) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 15 15" {...p}>
    <path fill="currentColor" d="M6.176 1.176a.25.25 0 0 0-.352 0l-4.4 4.4A.25.25 0 0 0 1.6 6H3v6.751a.25.25 0 0 0 .249.249h3.5A.25.25 0 0 0 7 12.753v-7.43c0-.066.026-.13.073-.176L8.5 3.5zM6 11H5v-1h1zm0-2H5V8h1zm0-3v1H5V6zm6.75-3h-.5a.25.25 0 0 0-.25.25V5l-1.324-1.824a.25.25 0 0 0-.352 0L8.056 5.932A.25.25 0 0 0 8 6.088v6.66a.25.25 0 0 0 .246.252h1.5a.253.253 0 0 0 .254-.252V11h1v1.747a.253.253 0 0 0 .253.253h1.5a.25.25 0 0 0 .247-.249V3.25a.25.25 0 0 0-.25-.25M10 8H9V7h1zm2 0h-1V7h1zm-2 2H9V9h1zm2 0h-1V9h1z" />
  </svg>
);

const Peach = (p) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...p}>
    <path fill="currentColor" d="M10 1H9v2h1c.462 0 .847.338 1.157 1.144l.019.049c-2.093-.333-4.646.066-6.729 1.955c-1.755 1.592-2.979 4.629-2.215 7.873c1.117 4.748 5.655 7.44 9.872 9.104c3.744-2.547 6.171-6.44 5.783-11.085c-.228-2.728-1.552-5.292-3.846-6.772c2.89 1.584 4.687 4.598 4.959 7.851c.206 2.46-.355 4.693-1.437 6.663c1.503-1.09 3.084-2.585 3.797-4.434c1.634-4.236-.027-8.333-2.99-10.025c-1.723-.984-3.33-1.262-4.566-1.088l.033-.09C14.148 3.34 14.535 3 15 3h1V1h-1c-1.214 0-2.003.668-2.502 1.404C12 1.668 11.213 1 10 1" />
  </svg>
);

const Care = (p) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="29" viewBox="0 0 24 24" {...p}>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
      <path d="M8.396 2.552c1.474-.914 2.762-.546 3.535.041c.317.24.476.36.569.36s.252-.12.569-.36c.773-.587 2.06-.955 3.535-.041c1.936 1.2 2.374 5.156-2.09 8.494c-.851.636-1.276.954-2.014.954s-1.163-.318-2.013-.954C6.022 7.708 6.46 3.751 8.396 2.552Z" />
      <path strokeLinejoin="round" d="M4 14h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767c0 .04-.027.074-.066.085l-2.541.703a1.95 1.95 0 0 1-1.368-.124L6.842 16.75" />
      <path strokeLinejoin="round" d="m13 16.5l4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a2 2 0 0 1-1.568.187L4 20.02" />
    </g>
  </svg>
);

const Mall = (p) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 48 48" {...p}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M43 45H5V21.998C5 19.236 7.236 17 9.995 17.124c8.854.4 20.827 1.755 28.989 3.87c2.442.633 4.016 2.9 4.016 5.423zM5 33h38M3 45h42M17.5 33v12m13-12v12M34 13v6.5m-6.932-9.36c.096 1.462 1.154 2.58 2.614 2.704c1.02.087 2.426.156 4.318.156s3.298-.069 4.318-.156c1.46-.124 2.518-1.242 2.614-2.704c.04-.613.068-1.332.068-2.14s-.028-1.527-.068-2.14c-.096-1.462-1.154-2.58-2.614-2.704C37.298 3.069 35.892 3 34 3s-3.298.069-4.318.156c-1.46.124-2.518 1.242-2.614 2.704A33 33 0 0 0 27 8c0 .808.028 1.527.068 2.14"
    />
  </svg>

  );

const Resid = (p) => (

<svg xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 15 15">
		<path fill="currentColor" d="M14 6H1a11.4 11.4 0 0 1 1-4h11a11.4 11.4 0 0 1 1 4M3 7h9v6h-1V8H8v5H3zm1 3h3V8H4z" />
	</svg>

);

const Comm = (p) => (

<svg xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 15 15">
		<path fill="currentColor" d="M11.8 12.5V10c.7-.1 1.2-.7 1.2-1.5S12.3 7 11.5 7S10 7.7 10 8.5c0 .7.5 1.4 1.2 1.5v2.5H7V1H2v11.5H1v.5h13v-.5zM6 10H3V9h3zm0-2H3V7h3zm0-2H3V5h3zm0-2H3V3h3z" />
	</svg>


);


/* ================= DATA ================= */
const SERVICES = [
  {
    title: "Design & Space Planning",
    Icon: IconBook,
    href: "/Servicess/Design-Drawings",
  },
  { title: "Joinery Works", Icon: IconPencil, href: "/Servicess/Joinery-work" },
  {
    title: "Drawings & Approvals",
    Icon: IconCompass,
    href: "/Servicess/Drawings-Approvals",
  },
  { title: "MEP Works", Icon: IconGauge, href: "/Servicess/Mep" },
  {
    title: "Turnkey Fit-Outs",
    Icon: IconBarcode,
    href: "/Servicess/Turnkey-Fit",
  },
  {
    title: "Demolition, Construction & Refurbishment",
    Icon: IconBuilding,
    href: "/Servicess/Demolishing",
  },
];

/** Categories shown under "Our Projects" */
const SUPPORT_CATEGORIES = [
  { key: "commercial", title: "Commercials", Icon: Resid, href: "#" },
  { key: "residential", title: "Residentials", Icon: Comm, href: "#" },
];

/** Projects for each category (4 each) */
const COMMERCIAL_PROJECTS = [
  { title: "Arabian Oud", Icon: Oud, href: "/Our-Project/Arabian-Oud" },
  { title: "Galaxy Hockey", Icon: Hockey, href: "/Our-Project/Galaxy-Hockey" },
  { title: "Jarge", Icon: Coop, href: "/Our-Project/Jorgee" },
  { title: "Ayur Care", Icon: Care, href: "/Our-Project/Ayur-Care" },
  { title: "Hareer", Icon: Care, href: "/Our-Project/hareer" },
  { title: "Professor", Icon: Care, href: "/Our-Project/professor" },
  { title: "Fitn Glam", Icon: Care, href: "/Our-Project/fitnglam" },
  { title: "Tous Les Jours", Icon: Care, href: "/Our-Project/tous-les-jours" },
  { title: "Adore", Icon: Care, href: "/Our-Project/adore" },
  { title: "Turkish Icecreeam", Icon: Care, href: "/Our-Project/turkish-icecream" },
  { title: "Bianco", Icon: Care, href: "/Our-Project/bianco" },
  { title: "Cold Station", Icon: Care, href: "/Our-Project/coldstation" },
  { title: "Creep & Go", Icon: Care, href: "/Our-Project/creep&go" },
  { title: "Exibition", Icon: Care, href: "/Our-Project/exibition" },
  { title: "Mania", Icon: Care, href: "/Our-Project/mania" },
  { title: "Maria Fashion", Icon: Care, href: "/Our-Project/maria-fashion" },
  { title: "Senso Shop", Icon: Care, href: "/Our-Project/senso-shop" },
  { title: "Toyo Station", Icon: Care, href: "/Our-Project/toyo-station" },

];

const RESIDENTIAL_PROJECTS = [
  { title: "Hashim Villa", Icon: Villa, href: "/Our-Project/Hashim-Villa" },
  { title: "Sufoh Villa", Icon: Villaa, href: "/Our-Project/Sufoh-Villa" },
  { title: "Peach Passion", Icon: Peach, href: "/Our-Project/Peach-Passion" },
  { title: "Wafi Mall", Icon: Mall, href: "/Our-Project/Wafi-Mall" },
  { title: "Gym", Icon: Mall, href: "/Our-Project/gym" },
  { title: "Barsha Mall", Icon: Mall, href: "/Our-Project/barsha-mall" },
  { title: "Bungalaw Mall", Icon: Mall, href: "/Our-Project/bungalaw-mall" },
  { title: "Courtyard Mall", Icon: Mall, href: "/Our-Project/courtyard-mall" },
  { title: "Deeny", Icon: Mall, href: "/Our-Project/deeny" },
  { title: "Jumeriah Road", Icon: Care, href: "/Our-Project/jumeriah-road" },
  { title: "Maliha Road ", Icon: Care, href: "/Our-Project/maliha-road " },
  { title: "Senso City", Icon: Care, href: "/Our-Project/senso-city" },
  { title: "Senso-Outlet", Icon: Care, href: "/Our-Project/senso-outlet" },

];

export default function Navbar({
  firstSectionId = "hero",
  includeSpacer = true,
  videoSrc = "",
}) {
  const [open, setOpen] = useState(false); // mobile drawer
  const [openMenu, setOpenMenu] = useState("none"); // "none" | "services" | "support"
  const [mServices, setMServices] = useState(false); // mobile services accordion
  const [mSupport, setMSupport] = useState(false); // mobile support accordion
  const [showBg, setShowBg] = useState(false);

  // which category is hovered inside the Support dropdown
  const [hoveredSupportKey, setHoveredSupportKey] = useState(null); // "commercial" | "residential" | null

  const navRef = useRef(null);
  const thresholdRef = useRef(80);
  const closeTimerRef = useRef(null);
  const pathname = usePathname();

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
      setMSupport(false);
      setHoveredSupportKey(null);
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

  /* ===== Desktop hover delay for popovers ===== */
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
      setHoveredSupportKey(null);
    }, 160);
  };

  const LOGO_SRC = "/images/2.png";

  /** Reusable dropdown panel (Services) */
  const Dropdown = ({ id, open, items }) => (
    <div
      id={id}
      role="menu"
      aria-label={id}
      className={`${
        open
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      } absolute left-1/2 top-full -translate-x-1/2 mt-4 z-[60] w-[720px]
         rounded-2xl bg-gray-800 text-white shadow-2xl transition duration-150 origin-top`}
      onMouseEnter={clearCloseTimer}
      onMouseLeave={scheduleClose}
    >
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-x-10 gap-y-3">
          {items.map(({ title, Icon, href }, i) => (
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
  );

  /** Specialized dropdown for Our Projects
   *  - First row: 2 columns => Commercials, Residentials
   *  - Directly UNDER that row: show 4 projects (2 columns) for the hovered category
   */
  const SupportDropdown = ({ id, open }) => {
    const active =
      hoveredSupportKey === "commercial"
        ? COMMERCIAL_PROJECTS
        : hoveredSupportKey === "residential"
        ? RESIDENTIAL_PROJECTS
        : null;

    return (
      <div
        id={id}
        role="menu"
        aria-label={id}
        className={`${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        } absolute left-1/2 top-full -translate-x-1/2 mt-4 z-[60] w-[720px]
           rounded-2xl bg-gray-800 text-white shadow-2xl transition duration-150 origin-top`}
        onMouseEnter={clearCloseTimer}
        onMouseLeave={scheduleClose}
      >
        <div className="p-4 sm:p-5">
          {/* Row of two category tabs */}
          <div className="grid grid-cols-2 gap-3">
            {SUPPORT_CATEGORIES.map(({ key, title, Icon }, i) => (
              <button
                key={i}
                type="button"
                onMouseEnter={() => setHoveredSupportKey(key)}
                className={`group flex items-center gap-3 rounded-xl p-3 text-left
                            ${hoveredSupportKey === key ? "bg-white/10" : "hover:bg-white/10"}`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-sm font-semibold leading-snug">{title}</span>
              </button>
            ))}
          </div>

          {/* Projects panel appears directly UNDER the categories */}
       {/* Projects panel appears directly UNDER the categories */}
{active ? (
  <div className="mt-4 border-t border-white/10 pt-4">
    {/* ✅ Scrollable container for desktop */}
    <div className="hidden lg:block max-h-[220px] overflow-y-auto pr-1">
      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
        {active.map(({ title, Icon, href }, idx) => (
          <Link
            key={idx}
            href={href}
            role="menuitem"
            className="group flex items-center gap-3 rounded-xl p-2.5 hover:bg-red-600"
            onClick={() => {
              setOpenMenu("none");
              setHoveredSupportKey(null);
            }}
          >
            <Icon className="h-6 w-6" />
            <span className="text-sm font-medium leading-snug">{title}</span>
          </Link>
        ))}
      </div>
    </div>

    {/* Mobile: normal list, no scroll limit */}
    <div className="lg:hidden grid grid-cols-2 gap-x-8 gap-y-3">
      {active.map(({ title, Icon, href }, idx) => (
        <Link
          key={idx}
          href={href}
          role="menuitem"
          className="group flex items-center gap-3 rounded-xl p-2.5 hover:bg-red-600"
          onClick={() => {
            setOpenMenu("none");
            setHoveredSupportKey(null);
          }}
        >
          <Icon className="h-6 w-6" />
          <span className="text-sm font-medium leading-snug">{title}</span>
        </Link>
      ))}
    </div>
  </div>
) : null}

        </div>
      </div>
    );
  };

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

            {/* Desktop: Services */}
            <li
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
              <Dropdown
                id="services-menu"
                open={openMenu === "services"}
                items={SERVICES}
              />
            </li>

            {/* Desktop: Our Projects (two categories + projects directly underneath) */}
            <li
              className="relative"
              onMouseEnter={() => {
                clearCloseTimer();
                setOpenMenu("support");
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={openMenu === "support"}
                aria-controls="support-menu"
                onClick={() =>
                  setOpenMenu(openMenu === "support" ? "none" : "support")
                }
                className="inline-flex items-center gap-1 text-sm xl:text-base font-medium tracking-wide transition hover:text-white/80"
              >
                Our Projects
                <svg
                  aria-hidden="true"
                  className={`h-3.5 w-3.5 opacity-90 transition-transform ${
                    openMenu === "support" ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                </svg>
              </button>

              <SupportDropdown id="support-menu" open={openMenu === "support"} />
            </li>

            <li>
              <Link
                href="/About"
                className="inline-flex items-center gap-1 text-sm xl:text-base font-medium tracking-wide transition hover:text-white/80"
              >
                About Us
              </Link>
            </li>

            {/* Contact Us simple button */}
            <li>
              <Link
                href="/Contact"
                className="px-4 py-2 bg-red-600 rounded-md text-white font-medium"
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
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
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
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            <div className="relative h-8 w-8">
              <Image
                src={LOGO_SRC}
                alt="Site logo"
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
            <span className="sr-only">Home</span>
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/80 hover:text-white"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
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

            {/* Services (MOBILE) */}
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
                  className={`h-4 w-4 transition-transform ${
                    mServices ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                </svg>
              </button>

              <div
                id="m-services"
                className={`overflow-hidden transition-all duration-200 ${
                  mServices ? "max-h-[1000px] mt-3" : "max-h-0"
                }`}
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

      {/* Our Projects (MOBILE) */}
<li>
  <button
    type="button"
    onClick={() => setMSupport((v) => !v)}
    className="w-full flex items-center justify-between text-base font-medium hover:text-white/80"
    aria-expanded={mSupport}
    aria-controls="m-support"
  >
    <span>Our Projects</span>
    <svg
      aria-hidden="true"
      className={`h-4 w-4 transition-transform ${
        mSupport ? "rotate-180" : ""
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
    </svg>
  </button>

  <div
    id="m-support"
    className={`overflow-hidden transition-all duration-200 ${
      mSupport ? "max-h-[1000px] mt-3" : "max-h-0"
    }`}
  >
    {/* Commercials */}
    <div className="mb-2">
      <button
        type="button"
        onClick={() =>
          setHoveredSupportKey(
            hoveredSupportKey === "commercial" ? null : "commercial"
          )
        }
        className="w-full flex items-center justify-between text-sm font-medium p-2 rounded-lg hover:bg-red-600"
      >
        <span>Commercials</span>
        <svg
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition-transform ${
            hoveredSupportKey === "commercial" ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          hoveredSupportKey === "commercial" ? "max-h-[1000px] mt-2" : "max-h-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-2">
          {COMMERCIAL_PROJECTS.map(({ title, Icon, href }, i) => (
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
    </div>

    {/* Residentials */}
    <div>
      <button
        type="button"
        onClick={() =>
          setHoveredSupportKey(
            hoveredSupportKey === "residential" ? null : "residential"
          )
        }
        className="w-full flex items-center justify-between text-sm font-medium p-2 rounded-lg hover:bg-red-600"
      >
        <span>Residentials</span>
        <svg
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition-transform ${
            hoveredSupportKey === "residential" ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          hoveredSupportKey === "residential" ? "max-h-[1000px] mt-2" : "max-h-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-2">
          {RESIDENTIAL_PROJECTS.map(({ title, Icon, href }, i) => (
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

            {/* Contact */}
            <li>
              <Link
                href="/Contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between text-base font-medium hover:text-white/80"
              >
                {/* <span>Contact Us</span> */}
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
          <div className="mt-8">
            <Link
              href="/Contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-md bg-red-600 py-3 text-white font-semibold shadow hover:opacity-95 active:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
