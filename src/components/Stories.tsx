import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya & Dr. Rao",
    role: "PCOS journey · 6 month coaching",
    quote: "1Care Health turned confusing lab spikes into a care roadmap both my endocrinologist and nutritionist could follow in minutes.",
  },
  {
    name: "Rahul Sharma",
    role: "Care team member",
    quote: "Weekly trend briefs helped my cardiologist adjust my care plan. I finally feel like someone's helping me make sense of the details.",
  },
  {
    name: "Maya & Aarav",
    role: "Family care members",
    quote: "The live chat summaries meant we walked into the clinic already aligned on next steps. No more scribbling frantic notes.",
  },
];

const careGallery = [
  { image: "/images/nirog-care.jpg", alt: "A doctor meeting with a patient and family" },
  { image: "/images/nirog-history.jpg", alt: "A clinician supporting a patient online" },
  { image: "/images/nirog-symptom.jpg", alt: "A healthcare professional caring for a patient" },
];

export const Stories = () => (
  <section id="stories" className="scroll-mt-20 bg-white px-4 py-20 md:py-24">
    <div className="container mx-auto max-w-7xl">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Kind words</p>
        <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">What clients say</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">Thoughtful care makes a difference in every health journey.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="flex h-full flex-col rounded-2xl border-t-4 border-t-[hsl(var(--accent))] bg-[hsl(var(--surface-tint))] p-6 sm:p-7">
            <Quote className="h-7 w-7 text-primary/70" />
            <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/85">“{testimonial.quote}”</blockquote>
            <div className="mt-6 flex items-end justify-between gap-3 border-t border-border pt-4">
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
              <div className="flex gap-0.5 text-[hsl(var(--accent))]" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-3.5 w-3.5 fill-current" />)}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {careGallery.map((item) => (
          <img key={item.image} src={item.image} alt={item.alt} className="aspect-[1.5] w-full rounded-xl object-cover" loading="lazy" />
        ))}
      </div>
    </div>
  </section>
);
