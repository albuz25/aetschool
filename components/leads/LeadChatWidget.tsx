"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, MessageCircle, Send, X } from "lucide-react";

import { trackGoogleAdsConversion } from "@/lib/googleAds";
import { useLeadModalStore } from "@/store/useLeadModalStore";

const PHONE_REGEX = /^(?:\+91[-\s]?|0)?[6-9]\d{9}$/;

const COURSES = [
  { label: "Data Science", slug: "data-science-ai-package" },
  { label: "Data Analytics", slug: "data-analytics-package" },
  { label: "Power BI", slug: "power-bi-package" },
  { label: "SQL", slug: "sql-package" },
  { label: "Architecture Design", slug: "interior-design-3d-spatial-package" },
  { label: "Not sure yet", slug: "general-inquiry" },
] as const;

type ChatStep = "name" | "course" | "phone" | "done";

interface ChatMessage {
  id: string;
  from: "bot" | "user";
  text: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome",
    from: "bot",
    text: "Hi! I can help you with course details. What is your name?",
  },
];

export function LeadChatWidget() {
  const isLeadModalOpen = useLeadModalStore((state) => state.isOpen);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>("name");
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [courseSlug, setCourseSlug] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, step, open]);

  if (isLeadModalOpen) return null;

  function push(from: ChatMessage["from"], text: string) {
    setMessages((current) => [...current, { id: `${from}-${Date.now()}`, from, text }]);
  }

  function resetChat() {
    setStep("name");
    setMessages(INITIAL_MESSAGES);
    setInput("");
    setName("");
    setCourseSlug("");
    setError("");
    setIsSubmitting(false);
  }

  function handleName() {
    const value = input.trim();
    if (value.length < 2) {
      setError("Please enter your full name.");
      return;
    }
    setError("");
    setName(value);
    setInput("");
    push("user", value);
    push("bot", `Nice to meet you, ${value.split(" ")[0]}. Which course are you interested in?`);
    setStep("course");
  }

  function handleCourse(course: (typeof COURSES)[number]) {
    setCourseSlug(course.slug);
    push("user", course.label);
    push("bot", "Please share your 10-digit mobile number.");
    setStep("phone");
  }

  async function handlePhone() {
    const value = input.trim();
    if (!PHONE_REGEX.test(value)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!name || !courseSlug) return;

    setError("");
    setIsSubmitting(true);
    push("user", value);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone: value,
          email: "",
          programInterest: courseSlug,
          city: "Not specified",
          source: "lead-chat",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Could not submit. Please try again.");
      }
      trackGoogleAdsConversion();
      setInput("");
      push("bot", "Our team will connect with you. A counselor will call you with fees, batches and EMI details.");
      setStep("done");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Could not submit. Please try again.");
      setMessages((current) => current.filter((message) => message.text !== value));
    } finally {
      setIsSubmitting(false);
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (isSubmitting || step === "done" || step === "course") return;
    if (step === "name") handleName();
    if (step === "phone") void handlePhone();
  }

  return (
    <div className="fixed bottom-[max(0.5rem,env(safe-area-inset-bottom))] left-3 z-50 sm:bottom-6 sm:left-4">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mb-3 flex h-[min(28rem,70vh)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-white text-foreground shadow-2xl"
          >
            <div className="flex items-center justify-between bg-navy px-4 py-3 text-white">
              <div>
                <p className="font-heading text-sm font-bold">AET Admissions</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/70">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                  </span>
                  Online now
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-1 text-white/80 hover:bg-white/10 hover:text-white"
              >
                <X className="size-4" />
              </button>
            </div>

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-offwhite p-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={message.from === "bot" ? "flex justify-start" : "flex justify-end"}
                >
                  <p
                    className={
                      message.from === "bot"
                        ? "max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-sm text-foreground shadow-sm"
                        : "max-w-[85%] rounded-2xl rounded-tr-sm bg-orange px-3 py-2 text-sm text-white"
                    }
                  >
                    {message.text}
                  </p>
                </div>
              ))}

              {step === "course" ? (
                <div className="flex flex-wrap gap-2">
                  {COURSES.map((course) => (
                    <button
                      key={course.slug}
                      type="button"
                      onClick={() => handleCourse(course)}
                      className="rounded-full border border-navy/15 bg-white px-3 py-1.5 text-xs font-semibold text-navy hover:border-orange hover:bg-orange hover:text-white"
                    >
                      {course.label}
                    </button>
                  ))}
                </div>
              ) : null}

              {step === "done" ? (
                <button
                  type="button"
                  onClick={resetChat}
                  className="text-xs font-semibold text-orange underline-offset-2 hover:underline"
                >
                  Start another enquiry
                </button>
              ) : null}
            </div>

            {step === "name" || step === "phone" ? (
              <form onSubmit={onSubmit} className="border-t border-border bg-white p-3">
                {error ? <p className="mb-2 text-xs text-destructive">{error}</p> : null}
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder={step === "name" ? "Your name" : "10-digit mobile number"}
                    inputMode={step === "phone" ? "numeric" : "text"}
                    autoComplete={step === "phone" ? "tel" : "name"}
                    className="h-10 min-w-0 flex-1 rounded-lg border border-input bg-white px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring"
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label="Send"
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-orange text-white hover:bg-orange-light disabled:opacity-60"
                  >
                    {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
                  </button>
                </div>
              </form>
            ) : (
              <div className="border-t border-border bg-white px-3 py-2 text-[11px] text-muted-foreground">
                {step === "course" ? "Tap a course to continue." : "Thanks — you can close this chat."}
              </div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close chat" : "Chat with admissions"}
        className="relative flex size-14 items-center justify-center rounded-full bg-orange text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
        {!open ? (
          <span className="absolute top-0.5 right-0.5 flex size-3">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-3 rounded-full bg-emerald-500 ring-2 ring-white" />
          </span>
        ) : null}
      </button>
    </div>
  );
}
