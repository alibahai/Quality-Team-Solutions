"use client";


export default function Video({
  src = "/videos/4.mp4",
  poster = "/images/2ndImage.jpg",
  autoPlay = true,
  loop = true,
  muted = true,          // keep true so autoplay works on mobile
  playsInline = true,
  controls = false,      // background video usually has no controls
}) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        preload="metadata"
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        controls={controls}
        aria-hidden={true}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/40" />


      {/* Bottom gradient feather (optional) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}
