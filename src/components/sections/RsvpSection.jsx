import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaTrash, FaChevronDown, FaChevronUp, FaCheck } from "react-icons/fa";

const MotionDiv = motion.div;

export default function RsvpSection() {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [form, setForm] = useState({
    nombrePrincipal: "",
    apellidoPrincipal: "",
    asistira: "si",
    cancion: "",
    mensaje: "",
    acompanantes: [{ nombre: "", apellido: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAcompananteChange = (index, field, value) => {
    const updated = [...form.acompanantes];
    updated[index][field] = value;
    setForm((prev) => ({ ...prev, acompanantes: updated }));
  };

  const agregarAcompanante = () => {
    setForm((prev) => ({
      ...prev,
      acompanantes: [...prev.acompanantes, { nombre: "", apellido: "" }],
    }));
  };

  const eliminarAcompanante = (index) => {
    setForm((prev) => ({
      ...prev,
      acompanantes: prev.acompanantes.filter((_, i) => i !== index),
    }));
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...form,
        cantidadAcompanantes: form.acompanantes.filter(
          (a) => a.nombre.trim() || a.apellido.trim()
        ).length,
      };

      await fetch(
        "https://script.google.com/macros/s/AKfycbyQkU9hXghjrlzj1sT2umkFMY0XVudKgVjaxvoLzDVwqQWr25lWcF3JJSFa2Cnbc8BH/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(payload),
        }
      );

      setForm({
        nombrePrincipal: "",
        apellidoPrincipal: "",
        asistira: "si",
        cancion: "",
        mensaje: "",
        acompanantes: [{ nombre: "", apellido: "" }],
      });

      setIsOpen(false);
      setShowSuccessModal(true);
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al enviar la confirmación");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="confirmacion" className="relative overflow-hidden bg-[#f3eee6] px-6 pb-20 pt-20 md:pb-28 md:pt-24">
        {/* ondas decorativas superiores */}
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

        {/* glow decorativo */}
        <div className="pointer-events-none absolute left-1/2 top-[110px] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.45),transparent_72%)] blur-3xl md:h-[300px] md:w-[300px]" />

        <div className="relative z-[2] mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-3 flex items-center justify-center">
              <div className="h-px w-10 bg-[rgba(183,157,111,.32)] md:w-16" />
              <p className="title-elegant px-4 text-[12px] uppercase tracking-[0.28em] text-[#b79d6f]">
                Confirmación
              </p>
              <div className="h-px w-10 bg-[rgba(183,157,111,.32)] md:w-16" />
            </div>

            <h2 className="title-script text-[42px] leading-none text-[#b79d6f] md:text-[64px]">
              Nos encantaría contar contigo
            </h2>

            <p className="title-elegant mt-4 text-[18px] italic leading-relaxed text-[#8d7761] md:text-[24px]">
              Tu presencia será parte de nuestra felicidad. Confirma tu asistencia
              y compártenos los nombres de quienes nos acompañarán en este día tan
              especial.
            </p>
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[30px] border border-[rgba(183,157,111,.18)] bg-[rgba(255,250,244,.82)] p-6 shadow-[0_18px_45px_rgba(61,40,16,.08)] backdrop-blur-sm md:p-10"
          >
            <div className="flex flex-col items-center text-center">
              <p className="title-elegant max-w-[680px] text-[18px] leading-relaxed text-[#7a736c] md:text-[24px]">
                Haz clic en el botón para desplegar el formulario de confirmación.
              </p>

              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="title-elegant mt-6 inline-flex items-center gap-3 rounded-[16px] bg-[#b08c96] px-8 py-4 text-[18px] tracking-[0.06em] text-white shadow-[0_12px_24px_rgba(122,91,101,.16)] transition hover:scale-[1.02]"
              >
                {isOpen ? "Ocultar formulario" : "Confirmar asistencia"}
                {isOpen ? <FaChevronUp className="h-4 w-4" /> : <FaChevronDown className="h-4 w-4" />}
              </button>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <MotionDiv
                  initial={{ opacity: 0, height: 0, y: -8 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6 border-t border-[rgba(183,157,111,.12)] pt-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <InputField
                        label="Nombre"
                        name="nombrePrincipal"
                        value={form.nombrePrincipal}
                        onChange={handleChange}
                      />
                      <InputField
                        label="Apellido"
                        name="apellidoPrincipal"
                        value={form.apellidoPrincipal}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="title-elegant mb-2 block text-[16px] text-[#7a736c]">
                        ¿Confirmas tu asistencia?
                      </label>
                      <select
                        name="asistira"
                        value={form.asistira}
                        onChange={handleChange}
                        className="w-full rounded-[16px] border border-[rgba(183,157,111,.16)] bg-white px-4 py-3 text-[#5f5a53] outline-none"
                      >
                        <option value="si">Sí, asistiré</option>
                        <option value="no">No podré asistir</option>
                      </select>
                    </div>

                    <div>
                      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <p className="title-elegant text-[18px] text-[#7a736c]">
                          Acompañantes
                        </p>

                        <button
                          type="button"
                          onClick={agregarAcompanante}
                          className="inline-flex items-center gap-2 rounded-full border border-[rgba(183,157,111,.26)] px-4 py-2 text-[#b79d6f] transition hover:bg-[rgba(183,157,111,.08)]"
                        >
                          <FaPlus className="h-3 w-3" />
                          Agregar persona
                        </button>
                      </div>

                      <div className="space-y-4">
                        {form.acompanantes.map((acompanante, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-1 gap-3 rounded-[20px] border border-[rgba(183,157,111,.10)] bg-[rgba(255,255,255,.55)] p-4 md:grid-cols-[1fr_1fr_auto]"
                          >
                            <input
                              type="text"
                              placeholder="Nombre"
                              value={acompanante.nombre}
                              onChange={(e) =>
                                handleAcompananteChange(index, "nombre", e.target.value)
                              }
                              className="rounded-[14px] border border-[rgba(183,157,111,.14)] px-4 py-3 outline-none"
                            />

                            <input
                              type="text"
                              placeholder="Apellido"
                              value={acompanante.apellido}
                              onChange={(e) =>
                                handleAcompananteChange(index, "apellido", e.target.value)
                              }
                              className="rounded-[14px] border border-[rgba(183,157,111,.14)] px-4 py-3 outline-none"
                            />

                            {form.acompanantes.length > 1 && (
                              <button
                                type="button"
                                onClick={() => eliminarAcompanante(index)}
                                className="rounded-[14px] border border-[rgba(176,80,80,.18)] px-4 py-3 text-[#b86b6b] transition hover:bg-[rgba(176,80,80,.06)]"
                              >
                                <FaTrash />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="title-elegant mb-2 block text-[16px] text-[#7a736c]">
                        ¡Dinos una canción que no puede faltar!
                      </label>
                      <input
                        type="text"
                        name="cancion"
                        value={form.cancion}
                        onChange={handleChange}
                        className="w-full rounded-[16px] border border-[rgba(183,157,111,.16)] bg-white px-4 py-3 text-[#5f5a53] outline-none"
                      />
                    </div>

                    <div>
                      <label className="title-elegant mb-2 block text-[16px] text-[#7a736c]">
                        ¿Quieres dejarnos un mensaje?
                      </label>
                      <textarea
                        name="mensaje"
                        value={form.mensaje}
                        onChange={handleChange}
                        rows={4}
                        className="w-full rounded-[16px] border border-[rgba(183,157,111,.16)] bg-white px-4 py-3 text-[#5f5a53] outline-none"
                      />
                    </div>

                    <div className="flex justify-center pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="title-elegant rounded-[16px] bg-[#b08c96] px-8 py-4 text-[18px] tracking-[0.06em] text-white shadow-[0_12px_24px_rgba(122,91,101,.16)] transition hover:scale-[1.02] disabled:opacity-70"
                      >
                        {loading ? "Enviando..." : "Enviar confirmación"}
                      </button>
                    </div>
                  </form>
                </MotionDiv>
              )}
            </AnimatePresence>
          </MotionDiv>
        </div>
      </section>

      {/* modal de éxito */}
      <AnimatePresence>
        {showSuccessModal && (
          <MotionDiv
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(24,16,14,.42)] px-6 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MotionDiv
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-[520px] rounded-[28px] border border-[rgba(183,157,111,.18)] bg-[rgba(255,250,244,.98)] p-8 text-center shadow-[0_24px_50px_rgba(61,40,16,.16)]"
            >
              <div className="mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[rgba(176,140,150,.14)] text-[#b08c96]">
                <FaCheck className="h-7 w-7" />
              </div>

              <h3 className="title-elegant text-[30px] text-[#2f241c] md:text-[38px]">
                ¡Confirmación enviada!
              </h3>

              <p className="title-elegant mt-4 text-[18px] italic leading-relaxed text-[#8d7761] md:text-[22px]">
                Gracias por compartir este momento con nosotros. Hemos recibido tu
                confirmación con éxito.
              </p>

              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={closeSuccessModal}
                  className="title-elegant rounded-[16px] bg-[#b08c96] px-8 py-3 text-[17px] tracking-[0.05em] text-white shadow-[0_12px_24px_rgba(122,91,101,.16)] transition hover:scale-[1.02]"
                >
                  Cerrar
                </button>
              </div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
}

function InputField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="title-elegant mb-2 block text-[16px] text-[#7a736c]">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-[16px] border border-[rgba(183,157,111,.16)] bg-white px-4 py-3 text-[#5f5a53] outline-none"
      />
    </div>
  );
}