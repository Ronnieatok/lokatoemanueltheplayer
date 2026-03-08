import { motion } from "framer-motion";
import actionImage from "@/assets/action-shot.jpg";

const ActionSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] md:h-[80vh]">
        <img
          src={actionImage}
          alt="Emanuel Ebei in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="hero-gradient-overlay absolute inset-0" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <p className="spaced-letters text-primary mb-6">The Anchor</p>
            <h2 className="text-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.9]">
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
