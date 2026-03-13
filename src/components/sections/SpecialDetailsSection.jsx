import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaEnvelope } from "react-icons/fa";
import vestimentaImg from "../../assets/img/vestimenta.png";

const MotionDiv = motion.div;

export default function SpecialDetailsSection() {
  const [showAccount, setShowAccount] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#f3f0f4] px-6 pb-20 pt-20 md:pb-28 md:pt-24">
      {/* ondas decorativas */}
      <div className="pointer-events-none absolute inset-x-0 top-[-32px] h-[155px] opacity-80 md:top-[-42px] md:h-[215px]">
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
            stroke="#d8e3df"
            strokeWidth="2"
            opacity="0.88"
          />
          <path
            d="M0,198 C252,252 506,238 740,166 C996,86 1228,102 1440,194"
            fill="none"
            stroke="#b79d6f"
            strokeWidth="2"
            opacity="0.56"
          />
        </svg>
      </div>

      {/* manchas doradas */}
      <div className="pointer-events-none absolute right-[6%] top-[120px] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(183,157,111,.12),transparent_72%)] blur-2xl" />
      <div className="pointer-events-none absolute left-[4%] top-[420px] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(183,157,111,.10),transparent_72%)] blur-2xl" />
      <div className="pointer-events-none absolute right-[8%] bottom-[80px] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(183,157,111,.08),transparent_72%)] blur-2xl" />

      <div className="relative z-[2] mx-auto max-w-4xl">
        {/* encabezado */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-3 flex items-center justify-center">
            <div className="h-px w-10 bg-[rgba(183,157,111,.32)] md:w-16" />
            <p className="title-elegant px-4 text-[12px] uppercase tracking-[0.28em] text-[#b79d6f]">
              Detalles especiales
            </p>
            <div className="h-px w-10 bg-[rgba(183,157,111,.32)] md:w-16" />
          </div>

          <h2 className="title-script text-[42px] leading-none text-[#b79d6f] md:text-[64px]">
            Para ese día especial
          </h2>
        </div>

        <div className="space-y-12">
          {/* código de vestimenta */}
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[30px] border border-[rgba(183,157,111,.16)] bg-[rgba(255,250,244,.80)] px-6 py-10 text-center shadow-[0_18px_45px_rgba(61,40,16,.08)] backdrop-blur-sm md:px-10"
          >
            <h3 className="title-script text-[36px] leading-none text-[#2b2119] md:text-[56px]">
              Código de vestimenta
            </h3>

            <p className="title-elegant mt-5 text-[22px] uppercase tracking-[0.10em] text-[#7c6950] md:text-[32px]">
              Formal
            </p>

            <div className="mt-8 flex justify-center">
              <div className="relative flex h-[220px] w-[220px] items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(201,184,130,.22),rgba(201,184,130,.08)_58%,transparent_74%)] md:h-[270px] md:w-[270px]">
                <img
                  src={vestimentaImg}
                  alt="Código de vestimenta formal"
                  className="h-[170px] w-[170px] object-contain md:h-[210px] md:w-[210px]"
                />
              </div>
            </div>
          </MotionDiv>

          {/* regalos */}
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            className="rounded-[30px] border border-[rgba(183,157,111,.16)] bg-[rgba(255,250,244,.80)] px-6 py-10 text-center shadow-[0_18px_45px_rgba(61,40,16,.08)] backdrop-blur-sm md:px-10"
          >
            <h3 className="title-script text-[36px] leading-none text-[#2b2119] md:text-[56px]">
              Regalos
            </h3>

            <p className="title-elegant mx-auto mt-6 max-w-[680px] text-[18px] italic leading-relaxed text-[#7a736c] md:text-[26px]">
              El regalo es opcional, tu presencia es lo más importante para nosotros.
              Pero si deseas tener un detalle con nosotros, te compartimos algunas opciones.
            </p>

            {/* acordeón cuenta */}
            <div className="mx-auto mt-10 max-w-[620px]">
              <button
                type="button"
                onClick={() => setShowAccount((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-[20px] border border-[rgba(183,157,111,.16)] bg-[rgba(255,255,255,.86)] px-6 py-5 text-left shadow-[0_10px_24px_rgba(61,40,16,.05)] transition hover:scale-[1.01]"
              >
                <span className="title-script text-[28px] leading-none text-[#2b2119] md:text-[42px]">
                  Ver número de cuenta
                </span>

                {showAccount ? (
                  <FaChevronUp className="h-4 w-4 text-[#7c6950]" />
                ) : (
                  <FaChevronDown className="h-4 w-4 text-[#7c6950]" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {showAccount && (
                  <MotionDiv
                    initial={{ opacity: 0, height: 0, y: -8 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 rounded-[20px] border border-[rgba(183,157,111,.12)] bg-[rgba(255,255,255,.70)] px-6 py-6 text-left shadow-[0_10px_24px_rgba(61,40,16,.05)]">
                      <div className="space-y-3 text-[#5f5a53]">
                        <p className="title-elegant text-[18px] md:text-[22px]">
                          <span className="font-semibold">Banco:</span> Pichincha
                        </p>
                        <p className="title-elegant text-[18px] md:text-[22px]">
                          <span className="font-semibold">Tipo de cuenta:</span> Ahorros
                        </p>
                        <p className="title-elegant text-[18px] md:text-[22px]">
                          <span className="font-semibold">Número:</span> 1234567890
                        </p>
                        <p className="title-elegant text-[18px] md:text-[22px]">
                          <span className="font-semibold">Beneficiario:</span> Christian & Diana
                        </p>
                      </div>
                    </div>
                  </MotionDiv>
                )}
              </AnimatePresence>
            </div>

            {/* caja de sobres */}
            <div className="mt-12 flex flex-col items-center justify-center">
              <div className="mb-4 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(201,184,130,.20),rgba(201,184,130,.06)_58%,transparent_74%)] text-[#3f3a38]">
                <FaEnvelope className="h-10 w-10" />
              </div>

              <h4 className="title-script text-[34px] leading-none text-[#2b2119] md:text-[52px]">
                Caja de sobres
              </h4>

              <p className="title-elegant mt-4 max-w-[620px] text-[18px] italic leading-relaxed text-[#7a736c] md:text-[24px]">
                Si lo prefieres, también tendremos una caja de sobres disponible el día del evento.
              </p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}