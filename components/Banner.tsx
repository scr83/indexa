import type { Content } from '@/content/types';

/* Pre-launch guard rail. Delete this component and its two call sites
   once the case-study figures are real. */
export default function Banner({ c }: { c: Content }) {
  return (
    <div className="banner">
      <div className="wrap">{c.banner}</div>
    </div>
  );
}
