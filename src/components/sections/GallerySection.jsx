import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MotionDiv = motion.div;

// Carga automática de imágenes desde la carpeta galeria
const galleryModules = import.meta.glob("../../assets/img/galeria/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
});

function getGalleryImages() {
  return Object.entries(galleryModules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);
}

export default function GallerySection() {
  const images = useMemo(() => getGalleryImages(), []);
  const [current, setCurrent] = useState(0);

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images.length) {
    return (
      <section className="relative overflow-hidden bg-[#eef2ef] px-6 pb-20 pt-20 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-3 flex items-center justify-center">
            <div className="h-px w-10 bg-[rgba(183,157,111,.32)] md:w-16" />
            <p className="title-elegant px-4 text-[12px] uppercase tracking-[0.28em] text-[#b79d6f]">
              Galería
            </p>
            <div className="h-px w-10 bg-[rgba(183,157,111,.32)] md:w-16" />
          </div>

          <h2 className="title-elegant text-[30px] leading-tight text-[#2f241c] md:text-[48px]">
            Retratos de Nuestro Amor
          </h2>

          <p className="title-elegant mt-4 text-[18px] italic text-[#8d7761] md:text-[24px]">
            No se encontraron imágenes en la carpeta de galería.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#eef2ef] px-6 pb-20 pt-20 md:pb-28 md:pt-24">
      {/* ondas decorativas */}
      <div className="pointer-events-none absolute inset-x-0 top-[-30px] h-[150px] opacity-85 md:top-[-40px] md:h-[220px]">
        <svg
          viewBox="0 0 1440 260"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,72 C246,24 486,112 726,106 C962,100 1204,38 1440,82"
            fill="none"
            stroke="#b79d6f"
            strokeWidth="2"
            opacity="0.68"
          />
          <path
            d="M0,132 C216,90 456,52 742,76 C1010,98 1224,74 1440,22"
            fill="none"
            stroke="#c9d6d1"
            strokeWidth="2"
            opacity="0.9"
          />
          <path
            d="M0,198 C252,252 506,238 740,166 C996,86 1228,102 1440,194"
            fill="none"
            stroke="#b79d6f"
            strokeWidth="2"
            opacity="0.55"
          />
        </svg>
      </div>

      {/* textura de fondo */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(183,157,111,.10), transparent 22%), radial-gradient(circle at 80% 25%, rgba(183,157,111,.08), transparent 22%), radial-gradient(circle at 70% 80%, rgba(183,157,111,.08), transparent 18%)",
          }}
        />
      </div>

      <div className="relative z-[2] mx-auto max-w-7xl">
        {/* encabezado */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-3 flex items-center justify-center">
            <div className="h-px w-10 bg-[rgba(183,157,111,.32)] md:w-16" />
            <p className="title-elegant px-4 text-[12px] uppercase tracking-[0.28em] text-[#b79d6f]">
              Galería
            </p>
            <div className="h-px w-10 bg-[rgba(183,157,111,.32)] md:w-16" />
          </div>

          <h2 className="title-elegant text-[30px] leading-tight text-[#2f241c] md:text-[48px]">
            Retratos de Nuestro Amor
          </h2>

          <p className="title-elegant mt-4 text-[17px] italic leading-relaxed text-[#b79d6f] md:text-[24px]">
            Un minuto, un segundo, un instante que queda en la eternidad
          </p>
        </div>

        {/* carrusel principal */}
        <div className="relative">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.05fr_1fr]">
            {[current - 1, current, current + 1].map((idx, slot) => {
              const realIndex = (idx + images.length) % images.length;
              const isCenter = slot === 1;

              return (
                <MotionDiv
                  key={`${realIndex}-${slot}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.88,
                    y: 0,
                    scale: isCenter ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className={`relative overflow-hidden border border-[rgba(183,157,111,.14)] bg-[rgba(255,255,255,.82)] p-3 shadow-[0_18px_42px_rgba(61,40,16,.08)] ${
                    isCenter
                      ? "md:translate-y-0"
                      : "hidden md:block md:translate-y-8"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f8f6f2]">
                    <img
                      src={images[realIndex]}
                      alt={`Galería ${realIndex + 1}`}
                      className="h-full w-full object-cover transition duration-700"
                    />
                  </div>
                </MotionDiv>
              );
            })}
          </div>

          {/* botones */}
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-[-4px] top-1/2 z-[3] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(183,157,111,.28)] bg-[rgba(255,250,244,.94)] text-[#7c6950] shadow-[0_8px_18px_rgba(61,40,16,.06)] transition hover:scale-105 md:left-[-18px] md:h-12 md:w-12"
            aria-label="Foto anterior"
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-[-4px] top-1/2 z-[3] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(183,157,111,.28)] bg-[rgba(255,250,244,.94)] text-[#7c6950] shadow-[0_8px_18px_rgba(61,40,16,.06)] transition hover:scale-105 md:right-[-18px] md:h-12 md:w-12"
            aria-label="Foto siguiente"
          >
            <FaChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* indicadores */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-[#b79d6f]"
                  : "w-2.5 bg-[rgba(183,157,111,.28)]"
              }`}
              aria-label={`Ir a la foto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}