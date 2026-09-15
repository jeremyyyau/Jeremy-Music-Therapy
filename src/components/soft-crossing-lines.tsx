import { cn } from "@/lib/utils";

type SoftCrossingLinesProps = {
  className?: string;
  variant?: "rise" | "drift" | "swell";
};

const paths = {
  rise: [
    "M-20 76 C105 18 210 108 330 50 S515 18 620 68",
    "M-20 42 C115 96 210 12 350 64 S520 98 620 34",
    "M-20 88 C120 52 225 92 360 40 S520 54 620 78",
  ],
  drift: [
    "M-20 38 C90 82 205 14 318 54 S515 92 620 42",
    "M-20 72 C112 20 224 102 342 56 S515 24 620 72",
    "M-20 92 C120 68 232 84 360 50 S515 56 620 86",
  ],
  swell: [
    "M-20 60 C94 4 214 106 330 54 S510 8 620 62",
    "M-20 30 C100 92 222 10 350 64 S520 94 620 38",
    "M-20 88 C124 42 236 100 366 48 S520 62 620 82",
  ],
} as const;

export function SoftCrossingLines({ className, variant = "rise" }: SoftCrossingLinesProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 110"
      preserveAspectRatio="none"
      fill="none"
      className={cn("pointer-events-none select-none", className)}
    >
      {paths[variant].map((path, index) => (
        <path
          key={path}
          d={path}
          stroke="currentColor"
          strokeWidth={index === 2 ? 1 : 1.25}
          strokeLinecap="round"
          opacity={index === 2 ? 0.55 : 1}
        />
      ))}
    </svg>
  );
}