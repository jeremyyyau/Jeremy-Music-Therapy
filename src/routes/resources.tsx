import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SitePage } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import { QuoteBand } from "@/components/quote-band";
import { StaffLines } from "@/components/staff-lines";

import { resourcesHeroImage, SIZES_CONTENT } from "@/lib/images";
import imgSuno from "@/assets/res-suno.webp";
import imgChromeMusicLab from "@/assets/res-chromemusiclab.webp";
import imgBandLab from "@/assets/res-bandlab.webp";
import imgBlobOpera from "@/assets/res-blobopera.webp";
import imgIncredibox from "@/assets/res-incredibox.webp";
import imgPbsKids from "@/assets/res-pbskids.webp";
import imgLevelUpMusicianship from "@/assets/res-levelupmusicianship.webp";
import imgMyWayTogether from "@/assets/res-mywaytogether-v4.webp";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
  head: () => ({
    meta: [
      { title: "Resources | Jeremy Yau Music Therapy" },
      {
        name: "description",
        content:
          "A curated collection of free, creative and accessible music-based websites and tools for exploration, learning and play.",
      },
      { property: "og:title", content: "Resources | Jeremy Yau Music Therapy" },
      {
        property: "og:description",
        content:
          "A curated collection of free, creative and accessible music-based websites and tools for exploration, learning and play.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.jeremymusictherapy.com/resources" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jeremymusictherapy.com/resources" },
      {
        rel: "preload",
        as: "image",
        href: resourcesHeroImage.src,
        imageSrcSet: resourcesHeroImage.srcSet,
        imageSizes: SIZES_CONTENT,
        fetchPriority: "high",
      },
    ],
  }),
});

const resources = [
  {
    label: "Suno",
    url: "https://suno.com",
    image: imgSuno,
    description: "Generate songs from simple text prompts.",
  },
  {
    label: "Chrome Music Lab",
    url: "https://musiclab.chromeexperiments.com",
    image: imgChromeMusicLab,
    description: "Playful experiments in rhythm, melody and sound.",
  },
  {
    label: "BandLab",
    url: "https://www.bandlab.com",
    image: imgBandLab,
    description: "Create and share music in a free online studio.",
  },
  {
    label: "Blob Opera",
    url: "https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw",
    image: imgBlobOpera,
    description: "Guide singing blobs through harmonies and melodies.",
  },
  {
    label: "Incredibox",
    url: "https://www.incredibox.com",
    image: imgIncredibox,
    description: "Build layered beats by dressing up a beatbox crew.",
  },
  {
    label: "PBS Kids Music",
    url: "https://pbskids.org/games/music",
    image: imgPbsKids,
    description: "Music games and songs designed for young learners.",
  },
  {
    label: "Level Up Musicianship",
    url: "https://levelupmusicianship.com/games",
    image: imgLevelUpMusicianship,
    description: "Playful music theory games that build listening and reading skills.",
  },
  {
    label: "My Way Together",
    url: "https://apps.apple.com/us/app/my-way-together/id6796318818",
    image: imgMyWayTogether,
    description: "Calm, simple tools that support communication and choice.",
  },
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
              A collection of accessible, music-based websites you can explore at home. In addition to clinical
              sessions, these resources offer fun and interactive opportunities for musical engagement between
              appointments. They can encourage active listening, creativity and enjoyment of music, whether explored
              independently or together with family and friends.
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
                loading="eager"
                fetchPriority="high"
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
              <Reveal key={r.label} direction="up" delay={i * 100} className="group h-full">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-2 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-secondary/75 hover:shadow-card-hover sm:p-3"
                >
                  <div className="overflow-hidden rounded-xl bg-background/50 transition-colors duration-300 group-hover:bg-primary/10">
                    <img
                      src={r.image}
                      alt={`${r.label} logo`}
                      loading="lazy"
                      fetchPriority="low"
                      decoding="async"
                      width={512}
                      height={512}
                      className="aspect-square w-full object-cover mix-blend-multiply transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105"
                    />
                  </div>
                  <p className="mt-2 sm:mt-3 text-center text-xs font-medium text-foreground transition-all duration-300 group-hover:scale-105 group-hover:text-primary sm:text-sm">
                    {r.label}
                  </p>
                  <p className="mt-1 text-center text-[10px] italic leading-snug text-muted-foreground/70 transition-colors duration-300 group-hover:text-muted-foreground sm:text-xs">
                    {r.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl px-6">
          <Reveal className="relative overflow-hidden rounded-3xl border border-border/60 bg-secondary/85 p-8 md:p-10">
            <StaffLines
              variant="melody"
              className="absolute inset-x-0 top-1/2 h-32 w-full -translate-y-1/2 text-primary/10"
            />
            <div className="relative z-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                Have a resource to share?
              </h2>
              <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-muted-foreground">
                Therapists are always on the lookout for thoughtful, accessible tools that can support the people we walk alongside.


                If you know of an app, website or creative resource that has made a difference for you or someone you care for, I’d love to hear about it. 


                Your suggestion might become a meaningful bridge for another client, another family, or another moment of connection.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/" hash="contact">
                    Send a resource
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <QuoteBand quote="Play gives children a chance to practice what they are learning." author="Fred Rogers" />
    </SitePage>
  );
}
