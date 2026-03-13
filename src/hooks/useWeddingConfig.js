export default function useWeddingConfig(guestName = "") {
  const couple = "Christian & Diana";
  const dateText = "Sábado, 11 de Abril de 2026";
  const timeText = "17:00";
  const placeName = "Iglesia Matriz San José Paute";
  const address = "Paute, Azuay, Ecuador";
  const mapsUrl = "https://maps.app.goo.gl/bbpddgGCvx2hQ94AA";
  const whatsappNumber = "593XXXXXXXXX";
  const eventIso = "2026-04-11T17:00:00-05:00";

  const whatsapp =
    `https://wa.me/${whatsappNumber}?text=` +
    encodeURIComponent(
      `Hola. Confirmo mi asistencia a la boda. Nombre: ${guestName}`
    );

  const gcalUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent("Boda - " + couple)}` +
    `&dates=${encodeURIComponent("20260411T220000Z/20260412T020000Z")}` +
    `&details=${encodeURIComponent("Nos vemos en nuestra boda.")}` +
    `&location=${encodeURIComponent(placeName + " - " + address)}`;

  return {
    couple,
    dateText,
    timeText,
    placeName,
    address,
    mapsUrl,
    whatsapp,
    gcalUrl,
    eventIso,
  };
}