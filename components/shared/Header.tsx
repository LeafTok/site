"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

const navLinks: NavLink[] = [
  { label: "Features", href: "/#read" },
  { label: "How it works", href: "/#getting-started" },
  { label: "Download", href: "/#download" },
  { label: "Changelog", href: "/changelog/" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMobileMenuOpen(false);
    };

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key === "Tab" && mobileMenuRef.current) {
        const items = [
          menuButtonRef.current,
          ...mobileMenuRef.current.querySelectorAll<HTMLElement>(
            "a[href], button",
          ),
        ].filter((item): item is HTMLElement => Boolean(item));
        const first = items[0];
        const last = items[items.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const previousOverflow = document.body.style.overflow;
    const pageRegions = document.querySelectorAll<HTMLElement>("main, footer");
    document.body.style.overflow = "hidden";
    pageRegions.forEach((region) => {
      region.inert = true;
    });
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      pageRegions.forEach((region) => {
        region.inert = false;
      });
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => !open);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <nav
        aria-label="Primary navigation"
        className={`fixed top-0 left-0 w-full z-[100] px-6 py-5 transition-all duration-300 ${
          isScrolled ? "nav-scrolled" : ""
        }`}
      >
        <div className="max-w-container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-3 no-underline text-ink"
          >
            <Image
              src="/assets/logo-dark.webp"
              alt=""
              width={36}
              height={36}
              className="rounded-lg"
              priority
            />
            <span className="font-serif text-2xl tracking-tight">LeafTok</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#download" className="btn-primary text-sm px-5 py-2.5">
              Get the App
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            className="md:hidden flex min-h-11 min-w-11 flex-col items-center justify-center gap-[5px] rounded-lg"
            onClick={toggleMobileMenu}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span
              className={`w-6 h-0.5 bg-ink transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-ink transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-ink transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8 bg-paper px-6 pt-20 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl text-ink transition-colors duration-200 hover:text-primary"
              onClick={toggleMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#download"
            className="btn-primary mt-2"
            onClick={toggleMobileMenu}
          >
            Choose your app store
          </Link>
        </div>
      )}
    </>
  );
}
