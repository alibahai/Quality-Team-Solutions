"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Footer({ year }) {
  const BG_URL = "/images/footer.jpg";

  // Read dynamic values from env
  const PHONE_E164 = process.env.NEXT_PUBLIC_PHONE_E164 || "+971568068070";
  const PHONE_DISPLAY =
    process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+971 56 806 8070";
  const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "info@qts-fitout.com";

  return (
    <div className="relative w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${BG_URL})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <footer className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 lg:py-6 text-white">
          {/* Mobile layout */}
          <div className="block md:hidden text-center">
            <div className="w-28 mx-auto">
              <Image
                src="/images/2.png"
                alt="QTS - Quality Team Solution"
                width={160}
                height={80}
                className="h-auto w-full"
                priority
              />
            </div>

            <p className="mt-6 text-sm leading-6 text-white/80">
              Quality Team Solution (QTS) is Dubai’s leading interior design and
              fit-out partner, known for turning ideas into exceptional spaces.
              We deliver innovative, functional, and timeless designs — serving
              clients across the UAE and beyond.
            </p>

            <p className="mt-6 text-sm text-white/80">
              Office 706, Business Bay Tower, Business Bay, Dubai, UAE
            </p>

            {/* Dynamic phone */}
            <a
              href={`tel:${PHONE_E164}`}
              className="mt-6 block text-sm text-white/80 hover:text-white"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              {PHONE_DISPLAY}
            </a>

            {/* Dynamic email */}
            <a
              href={`mailto:${EMAIL}`}
              className="mt-6 block text-sm text-white/80 hover:text-white"
              aria-label={`Email ${EMAIL}`}
            >
              {EMAIL}
            </a>

            {/* Social icons */}
            <div className="flex justify-center gap-8 mt-8">
              <a
                href="https://wa.me/971568068070"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="logos:whatsapp-icon" width="28" height="28" />
              </a>
              <a
                href="https://wa.me/971568068070"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="logos:youtube-icon" width="28" height="28" />
              </a>
              <a
                href="https://wa.me/971568068070"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="skill-icons:instagram" width="28" height="28" />
              </a>
              <a
                href="https://wa.me/971568068070"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="logos:facebook" width="28" height="28" />
              </a>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Column 1: Brand */}
            <div className="space-y-4">
              <div className="w-28">
                <Image
                  src="/images/2.png"
                  alt="QTS - Quality Team Solution"
                  width={160}
                  height={80}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <p className="text-sm leading-6 text-white/80">
                Quality Team Solution (QTS) is Dubai’s leading interior design
                and fit-out partner, known for turning ideas into exceptional
                spaces. We deliver innovative, functional, and timeless designs
                — serving clients across the UAE and beyond.
              </p>
              <p className="text-sm text-white/80 mt-4">
                Office 706, Business Bay Tower, Business Bay, Dubai, UAE
              </p>
            </div>

            {/* Column 2: Services */}
            <div className="ml-4">
              <h3 className="mb-6 text-xl font-bold ml-12">Services</h3>
              <ul className="space-y-4 text-sm ml-12 text-white/80">
                <li>
                  <Link
                    href="/Servicess/Drawings-Approvals"
                    className="hover:text-white"
                  >
                    Design Drawings &amp; Approvals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Servicess/Demolishing"
                    className="hover:text-white"
                  >
                    Demolition, Build &amp; Refurbish
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Servicess/Mep"
                    className="hover:text-white"
                  >
                    MEP Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Servicess/Joinery-work"
                    className="hover:text-white"
                  >
                    Joinery Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Servicess/Turnkey-Fit"
                    className="hover:text-white"
                  >
                    Turnkey Fit-Outs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Servicess/Design-Drawings"
                    className="hover:text-white"
                  >
                    Design and Space Planning
                  </Link>
                </li>
              </ul>

              {/* Dynamic phone */}
              <a
                href={`tel:${PHONE_E164}`}
                className="mt-12 block text-sm text-white/80 ml-12 hover:text-white"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3 className="mb-9 text-lg font-bold ml-12">Company</h3>
              <ul className="space-y-4 text-sm ml-12 text-white/80">
                <li>
                  <Link href="/About" className="hover:text-white">
                    About QTS
                  </Link>
                </li>
                <li>
                  <Link href="/Servicess" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/Contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>

              {/* Dynamic email */}
              <a
                href={`mailto:${EMAIL}`}
                className="mt-36 block text-sm text-white/80 ml-12 hover:text-white"
                aria-label={`Email ${EMAIL}`}
              >
                {EMAIL}
              </a>
            </div>

            {/* Column 4: Newsletter */}
            <div className="space-y-4 mr-10">
              <h2 className="text-xl font-bold mb-12">
                Stay informed with the Latest News and Insights from QTS
              </h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/60 outline-none focus:border-white"
                    readOnly
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-md bg-red-600 px-4 py-2 mt-3 text-sm font-semibold text-white hover:bg-red-700"
                  disabled
                >
                  GET IN TOUCH
                </button>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-10 pt-5 mt-10">
                <a
                  href="https://wa.me/971568068070"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="logos:whatsapp-icon" width="30" height="30" />
                </a>
                <a
                  href="https://wa.me/971568068070"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="logos:youtube-icon" width="30" height="30" />
                </a>
                <a
                  href="https://wa.me/971568068070"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="skill-icons:instagram" width="30" height="30" />
                </a>
                <a
                  href="https://wa.me/971568068070"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="logos:facebook" width="30" height="30" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hidden md:block border-t border-white/10">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex flex-col gap-3 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
            <p>© {year} Quality Team Solution (QTS)</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white mr-10">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
