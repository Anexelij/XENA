"use client";
import { useState } from "react";
import Button from "./Button";
import { EMAIL } from "./SocialIcons";

const field =
  "w-full border-b border-ink/25 bg-transparent py-4 text-base outline-none transition-colors duration-300 placeholder:text-ink/40 focus:border-orange";

const TYPES = ["Website", "Motion Design", "Video Editing", "Flyers", "Carousels", "Presentation Design", "Other"];
const BUDGETS = ["Under $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000+"];

export default function ContactForm() {
  const [sent, setSent] = useState(null);
  const [copied, setCopied] = useState("");

  // Never navigates away (that is what crashed before). It prepares the message and lets
  // the visitor send it through Gmail, their email app, or by copying it.
  // For server-side delivery later, swap this for Formspree, Resend or a route handler.
  function onSubmit(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const subject = `Project inquiry from ${d.name}`;
    const body = `Name: ${d.name}\nEmail: ${d.email}\nProject type: ${d.type}\nBudget: ${d.budget || "n/a"}\n\n${d.message || ""}`;
    setSent({ name: d.name, subject, body });
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(`To: ${EMAIL}\nSubject: ${sent.subject}\n\n${sent.body}`);
      setCopied("Copied");
    } catch {
      setCopied("Copy not allowed");
    }
  }

  if (sent) {
    const q = `subject=${encodeURIComponent(sent.subject)}&body=${encodeURIComponent(sent.body)}`;
    return (
      <div className="text-xl">
        <p>Thank you, {sent.name}. Your message is ready to send. Choose how you want to send it:</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a className="btn" target="_blank" rel="noopener noreferrer" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&${q}`}>Send with Gmail</a>
          <a className="btn btn-outline" target="_blank" rel="noopener noreferrer" href={`mailto:${EMAIL}?${q}`}>Open my email app</a>
          <button type="button" className="btn btn-outline" onClick={copy}>{copied || "Copy message"}</button>
        </div>
        <p className="mt-4">
          Or write to <a className="text-orange underline" target="_blank" rel="noopener noreferrer" href={`mailto:${EMAIL}`}>{EMAIL}</a> directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        <input required name="name" placeholder="Name" className={field} />
        <input required type="email" name="email" placeholder="Email" className={field} />
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <select required name="type" defaultValue="" className={field}>
          <option value="" disabled>Project type</option>
          {TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
        <select name="budget" defaultValue="" className={field}>
          <option value="" disabled>Budget</option>
          {BUDGETS.map((b) => <option key={b}>{b}</option>)}
        </select>
      </div>
      <textarea required name="message" rows={5} placeholder="Tell me about your project" className={field} />
      <div>
        <Button type="submit">Send inquiry</Button>
      </div>
    </form>
  );
}
