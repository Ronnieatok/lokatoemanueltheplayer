import { Instagram, MessageCircle } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-display text-2xl text-foreground">Emanuel Ebei</span>
          <span className="text-muted-foreground text-sm ml-3">· No. 9</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/18._.ebel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://wa.me/254100958297"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>

        <p className="text-muted-foreground text-xs tracking-wider">
          © {new Date().getFullYear()} — Buruburu Sports
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
