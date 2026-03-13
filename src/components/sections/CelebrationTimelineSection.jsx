import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaRegHeart } from "react-icons/fa";

const MotionDiv = motion.div;

export default function CelebrationTimelineSection({ items = [] }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 78%", "end 35%"],
  });

  const fillScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f3f0f4] px-6 pb-20 pt-20 md:pb-28 md:pt-28"
    >
      {/* ondas decorativas superiores */}
      <div className="pointer-events-none absolute inset-x-0 top-[-36px] h-[150px] opacity-80 md:top-[-42px] md:h-[200px]">
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
            opacity="0.62"
          />
          <path
            d="M0,132 C216,90 456,52 742,76 C1010,98 1224,74 1440,22"
            fill="none"
            stroke="#d8e3df"
            strokeWidth="2"
            opacity="0.85"
          />
          <path
            d="M0,198 C252,252 506,238 740,166 C996,86 1228,102 1440,194"
            fill="none"
            stroke="#b79d6f"
            strokeWidth="2"
            opacity="0.54"
          />
        </svg>
      </div>

      {/* manchas decorativas suaves */}
      <div className="pointer-events-none absolute left-[-30px] top-[220px] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(183,157,111,.14),transparent_72%)] blur-2xl md:left-[2%]" />
      <div className="pointer-events-none absolute right-[-20px] top-[520px] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(183,157,111,.10),transparent_72%)] blur-2xl md:right-[4%]" />
      <div className="pointer-events-none absolute left-[8%] bottom-[80px] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(183,157,111,.08),transparent_72%)] blur-2xl" />

      <div className="relative z-[2] mx-auto max-w-6xl">
        {/* encabezado */}
        <div className="relative mb-14 text-center md:mb-20">
          <div className="pointer-events-none absolute left-1/2 top-[-14px] h-[120px] w-[280px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(243,240,244,.96),rgba(243,240,244,.75)_58%,transparent_80%)] blur-xl md:h-[150px] md:w-[420px]" />

          <div className="relative z-[2]">
            <div className="mb-3 flex items-center justify-center">
              <div className="h-px w-10 bg-[rgba(183,157,111,.28)] md:w-16" />
              <p className="title-elegant px-4 text-[12px] uppercase tracking-[0.28em] text-[#b79d6f]">
                Detalles
              </p>
              <div className="h-px w-10 bg-[rgba(183,157,111,.28)] md:w-16" />
            </div>

            <h2 className="title-elegant mt-4 text-[30px] leading-tight text-[#2f241c] md:text-[48px]">
              Te compartimos los detalles
              <br />
              de la celebración
            </h2>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* línea base */}
          <div className="absolute left-[21px] top-0 h-full w-[3px] bg-[rgba(176,140,150,.14)] md:left-[54.5px]" />

          {/* línea animada */}
          <MotionDiv
            className="absolute left-[21px] top-0 w-[3px] origin-top bg-[#b08c96] md:left-[54.5px]"
            style={{
              height: "100%",
              scaleY: fillScaleY,
            }}
          />

          <div className="space-y-16 md:space-y-24">
            {items.map((item, index) => (
              <TimelineItem
                key={item.key || index}
                item={item}
                index={index}
                progress={scrollYProgress}
                total={items.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index, progress, total }) {
  const start = index / total;
  const end = (index + 0.45) / total;

  const activeScale = useTransform(progress, [start, end], [0.92, 1]);
  const activeOpacity = useTransform(progress, [start, end], [0.45, 1]);
  const contentY = useTransform(progress, [start, end], [22, 0]);
  const contentOpacity = useTransform(progress, [start, end], [0.35, 1]);

  return (
    <div className="relative grid grid-cols-[44px_1fr] items-start gap-6 md:grid-cols-[112px_1fr] md:gap-14">
      {/* nodo */}
      <div className="relative flex justify-center">
        <MotionDiv
          className="relative z-[2] flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[rgba(176,140,150,.24)] bg-[#b08c96] text-white shadow-[0_8px_20px_rgba(122,91,101,.18)] md:h-[56px] md:w-[56px]"
          style={{
            scale: activeScale,
            opacity: activeOpacity,
          }}
        >
          <FaRegHeart className="h-4 w-4 md:h-5 md:w-5" />
        </MotionDiv>
      </div>

      {/* contenido */}
      <MotionDiv
        className="pt-0.5 md:pt-0"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <p className="title-elegant text-[18px] tracking-[0.06em] text-[#2d231b] md:text-[28px]">
          {item.time}
        </p>

        <h3 className="title-script mt-1 text-[34px] leading-[0.96] text-[#2b2119] md:text-[62px]">
          {item.title}
        </h3>

        <div className="mt-5 flex justify-start">
          <div className="relative left-[8px] md:left-[18px] flex h-[138px] w-[138px] items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(201,184,130,.30),rgba(201,184,130,.10)_56%,transparent_74%)] md:h-[185px] md:w-[185px]">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.25),transparent_60%)]" />

            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="relative z-[2] h-[112px] w-[112px] object-contain md:h-[148px] md:w-[148px]"
              />
            ) : null}
          </div>
        </div>

        {item.description ? (
          <p className="title-elegant mt-4 max-w-[560px] text-[18px] italic leading-relaxed text-[#8d7761] md:text-[22px]">
            {item.description}
          </p>
        ) : null}
      </MotionDiv>
    </div>
  );
}