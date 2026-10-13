import { MessageCircle, Sparkles, Users } from "lucide-react";

const features = [
  {
    id: "01",
    tag: "Medical History Review",
    title: "Your second brain for health—1Care Health recalls the details you miss.",
    description:
      "Upload bloodwork, prescriptions, and visit notes. 1Care Health organises trends and highlights the questions worth asking.",
    accent: "from-[#57c1c7]/25 via-[#f49a1e]/10 to-transparent",
    image: "/images/nirog-history.jpg",
    imageAlt: "Healthcare professional reviewing digital medical records",
  },
  {
    id: "02",
    tag: "Symptom Checking & Differential Diagnosis",
    title: "Understand symptoms. Explore causes. Know what to ask your doctor.",
    description:
      "Turn vague symptoms into clear next steps. 1Care Health explains likely reasons, urgency, and recommended follow-ups in plain language.",
    accent: "from-[#57c1c7]/25 via-[#f49a1e]/10 to-transparent",
    image: "/images/nirog-symptom.jpg",
    imageAlt: "Woman consulting about health symptoms on couch",
    imagePosition: "center 35%",
  },
  {
    id: "03",
    tag: "Care Navigation & Specialist Guidance",
    title: "Know exactly where, when, and whom to seek for tailored care.",
    description:
      "1Care Health matches your report summary with local experts, tele-consults, and vetted lifestyle programs personalised to you.",
    accent: "from-blue-500/20 via-blue-400/10 to-transparent",
    image: "/images/nirog-care.jpg",
    imageAlt: "Patient discussing care plan with clinician",
    imagePosition: "center 40%",
  },
  {
    id: "04",
    tag: "Lab Report & Prescription Analysis",
    title: "Tired of medical jargon? Get clarity when you're confused.",
    description:
      "1Care Health decodes your labs in context, explains risk levels, and suggests daily habits that support your treatment plan.",
    accent: "from-teal-500/20 via-teal-400/10 to-transparent",
    image: "/images/nirog-labs.jpg",
    imageAlt: "Lab technician holding test results",
  },
  {
    id: "05",
    tag: "Second Opinion",
    title: "Eliminate doubt; verify treatment options before you commit.",
    description:
      "Compare plans from your care team with evidence-backed alternatives. 1Care Health helps you ask the right clarifying questions before saying yes.",
    accent: "from-lime-500/25 via-lime-400/10 to-transparent",
    image: "/images/nirog-opinion.jpg",
    imageAlt: "Doctor reviewing treatment options with patient",
  },
  {
    id: "06",
    tag: "Whole Health Planning",
    title: "Design a smart health plan for your whole self—not just what's hurting.",
    description:
      "1Care Health blends lab data, lifestyle context, and goals to suggest routines that balance nutrition, movement, sleep, and stress management.",
    accent: "from-amber-500/20 via-amber-400/10 to-transparent",
    image: "/images/nirog-care.jpg",
    imageAlt: "Person planning healthy meals and lifestyle goals",
    imagePosition: "center 45%",
  },
  {
    id: "07",
    tag: "Smart Product Guidance",
    title: "Find exactly what your body needs without guesswork.",
    description:
      "From supplements to at-home devices, 1Care Health curates evidence-based options matched to your biomarkers, budget, and preferences.",
    accent: "from-purple-500/20 via-purple-400/10 to-transparent",
    image: "/images/nirog-symptom.jpg",
    imageAlt: "Woman comparing wellness products on shelf",
  },
  {
    id: "08",
    tag: "Medication Adherence",
    title: "Never miss your meds again—1Care Health remembers, even when you don't.",
    description:
      "Track refills, dose timings, and interactions automatically. Receive contextual reminders tied to meals, routines, and upcoming labs.",
    accent: "from-rose-500/20 via-rose-400/10 to-transparent",
    image: "/images/nirog-history.jpg",
    imageAlt: "Hands sorting daily medication doses",
    imagePosition: "center 40%",
  },
  {
    id: "09",
    tag: "Care Team Companion",
    title: "One place for every specialist's advice—stitched together for you.",
    description:
      "Upload discharge summaries, therapy notes, and nutrition plans. 1Care Health connects each expert's guidance into a unified, living care journal you can share in seconds.",
    accent: "from-emerald-700/60 via-emerald-500/25 to-emerald-400/10",
    image: "/images/nirog-care.jpg",
    imageAlt: "Diverse healthcare team smiling",
    imagePosition: "center 45%",
    layout: "wide",
  },
];

