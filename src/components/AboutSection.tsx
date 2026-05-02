import { motion } from "framer-motion";
import portraitImage from "@/assets/portrait.jpg";

const AboutSection = () => {
  return (
    <section className="section-spacer px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative max-w-sm md:max-w-none mx-auto md:mx-0">
            <img
              src={portraitImage}
              alt="Emanuel Ebei portrait"
              className="w-full aspect-[3/4] object-cover"
            />
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full border border-primary/20 -z-10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="spaced-letters text-primary mb-4">About</p>
          <h2 className="text-display text-4xl sm:text-5xl md:text-7xl text-foreground mb-8">
            On and off
            <br />
            the field
          </h2>
          <div className="accent-line mb-8" />
          <p className="text-body text-muted-foreground leading-relaxed mb-6">
            Emanuel Ebei is the heartbeat of Buruburu Sports. As the team's
            central defensive midfielder wearing the iconic No. 9, he combines
            tactical intelligence with physical dominance to control the
            midfield battle.
          </p>
          <p className="text-body text-muted-foreground leading-relaxed mb-6">
            Known for his exceptional reading of the game, precise long-range
            passing, and relentless work rate, Emanuel shields the back line
            while seamlessly transitioning the team from defense to attack.
          </p>
          <p className="text-body text-secondary-foreground leading-relaxed">
            A natural leader on the pitch, he embodies the discipline,
            determination, and passion that define Buruburu Sports.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
