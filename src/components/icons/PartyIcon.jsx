import { motion } from "framer-motion";
import confetiSvg from "../../assets/img/confeti.svg";

const MotionDiv = motion.div;
const MotionSvg = motion.svg;
const MotionPath = motion.path;

function SparkleStar({ className = "", delay = 0, size = 14, color = "#d8c08a" }) {
  return (
    <MotionDiv
      className={`absolute ${className}`}
      animate={{
        opacity: [0.25, 0.95, 0.25],
        scale: [0.82, 1.12, 0.82],
        rotate: [0, 10, 0],
        y: [0, -2, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={{
        width: size,
        height: size,
      }}
    >
      <MotionSvg viewBox="0 0 24 24" className="h-full w-full">
        <MotionPath
          d="M12 2.8 L14.2 9.8 L21.2 12 L14.2 14.2 L12 21.2 L9.8 14.2 L2.8 12 L9.8 9.8 Z"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </MotionSvg>
    </MotionDiv>
  );
}

export default function ConfettiDecoration({
  className = "",
  mobileSize = 52,
  desktopSize = 64,
  rotate = -8,
  opacity = 0.95,
  color = "#b79d6f",
  interactive = true,
}) {
  return (
    <MotionDiv
      className={`${interactive ? "pointer-events-auto" : "pointer-events-none"} absolute ${className}`}
      initial={{ opacity: 0, y: 6, scale: 0.96, rotate: rotate - 3 }}
      animate={{
        opacity,
        y: [0, -2, 0],
        scale: [1, 1.015, 1],
        rotate: [rotate, rotate - 1.2, rotate + 0.8, rotate],
      }}
      whileHover={
        interactive
          ? {
              scale: 1.05,
              rotate: rotate + 2,
            }
          : undefined
      }
      transition={{
        opacity: { duration: 0.7, ease: "easeOut" },
        y: { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{
        width: `${mobileSize}px`,
        height: `${mobileSize}px`,
      }}
    >
      <style>
        {`
          @media (min-width: 768px) {
            .confetti-decoration-responsive {
              width: ${desktopSize}px !important;
              height: ${desktopSize}px !important;
            }
          }
        `}
      </style>

      <div className="confetti-decoration-responsive relative h-full w-full">
        {/* glow trasero */}
        <MotionDiv
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(183,157,111,.14) 0%, rgba(183,157,111,.06) 38%, transparent 72%)`,
            filter: "blur(8px)",
          }}
          animate={{
            scale: [0.96, 1.05, 0.96],
            opacity: [0.22, 0.42, 0.22],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* svg máscara */}
        <div
          className="relative z-[2] h-full w-full"
          style={{
            backgroundColor: color,
            WebkitMaskImage: `url(${confetiSvg})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",
            maskImage: `url(${confetiSvg})`,
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
            filter: "drop-shadow(0 2px 6px rgba(183,157,111,.16))",
            opacity: 0.98,
          }}
        />

        {/* barrido de brillo */}
        <MotionDiv
          className="absolute inset-0 z-[3]"
          style={{
            background:
              "linear-gradient(110deg, transparent 34%, rgba(255,255,255,.28) 50%, transparent 66%)",
            mixBlendMode: "screen",
          }}
          initial={{ x: "-125%", opacity: 0 }}
          animate={{
            x: "125%",
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 1.3,
            delay: 0.8,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        />

        {/* estrellitas en puntas */}
        <SparkleStar
          className="left-[6%] top-[4%] z-[5]"
          delay={0}
          size={12}
          color="#d8c08a"
        />

        <SparkleStar
          className="right-[2%] top-[20%] z-[5]"
          delay={0.35}
          size={10}
          color="#cfb37c"
        />

        <SparkleStar
          className="left-[22%] bottom-[8%] z-[5]"
          delay={0.7}
          size={9}
          color="#e4cf9f"
        />

        {/* mini destellos */}
        <MotionDiv
          className="absolute left-[12%] top-[14%] z-[4] h-[5px] w-[5px] rounded-full"
          style={{ backgroundColor: "rgba(183,157,111,.72)" }}
          animate={{
            opacity: [0.15, 0.75, 0.15],
            scale: [0.8, 1.18, 0.8],
            y: [0, -2, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <MotionDiv
          className="absolute right-[14%] top-[26%] z-[4] h-[4px] w-[4px] rounded-full"
          style={{ backgroundColor: "rgba(183,157,111,.55)" }}
          animate={{
            opacity: [0.12, 0.58, 0.12],
            scale: [0.8, 1.12, 0.8],
            y: [0, -2, 0],
          }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
      </div>
    </MotionDiv>
  );
}