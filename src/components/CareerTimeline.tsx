import { motion } from "framer-motion";

const timeline = [
  { year: "2015", title: "Youth Academy", description: "Joined Buruburu Sports youth development program, showing exceptional talent in midfield." },
  { year: "2017", title: "First Team Debut", description: "Made his senior debut at just 17, starting as a central midfielder in a league match." },
  { year: "2018", title: "Breakthrough Season", description: "Established himself as the starting CDM, earning recognition for his defensive discipline." },
  { year: "2019", title: "Captain's Armband", description: "Named vice-captain of the squad, a testament to his leadership and consistency." },
  { year: "2021", title: "League Best XI", description: "Selected in the league's Best XI after a dominant season of tackles, interceptions, and assists." },
  { year: "2023", title: "100th Appearance", description: "Reached a century of appearances for Buruburu Sports, cementing his legacy at the club." },
  { year: "2024", title: "Tournament Glory", description: "Led the midfield as Buruburu Sports reached new heights in regional competition." },
];

const CareerTimeline = () => {
  return (
    <section className="section-spacer px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="spaced-letters text-primary mb-4">Journey</p>
          <h2 className="text-display text-4xl sm:text-5xl md:text-7xl text-foreground">
            The road
            <br />
            so far
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`relative flex items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-2.5 h-2.5 bg-primary rounded-full -translate-x-1 md:-translate-x-[5px] mt-1.5 z-10" />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <span className="text-display text-3xl text-primary">{item.year}</span>
                <h3 className="text-display text-xl text-foreground mt-1">{item.title}</h3>
                <p className="text-body text-muted-foreground text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
