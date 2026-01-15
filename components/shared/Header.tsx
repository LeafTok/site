'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

const navLinks: NavLink[] = [
  { label: 'Features', href: '/#features' },
  { label: 'App', href: '/#screenshots' },
  { label: 'Download', href: '/#download' },
  { label: 'Changelog', href: '/changelog/' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] px-4 py-6 transition-all duration-400 ease-out ${
          isScrolled ? 'nav-scrolled' : ''
        }`}
      >
        <div className="max-w-container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline text-text-primary">
            <Image
              src="/assets/logo.webp"
              alt="LeafTok"
              width={44}
              height={44}
              className="rounded-xl"
              priority
            />
            <span className="font-serif text-[1.75rem] tracking-tight">LeafTok</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`w-6 h-0.5 bg-text-primary transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-text-primary transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-text-primary transition-transform duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[99] bg-dark/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-6 right-6 text-4xl text-text-primary hover:text-primary transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Close mobile menu"
        >
          &times;
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-2xl text-text-primary hover:text-primary transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
