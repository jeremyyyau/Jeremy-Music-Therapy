import { createFileRoute, Link } from "@tanstack/react-router";
import { AudioLines, Check, Drum, Guitar, MicVocal, Music2, Music3, Piano, Wind } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { SitePage } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import { QuoteBand } from "@/components/quote-band";

import { aboutHeroImage, SIZES_CONTENT } from "@/lib/images";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About | Registered Music Therapist (RMT)" },
      {
        name: "description",
        content:
          "Registered Music Therapist with a Master of Music Therapy (University of Melbourne) and 8+ years of clinical experience across hospitals, schools, disability, aged care and community settings.",
      },
      { property: "og:title", content: "About | Registered Music Therapist (RMT)" },
      {
        property: "og:description",
        content:
          "Registered Music Therapist with a Master of Music Therapy (University of Melbourne) and 8+ years across hospitals, schools, disability, aged care and community settings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const credentials = [
  "Master of Music Therapy — University\u00A0of\u00A0Melbourne",
  "Bachelor of Music (Performance) — University\u00A0of\u00A0Melbourne",
  "Registered Music Therapist (RMT)",
  "Over 8 years of clinical experience",
  "Clinical placement supervisor for students",
  "Therapy assistant to large-scale research project focused on developing accessible music program in aged care facilities",
  "Songwriter for music-based early learning app for parents and teachers",
];

const experience = [
  {
    title: "Hospital & mental health",
    description:
      "Holistic mental health teams in hospital settings, including transdisciplinary learning and collaborative care planning with psychiatrists, psychologists, counsellors, nurses, and other hospital staff.",
  },
  {
    title: "Multidisciplinary teams",
    description:
      "Working alongside speech pathology and occupational therapy, ensuring goals are shared, reinforced and genuinely integrated.",
  },
  {
    title: "Community & disability",
    description:
      "Extensive community practice with children and adults with disability, neuro-developmental conditions and acquired brain injuries — adapted to home and daily environments to target real-world outcomes.",
  },
  {
    title: "Telehealth",
    description:
      "Running sessions on a virtual medium, developing approaches to maximise engagement, as well as online resources to enhance therapeutic approaches both on and off screen",
  },
  {
    title: "Group programs",
    description:
      "Day programs, aged care and childcare settings — including performance elements and opportunities for music learning and social skill development.",
  },
  {
    title: "Across the lifespan",
    description:
      "Working with children, adults and older people across a range of settings, including schools, aged care, palliative care and community services.",
  },
];

const instruments = [
  { name: "Voice", icon: MicVocal },
  { name: "Guitar", icon: Guitar },
  { name: "Piano", icon: Piano },
  { name: "Drumkit", icon: Drum },
  { name: "Clarinet", icon: Music3 },
  { name: "Saxophone", icon: Music2 },
  { name: "Percussion", icon: AudioLines },
  { name: "Traditional Chinese flute", icon: Wind },
];

const vignettes = [
  {
    story:
      "After a year of sessions, a non-speaking client sang one word — \"be\" — in the song 'Let It Be' for an end-of-year performance, met with tears and thunderous applause from family and staff.",
    quote: "I've known her for years and have never heard her voice, that was so beautiful!",
    attribution: "Support worker / Staff",
  },
  {
    story:
      "I worked collaboratively with a client in the palliative unit to write a song for the grandchild he would never meet — a parting gift to his pregnant daughter.",
    quote: "At least this way, even if I can't see him, he'll grow up knowing his grandad loved him very much.",
    attribution: "CLIENT",
  },
  {
    story:
      "A child was introduced to me by his parents as “non-verbal” but loved making animal sounds during 'Old Macdonald'. After two years, his communication progressed to full sentences.",
    quote: "We used to cry and pray he would be able to talk, now sometimes we just wish he would stop talking!",
    attribution: "Parent / Carer",
  },
  {
    story:
      "I was able to have a meaningful conversation with an adolescent boy after years of school sessions, where he committed to pursuing rap and music as a career",
    quote:
      "I'm not trying to be like my parents and waste my life, after I graduate I'm gonna write songs about my life that people like me can actually relate to.",
    attribution: "CLIENT",
  },
  {
    story:
      "During a childcare group formed to support a child with selective mutism, she was able to make a “sss” sound with the group, which after several weeks progressed to her first word in public.",
    quote:
      "It's like something clicked and she's ready to join in now, I see the other children starting to play with her, and I've even heard her laugh a few times!",
    attribution: "Educator / Staff",
  },
];

