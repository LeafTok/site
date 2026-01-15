import { siteConfig } from '@/lib/types';

interface AppStoreButtonsProps {
  variant?: 'primary' | 'compact';
  showBadge?: boolean;
}

// Apple icon SVG path
const AppleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

// Google Play icon SVG path
const PlayStoreIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

export function AppStoreButtons({ variant = 'primary', showBadge = false }: AppStoreButtonsProps) {
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap gap-3">
        <a
          href={siteConfig.appStoreLinks.ios}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-text-primary transition-all duration-300"
          aria-label="Download on the App Store"
        >
          <AppleIcon />
          <span className="text-sm font-medium">App Store</span>
        </a>
        <a
          href={siteConfig.appStoreLinks.android}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-text-primary transition-all duration-300"
          aria-label="Get it on Google Play"
        >
          <PlayStoreIcon />
          <span className="text-sm font-medium">Google Play</span>
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      <a
        href={siteConfig.appStoreLinks.ios}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary relative"
        aria-label="Download on the App Store"
      >
        {showBadge && (
          <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-bold bg-accent text-white rounded-full">
            FREE
          </span>
        )}
        <AppleIcon />
        <span>App Store</span>
      </a>
      <a
        href={siteConfig.appStoreLinks.android}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
        aria-label="Get it on Google Play"
      >
        <PlayStoreIcon />
        <span>Google Play</span>
      </a>
    </div>
  );
}
