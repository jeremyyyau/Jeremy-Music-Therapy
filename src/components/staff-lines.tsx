import { cn } from "@/lib/utils";

type StaffLinesProps = {
  className?: string;
  variant?: "melody" | "clef" | "rhythm" | "sparse";
};

/*
 * Decorative five-line staff — gently waving lines like an empty
 * musical stave, with alternating phase so the lines drift apart
 * and together like a soft ribbon. Purely decorative.
 */
const LINES = [
  { y: 18, amp: 4, up: true },
  { y: 34, amp: 4, up: true },
  { y: 50, amp: 4, up: true },
  { y: 66, amp: 4, up: true },
  { y: 82, amp: 4, up: true },
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

const noteSets = {
  melody: [
    { x: 104, y: 58, stem: "up" },
    { x: 178, y: 42, stem: "up" },
    { x: 274, y: 66, stem: "down" },
    { x: 372, y: 50, stem: "up" },
    { x: 496, y: 34, stem: "down" },
  ],
  clef: [
    { x: 160, y: 66, stem: "up" },
    { x: 246, y: 50, stem: "up" },
    { x: 412, y: 42, stem: "down" },
    { x: 510, y: 58, stem: "down" },
  ],
  rhythm: [
    { x: 88, y: 50, stem: "up" },
    { x: 128, y: 58, stem: "up" },
    { x: 302, y: 34, stem: "down" },
    { x: 342, y: 42, stem: "down" },
    { x: 488, y: 66, stem: "up" },
  ],
  sparse: [
    { x: 148, y: 42, stem: "up" },
    { x: 446, y: 66, stem: "down" },
  ],
} as const;

export function StaffLines({ className, variant = "melody" }: StaffLinesProps) {
  const notes = noteSets[variant];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 100"
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
      {variant === "clef" && (
        <text
          x="28"
          y="82"
          fill="currentColor"
          stroke="none"
          fontFamily="'Times New Roman', 'Noto Music', serif"
          fontSize="72"
        >
          𝄞
        </text>
      )}
      {variant === "rhythm" && (
        <path d="M218 28v48M218 30h28v8h-28M246 36v34" stroke="currentColor" strokeWidth="2.25" />
      )}
      {notes.map((note, index) => {
        const stemTop = note.stem === "up" ? note.y - 31 : note.y;
        const stemBottom = note.stem === "up" ? note.y : note.y + 31;
        const stemX = note.stem === "up" ? note.x + 6 : note.x - 6;
        return (
          <g key={`${variant}-${note.x}`}>
            <ellipse cx={note.x} cy={note.y} rx="7" ry="4.5" fill="currentColor" transform={`rotate(-18 ${note.x} ${note.y})`} />
            <path d={`M${stemX} ${stemTop}V${stemBottom}`} stroke="currentColor" strokeWidth="2" />
            {index === 1 && variant !== "sparse" && (
              <path
                d={`M${stemX} ${stemTop}q18 5 18 18`}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
