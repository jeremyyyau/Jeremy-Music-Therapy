import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * PrettyText — eliminates awkward 1–2 word orphan lines ("widows") in long
 * paragraphs on every viewport width.
 *
 * CSS `text-wrap: pretty` helps but Chromium still leaves short dangling
 * last lines in longer prose. This effect measures each paragraph's real
 * last line after layout; if it is much shorter than the paragraph is wide,
 * it progressively joins trailing words with non-breaking spaces until the
 * last line is a comfortable length (or a safe cap is reached).
 *
 * It re-runs (debounced) on resize and restores the original text before
 * each pass, so it stays correct at any width. Only plain-text paragraphs
 * are touched — anything containing links or markup is left alone.
 */
const MIN_RATIO = 0.28; // last line should be at least ~28% of the block width
const MAX_JOINS = 9; // glue trailing words only until the last line looks right
const MIN_CHARS = 90; // short captions don't need it

function lastLineRatio(p: HTMLElement): number {
  const range = document.createRange();
  range.selectNodeContents(p);
  const rects = Array.from(range.getClientRects());
  range.detach();
  if (rects.length === 0) return 1;
  const tops = [...new Set(rects.map((r) => Math.round(r.top)))];
  if (tops.length < 2) return 1; // single-line paragraph: nothing to fix
  const lastTop = tops[tops.length - 1];
  const last = rects.filter((r) => Math.round(r.top) === lastTop);
  const lastWidth =
    Math.max(...last.map((r) => r.right)) - Math.min(...last.map((r) => r.left));
  const blockWidth = p.getBoundingClientRect().width;
  return blockWidth > 0 ? lastWidth / blockWidth : 1;
}

/**
 * Keeps a short word that *starts* a new sentence from being stranded at the
 * end of a line (". In" / ". A" reads oddly). The word is glued to the next
 * one with a non-breaking space so they wrap together.
 */
const SENTENCE_START = /([.!?…]["')\]]?)\s+([^\s]{1,5})\s+/g;
function bindSentenceStarts(text: string): string {
  return text.replace(SENTENCE_START, (_m, end: string, word: string) => `${end} ${word}\u00a0`);
}

function fixParagraph(p: HTMLElement, original: string) {
  // Restore pristine text first so every pass starts clean.
  if (p.textContent !== original) p.textContent = original;
  if (lastLineRatio(p) >= MIN_RATIO) return;

  const words = original.split(" ");
  for (let joins = 1; joins <= MAX_JOINS && words.length > joins + 2; joins++) {
    const tail = words.slice(-joins - 1).join(" ");
    const text = [...words.slice(0, -joins - 1), tail].join(" ");
    p.textContent = text;
    if (lastLineRatio(p) >= MIN_RATIO) return;
  }
  // Could not reach the target — revert to the untouched text.
  p.textContent = original;
}

export function PrettyText() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const originals = new WeakMap<HTMLElement, string>();
    let raf = 0;

    const run = () => {
      const paras = document.querySelectorAll<HTMLElement>(
        "main p, main blockquote p, footer p",
      );
      paras.forEach((p) => {
        // Skip paragraphs containing links or other elements.
        if (p.children.length > 0) return;
        const original = originals.get(p) ?? p.textContent ?? "";
        originals.set(p, original);
        if (original.trim().length < MIN_CHARS) return;
        fixParagraph(p, original);
      });
    };

    const timers: number[] = [];
    const schedule = (delay = 0, cancelPending = true) => {
      cancelAnimationFrame(raf);
      if (cancelPending) {
        timers.forEach((t) => window.clearTimeout(t));
        timers.length = 0;
      }
      timers.push(
        window.setTimeout(() => {
          raf = requestAnimationFrame(run);
        }, delay),
      );
    };

    // Wait for React hydration to finish before touching SSR-rendered text,
    // otherwise React would regenerate (and wipe) the adjusted paragraphs.
    // Route-change re-runs are safe: the effect fires after render commit.
    schedule(400);
    schedule(1200, false);
    document.fonts?.ready.then(() => schedule(100, false)).catch(() => {});
    const onResize = () => schedule(150);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("resize", onResize);
    };
  }, [pathname]);

  return null;
}
