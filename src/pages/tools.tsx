import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, DragEvent, FormEvent } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  FileText,
  Image as ImageIcon,
  Loader2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UploadCloud,
} from "lucide-react";

type ChatRole = "assistant" | "user";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  meta?: string;
  timestamp: string;
};

type AnalysisSummary = {
  keyTakeaways: string[];
  meds: string[];
  monitoring: string[];
};

const helperCards = [
  {
    icon: FileText,
    title: "Doctor-ready summaries",
    description:
      "1Care Health highlights prescription intent, key vitals, medicine timings, and red flags your clinician should double-check.",
  },
  {
    icon: ShieldCheck,
    title: "Safety guardrails",
    description:
      "Automatic checks spot duplicate drugs, allergy conflicts, and instructions that clash with your latest lab trends.",
  },
  {
    icon: Stethoscope,
    title: "Follow-up guidance",
    description:
      "Get questions to ask on your next visit, lifestyle tweaks to begin today, and handoff notes you can share in one tap.",
  },
];

const quickPrompts = [
  "Can I combine this dose with my thyroid tablet?",
  "What side effects should I expect in week one?",
  "Which labs do I repeat next month?",
  "Draft a message for my doctor.",
];

const formattedDate = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(new Date());

const ToolsPage = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "Hi there! I'm 1Care Health, your on-call doctor assistant. Drop a prescription and I'll translate it into plain guidance.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisSummary | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [question, setQuestion] = useState("");
  const [isDragActive, setIsDragActive] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const questionInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!chatContainerRef.current) return;
    chatContainerRef.current.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const appendMessage = (partial: Omit<ChatMessage, "id" | "timestamp"> & { timestamp?: string }) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        timestamp: partial.timestamp ?? new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        ...partial,
      },
    ]);
  };

  const synthesiseAnalysis = (fileName: string): AnalysisSummary => ({
    keyTakeaways: [
      "Prescription reviewed • No critical drug conflicts detected.",
      "Hydration + light breakfast suggested before anti-inflammatory dose.",
    ],
    meds: [
      "Tab. Levothyroxine 75mcg • Take at 6:00 AM on empty stomach.",
      "Tab. Metformin 500mg • Twice daily post meals. Watch for gastric discomfort.",
      "Vit-D3 60k IU sachet • Once weekly for 8 weeks, then reassess levels.",
    ],
    monitoring: [
      "Repeat TSH, FT3, FT4 after 6 weeks.",
      "Log fasting blood glucose thrice weekly.",
      "Schedule follow-up with Dr. Rao within 30 days or sooner if symptoms worsen.",
    ],
  });

  const handleAnalysisFlow = (file: File) => {
    setIsAnalyzing(true);
    appendMessage({
      role: "user",
      content: `Uploaded prescription: ${file.name}`,
      meta: `${(file.size / 1024).toFixed(1)} KB • ${file.type || "Unknown format"}`,
    });

    setTimeout(() => {
      const summary = synthesiseAnalysis(file.name);
      setAnalysis(summary);
      appendMessage({
        role: "assistant",
        content:
          "I have analysed your prescription. Key notes: Levothyroxine remains the anchor therapy; Metformin supports sugar control; D3 sachet addresses deficiency. Ask me anything about doses, timing, or lifestyle tweaks.",
      });
      setIsAnalyzing(false);
      questionInputRef.current?.focus();
    }, 1400);
  };

  const handleFiles = (files: FileList | null) => {
    if (!files?.length) return;
    const [file] = files;
    setSelectedFile(file);
    handleAnalysisFlow(file);
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFiles(event.target.files);
    event.target.value = "";
  };

  const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragActive(true);
  };

  const handleDragLeave = () => setIsDragActive(false);

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragActive(false);
    handleFiles(event.dataTransfer.files);
  };

  const handleQuestionSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!question.trim()) return;

    const query = question.trim();
    setQuestion("");
    appendMessage({ role: "user", content: query });

    const answer = (() => {
      if (!analysis) {
        return "Upload a prescription first and I'll break it down before answering follow-up questions.";
      }

      const normalised = query.toLowerCase();
      if (normalised.includes("side effect") || normalised.includes("effect")) {
        return "Metformin can cause mild gastric discomfort initially—pair each dose with meals and stay hydrated. If you notice persistent diarrhoea or dizziness, loop in your doctor immediately.";
      }
      if (normalised.includes("when") || normalised.includes("time")) {
        return "Take Levothyroxine alone at 6:00 AM with water. Space other medicines or breakfast by at least 30 minutes. Evening medicines can stay as prescribed after meals.";
      }
      if (normalised.includes("lab") || normalised.includes("test")) {
        return "Schedule TSH, FT3, FT4 in 6 weeks and add HbA1c alongside fasting glucose to gauge Metformin response.";
      }
      if (normalised.includes("diet") || normalised.includes("food")) {
        return "Prioritise protein-rich breakfasts once your thyroid tablet window is complete. Include leafy greens for iron, and limit refined sugar to support Metformin.";
      }
      return "I've noted your question. Keep me posted on symptoms and I will flag anything that needs clinician review.";
    })();

    setTimeout(() => {
      appendMessage({ role: "assistant", content: answer });
    }, 700);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 pb-24">
        <section id="tools" className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[44px] border border-emerald-100/70 bg-white/95 p-6 shadow-[0_50px_140px_-90px_rgba(16,185,129,0.55)] sm:p-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[-20%] top-[-25%] h-72 w-72 rounded-full bg-emerald-200/40 blur-[120px]" />
              <div className="absolute right-[-18%] bottom-[-30%] h-80 w-80 rounded-full bg-cyan-200/35 blur-[140px]" />
              <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/70 to-white" />
            </div>

            <div className="relative space-y-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                  <CalendarDays className="h-4 w-4" />
                  {formattedDate}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-100/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
                  <Sparkles className="h-4 w-4" />
                  Prescription tools beta
                </span>
              </div>

              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
                <div className="flex h-full flex-col gap-6">
                  <div className="rounded-[32px] border border-emerald-100/70 bg-white/95 p-6 shadow-[0_40px_80px_-70px_rgba(15,118,110,0.6)]">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <MessageCircle className="h-5 w-5" />
                      </span>
                      <div className="space-y-2 text-sm leading-relaxed text-slate-700">
                        <p className="text-base font-semibold text-slate-900">Prescription chat assistant</p>
                        <p>
                          Upload prescriptions to trigger a live doctor-style conversation. I decode medicines, check safety flags, and prepare charts for your next consult.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex min-h-[420px] flex-1 flex-col rounded-[32px] border border-emerald-100/70 bg-white/90 shadow-[0_35px_100px_-80px_rgba(16,185,129,0.45)]">
                    <div className="flex items-center justify-between border-b border-emerald-100/70 px-6 py-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600">Doctor chat</p>
                        <p className="text-sm text-slate-500">Secure session · {selectedFile ? "Prescription synced" : "Awaiting upload"}</p>
                      </div>
                      {isAnalyzing && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-1 text-xs font-medium text-emerald-700">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Analysing
                        </span>
                      )}
                    </div>

                    <div ref={chatContainerRef} className="custom-scrollbar flex-1 space-y-4 overflow-y-auto px-6 py-5">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}>
                          <div
                            className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-lg lg:max-w-[70%] ${
                              message.role === "assistant"
                                ? "bg-emerald-50/95 text-slate-800"
                                : "bg-primary text-primary-foreground"
                            }`}
                          >
                            <p>{message.content}</p>
                            {message.meta && <p className="mt-2 text-xs opacity-75">{message.meta}</p>}
                            <div className={`mt-2 text-[10px] uppercase tracking-[0.25em] ${message.role === "assistant" ? "text-emerald-600/70" : "text-white/70"}`}>
                              {message.timestamp}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleQuestionSubmit} className="border-t border-emerald-100/70 px-6 py-4">
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2">
                          <input
                            ref={questionInputRef}
                            type="text"
                            placeholder="Ask about dosage, timings, red flags…"
                            value={question}
                            onChange={(event) => setQuestion(event.target.value)}
                            className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                          />
                          <Button type="submit" variant="teal" size="sm" disabled={!question.trim()} className="rounded-full px-4 text-xs font-semibold">
                            Ask
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {quickPrompts.map((prompt) => (
                            <button
                              key={prompt}
                              type="button"
                              onClick={() => {
                                setQuestion(prompt);
                                questionInputRef.current?.focus();
                              }}
                              className="rounded-full border border-emerald-200/80 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700 transition hover:-translate-y-0.5 hover:bg-emerald-50"
                            >
                              {prompt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <label
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`group relative flex flex-col items-center justify-center gap-4 rounded-[36px] border border-emerald-100/80 px-8 py-10 text-center shadow-[0_40px_120px_-80px_rgba(15,23,42,0.2)] transition ${
                      isDragActive ? "bg-emerald-50/80" : "bg-gradient-to-b from-white via-emerald-50/30 to-white"
                    }`}
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <UploadCloud className="h-8 w-8" />
                    </div>
                    <h1 className="text-3xl font-semibold text-slate-900">{selectedFile ? "Upload another prescription" : "Upload your prescription"}</h1>
                    <p className="max-w-md text-base text-slate-600">
                      Drag and drop medical files here or click to browse. We will parse dosage, instructions, and interactions instantly.
                    </p>

                    <div className="w-full rounded-[28px] border-2 border-dashed border-emerald-200/70 bg-white/80 p-6 text-sm text-emerald-900/80">
                      <p className="font-semibold">Supported formats</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.25em] text-emerald-600">PNG · JPG · PDF · up to 15 MB each</p>
                      <p className="mt-3 text-xs text-slate-500">Uploads stay private and are deleted automatically after your review.</p>
                      {selectedFile && (
                        <p className="mt-4 rounded-2xl border border-emerald-200/70 bg-emerald-50/70 px-3 py-2 text-xs font-medium text-emerald-700">
                          Current: {selectedFile.name}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                      <Button
                        type="button"
                        variant="teal"
                        size="lg"
                        className="rounded-full px-6 text-sm font-semibold shadow-[0_20px_45px_-20px_rgba(16,185,129,0.55)]"
                        onClick={() => questionInputRef.current?.focus()}
                      >
                        <ImageIcon className="h-5 w-5" />
                        Upload Image
                        <input type="file" accept="image/png,image/jpeg,application/pdf" className="absolute inset-0 cursor-pointer opacity-0" onChange={handleFileInputChange} />
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="relative rounded-full border-emerald-300 bg-white px-6 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                      >
                        <UploadCloud className="h-5 w-5" />
                        Upload PDF
                        <input type="file" accept="application/pdf" className="absolute inset-0 cursor-pointer opacity-0" onChange={handleFileInputChange} />
                      </Button>
                    </div>

                    <p className="text-xs text-slate-500">
                      Want to try later? Email prescriptions to <span className="font-semibold text-emerald-700">prakranj@1carehealth.co</span> and we'll queue them for you.
                    </p>
                  </label>

                  <div className="rounded-[28px] border border-emerald-100/70 bg-white/90 p-6 shadow-[0_30px_100px_-80px_rgba(15,118,110,0.35)]">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600">Live brief</span>
                      <span className="text-xs text-emerald-600">{analysis ? "Latest analysis" : "Awaiting upload"}</span>
                    </div>
                    {analysis ? (
                      <div className="space-y-4">
                        <div className="rounded-2xl border border-emerald-100/80 bg-emerald-50/40 px-4 py-3 text-sm text-slate-800">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">Key takeaways</p>
                          <ul className="mt-2 space-y-1 text-sm leading-relaxed">
                            {analysis.keyTakeaways.map((item) => (
                              <li key={item}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-2xl border border-emerald-100/80 bg-white px-4 py-3 text-sm text-slate-800">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">Medication schedule</p>
                          <ul className="mt-2 space-y-1 text-sm leading-relaxed">
                            {analysis.meds.map((item) => (
                              <li key={item}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-2xl border border-emerald-100/80 bg-emerald-50/40 px-4 py-3 text-sm text-slate-800">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">Monitoring & follow-up</p>
                          <ul className="mt-2 space-y-1 text-sm leading-relaxed">
                            {analysis.monitoring.map((item) => (
                              <li key={item}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3 text-sm text-slate-600">
                        <p>Upload a prescription to instantly see dosage highlights, conflict checks, and your next doctor-ready brief.</p>
                        <p className="text-xs uppercase tracking-[0.28em] text-emerald-500">Smart parsing · HIPAA aligned · Clinician reviewed</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">What happens after upload?</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">1Care Health turns prescriptions into clear next steps.</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
              Your care navigator takes over in seconds—summarising medical intent, highlighting conflicts, and preparing lifestyle nudges tailored to your family.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {helperCards.map((card) => (
              <article
                key={card.title}
                className="group relative flex h-full flex-col gap-4 rounded-[30px] border border-emerald-100/80 bg-white/90 p-7 text-left shadow-[0_40px_100px_-80px_rgba(15,118,110,0.4)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_55px_140px_-90px_rgba(15,118,110,0.55)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-primary">
                  <card.icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{card.description}</p>
                <div className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Preview sample brief →
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ToolsPage;
