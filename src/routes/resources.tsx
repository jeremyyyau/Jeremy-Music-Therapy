import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import { QuoteBand } from "@/components/quote-band";

import { resourcesHeroImage, SIZES_CONTENT } from "@/lib/images";
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
  { label: "Suno", url: "#", description: "Generate songs from simple text prompts." },
  { label: "Chrome Music Lab", url: "#", description: "Playful experiments in rhythm, melody and sound." },
  { label: "BandLab", url: "#", description: "Create and share music in a free online studio." },
  { label: "Blob Opera", url: "#", description: "Guide singing blobs through harmonies and melodies." },
  { label: "Incredibox", url: "#", description: "Build layered beats by dressing up a beatbox crew." },
  { label: "PBS Kids Music", url: "#", description: "Music games and songs designed for young learners." },
  { label: "Radio Garden", url: "#", description: "Spin the globe and listen to live radio everywhere." },
  { label: "My Way Together", url: "#", description: "Explore music-making tools for inclusive participation." },
];

function ResourcesPage() {
  return (
    <SitePage>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Resources</p>
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
              Creative tools for musical play.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A collection of free, accessible music-based websites you can explore at home. These are not therapy and
              don't replace clinical sessions — they're low-pressure opportunities for creative engagement, active
              listening and musical play between appointments.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-5xl px-6">
          <Reveal direction="up" className="overflow-hidden rounded-3xl border border-border/60 shadow-sm">
            <div className="relative aspect-[16/9] w-full md:aspect-[16/10]">
              <img
                src={resourcesHeroImage.src}
                srcSet={resourcesHeroImage.srcSet}
                sizes={SIZES_CONTENT}
                alt="Music therapist playing guitar with a child during a relaxed, interactive session"
                loading="lazy"
                decoding="async"
                width={1920}
                height={1280}
                className="h-full w-full object-cover object-[58%_38%] md:object-[60%_35%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-secondary/20 mix-blend-multiply" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {resources.map((r, i) => (
              <Reveal key={r.label} direction="up" delay={i * 100} className="group">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-border/60 bg-card p-3 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-secondary/75 hover:shadow-card-hover"
                >
                  <div className="overflow-hidden rounded-xl bg-background/50 transition-colors duration-300 group-hover:bg-primary/10">
                    <img
                      src={resourceThumb}
                      alt={`${r.label} resource thumbnail`}
                      loading="lazy"
                      decoding="async"
                      width={512}
                      height={512}
                      className="aspect-square w-full object-cover mix-blend-multiply transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105"
                    />
                  </div>
                  <p className="mt-3 text-center text-sm font-medium text-foreground transition-all duration-300 group-hover:scale-105 group-hover:text-primary">
                    {r.label}
                  </p>
                  <p className="mt-1 text-center text-xs leading-snug text-muted-foreground/70 transition-colors duration-300 group-hover:text-muted-foreground">
                    {r.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl px-6">
          <Reveal className="rounded-3xl border border-border/60 bg-secondary/85 p-8 md:p-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">Want to add your own?</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              These placeholders are easy to swap — just replace the label and link in the resources list, and drop in
              your own thumbnail images when you're ready. If you find a favorite that belongs here, I'd love to hear
              about it.
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
