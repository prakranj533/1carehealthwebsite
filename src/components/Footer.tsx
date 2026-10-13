import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t border-border bg-white px-4 py-14">
    <div className="container mx-auto">
      <div className="grid gap-10 border-b border-border pb-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div className="space-y-4">
          <Link to="/" aria-label="1Care Health home" className="inline-flex">
            <img src="/logos/1care-health.svg" alt="1Care Health" className="h-14 w-auto" />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Making thoughtful, connected healthcare more accessible to every community.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-foreground">Explore</h3>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="/#services" className="transition-colors hover:text-primary">Our services</a></li>
            <li><a href="/#how-it-works" className="transition-colors hover:text-primary">How it works</a></li>
            <li><a href="/#stories" className="transition-colors hover:text-primary">Stories</a></li>
            <li><Link to="/tools" className="transition-colors hover:text-primary">Health tools</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-foreground">Company</h3>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="transition-colors hover:text-primary">About us</Link></li>
            <li><Link to="/discover" className="transition-colors hover:text-primary">Discover care</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-primary">Contact us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-foreground">Get in touch</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">Questions about care or partnership?</p>
          <a href="mailto:prakranj@1carehealth.co" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-secondary">
            prakranj@1carehealth.co <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="mt-6 text-xs text-muted-foreground">Privacy and personal data matter to us.</p>
          <Link to="/privacy-policy" className="mt-2 inline-block text-sm font-medium text-primary transition-colors hover:text-secondary">Privacy policy</Link>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} 1Care Health. All rights reserved.</p>
        <p>Care with integrity. Care with empathy.</p>
      </div>
    </div>
  </footer>
);
