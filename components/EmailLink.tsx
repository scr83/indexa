'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * An email link that cannot fail silently.
 *
 * A bare `mailto:` does nothing at all on a device with no mail client
 * registered — no error, no prompt, no indication that anything was meant to
 * happen. On the primary call to action of a consultancy site that is a lost
 * enquiry, and the visitor blames the site rather than their machine.
 *
 * So the click does both: the href stays a real mailto, so a configured
 * client still opens and a crawler still reads the address, and the handler
 * copies the address to the clipboard and says so. If the mail client opens,
 * the copy is harmless; if it does not, the address is already in hand.
 *
 * Nothing is prevented or intercepted — no preventDefault — because the
 * native behaviour is the preferred one when it works.
 */
export default function EmailLink({
  email,
  copiedLabel,
  className,
  children,
}: {
  email: string;
  copiedLabel: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2600);
    } catch {
      /* Clipboard access can be refused outright. The mailto is still live,
         and the address is visible on screen either way, so there is nothing
         useful to report here. */
    }
  }

  return (
    /* The wrapper exists so the confirmation can be taken out of flow. An
       inline message pushed the LinkedIn button 108px to the right when it
       appeared — introducing a layout shift while announcing a click is the
       wrong trade on any page, and a worse one here. */
    <span className="email-link">
      <a className={className} href={`mailto:${email}`} onClick={copy}>
        {children}
      </a>
      {/* Announced to screen readers as well as shown, because the only other
          signal that the click did anything may be the clipboard. */}
      <span className="copied mono" role="status" aria-live="polite" data-on={copied || undefined}>
        {copied ? copiedLabel : ''}
      </span>
    </span>
  );
}