export const FeaturesShowcase = () => {
  return (
    <section id="features" className="relative scroll-mt-20 bg-[hsl(var(--surface-tint))] px-4 py-20 md:py-24">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          Connected care for every day
        </p>
        <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
          More ways we support your health.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          From understanding reports to staying on top of everyday care, discover support built around the whole you.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {features.map((feature) =>
            feature.layout === "wide" ? (
              <article
                key={feature.id}
                className="group relative col-span-full overflow-hidden rounded-[40px] border border-white border-t-4 border-t-[hsl(var(--accent))] bg-slate-900/20 text-left shadow-[0_45px_120px_-60px_rgba(15,23,42,0.55)] transition-transform duration-500 hover:-translate-y-1 md:min-h-[360px]"
              >
                <div className="absolute inset-0">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${feature.image})`,
                      backgroundPosition: feature.imagePosition ?? "center",
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.accent}`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/35 to-transparent" />
                </div>

                <div className="relative flex h-full flex-col justify-between gap-10 p-8 text-white md:flex-row md:p-12">
                  <div className="flex max-w-xl flex-1 flex-col gap-6">
                    <div className="flex items-center gap-3 text-white/85">
                      <span className="text-5xl font-bold">{feature.id}</span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
                        <MessageCircle className="h-3.5 w-3.5" />
                        {feature.tag}
                      </span>
                    </div>
                    <h3 className="text-3xl font-semibold leading-tight text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/80">
                      {feature.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/85">
                      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/15 px-3 py-1">
                        <Users className="h-3 w-3" />
                        Specialists connected
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/15 px-3 py-1">
                        <Sparkles className="h-3 w-3" />
                        Auto-synchronised insights
                      </span>
                    </div>
                  </div>

                  <div className="flex w-full items-end md:w-auto">
                    <div className="ml-auto w-full max-w-xs space-y-4 rounded-3xl border border-white/15 bg-white/12 p-5 text-sm text-white/85 backdrop-blur">
                      <p className="font-semibold text-white">Multi-expert snapshot</p>
                      <div className="rounded-2xl border border-white/20 bg-slate-950/40 p-4 text-xs">
                        <div className="flex items-center justify-between text-white/80">
                          <span>Next consult</span>
                          <span className="text-emerald-300">Dr. Mehta · Tomorrow</span>
                        </div>
                        <div className="mt-3 space-y-2 text-white/70">
                          <div className="flex items-start justify-between gap-3">
                            <span>Vitals</span>
                            <span>Stable · 96% adherence</span>
                          </div>
                          <div className="flex items-start justify-between gap-3">
                            <span>Therapy</span>
                            <span>Session recap synced</span>
                          </div>
                          <div className="flex items-start justify-between gap-3">
                            <span>Nutrition</span>
                            <span>Checklist updated</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs leading-relaxed">
                        1Care Health keeps every doctor, therapist, and coach aligned so you walk in knowing exactly what to discuss next.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ) : (
              <article
                key={feature.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white border-t-4 border-t-[hsl(var(--accent))] bg-white/95 text-left shadow-[0_40px_90px_-50px_rgba(15,23,42,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_55px_120px_-60px_rgba(15,23,42,0.55)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-cover transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${feature.image})`,
                      backgroundPosition: feature.imagePosition ?? "center",
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-70`} />
                  <span className="sr-only">{feature.imageAlt}</span>
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between px-7 pt-6 text-white drop-shadow-[0_6px_20px_rgba(15,23,42,0.45)]">
                    <span className="text-3xl font-bold">{feature.id}</span>
                    <span className="flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
                      <MessageCircle className="h-3.5 w-3.5" />
                      {feature.tag}
                    </span>
                  </div>
                </div>

                <div
                  className={`pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 bg-gradient-to-b ${feature.accent} blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative flex flex-1 flex-col gap-6 p-8">
                  <h3 className="text-xl font-semibold leading-7 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>

                  <div className="mt-auto flex items-center gap-4 rounded-2xl border border-primary/10 bg-primary/5 p-4 text-sm text-foreground shadow-inner">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                        <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                        Live chat preview
                      </div>
                      <p className="text-xs text-muted-foreground">
                        1Care Health summarises your concern, highlights key markers, and drafts next steps you can share instantly.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};
