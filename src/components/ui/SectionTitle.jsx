import { Heading } from "@chakra-ui/react";

export default function SectionTitle({ children, className = "" }) {
  return (
    <h3
      className={`countdown-title text-center text-[32px] leading-none text-[#5f5a53] md:text-[42px] ${className}`}
    >
      {children}
    </h3>
  );
}