function AboutPage() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isTouchedRef = useRef(false);
  const scrollPosRef = useRef(0);

  useEffect(() => {
    const container = marqueeRef.current;
    if (!container) return;

    const speed = 0.6;
    let rafId: number;

    const step = () => {
      if (!isHoveredRef.current && !isTouchedRef.current) {
        scrollPosRef.current += speed;
        const half = container.scrollWidth / 2;
        if (scrollPosRef.current >= half) {
          scrollPosRef.current = 0;
        }
        container.scrollLeft = scrollPosRef.current;
      }
      rafId = requestAnimationFrame(step);
    };

    const onMouseEnter = () => {
      isHoveredRef.current = true;
    };
    const onMouseLeave = () => {
      isHoveredRef.current = false;
    };
    const onTouchStart = () => {
      isTouchedRef.current = true;
    };
    const onTouchEnd = () => {
      isTouchedRef.current = false;
    };
    const onScroll = () => {
      scrollPosRef.current = container.scrollLeft;
    };

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd);
    container.addEventListener("scroll", onScroll, { passive: true });

    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <SitePage>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">About Me</p>
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
              Music gives us a way to connect.
              <br />
              Connection gives us a way to grow.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I’m a Registered Music Therapist (RMT) with a Master of Music Therapy from the University of Melbourne and
              over eight years of clinical practice across hospital, education, disability, aged care, mental health,
              palliative care and community settings — experience that shaped the flexible, person-centred,
              evidence-based approach I bring to every therapeutic relationship.
            </p>
          </Reveal>

          <Reveal direction="scale" delay={150} className="relative mt-12 overflow-hidden rounded-3xl shadow-xl">
            <img
              src={aboutHeroImage.src}
              srcSet={aboutHeroImage.srcSet}
              sizes={SIZES_CONTENT}
              alt="Music therapist seated with a client during a warm, indoor session"
              width={1920}
              height={1280}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover object-[55%_55%]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"
            />
          </Reveal>

          <div className="mt-14 space-y-12">
            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                How I came to this work
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  My path into music therapy began long before university. My godfather, a music therapy lecturer at New
                  York University, taught me that music belongs to everyone — that nobody should feel judged for
                  expressing themselves through it. That principle still underpins how I practise.
                </p>
                <p>
                  Rather than specialising early, I worked across as many clinical populations as I could. That
                  transdisciplinary grounding shaped a resource-oriented approach: a wide repertoire of
                  evidence-informed interventions, matched to each person’s presentation, capacity and preference, and
                  adjusted through ongoing clinical review.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">Qualifications</h2>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary/70" aria-hidden />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">Breadth of experience</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                My experience across diverse settings allows me to work with a wide range of clients and therapeutic
                goals. I draw on a broad range of skills and approaches to create personalised music therapy that is
                responsive to each person’s unique needs, strengths and interests.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {experience.map((item, i) => (
                  <Reveal
                    key={item.title}
                    direction="up"
                    delay={(i % 2) * 120}
                    className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-card-hover"
                  >
                    <span
                      aria-hidden
                      className="absolute right-5 top-4 font-heading text-2xl font-semibold text-primary/15 transition-colors duration-300 group-hover:text-primary/40"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-card-foreground">{item.title}</h3>
                    <div
                      aria-hidden
                      className="mt-2 h-px w-10 bg-gradient-to-r from-primary/50 to-transparent transition-all duration-300 group-hover:w-16 group-hover:from-primary"
                    />
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                What keeps me inspired
              </h2>
              <div className="mask-edge-fade relative -mx-6 overflow-hidden py-6 md:-mx-12">
                <div className="animate-marquee flex w-max gap-6 px-6 md:px-12">
                  {[...vignettes, ...vignettes].map((vignette, i) => (
                    <div
                      key={`${vignette.story}-${i}`}
                      className="group relative w-[82vw] max-w-[340px] shrink-0 rounded-2xl border border-border/30 bg-card/55 px-6 py-6 shadow-[0_20px_45px_-14px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/75 hover:shadow-[0_28px_60px_-16px_rgba(0,0,0,0.1)] sm:max-w-[380px] sm:px-8 sm:py-7 md:max-w-[420px]"
                    >
                      {/* Decorative floating quote mark */}
                      <span
                        aria-hidden
                        className="absolute -left-2 -top-5 font-heading text-7xl leading-none text-primary/10 select-none transition-colors duration-300 group-hover:text-primary/20 sm:-left-4 sm:-top-7 sm:text-8xl"
                      >
                        “
                      </span>

                      {/* Subtle ambient glow */}
                      <div className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-70" />

                      <div className="relative max-w-3xl">
                        <p className="text-sm italic leading-relaxed text-muted-foreground">{vignette.story}</p>
                      </div>
                      <div className="mt-4 flex items-center gap-2 border-t border-border/30 pt-3">
                        <span aria-hidden className="text-lg leading-none text-primary/60">
                          “
                        </span>
                        <p className="text-sm font-medium text-foreground/90">{vignette.quote}</p>
                      </div>
                      <p className="mt-1 pl-4 text-xs uppercase tracking-wider text-muted-foreground/70">
                        — {vignette.attribution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  These moments in my work changed the way I view music — made it less about performer and audience, and
                  more about music that belongs to everyone: whether it's a made-up lullaby between mother and child, a
                  rap song blaring in a teenager’s headphones, or a shaky duet of “Fly Me To The Moon” between husband
                  and wife.
                </p>
                <p>
                  We each develop a personal relationship with music, shaped by our experiences, relationships, culture
                  and changing preferences across the lifespan. The fact that we can describe songs as “my music”
                  reflects how closely music can become connected to our sense of identity and self-expression. Music
                  remains present across significant and everyday moments, evolving alongside us as we grow, develop and
                  move through different stages of life.
                </p>
                <p>
                  Above all else, music should never have to feel perfect to be meaningful. That belief is what drew me
                  to music therapy: that there is music in every person, and everyone deserves the chance to discover
                  what it can mean for them.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">In the session room</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                As a multi-instrumentalist, I adapt the musical medium to each client’s preferences, sensory profile and
                access needs.
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                {instruments.map((inst) => (
                  <li
                    key={inst.name}
                    className="group flex flex-col items-center gap-2.5 rounded-2xl border border-border/60 bg-secondary/95 px-4 py-5 text-center transition-all duration-300 hover:border-primary hover:bg-secondary hover:shadow-card-hover"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <inst.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-sm font-medium leading-snug text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
                      {inst.name}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Above all, I aim to create a welcoming space where people feel safe to connect, express themselves, and
                discover what’s possible through the power of music.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-14 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/" hash="contact">
                Start a conversation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/services">See sessions & services</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <QuoteBand
        quote="Music therapy, to me, is music performance without the ego. It’s not about entertainment as much as it’s about empathizing."
        author="Jodi Picoult"
      />
    </SitePage>
  );
}
