import PlantDecoration from "./PlantDecoration";
import img2Decor from "../../assets/img/Img2.svg";

export default function BottomRightPlantDecoration() {
  return (
    <PlantDecoration
      imageSrc={img2Decor}
      position="bottom-right"
      rotate={100}
    />
  );
}