import { motion } from "framer-motion";
import gallery1 from "@/assets/hero-player.jpg";
import gallery2 from "@/assets/portrait.jpg";
import gallery3 from "@/assets/action-shot.jpg";
import gallery4 from "@/assets/gallery-back.jpg";
import gallery5 from "@/assets/gallery-team.webp";

const images = [
  { src: gallery1, alt: "Emanuel Ebei full body portrait on the pitch", span: "md:col-span-2 md:row-span-2" },
  { src: gallery4, alt: "Emanuel Ebei showing Buruburu #18 jersey from behind", span: "" },
  { src: gallery5, alt: "Buruburu Sports team huddle", span: "" },
  { src: gallery3, alt: "Emanuel Ebei in a match duel", span: "md:col-span-2" },
  { src: gallery2, alt: "Emanuel Ebei training with the ball", span: "" },
];

const GallerySection = () => {
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
          <p className="spaced-letters text-primary mb-4">Gallery</p>
          <h2 className="text-display text-4xl sm:text-5xl md:text-7xl text-foreground">
            In Frame
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`overflow-hidden ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
