import { useEffect, useRef, useState } from "react";

const MUSIC_URL = "/music/Brillas.mp3";

export default function useAudioPlayer() {
  const audioRef = useRef(null);
  const [musicOn, setMusicOn] = useState(false);

  const playMusic = async () => {
    if (!audioRef.current) return;

    try {
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
      setMusicOn(true);
    } catch {
      setMusicOn(false);
    }
  };

  const pauseMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setMusicOn(false);
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (musicOn) {
      pauseMusic();
      return;
    }

    try {
      await audioRef.current.play();
      setMusicOn(true);
    } catch {
      setMusicOn(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return {
    audioRef,
    musicOn,
    setMusicOn,
    playMusic,
    pauseMusic,
    toggleMusic,
    musicUrl: MUSIC_URL,
  };
}