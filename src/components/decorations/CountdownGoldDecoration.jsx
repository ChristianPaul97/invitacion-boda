import PlantDecoration from "./PlantDecoration";
import img2Decor from "../../assets/img/Img2.svg";

export default function CountdownGoldDecoration() {
  return (
    <div className="absolute left-[-118px] top-[160px] z-[2] md:left-[-145px] md:top-[278px]">
      <PlantDecoration
        imageSrc={img2Decor}
        position="top-left"
        rotate={-70}
        mobileSize={190}
        desktopSize={285}
        mobileLeft="0px"
        desktopLeft="0px"
        mobileTop="0px"
        desktopTop="0px"
        fillColor="#b79d6f"
        atTopOpacity={0.9}
        awayOpacity={0.72}
        shineOpacity={0.24}
      />
    </div>
  );
}