import Link from 'next/link';
import Image from 'next/image';

interface FooterLink {
  label: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Changelog', href: '/changelog/' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 mt-auto">
      <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline text-text-primary">
          <Image
            src="/assets/logo.webp"
            alt="LeafTok"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-serif text-xl">LeafTok</span>
        </Link>

        {/* Links and Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-text-secondary">
          <div className="flex items-center gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <span className="text-text-muted">
            &copy; {currentYear} LeafTok by Iago Cavalcante. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
