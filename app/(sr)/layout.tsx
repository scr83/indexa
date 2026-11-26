import type { ReactNode } from 'react';
import { fontVars } from '@/lib/fonts';
import '../globals.css';

export default function SrLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sr-Latn" className={fontVars}>
      <body>{children}</body>
    </html>
  );
}
