"use client";

import { SITE } from "@/data/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav
      className="fixed top-0 z-[100] flex h-14 w-full items-center border-b border-border px-6 md:px-12"
      style={{
        background: "rgba(7,7,12,0.92)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="mx-auto flex w-full max-w-content items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm tracking-wider text-amber"
          aria-label="Home"
        >
          MS<span className="cursor-blink">_</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-amber"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={SITE.resume}
            download
            className="rounded-btn border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-l transition-colors hover:border-border-h hover:text-text"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-btn bg-amber px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#07070C] transition-opacity hover:opacity-90"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
