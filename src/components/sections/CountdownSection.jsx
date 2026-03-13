import { motion, useScroll, useTransform } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { useRef } from "react";
import CountdownGoldDecoration from "../decorations/CountdownGoldDecoration";

const MotionDiv = motion.div;

export default function CountdownSection({ countdown }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const waveY = useTransform(scrollYProgress, [0, 0.35, 1], [80, 18, -20]);
  const cardY = useTransform(scrollYProgress, [0, 0.3, 1], [150, 35, 0]);
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 1], [0.86, 0.95, 1]);

  const items = [
    ["días", countdown.days],
    ["hs", countdown.hours],
    ["min", countdown.minutes],
    ["seg", countdown.seconds],
  ];

  return (
    <section
      id="detalles"
      ref={sectionRef}
      className="relative z-[5] bg-transparent"
    >
      <div className="relative min-h-[620px] md:min-h-[760px]">
        <div className="absolute inset-x-0 bottom-0 h-[79%] bg-[#f3efea] md:h-[73%]" />
        <div className="absolute inset-x-0 top-0 h-[290px] bg-transparent md:h-[360px]" />

        <MotionDiv
          className="absolute left-0 top-[110px] z-[1] h-[300px] w-full md:top-[120px] md:h-[360px]"
          style={{ y: waveY }}
        >
          <svg
            viewBox="0 0 1440 380"
            className="block h-full w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,70
                 C170,72 230,150 404,174
                 C618,204 752,146 930,124
                 C1122,100 1288,116 1440,162
                 L1440,380 L0,380 Z"
              fill="#d8e3df"
            />
            <path
              d="M0,128
                 C176,150 304,214 488,208
                 C686,202 802,248 956,230
                 C1128,210 1268,158 1440,172
                 L1440,380 L0,380 Z"
              fill="#c4d1cc"
              opacity="0.98"
            />
            <path
              d="M0,108
                 C168,82 278,118 434,222
                 C552,300 706,282 840,232
                 C1008,168 1170,110 1440,156"
              fill="none"
              stroke="#c2a56f"
              strokeWidth="2.2"
              opacity="0.9"
            />
          </svg>
        </MotionDiv>

        <CountdownGoldDecoration />

        <div className="relative z-[3] flex flex-col items-center px-6 pt-[245px] md:pt-[300px]">
          <MotionDiv
            style={{ y: cardY, scale: cardScale }}
            className="relative flex h-[240px] w-[240px] items-center justify-center md:h-[310px] md:w-[310px]"
          >
            <MotionDiv
              className="absolute inset-[-8px_-12px_-12px_-10px] border-2 border-[rgba(183,157,111,.52)]"
              style={{ borderRadius: "47% 53% 51% 49% / 52% 46% 54% 48%" }}
              animate={{
                rotate: [0, 5, 0],
                scaleX: [1, 1.02, 1],
                scaleY: [1, 0.985, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <MotionDiv
              className="absolute inset-[-16px_-6px_-18px_-16px] border-2 border-[rgba(183,157,111,.38)]"
              style={{ borderRadius: "54% 46% 48% 52% / 46% 57% 43% 54%" }}
              animate={{
                rotate: [0, -7, 0],
                scaleX: [1, 0.985, 1],
                scaleY: [1, 1.025, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <MotionDiv
              className="absolute inset-[-24px_-18px_-10px_-8px] border-2 border-[rgba(183,157,111,.24)]"
              style={{ borderRadius: "49% 51% 46% 54% / 58% 44% 56% 42%" }}
              animate={{
                rotate: [0, 8, 0],
                scaleX: [1, 1.03, 1],
                scaleY: [1, 0.97, 1],
              }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />

            <MotionDiv
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 28%, rgba(255,255,255,.98), rgba(245,241,234,.98) 74%)",
                border: "1px solid rgba(185,170,143,.28)",
                boxShadow: "0 18px 34px rgba(61,40,16,.16)",
              }}
              animate={{ scale: [1, 1.01, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-[2] flex w-full flex-col items-center gap-4 px-5 md:px-7">
              <h2 className="title-elegant text-[28px] font-semibold leading-none text-[#b79d6f] md:text-[42px]">
                Faltan
              </h2>

              <div className="-mt-2 h-px w-16 bg-[rgba(183,157,111,.32)] md:w-20" />

              <div className="grid w-full grid-cols-4 gap-0">
                {items.map(([label, value], idx) => (
                  <div
                    key={label}
                    className={`flex flex-col items-center justify-center px-1 ${
                      idx !== 0 ? "border-l border-[rgba(182,169,143,.22)]" : ""
                    }`}
                  >
                    <MotionDiv
                      key={`${label}-${value}`}
                      initial={{ opacity: 0.55, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="countdown-number text-[22px] leading-none text-[#5f5a53] md:text-[40px]">
                        {String(value).padStart(2, "0")}
                      </p>
                    </MotionDiv>

                    <p className="title-elegant mt-2 text-[10px] font-semibold lowercase tracking-[0.04em] text-[#b79d6f] md:text-[12px]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <MotionDiv
                animate={{ scale: [1, 0.92, 1.08, 1], y: [0, 1, -1, 0] }}
                transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaHeart className="h-7 w-7 text-[#b79d6f] md:h-8 md:w-8" />
              </MotionDiv>
            </div>
          </MotionDiv>

          <div className="mt-16 flex flex-col items-center text-center md:mt-20">
            <div className="mb-3 flex items-center justify-center">
              <div className="h-px w-10 bg-[rgba(183,157,111,.32)] md:w-16" />
              <p className="title-elegant px-4 text-[11px] uppercase tracking-[0.28em] text-[#b79d6f] md:text-xs">
                Nuestro gran día
              </p>
              <div className="h-px w-10 bg-[rgba(183,157,111,.32)] md:w-16" />
            </div>

            <p className="title-elegant max-w-[700px] text-[18px] italic leading-relaxed text-[#8d7761] md:text-[26px]">
              Cada instante nos acerca al momento en que nuestras vidas se unirán
              para siempre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}