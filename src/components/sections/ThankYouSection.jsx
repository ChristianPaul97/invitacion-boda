import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import flowersImg from "../../assets/img/flowers.png";

const MotionDiv = motion.div;

export default function ThankYouSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f1f6] px-6 pb-14 pt-14 md:pb-16 md:pt-16">
      {/* fondo acuarela suave */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(211,205,233,.26),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(211,205,233,.22),transparent_25%),radial-gradient(circle_at_30%_78%,rgba(211,205,233,.24),transparent_26%),radial-gradient(circle_at_72%_72%,rgba(211,205,233,.16),transparent_20%)]" />
      </div>

      {/* línea superior sutil */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60px] opacity-70 md:h-[80px]">
        <svg
          viewBox="0 0 1440 180"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,54 C250,10 482,72 726,68 C980,64 1182,24 1440,44"
            fill="none"
            stroke="#b79d6f"
            strokeWidth="1.8"
            opacity="0.7"
          />
        </svg>
      </div>

      <div className="relative z-[2] mx-auto flex min-h-[280px] max-w-5xl items-center justify-center md:min-h-[340px]">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:text-left"
        >
          {/* texto */}
          <div className="max-w-[760px]">
            <p className="title-script text-[30px] leading-[1.25] text-[#1f1b1a] max-[390px]:text-[28px] md:text-[52px]">
              Gracias por
              <br />
              acompañarnos en
              <br />
              este día tan
              <br />
              especial para
              <br />
              nosotros
            </p>

            <MotionDiv
              className="mt-6 flex justify-center md:justify-start"
              animate={{
                scale: [1, 1.12, 1],
                y: [0, -3, 0],
                rotate: [0, -3, 3, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaHeart
                className="h-6 w-6 md:h-7 md:w-7"
                style={{
                  color: "#c9a646",
                  filter:
                    "drop-shadow(0 0 6px rgba(201,166,70,0.45)) drop-shadow(0 0 12px rgba(201,166,70,0.22))",
                }}
              />
            </MotionDiv>
          </div>

          {/* imagen */}
          <MotionDiv
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="shrink-0"
          >
            <img
              src={flowersImg}
              alt="Decoración floral"
              className="mx-auto w-[120px] object-contain sm:w-[140px] md:mx-0 md:w-[160px] lg:w-[190px]"
            />
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}