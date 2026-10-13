import { ArrowDown, Check } from "lucide-react";

const careSteps = [
  {
    title: "Visit your local e-clinic",
    description: "Meet the care team at an e-clinic or start with a virtual appointment from home.",
  },
  {
    title: "A nurse checks your vital signs",
    description: "A trained nurse records your basic health measures and prepares your visit.",
  },
  {
    title: "Connect with your doctor",
    description: "Your nurse connects you to a doctor for a focused consultation and care plan.",
  },
  {
    title: "Get support with your medicines",
    description: "A pharmacist helps explain your medicines and answers questions about your prescription.",
  },
  {
    title: "Your prescription, sent digitally",
    description: "Your digital prescription is sent to your mobile so it's ready when you need it.",
  },
];

export const HowItWorks = () => (
  <section id="how-it-works" className="scroll-mt-20 bg-background px-4 py-20 md:py-24">
    <div className="container mx-auto max-w-7xl">
      <div className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">How it works</p>
        <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">A simple path from question to care</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          A connected care team helps you move through each step with clarity and confidence.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16">
        <div className="space-y-3">
          {careSteps.map((step, index) => (
            <details key={step.title} open={index === 0} className="group rounded-2xl border border-border bg-white px-5 shadow-sm open:border-primary/35 open:shadow-md">
              <summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--surface-tint))] text-sm font-semibold text-primary">0{index + 1}</span>
                <span className="flex-1 text-base font-semibold text-foreground md:text-lg">{step.title}</span>
                <ArrowDown className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-5 pl-14 pr-4 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </details>
          ))}
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-[2rem] border-r-4 border-t-4 border-[hsl(var(--accent))]" />
          <img src="/images/nirog-history.jpg" alt="A doctor connecting with a patient during a digital consultation" className="relative z-10 aspect-[1.08] w-full rounded-3xl object-cover shadow-[0_28px_70px_-40px_rgba(41,61,77,0.45)]" />
          <div className="absolute -bottom-5 left-5 z-20 flex items-center gap-3 rounded-2xl border border-white bg-white px-5 py-4 shadow-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-5 w-5" /></span>
            <span className="text-sm font-semibold text-foreground">Care that stays connected</span>
          </div>
        </div>
      </div>

      {/* <div className="absolute -left-12 top-6 hidden w-56 rounded-2xl bg-white/70 px-4 py-3 text-left text-sm font-medium text-foreground shadow-xl backdrop-blur lg:block">
          Decode lab markers with easy explanations.
        </div> */}
      {/* <div className="absolute -right-12 top-24 hidden w-60 rounded-2xl bg-white/70 px-4 py-3 text-left text-sm font-medium text-foreground shadow-xl backdrop-blur lg:block">
          Get personalised action steps and lifestyle checklists.
        </div> */}
      {/* <div className="absolute -right-10 bottom-10 hidden w-56 rounded-2xl bg-white/75 px-4 py-3 text-left text-sm font-medium text-foreground shadow-xl backdrop-blur lg:block">
          Connect with trusted doctors when you need extra help.
        </div> */}
    </div>
  </section>
);
