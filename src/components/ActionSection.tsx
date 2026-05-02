import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import actionImage from "@/assets/action-shot.jpg";

const ActionSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textScale = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <motion.img
          src={actionImage}
          alt="Emanuel Ebei in action"
          className="w-full h-[120%] object-cover absolute inset-0"
          style={{ y: imgY }}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="hero-gradient-overlay absolute inset-0" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            style={{ scale: textScale, opacity: textOpacity }}
            className="text-center px-4"
          >
            <p className="spaced-letters text-primary mb-6">The Anchor</p>
            <h2 className="text-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.9]">
              Dictating
              <br />
              the tempo
            </h2>
            <div className="flex justify-center mt-8">
              <div className="accent-line" />
            </div>
            <p className="text-body text-muted-foreground mt-6 max-w-lg mx-auto text-sm tracking-wide">
              Every pass calculated. Every tackle decisive. Every moment on the
              pitch is a masterclass in defensive midfield play.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
