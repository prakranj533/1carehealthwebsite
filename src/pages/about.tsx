import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const milestones = [
  {
    year: "2022",
    title: "Prototype built after a midnight emergency",
    description:
      "1Care Health began as a side-project to decode confusing lab results when no doctor was available overnight.",
  },
  {
    year: "2023",
    title: "Clinicians join the loop",
    description:
      "Specialists across endocrinology, cardiology, and mental wellness collaborated with us to embed clinical judgement into every response.",
  },
  {
    year: "2024",
    title: "Families adopt the always-on companion",
    description:
      "Thousands of households started leaning on 1Care Health to coordinate vitals, medications, and everyday reassurance.",
  },
  {
    year: "2025",
    title: "Operational in hospitals and at home",
    description:
      "Integrated handoffs between AI guidance and human doctors now power personalised plans around the clock.",
  },
];

const advisors = [
  {
    name: "Dr. Ananya Kapoor, MD",
    role: "Endocrinologist",
    quote: "Clear, timely decision support makes a measurable difference for metabolic care.",
  },
  {
    name: "Dr. Rohan Bhave, PhD",
    role: "Clinical AI Researcher",
    quote: "Safety-first automation, transparent reasoning, and human escalation are non-negotiable here.",
  },
  {
    name: "Dr. Sara D'Souza",
    role: "Psychiatrist",
    quote: "Whole-body health stays balanced when emotional context matters as much as data points.",
  },
];

const AboutPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main className="pt-28 lg:pt-32 pb-20">
      <div className="container mx-auto px-4 pb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white"
        >
          <span className="text-lg leading-none">←</span>
          <span>Back Home</span>
        </Link>
      </div>

      <section className="container mx-auto px-4 pb-16">
        <div className="w-full space-y-6 rounded-3xl border border-emerald-100/70 bg-[linear-gradient(135deg,#e6f1ef,#b6d1cf,#8fb8ba)] p-10 shadow-md">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">About 1Care Health</h1>
          <p className="text-base leading-relaxed text-slate-600">
            1Care Health is a calm, always-on health companion built for modern families that juggle work, care, and late-night uncertainty. We translate symptoms, labs, and lifestyle context into practical next steps.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            Our product combines clinical guardrails, behavioural science, and human warmth. When escalation is needed, we loop in clinicians with concise context so they can act fast.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Milestones</h2>
          <div className="mt-6 space-y-5">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-[120px_1fr]">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600">
                  {milestone.year}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{milestone.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Clinical advisory voices</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600/90">{advisor.role}</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{advisor.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">“{advisor.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Where we are headed next</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We are deepening personalised prevention, integrating with hospital EHR systems, and supporting more languages so care feels inclusive. If you want to shape people-first health journeys, let us talk.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/discover"
              className="rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-950 transition hover:-translate-y-0.5 hover:shadow"
            >
              Explore Platform
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-700 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default AboutPage;
