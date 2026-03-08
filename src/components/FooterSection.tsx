const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-display text-2xl text-foreground">Emanuel Ebei</span>
          <span className="text-muted-foreground text-sm ml-3">· No. 9</span>
        </div>
        <p className="text-muted-foreground text-xs tracking-wider">
          © {new Date().getFullYear()} — Buruburu Sports
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
