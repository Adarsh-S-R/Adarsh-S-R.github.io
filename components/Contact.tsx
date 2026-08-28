"use client";

import { Check, Copy, ArrowUpRight } from "lucide-react";
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
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full py-20 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <SectionHeader index="08" eyebrow="Contact" title="Get in touch" />

        <div className="card relative mt-10 overflow-hidden">
          <div className="glow-grid opacity-60" />

          <div className="relative z-10 flex flex-col gap-10 p-8 sm:p-14">
              
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span className="text-[13px] font-semibold uppercase tracking-wider text-accent">
                    Open to engagements
                  </span>
                  <span className="text-[13px] text-foreground-muted">&middot; Bangalore, India</span>
                </div>

                <p className="max-w-2xl text-[16px] leading-[1.7] text-foreground-soft">
                  Interested in collaborating on application security, penetration testing, vulnerability
                  research, or secure software engineering? Let&rsquo;s connect.
                </p>
              </div>

              <div className="flex flex-col gap-6 rounded-2xl border border-border-strong bg-background/30 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="flex items-center gap-4">
                  <a
                    href={`mailto:${links.email}`}
                    className="font-display break-all text-[1.25rem] text-foreground transition-colors hover:text-accent sm:text-[1.5rem]"
                  >
                    {links.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    title="Copy email address"
                    className="icon-btn !h-9 !w-9 shrink-0"
                  >
                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={links.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !px-6 !py-2.5"
                  >
                    View Resume
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-card/50 text-foreground-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
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
