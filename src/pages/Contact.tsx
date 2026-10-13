import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="px-4 pb-20 pt-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">We're here to help</span>
            <h1 className="mt-3 text-4xl font-bold text-foreground">Talk to 1Care Health</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Have a question or feedback? Send us a note and our team will be in touch.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border-t-4 border-[hsl(var(--accent))] bg-white p-7 shadow-[0_24px_70px_-48px_rgba(41,61,77,0.32)] sm:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">Full name</label>
                <Input id="name" type="text" placeholder="Your name" className="w-full" required />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">Email address</label>
                <Input id="email" type="email" placeholder="you@example.com" className="w-full" required />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">Subject</label>
              <Input id="subject" type="text" placeholder="How can we help?" className="w-full" required />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
              <Textarea id="message" placeholder="Type your message here…" rows={5} className="w-full" required />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="submit" className="rounded-full px-6">Send message</Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link to="/">Back to home</Link>
              </Button>
            </div>
          </form>

          <div className="mt-8 rounded-2xl border border-white bg-white/80 p-6 text-center shadow-sm">
            <h2 className="font-semibold text-foreground">Prefer email?</h2>
            <a href="mailto:prakranj@1carehealth.co" className="mt-2 inline-block text-sm font-medium text-primary hover:underline">prakranj@1carehealth.co</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
