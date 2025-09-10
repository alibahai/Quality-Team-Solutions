"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 800);
  }

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
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left column */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let’s{" "}
              <span className="text-orange-600">Collaborate On Your Next Project</span>
            </h2>
            <p className="text-gray-600 mb-8">
              At QTS, we turn conversations into timeless designs.<br/> Get in touch
              and let’s craft a space that defines<br/> elegance and comfort.
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-orange-600 text-xl">📞</span>
                +971 56 806 8070
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-orange-600 text-xl">✉️</span>
                info@qts-fitout.com
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-orange-600 text-xl">📍</span>
                Office 705, Business Bay Tower, Business Bay, Dubai, UAE
              </li>
            </ul>

            {/* Map */}
            <div className="w-full h-96 rounded-lg overflow-hidden border"> {/* ✅ taller map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115837.33475961476!2d55.17128!3d25.093077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4343e69c8b11%3A0x92f0bbfc7d82e9a4!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right column (Form) */}
          <div>
            <form
              onSubmit={onSubmit}
              className="w-full p-6 bg-gray-200/80 rounded-lg shadow-lg"
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="mt-2 mb-4 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500/50"
              />

              <label htmlFor="phone" className="block text-sm font-medium text-gray-100">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                className="mt-2 mb-4 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500/50"
              />

              <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="mt-2 mb-4 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500/50"
              />

              <label htmlFor="subject" className="block text-sm font-medium text-gray-100">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="I Want To"
                className="mt-2 mb-4 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500/50"
              />

              <label htmlFor="message" className="block text-sm font-medium text-gray-100">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your Message"
                className="mt-2 mb-6 w-full resize-y rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500/50"
              />

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-red-600 px-4 py-3 text-white font-semibold tracking-wide disabled:opacity-70"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
