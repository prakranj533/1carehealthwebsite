import { HeartPulse, MapPin, ShieldCheck, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Telemedicine",
    description: "Speak with a healthcare professional from wherever you feel most comfortable.",
  },
  {
    icon: MapPin,
    title: "E-clinics",
    description: "Connected local clinics bring virtual consultations closer to your community.",
  },
  {
    icon: HeartPulse,
    title: "Health camps",
    description: "Community health camps make screenings, education, and support easier to reach.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive healthcare",
    description: "Build healthy habits and stay ahead with practical, preventive care.",
  },
];

export const Stats = () => (
  <section id="services" className="scroll-mt-20 bg-background px-4 py-20 md:py-24">
    <div className="container mx-auto">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">What we do</p>
        <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">Featured services</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Thoughtful care, delivered in ways that fit real lives and real communities.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article key={service.title} className="group rounded-2xl border-t-4 border-t-[hsl(var(--accent))] bg-white p-6 shadow-[0_20px_55px_-42px_rgba(41,61,77,0.35)] transition-transform hover:-translate-y-1">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <service.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-foreground">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
