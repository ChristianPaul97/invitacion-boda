import { motion } from "framer-motion";
import { FaMusic, FaVolumeMute } from "react-icons/fa";

const MotionDiv = motion.div;

export default function MusicButton({ musicOn, onToggle }) {
  return (
    <MotionDiv
      className="fixed right-4 top-4 z-20 rounded-full md:right-6 md:top-6"
      animate={
        musicOn
          ? {
              scale: [1, 1.06, 1],
              boxShadow: [
                "0 0 0 0 rgba(232,198,145,.30)",
                "0 0 0 14px rgba(232,198,145,0)",
                "0 0 0 0 rgba(232,198,145,0)",
              ],
            }
          : { scale: 1, boxShadow: "0 0 0 0 rgba(0,0,0,0)" }
      }
      transition={musicOn ? { duration: 1.8, repeat: Infinity } : { duration: 0.2 }}
    >
      <button
        type="button"
        aria-label={musicOn ? "Pausar música" : "Reproducir música"}
        onClick={onToggle}
        className={`flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[rgba(255,226,186,.45)] text-[#f1d7ad] transition hover:bg-[rgba(30,22,16,.86)] active:bg-[rgba(36,27,20,.95)] md:h-[62px] md:w-[62px] ${
          musicOn ? "bg-[rgba(72,57,33,.72)]" : "bg-[rgba(20,14,10,.72)]"
        }`}
      >
        {musicOn ? <FaMusic className="h-5 w-5" /> : <FaVolumeMute className="h-5 w-5" />}
      </button>
    </MotionDiv>
  );
}