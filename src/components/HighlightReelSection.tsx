import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import reelVideo from "@/assets/emanuelebei.mp4";

const HighlightReelSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

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
      </div>
    </section>
  );
};

export default HighlightReelSection;
