export function getItineraryCards(cfg) {
  return [
    {
      key: "ceremonia",
      title: "Ceremonia",
      icon: "rings",
      dateValue: "Sábado 11 de Abril - 17h00",
      placeValue: "Iglesia Matriz San José Paute",
      addressValue: "Paute, Azuay, Ecuador",
      scheduleUrl:
        "https://calendar.google.com/calendar/render?action=TEMPLATE" +
        `&text=${encodeURIComponent("Ceremonia - Christian & Diana")}` +
        `&dates=${encodeURIComponent("20260411T220000Z/20260411T233000Z")}` +
        `&details=${encodeURIComponent("Ceremonia religiosa.")}` +
        `&location=${encodeURIComponent("Iglesia Matriz San José Paute")}`,
      confirmUrl: cfg.whatsapp,
      mapsUrl: "https://maps.app.goo.gl/bbpddgGCvx2hQ94AA",
    },
    {
      key: "celebracion",
      title: "Celebración",
      icon: "party",
      dateValue: "Sábado 11 de Abril - 19h00",
      placeValue: "Quinta María Victoria",
      addressValue: "Paute, Azuay, Ecuador",
      scheduleUrl:
        "https://calendar.google.com/calendar/render?action=TEMPLATE" +
        `&text=${encodeURIComponent("Celebración - Christian & Diana")}` +
        `&dates=${encodeURIComponent("20260412T000000Z/20260412T050000Z")}` +
        `&details=${encodeURIComponent("Recepción y celebración.")}` +
        `&location=${encodeURIComponent("Quinta María Victoria")}`,
      confirmUrl: cfg.whatsapp,
      mapsUrl: "https://maps.app.goo.gl/c9E4mtEeJ6UGvD6D6",
    },
  ];
}