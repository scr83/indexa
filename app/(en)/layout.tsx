import type { ReactNode } from 'react';
import { fontVars } from '@/lib/fonts';
import '../globals.css';

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontVars}>
      <body>{children}</body>
    </html>
  );
}
