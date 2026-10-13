import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, DollarSign, MessageCircle, Shield } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
const heroHeadlines = ["Revolutionizing Healthcare Digitally"];

export const Hero = () => {
  const [animationCycle, setAnimationCycle] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const previousTimeRef = useRef(0);
  const headlineTimersRef = useRef<number[]>([]);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [headlineVisible, setHeadlineVisible] = useState(true);
  const labelTimersRef = useRef<number[]>([]);
  const [labelText, setLabelText] = useState("Solution");
  const [labelPhase, setLabelPhase] = useState<"solution" | "transition" | "final">("solution");

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const handleTimeUpdate = () => {
      const current = videoEl.currentTime;
      const previous = previousTimeRef.current;

      // Detect video loop by current time resetting to near zero.
      if (previous - current > 0.3 || (previous > 1 && current < 0.2)) {
        setAnimationCycle((cycle) => cycle + 1);
      }

      previousTimeRef.current = current;
    };

    videoEl.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      videoEl.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  useEffect(() => {
    const DISPLAY_MS = 4200;
    const FADE_MS = 500;

    headlineTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    labelTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    labelTimersRef.current = [];

    const isLast = headlineIndex === heroHeadlines.length - 1;
    if (isLast) {
      setHeadlineVisible(true);
      setLabelText("Solution");
      setLabelPhase("solution");

      const fadeTimer = window.setTimeout(() => setLabelPhase("transition"), 2000);
      const swapTimer = window.setTimeout(() => {
        setLabelText("1Care Health");
        setLabelPhase("final");
      }, 2300);

      labelTimersRef.current.push(fadeTimer, swapTimer);
      return () => {
        labelTimersRef.current.forEach((timer) => window.clearTimeout(timer));
        labelTimersRef.current = [];
        setLabelPhase("solution");
      };
    }

    const fadeTimeout = window.setTimeout(() => setHeadlineVisible(false), Math.max(0, DISPLAY_MS - FADE_MS));
    const changeTimeout = window.setTimeout(() => {
      setHeadlineIndex((prev) => Math.min(prev + 1, heroHeadlines.length - 1));
      setHeadlineVisible(true);
      setLabelText("Solution");
      labelTimersRef.current.forEach((timer) => window.clearTimeout(timer));
      labelTimersRef.current = [];
      setLabelPhase("solution");
    }, DISPLAY_MS);

    headlineTimersRef.current.push(fadeTimeout, changeTimeout);

    return () => {
      headlineTimersRef.current.forEach((timer) => window.clearTimeout(timer));
      headlineTimersRef.current = [];
    };
  }, [headlineIndex]);

  useEffect(() => {
    return () => {
      headlineTimersRef.current.forEach((timer) => window.clearTimeout(timer));
      headlineTimersRef.current = [];
      labelTimersRef.current.forEach((timer) => window.clearTimeout(timer));
      labelTimersRef.current = [];
    };
  }, []);

  const totalItems = heroHeadlines.length;
  const progress = ((headlineIndex + 1) / totalItems) * 100;
  const progressLabel = labelText || "Solution";
  const progressLabelClass = `hero-ticker-label ${labelPhase === "transition" ? "hero-ticker-label--transition" : ""} ${labelPhase === "final" ? "hero-ticker-label--solution" : ""}`;

  return (
    <section className="relative flex min-h-[580px] items-center justify-center overflow-hidden bg-[#293d4f] md:min-h-[650px]">
      {/* Background Media */}
      <div className="absolute inset-0">
        <img
          src="/images/nirog-care.jpg"
          alt="A doctor speaking with a patient and family at a clinic"
          className="h-full w-full object-cover object-center"
        />
        {/*
        <img
          src={heroImage}
          alt="Woman using health app"
          className="absolute inset-0 h-full w-full object-cover"
        />
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#182a32]/90 via-[#182a32]/70 to-[#182a32]/25" />
      </div>
      
      {/* Dynamic overlay bubbles */}
      <div key={animationCycle} className="pointer-events-none absolute inset-0 hidden">
        <article
          className="hero-bubble hero-bubble-floating absolute top-[22%] right-[6%] w-56 rounded-[28px] border border-emerald-300/40 bg-emerald-200/75 p-4 text-[12px] font-medium text-emerald-950 shadow-[0_18px_45px_-38px_rgba(16,185,129,0.55)]"
          style={{
            "--hero-tilt": "4deg",
          } as CSSProperties}
        >
          <div className="hero-message-sequence">
            <p className="hero-message hero-message--initial">
              I’ve organized your latest health updates. Ready to review your personal health brief?
            </p>

            <div className="hero-message hero-message--typing">
              <span className="hero-typing-dots">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="hero-typing-label">typing…</span>
            </div>

            <p className="hero-message hero-message--reply">Yes, please send the brief.</p>

            <div className="hero-message hero-message--review">
              <span className="hero-review-icon">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              <div className="hero-review-copy">
                <span className="hero-review-title">360° brief ready</span>
                <p>Your personalized update is waiting. Tap to review.</p>
              </div>
            </div>
          </div>
        </article>

        <article
          className="hero-bubble hero-bubble-floating absolute top-[40%] right-[12%] w-48 rounded-[26px] border border-cyan-300/45 bg-cyan-200/80 px-4 py-3 text-[11px] font-semibold text-cyan-900 shadow-[0_18px_45px_-35px_rgba(56,189,248,0.5)]"
          style={{
            "--hero-tilt": "-6deg",
          } as CSSProperties}
        >
          HbA1c trend flagged · Doctors synced across endocrinology + nutrition.
        </article>

        <article
          className="hero-bubble hero-bubble-floating absolute bottom-[10%] right-[6%] w-52 rounded-[22px] border border-cyan-200/45 bg-white/14 px-3 py-2.5 text-[9px] text-slate-100 shadow-[0_18px_50px_-36px_rgba(2,132,199,0.55)] backdrop-blur-xl"
          style={{
            "--hero-tilt": "-3deg",
          } as CSSProperties}
        >
          <div className="relative overflow-hidden rounded-[20px] border border-cyan-200/40 bg-white/14 p-2.5">
            <div className="space-y-2 filter blur-[1.35px] opacity-78">
              <div className="space-y-1 text-left">
                <p className="text-[12px] font-semibold text-cyan-100/82">Doctor's Report</p>
                <p className="text-[10px] text-cyan-50/70 leading-tight">
                  Your care plan is ready to review with your health team.
                </p>
              </div>

              <div className="rounded-[14px] border border-white/40 bg-white/82 p-2 shadow-[0_16px_42px_-48px_rgba(15,23,42,0.48)]">
                <div className="grid gap-1.5 text-[8.8px] text-slate-600/75">
                  <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-1.5">
                    <div className="rounded-xl bg-emerald-50/84 px-2.5 py-1.5 font-semibold text-emerald-700/75">HbA1c · 5.6%</div>
                    <div className="rounded-xl bg-emerald-100/78 px-2.5 py-1.5 text-emerald-800/75">Improving</div>
                    <div className="rounded-xl border border-emerald-200/60 px-2.5 py-1.5 text-slate-600/75">Share with cardio</div>
                  </div>
                  <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-1.5">
                    <div className="rounded-xl bg-emerald-50/84 px-2.5 py-1.5 font-semibold text-emerald-700/75">CRP · 0.6 mg/L</div>
                    <div className="rounded-xl bg-amber-100/78 px-2.5 py-1.5 text-amber-700/75">Monitor closely</div>
                    <div className="rounded-xl border border-amber-200/60 px-2.5 py-1.5 text-slate-600/75">Repeat labs · 4 wks</div>
                  </div>
                </div>
              </div>
            </div>

            <button className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-slate-900/78 px-3 py-0.5 text-[8.8px] font-semibold text-white/88 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.7)] transition hover:scale-[1.03]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-3 w-3"
              >
                <path d="M12 3v12m0 0 4-4m-4 4-4-4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </svg>
              Download report
            </button>
          </div>
        </article>

        {/* <article
          className="hero-bubble hero-bubble-floating absolute bottom-[26%] left-[45%] w-42 rounded-[24px] border border-rose-300/45 bg-rose-200/85 px-3.5 py-2.5 text-[10px] font-semibold text-rose-900 shadow-[0_16px_42px_-35px_rgba(244,114,182,0.35)]"
          style={{
            "--hero-tilt": "6deg",
          } as CSSProperties}
        >
          Thyroid panel ready · swipe to compare endocrinologist insights.
        </article> */}

        {/* <article
          className="hero-bubble hero-bubble-floating absolute bottom-[18%] left-[33%] flex w-52 items-center gap-2.5 rounded-[26px] border border-emerald-300/45 bg-slate-900/78 px-4 py-3 text-[11px] text-emerald-200 shadow-[0_20px_52px_-28px_rgba(16,185,129,0.32)]"
          style={{
            "--hero-tilt": "-2deg",
          } as CSSProperties}
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
            <MessageCircle className="h-3.5 w-3.5" />
          </span>
          Guided 360° health brief is live. Tap to review with August.
        </article> */}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto w-full max-w-7xl px-4 py-24 md:py-28">
        <div className="w-full max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Care for every part of life</p>
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            <span className={`hero-headline ${headlineVisible ? "hero-headline--visible" : "hero-headline--hidden"}`}>
              {heroHeadlines[headlineIndex]}
            </span>
          </h1>

          <div className="hidden">
            <span className="text-[11px] uppercase tracking-[0.26em] text-primary">
              Health guide
            </span>
            <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-primary/15">
              <div className={`hero-ticker-indicator ${headlineIndex === totalItems - 1 ? "hero-ticker-indicator--final" : ""}`} style={{ width: `${progress}%` }} />
            </div>
            <span className={progressLabelClass}>{progressLabel}</span>
          </div>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            We make quality healthcare easier to reach through digital consultations, community clinics, and preventive care—guided by integrity and empathy.
          </p>
          
          <div className="mb-10 flex flex-col gap-2.5 md:flex-row md:items-center md:gap-3.5">
            <a
              href="/contact"
              className="care-cta flex h-11 w-fit items-center gap-2.5 rounded-full border border-primary/40 px-4 py-2 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="care-cta__icon flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary">
                <MessageCircle className="h-4 w-4" />
              </span>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/80">Here for you</span>
                <span className="text-[13px] font-semibold text-white">We are accessible</span>
              </div>
            </a>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-2.5 md:gap-3">
              {/* <a
                href="#features"
                className="flex h-11 items-center gap-2.5 rounded-full border border-white/35 bg-white/90 px-4 py-2 text-[13px] font-semibold text-foreground shadow-[0_10px_26px_-20px_rgba(15,23,42,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-22px_rgba(15,23,42,0.65)]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/8 bg-white">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    alt="Apple"
                    className="h-4 w-4 object-contain"
                  />
                </span>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.3em]">Get it on</span>
                  <span className="text-[13px] font-semibold text-foreground">App Store</span>
                </div>
              </a> */}
              <a
                href="#features"
                className="flex h-11 w-fit items-center gap-2.5 rounded-full border border-white/35 bg-white/90 px-4 py-2 text-[13px] font-semibold text-foreground shadow-[0_10px_26px_-20px_rgba(15,23,42,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-22px_rgba(15,23,42,0.65)]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/8 bg-white">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </span>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.3em]">Discover</span>
                  <span className="text-[13px] font-semibold text-foreground">Our care</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="hidden">
            <div className="flex items-center gap-2 text-foreground/75">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Zero waiting time</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/75">
              <Shield className="w-5 h-5" />
              <span className="text-sm">No insurance needed</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/75">
              <DollarSign className="w-5 h-5" />
              <span className="text-sm">Free of cost</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
