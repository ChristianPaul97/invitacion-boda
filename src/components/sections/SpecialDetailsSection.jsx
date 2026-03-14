import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaRegHeart, FaGift } from "react-icons/fa";
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
      <div className="pointer-events-none absolute bottom-[80px] right-[8%] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(183,157,111,.08),transparent_72%)] blur-2xl" />

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
            <div className="flex justify-center">
              <div className="mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(201,184,130,.20),rgba(201,184,130,.06)_58%,transparent_74%)]">
                <FaGift className="h-7 w-7 text-[#b79d6f]" />
              </div>
            </div>

            <h3 className="title-script text-[36px] leading-none text-[#2b2119] md:text-[56px]">
              Regalos
            </h3>

            <p className="title-elegant mx-auto mt-6 max-w-[680px] text-[18px] italic leading-relaxed text-[#7a736c] md:text-[26px]">
              El regalo es opcional, tu presencia es indispensable. Y si deseas
              tener un detalle con nosotros, hemos preparado esta opción con
              mucho cariño.
            </p>

            {/* sobre */}
            <div className="mx-auto mt-10 max-w-[650px]">
              <button
                type="button"
                onClick={() => setShowAccount((prev) => !prev)}
                className="group relative w-full rounded-[28px] bg-transparent text-left outline-none"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-[rgba(183,157,111,.18)] bg-[linear-gradient(180deg,rgba(255,255,255,.96),rgba(248,243,237,.95))] shadow-[0_20px_45px_rgba(61,40,16,.08)] transition duration-300 group-hover:translate-y-[-2px]">
                  {/* brillo */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent)] opacity-60" />

                  {/* tapa del sobre */}
                  <motion.div
                    animate={{ rotateX: showAccount ? 180 : 0 }}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    style={{ transformOrigin: "top center" }}
                    className="absolute left-0 top-0 z-20 h-[96px] w-full origin-top [transform-style:preserve-3d]"
                  >
                    <div
                      className="h-full w-full"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                        background:
                          "linear-gradient(180deg, rgba(214,194,159,0.98), rgba(183,157,111,0.92))",
                      }}
                    />
                  </motion.div>

                  {/* cuerpo del sobre */}
                  <div className="relative z-10 min-h-[170px] px-6 pb-7 pt-[88px] md:px-10">
                    <div className="flex items-center justify-center gap-3 text-center">
                      <MotionDiv
                        animate={{
                          y: [0, -3, 0],
                          rotate: [0, -4, 4, 0],
                          scale: [1, 1.06, 1],
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="flex items-center justify-center"
                      >
                        <FaEnvelope
                          className="h-5 w-5 md:h-6 md:w-6"
                          style={{
                            color: "#b79d6f",
                            filter:
                              "drop-shadow(0 0 6px rgba(183,157,111,0.28)) drop-shadow(0 0 12px rgba(183,157,111,0.14))",
                          }}
                        />
                      </MotionDiv>

                      <span className="title-script text-[28px] leading-none text-[#2b2119] md:text-[42px]">
                        Con cariño
                      </span>
                    </div>

                    <p className="title-elegant mx-auto mt-4 max-w-[500px] text-center text-[16px] italic leading-relaxed text-[#7a736c] md:text-[21px]">
                      Toca el sobre para ver la información.
                    </p>
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {showAccount && (
                  <MotionDiv
                    initial={{ opacity: 0, y: -18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative z-30 mx-auto mt-[-10px] max-w-[560px]"
                  >
                    <div className="rounded-[24px] border border-[rgba(183,157,111,.15)] bg-[linear-gradient(180deg,rgba(255,255,255,.96),rgba(250,247,242,.92))] px-6 py-6 text-left shadow-[0_16px_35px_rgba(61,40,16,.08)] md:px-8">
                      <div className="mb-4 flex items-center justify-center gap-2">
                        <FaRegHeart className="h-4 w-4 text-[#c8a95f]" />
                        <p className="title-elegant text-[12px] uppercase tracking-[0.24em] text-[#b79d6f]">
                          Datos bancarios
                        </p>
                        <FaRegHeart className="h-4 w-4 text-[#c8a95f]" />
                      </div>

                      <div className="space-y-3 text-center md:space-y-4">
                        <p className="title-elegant text-[17px] text-[#5f5a53] md:text-[22px]">
                          <span className="font-semibold text-[#7c6950]">
                            Banco:
                          </span>{" "}
                          Pichincha
                        </p>

                        <p className="title-elegant text-[17px] text-[#5f5a53] md:text-[22px]">
                          <span className="font-semibold text-[#7c6950]">
                            Tipo de cuenta:
                          </span>{" "}
                          Ahorros
                        </p>

                        <p className="title-elegant break-all text-[17px] text-[#5f5a53] md:text-[22px]">
                          <span className="font-semibold text-[#7c6950]">
                            Número:
                          </span>{" "}
                          2209784073
                        </p>

                        <p className="title-elegant text-[17px] text-[#5f5a53] md:text-[22px]">
                          <span className="font-semibold text-[#7c6950]">
                            Beneficiario:
                          </span>{" "}
                          Christian Portoviejo
                        </p>
                      </div>
                    </div>
                  </MotionDiv>
                )}
              </AnimatePresence>
            </div>

            {/* caja de sobres */}
            <div className="mt-14 flex flex-col items-center justify-center">
              <div className="mb-4 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(201,184,130,.20),rgba(201,184,130,.06)_58%,transparent_74%)] text-[#3f3a38]">
                <FaEnvelope className="h-10 w-10 text-[#b79d6f]" />
              </div>

              <h4 className="title-script text-[34px] leading-none text-[#2b2119] md:text-[52px]">
                Caja de sobres
              </h4>

              <p className="title-elegant mt-4 max-w-[620px] text-[18px] italic leading-relaxed text-[#7a736c] md:text-[24px]">
                Si lo prefieres, también tendremos una caja de sobres disponible
                el día del evento.
              </p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}