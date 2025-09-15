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
          <path d="M20 12.05A8 8 0 1 1 8.05 4a8 8 0 0 1 11.9 8.05Zm-7.94 6.16a6.52 6.52 0 1 0-5.51-2.1l-.35 2.1 2.14-.33a6.5 6.5 0 0 0 3.72.33ZM9.3 8.87c.1-.2.2-.2.3-.2h.27c.09 0 .2 0 .3.23.1.22.35.77.38.83.03.05.05.11.01.17-.04.06-.06.12-.12.2-.06.08-.13.18-.19.24-.06.07-.13.15-.06.29.07.15.33.54.71.88.49.44.9.58 1.05.64.16.06.25.05.35-.07.11-.13.4-.47.5-.64.1-.16.2-.13.33-.08.14.05.87.4 1.02.47.15.08.25.12.29.19.04.07.04.4-.09.78-.13.39-.76.73-1.06.75-.27.02-.61.03-1.01-.07-.41-.1-1.03-.33-1.6-.74-.57-.4-1.03-.92-1.2-1.08-.17-.16-.41-.52-.55-.75-.14-.23-.36-.72-.41-.9-.05-.19-.05-.35-.03-.39Z" />
        </svg>
      </a>
    </div>
  );
}
