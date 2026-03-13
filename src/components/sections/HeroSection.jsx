import { motion } from "framer-motion";
import TopLeftPlantDecoration from "../decorations/TopLeftPlantDecoration";
import BottomRightPlantDecoration from "../decorations/BottomRightPlantDecoration";

const MotionDiv = motion.div;
const MotionA = motion.a;
const MotionSvg = motion.svg;
const MotionPath = motion.path;

const HEART_TO_V_PATH_1 =
  "M50 26 C39 14,22 20,24 38 C26 54,41 60,50 74 C59 60,74 54,76 38 C78 20,61 14,50 26 Z";

const HEART_TO_V_PATH_2 =
  "M28 34 C34 34,41 40,50 68 C59 40,66 34,72 34 C66 45,59 57,50 78 C41 57,34 45,28 34 Z";

export default function HeroSection({ cfg }) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* SOLO reducimos la decoración izquierda en móviles pequeños */}
      <div className="max-[430px]:scale-[0.82] max-[430px]:origin-top-left max-[390px]:scale-[0.70]">
        <TopLeftPlantDecoration />
      </div>

      {/* La derecha queda intacta */}
      <BottomRightPlantDecoration />

      <MotionDiv
        className="pointer-events-none absolute left-[8%] top-[18%] hidden h-3 w-3 rounded-full bg-[rgba(255,230,196,.55)] blur-[1px] md:block"
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.22, 1], y: [0, -8, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <MotionDiv
        className="pointer-events-none absolute right-[12%] top-[24%] hidden h-2.5 w-2.5 rounded-full bg-[rgba(255,230,196,.45)] blur-[1px] md:block"
        animate={{ opacity: [0.25, 0.85, 0.25], scale: [1, 1.18, 1], y: [0, -10, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-center justify-center px-6 py-10">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex w-full max-w-[920px] flex-col items-center pt-8 text-center text-[#fff6eb] max-[430px]:pt-14 max-[390px]:pt-20"
        >
          <div className="mb-5 flex items-center justify-center md:mb-7">
            <div className="h-px w-10 bg-[rgba(255,233,200,.45)] md:w-20" />
            <p className="title-elegant px-4 text-[11px] uppercase tracking-[0.30em] text-[rgba(255,236,210,.92)] md:text-sm">
              {cfg.dateText}
            </p>
            <div className="h-px w-10 bg-[rgba(255,233,200,.45)] md:w-20" />
          </div>

          <div className="flex flex-col items-center justify-center leading-none text-[#fff4e6] sm:flex-row sm:gap-2">
            <h1 className="title-script text-[52px] leading-none text-[#fff4e6] max-[390px]:text-[44px] md:text-[108px]">
              Christian
            </h1>

            <span className="title-script my-1 text-[28px] leading-none text-[#f0d09e] max-[390px]:text-[24px] sm:my-0 md:text-[42px]">
              &
            </span>

            <h1 className="title-script text-[52px] leading-none text-[#fff4e6] max-[390px]:text-[44px] md:text-[108px]">
              Diana
            </h1>
          </div>

          <div className="mt-5 flex items-center justify-center gap-4 md:mt-7">
            <div className="h-px w-14 bg-[rgba(255,233,200,.45)] md:w-24" />
            <div className="h-2 w-2 rounded-full bg-[rgba(255,233,200,.78)]" />
            <div className="h-px w-14 bg-[rgba(255,233,200,.45)] md:w-24" />
          </div>

          <p className="title-elegant mt-6 max-w-[760px] px-2 text-[18px] italic leading-relaxed text-[rgba(255,241,222,.95)] max-[390px]:text-[16px] md:mt-8 md:text-[30px]">
            “Fuimos dos historias, hasta que el amor nos convirtió en una sola.”
          </p>

          <p className="title-elegant mt-3 px-2 text-sm tracking-[0.08em] text-[rgba(255,230,196,.82)] max-[390px]:text-[12px] md:text-base">
            Una promesa, un destino y un mismo corazón
          </p>

          <div className="mt-8 flex flex-col items-center justify-center md:mt-10">
            <p className="title-elegant mb-3 text-[10px] uppercase tracking-[0.28em] text-[rgba(255,234,206,.72)] md:text-xs">
              Descubrir más
            </p>

            <MotionA
              href="#detalles"
              aria-label="Bajar a detalles"
              className="group relative inline-flex h-[78px] w-[78px] items-center justify-center text-[#fff1dc] md:h-[88px] md:w-[88px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <MotionDiv
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255,255,255,.12), rgba(255,255,255,0) 62%)",
                  filter: "blur(8px)",
                }}
                animate={{ opacity: [0.2, 0.45, 0.2], scale: [0.94, 1.04, 0.94] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />

              <MotionSvg
                viewBox="0 0 100 100"
                className="relative h-[58px] w-[58px] overflow-visible md:h-[66px] md:w-[66px]"
              >
                <MotionPath
                  d={HEART_TO_V_PATH_1}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{
                    d: [HEART_TO_V_PATH_1, HEART_TO_V_PATH_2, HEART_TO_V_PATH_1],
                    opacity: [0.95, 1, 0.95],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 2.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                  }}
                  style={{ transformOrigin: "50px 50px" }}
                />
              </MotionSvg>
            </MotionA>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}