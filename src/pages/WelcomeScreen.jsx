import { useEffect, useState } from "react";
import portadaFoto from "../assets/img/foto1.png";
import WelcomeCard from "../components/sections/WelcomeCard";

export default function WelcomeScreen({ onEnter }) {
  const [backgroundPosition, setBackgroundPosition] = useState("center 60%");

  useEffect(() => {
    const updatePosition = () => {
      if (window.innerWidth < 768) {
        setBackgroundPosition("center 42%");
      } else {
        setBackgroundPosition("center 60%");
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${portadaFoto})`,
          backgroundPosition,
        }}
      />
      <div className="absolute inset-0 bg-[rgba(13,10,8,.48)]" />

      <div className="relative mx-auto flex min-h-screen max-w-2xl items-center justify-center px-6">
        <WelcomeCard onEnter={onEnter} />
      </div>
    </section>
  );
}