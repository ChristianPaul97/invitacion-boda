import { motion } from "framer-motion";
import { useEffect, useRef, useState, useId } from "react";

const MotionDiv = motion.div;
const MotionG = motion.g;
const MotionRect = motion.rect;

export default function PlantDecoration({
  imageSrc,
  position = "top-left",
  rotate = 0,
  mobileSize = 220,
  desktopSize = 370,
  mobileOffset = 18,
  desktopOffset = 42,
  fillColor = "#F4EBDD",
  atTopOpacity = 1,
  awayOpacity = 0.48,
  mobileTop,
  desktopTop,
  mobileLeft,
  desktopLeft,
  mobileRight,
  desktopRight,
  shineOpacity = 0.55,
}) {
  const [atTop, setAtTop] = useState(true);
  const [cycle, setCycle] = useState(0);
  const prevTopRef = useRef(true);

  const instanceId = useId().replace(/:/g, "");
  const clipIdBase = `leaf-${position}-${instanceId}-${cycle}`;
  const isBottomRight = position === "bottom-right";

  const leafLayers = [
    {
      id: "leaf1",
      clipId: `${clipIdBase}-1`,
      delay: 0,
      origin: "40% 73%",
      rotateStart: -11,
      xStart: -16,
    },
    {
      id: "leaf2",
      clipId: `${clipIdBase}-2`,
      delay: 0.82,
      origin: "26% 17%",
      rotateStart: -8,
      xStart: -10,
    },
    {
      id: "leaf3",
      clipId: `${clipIdBase}-3`,
      delay: 1.64,
      origin: "74% 26%",
      rotateStart: 8,
      xStart: 10,
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      const isTopNow = window.scrollY < 70;
      setAtTop(isTopNow);

      if (isTopNow && !prevTopRef.current) {
        setCycle((prev) => prev + 1);
      }

      prevTopRef.current = isTopNow;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <MotionDiv
      key={cycle}
      className="pointer-events-none absolute z-[2]"
      initial={{
        opacity: 0,
        x: isBottomRight ? 14 : -14,
        y: isBottomRight ? 9 : -9,
        scale: 0.95,
      }}
      animate={{
        opacity: atTop ? atTopOpacity : awayOpacity,
        x: 0,
        y: 0,
        scale: 1,
        rotate,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{
        width: `${mobileSize}px`,
        height: `${mobileSize}px`,
        ...(isBottomRight
          ? {
              right: mobileRight ?? `${mobileOffset}px`,
              top: mobileTop ?? "58%",
              transform: "translateY(-50%)",
            }
          : {
              left: mobileLeft ?? `${mobileOffset}px`,
              top: mobileTop ?? "-12px",
            }),
        transformOrigin: isBottomRight ? "42% 90%" : "58% 10%",
        filter: "drop-shadow(0 6px 12px rgba(183,157,111,.10))",
      }}
    >
      <style>
        {`
          @media (min-width: 768px) {
            .plant-decoration-${position}-${instanceId}-${cycle} {
              width: ${desktopSize}px !important;
              height: ${desktopSize}px !important;
              ${
                isBottomRight
                  ? `right: ${desktopRight ?? `${desktopOffset}px`} !important; top: ${desktopTop ?? "62%"} !important; transform: translateY(-50%) !important;`
                  : `left: ${desktopLeft ?? `${desktopOffset}px`} !important; top: ${desktopTop ?? "-18px"} !important;`
              }
            }
          }
        `}
      </style>

      <div
        className={`plant-decoration-${position}-${instanceId}-${cycle} relative h-full w-full`}
      >
        <svg
          viewBox="0 0 513 486"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <mask
              id={`${clipIdBase}-plant-mask`}
              maskUnits="userSpaceOnUse"
              maskContentUnits="userSpaceOnUse"
              style={{ maskType: "alpha" }}
            >
              <image href={imageSrc} x="0" y="0" width="513" height="486" />
            </mask>

            <clipPath id={`${clipIdBase}-1`} clipPathUnits="userSpaceOnUse">
              <path d="M36 286 C62 218,121 168,194 152 C240 143,286 158,303 198 C321 245,293 321,237 374 C186 421,121 463,83 480 C55 418,35 347,36 286 Z" />
            </clipPath>

            <clipPath id={`${clipIdBase}-2`} clipPathUnits="userSpaceOnUse">
              <path d="M8 116 C38 58,112 20,191 26 C243 29,281 50,286 79 C291 106,259 128,203 141 C143 156,77 162,24 145 C7 139,0 128,8 116 Z" />
            </clipPath>

            <clipPath id={`${clipIdBase}-3`} clipPathUnits="userSpaceOnUse">
              <path d="M304 68 C341 16,409 6,456 38 C503 72,517 143,509 229 C500 316,471 403,437 449 C407 489,367 488,344 444 C319 397,305 316,299 235 C291 150,287 93,304 68 Z" />
            </clipPath>
          </defs>

          <MotionRect
            x="0"
            y="0"
            width="513"
            height="486"
            fill={fillColor}
            mask={`url(#${clipIdBase}-plant-mask)`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          />

          {leafLayers.map((layer) => (
            <MotionG
              key={`${cycle}-${layer.id}`}
              clipPath={`url(#${layer.clipId})`}
              initial={{
                opacity: 0,
                scaleX: 0.42,
                scaleY: 0.74,
                rotate: layer.rotateStart,
                x: layer.xStart,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
                scaleY: 1,
                rotate: 0,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: layer.delay,
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              style={{
                transformOrigin: layer.origin,
                transformBox: "fill-box",
              }}
            >
              <MotionRect
                x="0"
                y="0"
                width="513"
                height="486"
                fill={fillColor}
                mask={`url(#${clipIdBase}-plant-mask)`}
              />
            </MotionG>
          ))}
        </svg>

        <MotionDiv
          className="absolute inset-0"
          style={{
            background: `linear-gradient(110deg, transparent 34%, rgba(255,255,255,${shineOpacity}) 50%, transparent 66%)`,
            mixBlendMode: "screen",
          }}
          initial={{ x: isBottomRight ? "130%" : "-130%", opacity: 0 }}
          animate={{
            x: isBottomRight ? "-130%" : "130%",
            opacity: [0, 0.45, 0],
          }}
          transition={{ duration: 1.25, delay: 1.2, ease: "easeInOut" }}
        />
      </div>
    </MotionDiv>
  );
}