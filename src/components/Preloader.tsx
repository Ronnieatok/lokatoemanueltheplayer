import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="spaced-letters text-muted-foreground mb-8 text-xs"
      >
        No. 9 · Buruburu Sports
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-display text-6xl sm:text-8xl text-foreground mb-2"
      >
        E. <span className="text-primary">EBEI</span>
      </motion.h1>

      <div className="w-48 mt-10">
        <div className="h-px bg-border overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-xs text-center mt-3 font-light tabular-nums"
        >
          {Math.min(Math.round(progress), 100)}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
