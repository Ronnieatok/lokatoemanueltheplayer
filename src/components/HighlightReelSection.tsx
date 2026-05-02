import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import reelVideo from "@/assets/emanuelebei.mp4";
import thumb1 from "@/assets/reel/clip-1.jpg";
import thumb2 from "@/assets/reel/clip-2.jpg";
import thumb3 from "@/assets/reel/clip-3.jpg";
import thumb4 from "@/assets/reel/clip-4.jpg";

const clips = [
  { title: "Opening Run", time: 8, label: "0:08", thumb: thumb1 },
  { title: "Midfield Press", time: 32, label: "0:32", thumb: thumb2 },
  { title: "Skill Move", time: 56, label: "0:56", thumb: thumb3 },
  { title: "Final Touch", time: 80, label: "1:20", thumb: thumb4 },
];

const HighlightReelSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const jumpTo = (idx: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = clips[idx].time;
    v.play();
    setPlaying(true);
    setActiveIdx(idx);
    v.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="section-spacer px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="spaced-letters text-primary mb-4">Highlight Reel</p>
          <h2 className="text-display text-5xl md:text-7xl text-foreground">
            On The Ball
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group overflow-hidden bg-black aspect-video"
        >
          <video
            ref={videoRef}
            src={reelVideo}
            className="w-full h-full object-cover"
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            onClick={toggle}
          />
          <button
            onClick={toggle}
            aria-label={playing ? "Pause highlight reel" : "Play highlight reel"}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            }`}
          >
            <span className="absolute inset-0 bg-background/30" />
            <span className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-110">
              {playing ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
            </span>
          </button>
        </motion.div>

        <div className="mt-10">
          <p className="spaced-letters text-muted-foreground mb-4 text-xs">
            Jump to a moment
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {clips.map((clip, i) => (
              <motion.button
                key={i}
                onClick={() => jumpTo(i)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`group relative overflow-hidden aspect-video text-left border transition-colors ${
                  activeIdx === i
                    ? "border-primary"
                    : "border-border hover:border-primary/60"
                }`}
                aria-label={`Play ${clip.title} at ${clip.label}`}
              >
                <img
                  src={clip.thumb}
                  alt={`${clip.title} thumbnail`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <span className="absolute top-2 left-2 flex items-center justify-center w-8 h-8 rounded-full bg-primary/90 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={14} className="ml-0.5" />
                </span>
                <span className="absolute bottom-2 left-3 right-3 flex items-end justify-between gap-2">
                  <span className="text-foreground text-sm font-medium leading-tight">
                    {clip.title}
                  </span>
                  <span className="spaced-letters text-primary text-[10px] shrink-0">
                    {clip.label}
                  </span>
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightReelSection;
