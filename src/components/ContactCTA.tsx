import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ContactCTA = () => (
  <section id="contact-cta" className="relative scroll-mt-20 overflow-hidden bg-primary px-4 py-20 text-center md:py-24">
    <div aria-hidden className="absolute -left-[5%] -top-10 h-16 w-[110%] rounded-[50%] bg-background" />
    <div aria-hidden className="absolute -bottom-10 -left-[5%] h-16 w-[110%] rounded-[50%] bg-white" />
    <div className="container relative mx-auto max-w-5xl py-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Let's talk</p>
      <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
        Tell us the health story or concern that’s on your mind.
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
        We're here to listen, answer your questions, and help you find the right next step.
      </p>
      <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
        Let’s talk <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </section>
);
