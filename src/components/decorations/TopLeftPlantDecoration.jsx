import PlantDecoration from "./PlantDecoration";
import img1Decor from "../../assets/img/Img1.svg";

export default function TopLeftPlantDecoration() {
  return (
    <PlantDecoration
      imageSrc={img1Decor}
      position="top-left"
      rotate={0}
    />
  );
}