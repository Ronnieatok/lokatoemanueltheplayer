import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-player.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY }}>
        <img
          src={heroImage}
          alt="Emanuel Ebei on the pitch"
          className="w-full h-[120%] object-cover object-top"
        />
        <div className="hero-gradient-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      {/* Content with parallax */}
      <motion.div className="relative z-10 text-center px-4" style={{ y: textY, opacity }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="spaced-letters text-muted-foreground mb-6"
        >
          Buruburu Sports · No. 9 · CDM
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-display text-6xl xs:text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-[0.85] text-foreground"
        >
          Emanuel
          <br />
          <span className="text-primary">Ebei</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <div className="accent-line" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-body text-muted-foreground mt-6 text-sm max-w-md mx-auto tracking-wide"
        >
          A commanding presence in the heart of the midfield,
          dictating tempo and anchoring the defense.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-muted-foreground/50"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
