import { useEffect, useRef, useState } from "react";
import musica from "../assets/music/Magia.mp3";

export default function useAudioPlayer() {
  const audioRef = useRef(null);
  const [musicOn, setMusicOn] = useState(false);

  const playMusic = async () => {
    if (!audioRef.current) return false;

    try {
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
      setMusicOn(true);
      return true;
    } catch (error) {
      console.error("Error al reproducir audio:", error);
      setMusicOn(false);
      return false;
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
    } catch (error) {
      console.error("Error al alternar audio:", error);
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
    musicUrl: musica,
  };
}