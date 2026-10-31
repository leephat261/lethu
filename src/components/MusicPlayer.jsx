import React, { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { audioManager } from "../utils/audioSynth";
import { birthdayConfig } from "../data/birthdayConfig";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioManager.init(birthdayConfig.music.src);

    const unsubscribe = audioManager.subscribe((playingState) => {
      setIsPlaying(playingState);
    });

    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    audioManager.toggle();
  };

  return (
    <div
      className="pixel-music-player"
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      title={isPlaying ? "Tạm dừng nhạc" : "Bật nhạc sinh nhật"}
      aria-label={isPlaying ? "Tạm dừng nhạc" : "Bật nhạc sinh nhật"}
    >
      {/* Icon đĩa nhạc / băng cassette Pixel */}
      <div className={`pixel-cassette-icon ${isPlaying ? "playing" : ""}`}>
        <span className="cassette-hole ch-1" />
        <span className="cassette-hole ch-2" />
      </div>

      <div className="pixel-player-body">
        <span className="pixel-player-title">{birthdayConfig.music.title}</span>
        {/* Sóng nhạc Pixel 8-bit */}
        <div className={`pixel-sound-bars ${isPlaying ? "active" : ""}`}>
          <span className="pixel-bar" />
          <span className="pixel-bar" />
          <span className="pixel-bar" />
          <span className="pixel-bar" />
        </div>
      </div>

      <div className="pixel-volume-icon">
        {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </div>
    </div>
  );
};
