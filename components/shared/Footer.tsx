'use client';

import Link from 'next/link';
import Image from 'next/image';

interface FooterLink {
  label: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
  { label: 'Changelog', href: '/changelog/' },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/5 py-10 mt-auto bg-paper-warm">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 no-underline text-ink">
              <Image
                src="/assets/logo-dark.webp"
                alt="LeafTok"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-serif text-xl">LeafTok</span>
            </Link>
            <p className="text-sm text-ink-muted">Your books, reimagined.</p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-sm text-ink-muted">
            <div className="flex items-center gap-5">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-ink transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <span className="text-ink-faint">
              &copy; {new Date().getFullYear()} Iago Cavalcante
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
