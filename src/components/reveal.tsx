import { useEffect, useRef, useState, type ReactNode, type ElementType, type CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

const OFFSETS: Record<Direction, string> = {
  up: "translate3d(0, 40px, 0)",
  down: "translate3d(0, -40px, 0)",
  left: "translate3d(-40px, 0, 0)",
  right: "translate3d(40px, 0, 0)",
  scale: "scale(0.94)",
  fade: "none",
};

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
};

export function Reveal({
  children,
  as: Tag = "div",
  direction = "up",
  delay = 0,
  duration = 800,
  once = true,
  className,
  style,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  const composedStyle: CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}ms`,
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : OFFSETS[direction],
    willChange: visible ? "auto" : "opacity, transform",
    ...style,
  };

  return (
    <Tag ref={ref as never} className={className} style={composedStyle}>
      {children}
    </Tag>
  );
}
