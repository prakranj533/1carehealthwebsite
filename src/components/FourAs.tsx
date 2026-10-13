import { Accessibility, BadgeCheck, HeartHandshake, Wallet } from "lucide-react";

const principles = [
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "Care should be easy to reach, wherever you live and whatever your circumstances.",
  },
  {
    icon: Wallet,
    title: "Affordability",
    description: "Clear, practical healthcare options should come with transparent costs.",
  },
  {
    icon: HeartHandshake,
    title: "Availability",
    description: "Support should be there when you need it, with digital and community-based care.",
  },
  {
    icon: BadgeCheck,
    title: "Accountability",
    description: "We build trust through integrity, responsible care, and clear communication.",
  },
];

export const FourAs = () => (
  <section id="four-as" className="scroll-mt-20 bg-[hsl(var(--surface-tint))] px-4 py-20 md:py-24">
    <div className="container mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">The 1Care Health difference</p>
        <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">The 4 As of 1Care Health</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Every decision we make is guided by four simple commitments that keep people at the centre of care.
        </p>
        <div className="h-1 w-20 rounded-full bg-[hsl(var(--accent))]" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {principles.map((principle, index) => (
          <article key={principle.title} className="flex gap-4 rounded-2xl border border-white bg-white p-5 shadow-sm">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <principle.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--accent))]">0{index + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
