"use client";

import { Check, Copy } from "lucide-react";
import { FaGithub, FaLinkedin, FaTrophy, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { links } from "@/lib/content";

const SOCIALS = [
  { href: links.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: links.github, label: "GitHub", icon: FaGithub },
  { href: links.x, label: "X", icon: FaXTwitter },
  { href: links.ctftime, label: "CTFtime", icon: FaTrophy },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="w-full py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <SectionHeader index="08" eyebrow="Contact" title="Get in touch" />

        <div className="card relative overflow-hidden">
          <div className="glow-grid" />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center">
            <div className="flex flex-1 flex-col items-start gap-5 p-8 sm:p-14">
              <span className="flex items-center gap-2 text-[12.5px] font-medium text-foreground-muted">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Open to new engagements &middot; Bangalore, India
              </span>

              <p className="max-w-[52ch] text-[15px] leading-[1.65] text-foreground-soft">
                Interested in collaborating on application security, penetration testing, vulnerability
                research, or secure software engineering?
              </p>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${links.email}`}
                  className="font-display text-[1.6rem] leading-[1.2] text-foreground transition-colors hover:text-accent sm:text-[2.15rem]"
                >
                  {links.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  title="Copy email address"
                  className="icon-btn !h-8 !w-8 shrink-0"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-3">
                <a href={links.resume} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Resume
                </a>
              </div>
            </div>

            <div className="flex shrink-0 items-center justify-center gap-4 border-t border-border px-8 py-6 sm:flex-col sm:justify-start sm:self-stretch sm:border-t-0 sm:border-l sm:px-10 sm:py-14">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="icon-btn"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
