import { Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";

type QuoteBandProps = {
  quote: string;
  author: string;
  className?: string;
};

export function QuoteBand({ quote, author, className }: QuoteBandProps) {
  const paragraphs = quote.split(/\n\s*\n/).filter(Boolean);
  return (
    <section
      className={`border-y border-border/50 bg-secondary/85 py-20 lg:py-28 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal direction="up">
          <Quote className="mx-auto mb-6 h-8 w-8 text-primary/50" aria-hidden="true" />
          <blockquote className="font-heading text-2xl font-medium italic leading-snug text-foreground md:text-3xl">
            &ldquo;
            {paragraphs.map((paragraph, i) => (
              <p key={i} className={i > 0 ? "mt-6" : ""}>
                {paragraph}
              </p>
            ))}
            &rdquo;
          </blockquote>
          <cite className="mt-6 block text-sm font-medium not-italic uppercase tracking-widest text-muted-foreground">
            {author}
          </cite>
        </Reveal>
      </div>
    </section>
  );
}
