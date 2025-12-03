"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Docs", href: "/docs" },
  { label: "GitHub", href: "https://github.com/resolvx/resolvx" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border-subtle">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <Image
            src="/logo.svg"
            alt="ResolvX"
            width={26}
            height={26}
            className="dark:invert"
          />
          <span className="text-[15px] font-semibold text-foreground">ResolvX</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3.5 py-2 text-[13px] text-text-secondary transition-colors hover:text-foreground rounded-lg hover:bg-surface"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/docs"
            className="px-4 py-2 text-[13px] text-text-secondary transition-colors hover:text-foreground"
          >
            Documentation
          </Link>
          <Link
            href="https://github.com/resolvx/resolvx"
            className="px-4 py-2 text-[13px] font-medium text-btn-primary-text bg-btn-primary-bg rounded-full hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border-subtle bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-2.5 text-[14px] text-text-secondary transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border-subtle flex flex-col gap-3">
              <Link
                href="/docs"
                className="py-2.5 text-[14px] text-text-secondary hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link
                href="https://github.com/resolvx/resolvx"
                className="py-2.5 px-4 text-[14px] font-medium text-btn-primary-text bg-btn-primary-bg rounded-full hover:opacity-90 transition-opacity text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
