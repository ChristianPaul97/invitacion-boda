import { motion } from "framer-motion";

const MotionSvg = motion.svg;
const MotionG = motion.g;
const MotionPath = motion.path;
const MotionCircle = motion.circle;

export default function RingsIcon() {
  return (
    <MotionSvg
      viewBox="0 0 120 120"
      className="h-[56px] w-[56px] md:h-[74px] md:w-[74px]"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <MotionCircle
        cx="60"
        cy="66"
        r="36"
        fill="none"
        stroke="rgba(183,157,111,.18)"
        strokeWidth="2"
        animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.12, 0.35] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <MotionG
        initial={{ x: 10, y: 0, rotate: 0, opacity: 0 }}
        animate={{
          x: [10, 0, -8, -8, -8],
          y: [0, 0, -2, 0, -2],
          rotate: [0, 0, -7, -5, -7],
          opacity: 1,
        }}
        transition={{
          duration: 2.6,
          times: [0, 0.18, 0.45, 0.7, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "44px 76px" }}
      >
        <circle cx="46" cy="76" r="22" fill="none" stroke="#b79d6f" strokeWidth="4" />
        <MotionCircle
          cx="46"
          cy="76"
          r="22"
          fill="none"
          stroke="rgba(214,196,170,.55)"
          strokeWidth="1.4"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{ transformOrigin: "46px 76px" }}
        />
      </MotionG>

      <MotionG
        initial={{ x: -10, y: 0, rotate: 0, opacity: 0 }}
        animate={{
          x: [-10, 0, 8, 8, 8],
          y: [0, 0, -2, 0, -2],
          rotate: [0, 0, 7, 5, 7],
          opacity: 1,
        }}
        transition={{
          duration: 2.6,
          times: [0, 0.18, 0.45, 0.7, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "74px 76px" }}
      >
        <circle cx="74" cy="76" r="22" fill="none" stroke="#b79d6f" strokeWidth="4" />
        <MotionCircle
          cx="74"
          cy="76"
          r="22"
          fill="none"
          stroke="rgba(214,196,170,.55)"
          strokeWidth="1.4"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.15 }}
          style={{ transformOrigin: "74px 76px" }}
        />
      </MotionG>

      <MotionPath
        d="M60 63 L62.4 68 L68 70 L62.4 72 L60 77 L57.6 72 L52 70 L57.6 68 Z"
        fill="none"
        stroke="#d6c4aa"
        strokeWidth="2.4"
        strokeLinejoin="round"
        animate={{
          scale: [0.85, 1.15, 0.9],
          rotate: [0, 18, 0],
          opacity: [0.45, 1, 0.45],
        }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 70px" }}
      />

      <MotionPath
        d="M52 26 C52 18, 60 16, 64 22 C68 16, 76 18, 76 26 C76 34, 64 42, 64 42 C64 42, 52 34, 52 26 Z"
        fill="none"
        stroke="#d6c4aa"
        strokeWidth="3"
        animate={{
          y: [0, -4, 0],
          scale: [1, 1.08, 1],
          opacity: [0.72, 1, 0.72],
        }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "64px 30px" }}
      />

      <MotionPath
        d="M28 22 L30 27 L35 29 L30 31 L28 36 L26 31 L21 29 L26 27 Z"
        fill="none"
        stroke="#d6c4aa"
        strokeWidth="2.2"
        strokeLinejoin="round"
        animate={{
          rotate: [0, -12, 0],
          scale: [0.9, 1.08, 0.9],
          opacity: [0.45, 0.9, 0.45],
        }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        style={{ transformOrigin: "28px 29px" }}
      />

      <MotionPath
        d="M92 20 L94 25 L99 27 L94 29 L92 34 L90 29 L85 27 L90 25 Z"
        fill="none"
        stroke="#d6c4aa"
        strokeWidth="2.2"
        strokeLinejoin="round"
        animate={{
          rotate: [0, 12, 0],
          scale: [0.9, 1.08, 0.9],
          opacity: [0.45, 0.9, 0.45],
        }}
        transition={{ duration: 1.75, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
        style={{ transformOrigin: "92px 27px" }}
      />
    </MotionSvg>
  );
}