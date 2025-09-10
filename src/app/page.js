import HeroVideo from "./components/sections/HeroVideo";
import ServicesRail from "./components/services1/ServicesRail";
import BackgroundWithRightImage from "./components/services2/BackgroundWithRightImage";
import IntersectionObserver from "./components/service3/IntersectionObserver";
import DesignExperts from "./components/service4/DesignExperts";
import Page1 from "./components/service5/page1";   // ← add this
import Video from "./components/service6/Video";
import ScrollingShowcase from "./components/services7/ScrollingShowcase";
import ContactUsForm from "./Contact/page";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroVideo />

      <section className="py-24">
        <ServicesRail />
      </section>

      <BackgroundWithRightImage
        backgroundSrc="/images/background1.jpg"
        foregroundSrc="/images/new.jpg"
      />

      <IntersectionObserver />

      <DesignExperts />

      <section className="py-24">
        <Page1 />   {/* ← render it */}
      </section>

<Video
        src="/videos/1.mp4"           // place file at public/videos/your-video.mp4
        autoPlay={true}
        loop={true}
        muted={true}                            // keep true for autoplay on mobile
        controls={true}
      />

<ScrollingShowcase />



    </main>
  );
}
