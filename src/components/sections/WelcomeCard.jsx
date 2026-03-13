import { FaMusic, FaVolumeMute } from "react-icons/fa";

export default function WelcomeCard({ onEnter }) {
  return (
    <div className="w-full rounded-[22px] border border-[rgba(255,233,204,.35)] bg-[rgba(18,12,9,.52)] p-6 text-center backdrop-blur-[4px] md:p-10">
      <p className="title-elegant mb-3 text-xs tracking-[0.25em] text-[rgba(255,236,210,.9)]">
        NUESTRA BODA
      </p>

      <div className="flex flex-col items-center justify-center leading-none md:flex-row md:gap-3">
        <span className="title-script text-[52px] text-[#fff3df] sm:text-[60px] md:text-7xl">
          Christian
        </span>

        <span className="title-script my-1 text-[28px] text-[#f0d09e] sm:text-[34px] md:my-0 md:text-[42px]">
          &
        </span>

        <span className="title-script text-[52px] text-[#fff3df] sm:text-[60px] md:text-7xl">
          Diana
        </span>
      </div>

      <p className="title-elegant mt-5 text-base italic text-[rgba(255,235,207,.95)] md:text-lg">
        Con mucha ilusión, te invitamos
        <br />
        a celebrar nuestro amor
      </p>

      <p className="title-elegant mt-2 text-sm text-[rgba(255,228,188,.82)] md:text-base">
        La música de fondo es parte de esta experiencia
      </p>

      <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
        <button
          type="button"
          onClick={() => onEnter(true)}
          className="inline-flex w-full max-w-[260px] items-center justify-center gap-2 rounded-full bg-[#e8dac8] px-6 py-3 text-sm font-medium tracking-[0.02em] text-[#3e3125] shadow-[0_8px_18px_rgba(0,0,0,.10)] transition duration-300 hover:-translate-y-[1px] hover:bg-[#dcc7ad] sm:w-auto sm:max-w-none"
        >
          <FaMusic />
          Ingresar con música
        </button>

        <button
          type="button"
          onClick={() => onEnter(false)}
          className="inline-flex w-full max-w-[260px] items-center justify-center gap-2 rounded-full border border-[rgba(255,230,196,.55)] px-6 py-3 text-sm font-medium tracking-[0.02em] text-[#fff2dc] transition duration-300 hover:bg-[rgba(255,243,224,.12)] sm:w-auto sm:max-w-none"
        >
          <FaVolumeMute />
          Ingresar sin música
        </button>
      </div>
    </div>
  );
}