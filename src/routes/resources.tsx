import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import { QuoteBand } from "@/components/quote-band";

import resourcesHero from "@/assets/resources-hero.webp";
import resourceThumb from "@/assets/resource-thumb.webp";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
  head: () => ({
    meta: [
      { title: "Resources | Music Therapy Practice" },
      {
        name: "description",
        content:
          "A curated collection of free, creative, and accessible music-based websites and tools for exploration, learning, and play.",
      },
      { property: "og:title", content: "Resources | Music Therapy Practice" },
      {
        property: "og:description",
        content:
          "A curated collection of free, creative, and accessible music-based websites and tools for exploration, learning, and play.",
      },
    ],
  }),
});

const resources = [
  { label: "Suno", url: "#" },
  { label: "Chrome Music Lab", url: "#" },
  { label: "BandLab", url: "#" },
  { label: "Blob Opera", url: "#" },
  { label: "Incredibox", url: "#" },
  { label: "Soundtrap", url: "#" },
  { label: "Radio Garden", url: "#" },
  { label: "Loopimal", url: "#" },
];

function ResourcesPage() {
  return (
    <SitePage>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Resources
            </p>
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
              Creative tools for musical play.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A collection of free, accessible, and fun music-based websites you can explore at
              home. These are not therapy sessions — they're invitations to create, listen, and
              discover music in new ways.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-5xl px-6">
          <Reveal direction="up" className="overflow-hidden rounded-3xl border border-border/60 shadow-sm">
            <img
              src={resourcesHero}
              alt="Headphones, sheet music, and small instruments arranged on a warm cream background"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-64 w-full object-cover mix-blend-multiply md:h-96"
            />
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {resources.map((r, i) => (
              <Reveal
                key={r.label}
                direction="up"
                delay={i * 100}
                className="group"
              >
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-border/60 bg-card p-3 shadow-sm transition-all hover:border-primary/40 hover:bg-secondary/50 hover:shadow-md"
                >
                  <div className="overflow-hidden rounded-xl bg-background/50">
                    <img
                      src={resourceThumb}
                      alt={`${r.label} resource thumbnail`}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="aspect-square w-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-center text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {r.label}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl px-6">
          <Reveal className="rounded-3xl border border-border/60 bg-secondary/40 p-8 md:p-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Want to add your own?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              These placeholders are easy to swap — just replace the label and link in the
              resources list, and drop in your own thumbnail images when you're ready. If you
              find a favorite that belongs here, I'd love to hear about it.
            </p>
          </Reveal>
        </div>
      </section>

      <QuoteBand
        quote="Play is the highest form of research — and music is play you can feel."
        author="A note on creative exploration"
      />
    </SitePage>

  );
}
