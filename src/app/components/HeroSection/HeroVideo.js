import LeftServicesRail from "../rails/LeftServicesRail";
import RightContactRail from "../rails/RightContactRail";

export default function HeroVideo() {
  const VIDEO_SRC = "https://res.cloudinary.com/dwwibqeao/video/upload/v1758281716/QTS_1_jvullu.mp4";
  const POSTER_SRC = "/images/2ndImage.jpg";

  return (
    // 👇 Add the id so Navbar can detect when it's over the hero
    <section id="hero" className="relative min-h-screen w-full overflow-hidden -mt-20">
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        autoPlay
        muted
        playsInline
        loop
        aria-hidden="true"
      />

      {/* dark tint over the video (still shows through transparent navbar) */}
      <div className="absolute inset-0 " />

      {/* Navbar sits on top */}
      <div className="relative z-20">
        {/* If you used a different id, pass it: <Navbar firstSectionId="homeHero" /> */}
      </div>

      {/* Rails (flush edges) */}
      <LeftServicesRail />
      <RightContactRail phone="+971 56 806 8070" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}
