'use client';

import { useEffect, useId, useRef, useState } from 'react';

interface FootnoteProps {
  /** The superscript marker shown inline, e.g. "1". */
  marker: string | number;
  children: React.ReactNode;
}

/**
 * An inline, expandable footnote — the app ships interactive footnotes, so the
 * landing page uses them as a real device. Accessible: keyboard-toggleable,
 * closes on Escape or outside click. Works on touch (no hover dependency).
 */
export function Footnote({ marker, children }: FootnoteProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const reactId = useId();
  const panelId = `fn-${reactId.replace(/:/g, '')}`;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onPointer = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
    };
  }, [open]);

  return (
    <span ref={wrapRef} className="relative inline">
      <button
        type="button"
        className="footnote-ref"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`Footnote ${marker}`}
        onClick={() => setOpen((o) => !o)}
      >
        {marker}
      </button>
      <span
        id={panelId}
        role="note"
        className={`footnote-panel absolute left-0 top-full z-30 mt-2 block w-64 max-w-[80vw] p-3 leading-snug shadow-lg transition-all duration-200 ${
          open
            ? 'visible translate-y-0 opacity-100'
            : 'pointer-events-none invisible -translate-y-1 opacity-0'
        }`}
      >
        {children}
      </span>
    </span>
  );
}
