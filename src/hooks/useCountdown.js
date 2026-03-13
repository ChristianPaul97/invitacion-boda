import { useEffect, useState } from "react";

export default function useCountdown(targetDateIso) {
  const getTimeLeft = () => {
    const total = Math.max(0, new Date(targetDateIso).getTime() - Date.now());

    return {
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((total / (1000 * 60)) % 60),
      seconds: Math.floor((total / 1000) % 60),
    };
  };

  const [left, setLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => {
      setLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(id);
  }, [targetDateIso]);

  return left;
}