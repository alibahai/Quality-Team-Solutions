"use client";

import { useState } from "react"; // (not used now, but keep if you plan more)

const IconBook = (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z" stroke="currentColor" strokeWidth="1.5"/><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3V19" stroke="currentColor" strokeWidth="1.5"/></svg>);
const IconPencil = (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25Z" stroke="currentColor" strokeWidth="1.5"/><path d="M14.06 4.19 17.81 7.94" stroke="currentColor" strokeWidth="1.5"/></svg>);
const IconCompass = (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.5"/><path d="m15.5 8.5-2.12 4.88L8.5 15.5l2.12-4.88L15.5 8.5Z" fill="currentColor"/></svg>);
const IconGauge = (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M4.93 19.07A10 10 0 1 1 19.07 4.93" stroke="currentColor" strokeWidth="1.5"/><path d="M14 10l5 5" stroke="currentColor" strokeWidth="1.5"/></svg>);
const IconBarcode = (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M4 6v12M8 6v12M12 6v12M16 6v12M20 6v12" stroke="currentColor" strokeWidth="1.5"/></svg>);
const IconBuilding = (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M4 20h16M6 20V8h12v12M10 12h4" stroke="currentColor" strokeWidth="1.5"/></svg>);

const ITEMS = [
  { title: "Designing and Space Planning", Icon: IconBook },
  { title: "Joinery Works", Icon: IconPencil },
  { title: "Drawing and Approvals", Icon: IconCompass },
  { title: "MEP Works", Icon: IconGauge },
  { title: "Turnkey Fit Outs", Icon: IconBarcode },
  { title: "Demolishing, Construction and Refurbishment", Icon: IconBuilding },
];

export default function LeftServicesRail() {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex md:flex flex-col gap-3 z-30">
      {ITEMS.map(({ title, Icon }) => (
        <div key={title} className="group relative">
          {/* Red strip that expands on hover/focus */}
          <div
            className="flex h-10 w-12 overflow-hidden bg-red-600 text-white shadow-md rounded-r-md
                       transition-all duration-300 ease-out
                       group-hover:w-[320px] focus-within:w-[320px]"
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} /* flush left edge */
          >
            {/* Icon button — perfectly centered; provides focus for keyboard users */}
           <button
                type="button"
                aria-label={title}
                className="
                    flex h-10 w-12 items-center 
                    justify-end pl-[12px]              /* 👉 push icon slightly right when not hovered */
                    transition-all duration-200 
                    group-hover:justify-center        /* center on hover */
                    group-focus-within:justify-center /* center on keyboard focus */
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                "
                >
                <Icon className="h-5 w-5 text-white" />
                </button>


            {/* Detail label — appears on hover/focus, centered vertically */}
            <span
              className="inline-flex h-10 items-center px-3 text-sm font-medium tracking-wide leading-none
                         opacity-0 transition-opacity duration-200
                         group-hover:opacity-100 focus-within:opacity-100"
            >
              {title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
