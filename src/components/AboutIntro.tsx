import { ArrowRight, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutIntro = () => (
  <section id="about" className="scroll-mt-20 bg-white px-4 py-20 md:py-24">
    <div className="container mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="relative mx-auto w-full max-w-xl">
        <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-[2rem] border-l-4 border-t-4 border-[hsl(var(--accent))]" />
        <img src="/images/nirog-care.jpg" alt="A doctor speaking with a patient and family" className="relative z-10 aspect-[1.2] w-full rounded-3xl object-cover shadow-[0_28px_70px_-40px_rgba(41,61,77,0.45)]" />
        <div className="absolute -bottom-8 -right-4 z-20 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block">
          <img src="/images/nirog-symptom.jpg" alt="A clinician caring for a patient" className="aspect-square w-full object-cover" />
        </div>
        <div className="absolute -bottom-4 left-6 z-20 inline-flex items-center gap-2 rounded-full border border-white bg-white px-4 py-3 text-sm font-semibold text-foreground shadow-lg sm:bottom-5">
          <HeartHandshake className="h-5 w-5 text-primary" /> Care, with empathy
        </div>
      </div>

      <div className="space-y-6 lg:pl-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">About 1Care Health</p>
        <h2 className="max-w-xl text-4xl font-bold leading-tight text-foreground md:text-5xl">
          Healthcare should feel personal, connected, and within reach.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          We believe everyone deserves compassionate access to quality healthcare. 1Care Health brings digital consultations, community clinics, health camps, and preventive support together to make the journey to care simpler.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          Our approach is grounded in integrity and empathy—helping people connect with the right care, understand their options, and take the next step with confidence.
        </p>
        <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg">
          More about us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);
