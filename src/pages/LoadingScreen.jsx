import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const MotionDiv = motion.div;

export default function LoadingScreen() {
  const hearts = [0, 1, 2, 3, 4];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#120f0d]">
      <div className="absolute inset-[-20%] bg-[radial-gradient(circle_at_50%_40%,rgba(240,176,154,.25),transparent_60%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-lg items-center justify-center px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            {hearts.map((heart) => (
              <MotionDiv
                key={heart}
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.45, 1, 0.45],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: heart * 0.15,
                }}
              >
                <FaHeart className="h-7 w-7 text-[#efb69f]" />
              </MotionDiv>
            ))}
          </div>

          <p className="text-sm tracking-[0.08em] text-[#ffe6d7] md:text-base">
            Cargando invitación...
          </p>
        </div>
      </div>
    </section>
  );
}