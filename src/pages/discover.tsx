import { ArrowRight, ShieldCheck, Sparkles, Timer, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const launchHighlights = [
  {
    icon: Timer,
    title: "Care that keeps pace",
    description: "Get help making sense of health questions, reports, and the next steps to discuss with your care team.",
  },
  {
    icon: Zap,
    title: "Your whole picture, together",
    description: "Bring lab results, care notes, and everyday goals into one clearer view of your health.",
  },
  {
    icon: ShieldCheck,
    title: "People-first by design",
    description: "Thoughtful technology supports—not replaces—the guidance of qualified healthcare professionals.",
  },
];

const waitlistPerks = [
  "A clearer summary of your health information",
  "Practical questions to take to your next appointment",
  "A connected view of care plans and everyday goals",
];

const DiscoverPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main className="px-4 pb-24 pt-32">
      <section className="container relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border-t-4 border-[hsl(var(--accent))] bg-white p-8 shadow-[0_30px_80px_-54px_rgba(41,61,77,0.35)] sm:p-12 lg:p-16">
        <div className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-[hsl(var(--surface-tint))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-4 w-4" /> Discover 1Care Health
            </span>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-foreground md:text-5xl">
              A more connected way to care for your health.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Picture your health history, care team, and wellness goals coming together in one calm, easy-to-understand place. 1Care Health helps you turn questions into more confident conversations and thoughtful next steps.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                Talk with our team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/tools" className="inline-flex items-center rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
                Explore health tools
              </Link>
            </div>
          </div>

          <div className="relative space-y-3 rounded-[1.75rem] bg-[hsl(var(--surface-tint))] p-5 sm:p-7">
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-[1.75rem] bg-primary" />
            {launchHighlights.map((item) => (
              <article key={item.title} className="flex gap-4 rounded-2xl border border-white bg-white p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="space-y-1.5">
                  <h2 className="text-sm font-semibold text-foreground">{item.title}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border-t-4 border-[hsl(var(--accent))] bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold text-foreground">A little more clarity, wherever you are</h2>
          <ul className="mt-6 space-y-4">
            {waitlistPerks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                {perk}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl bg-[hsl(var(--surface-tint))] p-5 text-sm leading-relaxed text-foreground/80">
            1Care Health brings health information into focus so you can spend less time decoding details and more time making informed decisions with your care team.
          </div>
        </div>

        <div className="relative min-h-72 overflow-hidden rounded-[2rem] bg-cover bg-center shadow-sm" style={{ backgroundImage: "url('/images/nirog-care.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#293d4f]/90 via-[#293d4f]/35 to-transparent" />
          <div className="relative flex h-full min-h-72 flex-col justify-end gap-4 p-8 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">The 1Care Health approach</p>
            <blockquote className="max-w-lg text-xl font-semibold leading-relaxed">
              Care feels clearer when the whole picture comes together.
            </blockquote>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default DiscoverPage;
