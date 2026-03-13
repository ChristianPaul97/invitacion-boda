import { Button } from "@chakra-ui/react";

export default function ActionButton({ children, className = "", ...props }) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full border border-[rgba(195,181,156,.38)] bg-[#f7f5f2] px-5 py-2.5 text-[15px] text-[#c7a977] shadow-[0_4px_10px_rgba(40,28,14,.08)] transition duration-300 hover:-translate-y-[1px] hover:bg-[#f2ece4] ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}