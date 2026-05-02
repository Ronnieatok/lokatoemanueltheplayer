import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedMessage) return;

    const text = encodeURIComponent(
      `Hi Emanuel, my name is ${trimmedName}. ${trimmedMessage}`
    );
    window.open(`https://wa.me/254100958297?text=${text}`, "_blank");
    setName("");
    setMessage("");
  };

  return (
    <section className="section-spacer px-4 border-t border-border">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="spaced-letters text-primary mb-4">Get in Touch</p>
          <h2 className="text-display text-4xl sm:text-5xl md:text-7xl text-foreground">
            Contact
          </h2>
          <p className="text-body text-muted-foreground mt-4 text-sm leading-relaxed">
            Whether you're a fan, scout, or potential partner — reach out
            directly via WhatsApp.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="spaced-letters text-muted-foreground block mb-2"
            >
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              required
              className="w-full bg-card border border-border px-4 py-3 text-foreground text-body text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="spaced-letters text-muted-foreground block mb-2"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={1000}
              required
              rows={5}
              className="w-full bg-card border border-border px-4 py-3 text-foreground text-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-body text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            <Send size={16} />
            Send via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
