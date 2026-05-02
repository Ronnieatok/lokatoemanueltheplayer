import { motion } from "framer-motion";

const stats = [
  { value: "9", label: "Jersey Number" },
  { value: "CDM", label: "Position" },
  { value: "90%", label: "Pass Accuracy" },
  { value: "85%", label: "Tackle Success" },
];

const StatsSection = () => {
  return (
    <section className="section-spacer px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="spaced-letters text-primary mb-4">Statistics</p>
          <h2 className="text-display text-4xl sm:text-5xl md:text-7xl text-foreground">
            Master of
            <br />
            his craft
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="stat-card p-4 sm:p-6"
            >
              <span className="text-display text-4xl sm:text-5xl md:text-6xl text-primary">
                {stat.value}
              </span>
              <p className="text-body text-muted-foreground text-sm mt-3 tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
