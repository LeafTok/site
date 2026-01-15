import Link from 'next/link';
import { Header, Footer } from '@/components/shared';

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-container mx-auto px-6 text-center">
          <h1 className="text-8xl md:text-9xl font-serif text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Page Not Found</h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              Go Home
            </Link>
            <Link href="/books/" className="btn-secondary">
              Browse Books
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
