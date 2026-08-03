import { Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";

type QuoteBandProps = {
  quote: string;
  author: string;
  className?: string;
};

export function QuoteBand({ quote, author, className }: QuoteBandProps) {
  return (
    <section
      className={`border-y border-border/50 bg-secondary/30 py-16 backdrop-blur-sm lg:py-20 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal direction="up">
          <Quote className="mx-auto mb-6 h-8 w-8 text-primary/50" aria-hidden="true" />
          <blockquote className="font-heading text-2xl font-medium italic leading-snug text-foreground md:text-3xl">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <cite className="mt-6 block text-sm font-medium not-italic uppercase tracking-widest text-muted-foreground">
            {author}
          </cite>
        </Reveal>
      </div>
    </section>
  );
}
