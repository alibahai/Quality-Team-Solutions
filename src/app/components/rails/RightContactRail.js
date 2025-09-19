
import { Icon } from "@iconify/react";


export default function RightContactRail({
  phone = "+971 56 806 8070",
  whatsappHref = "https://wa.me/971568068070",
}) {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block z-30 mt-12">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${phone}`}
        className="flex h-48 w-12 items-center justify-center bg-red-600 text-white shadow-md [writing-mode:vertical-rl] rotate-180"
        style={{
          writingMode: "vertical-rl",
          borderRadius: 2, // small round edges on all four sides
        }}
      >
        {/* number first */}
        <span className="text-sm font-semibold tracking-wider mb-2">
          {phone}
        </span>

        {/* icon below */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 self-center rotate-180"
          aria-hidden="true"
        >
<Icon icon="ic:round-whatsapp" width="24" height="24" />        </svg>
      </a>
    </div>
  );
}
