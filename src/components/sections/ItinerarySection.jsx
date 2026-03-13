import { motion } from "framer-motion";
import RingsIcon from "../icons/RingsIcon";
import PartyIcon from "../icons/PartyIcon";
import SectionTitle from "../ui/SectionTitle";
import ActionButton from "../ui/ActionButton";

const MotionDiv = motion.div;

export default function ItinerarySection({ itineraryCards }) {
  return (
    <section className="relative overflow-hidden bg-[#f3efea] px-6 pb-16 pt-16 md:pb-28 md:pt-24">
      {/* ondas decorativas superiores */}
      <div className="pointer-events-none absolute inset-x-0 top-[8px] h-[180px] opacity-90 md:top-[10px] md:h-[250px]">
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
            opacity="0.75"
          />
          <path
            d="M0,132 C216,90 456,52 742,76 C1010,98 1224,74 1440,22"
            fill="none"
            stroke="#c7d7d1"
            strokeWidth="2"
            opacity="0.95"
          />
          <path
            d="M0,198 C252,252 506,238 740,166 C996,86 1228,102 1440,194"
            fill="none"
            stroke="#b79d6f"
            strokeWidth="2"
            opacity="0.65"
          />
        </svg>
      </div>

      {/* brillo de fondo */}
      <div className="pointer-events-none absolute left-1/2 top-[120px] h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.55),transparent_72%)] blur-3xl md:h-[320px] md:w-[320px]" />

      <div className="relative z-[1] mx-auto max-w-6xl">
        {/* encabezado */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <div className="mb-3 flex items-center justify-center">
            <div className="h-px w-10 bg-[rgba(183,157,111,.32)] md:w-16" />
            <p className="title-elegant px-4 text-[11px] uppercase tracking-[0.28em] text-[#b79d6f] md:text-xs">
              Itinerario
            </p>
            <div className="h-px w-10 bg-[rgba(183,157,111,.32)] md:w-16" />
          </div>

          <h2 className="title-script text-[42px] leading-none text-[#b79d6f] md:text-[64px]">
            Celebremos juntos
          </h2>

          <p className="title-elegant mt-4 max-w-[760px] text-[18px] italic leading-relaxed text-[#8d7761] md:text-[26px]">
            Hemos preparado cada momento con amor para compartir con ustedes un día inolvidable.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10">
          {itineraryCards.map((card, index) => (
            <MotionDiv
              key={card.key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[34px] border border-[rgba(183,157,111,.18)] bg-[rgba(255,250,244,.78)] px-6 pb-8 pt-8 text-center shadow-[0_18px_45px_rgba(61,40,16,.08)] backdrop-blur-sm md:px-10 md:pb-10 md:pt-10"
            >
              {/* luz interna */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.58),transparent_58%)]" />

              {/* borde decorativo */}
              <div className="pointer-events-none absolute inset-[10px] rounded-[28px] border border-[rgba(183,157,111,.12)]" />

              {/* icono */}
              <div className="relative mx-auto mb-6 h-[124px] w-[124px] md:mb-8 md:h-[150px] md:w-[150px]">
                <MotionDiv
                  className="absolute inset-0 rounded-full border border-[rgba(195,181,156,.34)]"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 30%, rgba(255,255,255,.98), rgba(243,239,233,.96) 72%)",
                    boxShadow: "0 16px 34px rgba(40,28,14,.10)",
                  }}
                  animate={{ scale: [1, 1.015, 1] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                />

                <MotionDiv
                  className="absolute inset-[8px] rounded-full border border-[rgba(183,157,111,.28)]"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                />

                <MotionDiv
                  className="absolute inset-[15px] rounded-full border border-[rgba(199,216,210,.9)]"
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  {card.icon === "rings" ? <RingsIcon /> : <PartyIcon />}
                </div>
              </div>

              {/* titulo del evento */}
              <div className="relative mb-8 flex justify-center">
                <div className="rounded-full border border-[rgba(183,157,111,.25)] bg-[linear-gradient(180deg,rgba(255,250,241,1),rgba(236,226,214,1))] px-8 py-3 shadow-[0_10px_20px_rgba(61,40,16,.06)]">
                  <span className="title-elegant text-[26px] leading-none text-[#7c6950] md:text-[38px]">
                    {card.title}
                  </span>
                </div>
              </div>

              {/* info */}
              <div className="space-y-5">
                <InfoBlock
                  label="Día"
                  value={card.dateValue}
                  buttonText="Agendar"
                  href={card.scheduleUrl}
                />

                <InfoBlock
                  label="Lugar"
                  value={card.placeValue}
                  buttonText="Confirmar asistencia"
                  href="#confirmacion"
                />

                <InfoBlock
                  label="Dirección"
                  value={card.addressValue}
                  buttonText="¿Cómo llegar?"
                  href={card.mapsUrl}
                />
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ label, value, buttonText, href }) {
  return (
    <div className="rounded-[24px] border border-[rgba(183,157,111,.12)] bg-[rgba(255,255,255,.55)] px-5 py-5 shadow-[0_8px_20px_rgba(61,40,16,.04)]">
      <div className="flex flex-col items-center gap-3 text-center">
        <SectionTitle>{label}</SectionTitle>

        <p className="title-elegant text-[20px] leading-relaxed text-[#7a736c] md:text-[30px]">
          {value}
        </p>

        <ActionButton
          href={href}
          target={href?.startsWith("#") ? undefined : "_blank"}
          rel={href?.startsWith("#") ? undefined : "noreferrer"}
        >
          {buttonText}
        </ActionButton>
      </div>
    </div>
  );
}