import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WelcomeScreen from "./pages/WelcomeScreen";
import LoadingScreen from "./pages/LoadingScreen";
import InviteScreen from "./pages/InviteScreen";
import MusicButton from "./components/ui/MusicButton";
import useQuery from "./hooks/useQuery";
import useAudioPlayer from "./hooks/useAudioPlayer";

const MotionDiv = motion.div;

export default function App() {
  const q = useQuery();
  const guestName = q.get("name") || "";

  const loadingTimeoutRef = useRef(null);
  const [entered, setEntered] = useState(false);
  const [loading, setLoading] = useState(false);

  const { audioRef, musicOn, playMusic, toggleMusic, musicUrl } = useAudioPlayer();

  const handleEnter = async (withMusic) => {
    setLoading(true);

    if (withMusic) {
      await playMusic();
    }

    loadingTimeoutRef.current = setTimeout(() => {
      setLoading(false);
      setEntered(true);
    }, 1350);
  };

  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />

      <AnimatePresence mode="wait">
        {!entered && !loading ? (
          <MotionDiv
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <WelcomeScreen onEnter={handleEnter} />
          </MotionDiv>
        ) : loading ? (
          <MotionDiv
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <LoadingScreen />
          </MotionDiv>
        ) : (
          <MotionDiv
            key="invite"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <InviteScreen guestName={guestName} />
          </MotionDiv>
        )}
      </AnimatePresence>

      {entered && !loading ? <MusicButton musicOn={musicOn} onToggle={toggleMusic} /> : null}
    </>
  );
}