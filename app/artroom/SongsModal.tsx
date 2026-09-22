"use client";

import { Pause, Play, SkipBack, SkipForward, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";
import { ModalMascot } from "./ModalMascot";
import { favoriteTracks, roomFeatureMascots } from "./roomMedia";
import styles from "./artroom.module.css";

type SongsModalProps = { onClose: () => void };

function formatTime(value: number) {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  return `${minutes}:${Math.floor(value % 60).toString().padStart(2, "0")}`;
}

export const SongsModal = forwardRef<HTMLDivElement, SongsModalProps>(function SongsModal(
  { onClose }, ref,
) {
  const reduceMotion = useReducedMotion();
  const audioRef = useRef<HTMLAudioElement>(null);
  const continuePlayingRef = useRef(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [mascotCue, setMascotCue] = useState("pick a song");

  const changeTrack = (direction: -1 | 1, shouldContinue = playing) => {
    continuePlayingRef.current = shouldContinue;
    setTrackIndex((current) => (current + direction + favoriteTracks.length) % favoriteTracks.length);
    setCurrentTime(0);
    setMascotCue(direction > 0 ? "next favorite!" : "back we go!");
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    if (continuePlayingRef.current) void audio.play();
  }, [trackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    return () => audio?.pause();
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      await audio.play();
      setMascotCue("good choice ♪");
    } else {
      audio.pause();
      setMascotCue("taking a pause");
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`${styles.projectPaper} ${styles.songsPaper}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="songs-title"
      onMouseDown={(event) => event.stopPropagation()}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, rotate: -0.2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
    >
      <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close music player"><X aria-hidden="true" /></button>
      <ModalMascot variant={roomFeatureMascots.songs} label="Music sloth mascot" helper="slow jams" size={86} cue={mascotCue} cueKey={trackIndex + Number(playing)} />
      <header className={styles.compactModalHeader}>
        <p className={styles.handNote}>two songs on repeat</p>
        <h2 id="songs-title">My Favorite Songs</h2>
      </header>

      <div className={styles.playerNowPlaying}>
        <span aria-hidden="true">♪</span>
        <div><strong>{favoriteTracks[trackIndex].title}</strong><small>From my personal playlist</small></div>
      </div>
      <div className={styles.playerControls}>
        <button type="button" onClick={() => changeTrack(-1)} aria-label="Previous song"><SkipBack aria-hidden="true" /></button>
        <button type="button" className={styles.playButton} onClick={togglePlayback} aria-label={playing ? "Pause" : "Play"}>
          {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        </button>
        <button type="button" onClick={() => changeTrack(1)} aria-label="Next song"><SkipForward aria-hidden="true" /></button>
      </div>
      <div className={styles.playerTimeline}>
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={Math.min(currentTime, duration || 0)}
          onChange={(event) => {
            const nextTime = Number(event.target.value);
            if (audioRef.current) audioRef.current.currentTime = nextTime;
            setCurrentTime(nextTime);
          }}
          aria-label="Song progress"
        />
        <span>{formatTime(duration)}</span>
      </div>
      <p className={styles.trackCount}>Track {trackIndex + 1} of {favoriteTracks.length}</p>
      <audio
        ref={audioRef}
        src={favoriteTracks[trackIndex].src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onEnded={() => changeTrack(1, true)}
      />
    </motion.div>
  );
});
