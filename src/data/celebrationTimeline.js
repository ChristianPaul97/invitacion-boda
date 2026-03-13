import iglesiaIcon from "../assets/img/iglesia.png";
import copaIcon from "../assets/img/copas.png";
import platoIcon from "../assets/img/plato.png";
import musicaIcon from "../assets/img/musica.png";

export function getCelebrationTimeline() {
  return [
    {
      key: "ceremonia",
      time: "17:00 HRS",
      title: "Ceremonia Religiosa",
      image: iglesiaIcon,
    },
    {
      key: "cocktail",
      time: "19:00 HRS",
      title: "Cocktail",
      image: copaIcon,
    },
    {
      key: "celebracion",
      time: "19:30 HRS",
      title: "Celebración",
      image: platoIcon,
    },
    {
      key: "baile",
      time: "20:00 HRS",
      title: "A bailar",
      image: musicaIcon,
    },
  ];
}