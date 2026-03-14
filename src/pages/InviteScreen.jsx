import HeroSection from "../components/sections/HeroSection";
import CountdownSection from "../components/sections/CountdownSection";
import ItinerarySection from "../components/sections/ItinerarySection";
import CelebrationTimelineSection from "../components/sections/CelebrationTimelineSection";
import GallerySection from "../components/sections/GallerySection";
import RsvpSection from "../components/sections/RsvpSection";
import SpecialDetailsSection from "../components/sections/SpecialDetailsSection";
import ThankYouSection from "../components/sections/ThankYouSection";
import useCountdown from "../hooks/useCountdown";
import useWeddingConfig from "../hooks/useWeddingConfig";
import { getItineraryCards } from "../data/itinerary";
import { getCelebrationTimeline } from "../data/celebrationTimeline";
import portadaFoto from "../assets/img/foto1.png";

export default function InviteScreen({ guestName }) {
  const cfg = useWeddingConfig(guestName);
  const countdown = useCountdown(cfg.eventIso);
  const itineraryCards = getItineraryCards(cfg);
  const celebrationTimeline = getCelebrationTimeline();

  return (
    <main className="relative min-h-screen bg-[#f3eee6] text-[#3a2f24]">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[100svh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${portadaFoto})`,
            backgroundPosition: "center 60%",
          }}
        />
        <div className="absolute inset-0 bg-[rgba(18,10,7,.34)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,5,3,.18),rgba(8,5,3,.52))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,236,210,.08),transparent_48%)]" />
      </div>

      <div className="relative z-[2]">
        <HeroSection cfg={cfg} />
        <CountdownSection countdown={countdown} />
        <ItinerarySection itineraryCards={itineraryCards} />
        <CelebrationTimelineSection items={celebrationTimeline} />
        <RsvpSection />
        <SpecialDetailsSection />
        <ThankYouSection />
        <GallerySection />
      </div>
    </main>
  );
}