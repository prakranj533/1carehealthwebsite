import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-white">
      <nav className="container mx-auto flex min-h-20 items-center justify-between gap-6 px-4">
        <Link to="/" aria-label="1Care Health home" className="shrink-0">
          <img src="/logos/1care-health.svg" alt="1Care Health" className="h-12 w-auto" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <Link to="/" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">Home</Link>
          <Link to="/about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">About us</Link>
          <a href="/#stories" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">Stories</a>
          <a href="/#services" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">Services</a>
          <Link to="/contact" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">Contact us</Link>
        </div>

        <div className="hidden lg:block">
          <Button asChild size="sm" className="rounded-full px-5">
            <Link to="/contact">Let's talk</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition hover:bg-muted lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {mobileMenuOpen && (
          <div className="absolute inset-x-0 top-full space-y-1 border-b border-border bg-white px-4 pb-4 pt-2 shadow-lg lg:hidden">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted">Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted">About us</Link>
            <a href="/#stories" onClick={() => setMobileMenuOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted">Stories</a>
            <a href="/#services" onClick={() => setMobileMenuOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted">Services</a>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted">Contact us</Link>
            <Button asChild className="mt-2 w-full rounded-full">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Let's talk</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
