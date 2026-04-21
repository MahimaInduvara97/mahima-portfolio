"use client";

import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(
    null,
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill out all fields before sending your message.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.error || "Failed to send message");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. Thanks, I will get back to you soon.",
      });
      setFormData(initialForm);
    } catch {
      setStatus({
        type: "error",
        message: "Could not send your message right now. Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  const onChange = (field: keyof ContactFormData, value: string) => {
    if (status) {
      setStatus(null);
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form className="mx-auto flex w-full max-w-xl flex-col gap-5" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Your name"
        value={formData.name}
        className="border-0 border-b border-ink/40 bg-transparent py-3 text-sm text-ink placeholder:text-ink-mute focus:border-ink focus:outline-none"
        onChange={(event) => onChange("name", event.target.value)}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={formData.email}
        className="border-0 border-b border-ink/40 bg-transparent py-3 text-sm text-ink placeholder:text-ink-mute focus:border-ink focus:outline-none"
        onChange={(event) => onChange("email", event.target.value)}
        required
      />
      <input
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        className="border-0 border-b border-ink/40 bg-transparent py-3 text-sm text-ink placeholder:text-ink-mute focus:border-ink focus:outline-none"
        onChange={(event) => onChange("subject", event.target.value)}
        required
      />
      <textarea
        name="message"
        placeholder="Tell me about your project..."
        rows={4}
        value={formData.message}
        className="resize-none border-0 border-b border-ink/40 bg-transparent py-3 text-sm text-ink placeholder:text-ink-mute focus:border-ink focus:outline-none"
        onChange={(event) => onChange("message", event.target.value)}
        required
      />
      <button
        type="submit"
        className="mt-2 self-start rounded-sm bg-ink px-7 py-3.5 text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      <div aria-live="polite" className="min-h-14">
        {status ? (
          <div
            className={
              status.type === "success"
                ? "animate-fade-in rounded-md border border-emerald-600/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-800"
                : "animate-fade-in rounded-md border border-rose-600/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-800"
            }
          >
            {status.message}
          </div>
        ) : null}
      </div>
    </form>
  );
}
