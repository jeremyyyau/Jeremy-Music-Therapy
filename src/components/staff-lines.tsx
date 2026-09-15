import { cn } from "@/lib/utils";

type StaffLinesProps = {
  className?: string;
};

/*
 * Decorative five-line staff — gently waving lines like an empty
 * musical stave, with alternating phase so the lines drift apart
 * and together like a soft ribbon. Purely decorative.
 */
const LINES = [
  { y: 8, amp: 5, up: true },
  { y: 24, amp: 4, up: false },
  { y: 40, amp: 5, up: true },
  { y: 56, amp: 4, up: false },
  { y: 72, amp: 5, up: true },
];

function wavePath(y: number, amp: number, startsUp: boolean) {
  const segment = 75;
  let dir = startsUp ? -1 : 1;
  let d = `M0 ${y}`;
  for (let x = 0; x < 600; x += segment) {
    d += ` Q ${x + segment / 2} ${y + dir * amp * 2}, ${x + segment} ${y}`;
    dir *= -1;
  }
  return d;
}

export function StaffLines({ className }: StaffLinesProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 80"
      preserveAspectRatio="none"
      fill="none"
      className={cn("pointer-events-none select-none", className)}
    >
      {LINES.map((line) => (
        <path
          key={line.y}
          d={wavePath(line.y, line.amp, line.up)}
          stroke="currentColor"
          strokeWidth={1.25}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
