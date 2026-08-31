import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, Calendar, Brain, Sparkles, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SitePage } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import { QuoteBand } from "@/components/quote-band";

import { mtFamilyImage, mtKeyboardImage, SIZES_CONTENT } from "@/lib/images";

export const Route = createFileRoute("/music-therapy")({
  component: MusicTherapyPage,
  head: () => ({
    meta: [
      { title: "What is Music Therapy | Evidence-Based Practice" },
      {
        name: "description",
        content:
          "Music therapy is a clinical, evidence-based practice using active and receptive music interventions to support emotional, cognitive, physical and social goals.",
      },
      { property: "og:title", content: "What is Music Therapy | Evidence-Based Practice" },
      {
        property: "og:description",
        content:
          "Music therapy uses active and receptive music interventions to support emotional, cognitive, physical and social goals — for people of all abilities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const benefits = [
  {
    icon: Heart,
    title: "Emotional wellbeing",
    description:
      "Music can access affect that language can't reach — grief, anxiety, anger, joy — providing a contained, safe channel for expression and processing.",
  },
  {
    icon: Users,
    title: "Communication & social skills",
    description:
      "Shared rhythm and song structure scaffold joint attention, eye contact and turn-taking, particularly for clients with limited verbal communication.",
  },
  {
    icon: Brain,
    title: "Cognition & memory",
    description:
      "Familiar and preferred music engages widely distributed memory networks, supporting attention, orientation and autobiographical recall in dementia care.",
  },
  {
    icon: Calendar,
    title: "Developmental goals",
    description:
      "Structured music-based play targets speech and language, motor coordination and social skills across all developmental trajectories.",
  },
  {
    icon: Sparkles,
    title: "Regulation & relaxation",
    description:
      "Live music and guided listening support arousal regulation, and are associated with reduced physiological stress markers and lower perceived pain.",
  },
  {
    icon: Music,
    title: "Identity & self-expression",
    description:
      "Therapeutic songwriting, improvisation and preferred-music listening support identity work, self-efficacy and narrative processing.",
  },
];

function MusicTherapyPage() {
  return (
    <SitePage>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">What is Music Therapy?</p>
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
              Evidence-based care, delivered through music.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Music therapy is a clinical, evidence-based allied health discipline in which a registered therapist uses
              music-based interventions to address non-musical therapeutic goals across emotional, cognitive,
              communication, physical and social domains. Whilst music holds inherent therapeutic qualities, music
              therapy harnesses these qualities through intentional, structured and clinically directed practice,
              grounded in rapport and therapeutic connection — with progress reviewed against goals over time.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-5xl px-6">
          <Reveal direction="up" className="relative overflow-hidden rounded-3xl border border-border/60 shadow-sm">
            <img
              src={mtFamilyImage.src}
              srcSet={mtFamilyImage.srcSet}
              sizes={SIZES_CONTENT}
              alt="Music therapist playing guitar with a parent and infant during a home-based session"
              loading="lazy"
              decoding="async"
              width={1600}
              height={889}
              className="w-full object-cover aspect-[1600/810] object-[65%_45%] opacity-95 saturate-[0.85] contrast-[0.94] md:h-auto md:aspect-[1600/810] md:object-cover md:object-[65%_45%]"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-secondary/25 mix-blend-multiply" />
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-4xl px-6 space-y-12">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Active and receptive approaches
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Sessions can draw on <strong className="text-foreground">active interventions</strong> — clinical
                improvisation, supported songwriting, soundtrack creation, therapeutic singing and instrumental play to
                build confidence, communication and engagement — or{" "}
                <strong className="text-foreground">receptive interventions</strong> such as guided music listening,
                song lyric analysis, playlist creation and music-assisted relaxation, which support self-reflection,
                emotional exploration and sensory regulation. Most treatment plans combine both, selected on the basis
                of assessment and reviewed as goals shift.
              </p>
              <p>
                These methods are flexibly adapted for diverse populations, including children and adults with
                disability, neuro-developmental conditions, acquired brain injury and mental health presentations — so
                interventions remain accessible, strengths-based, resource-oriented and clinically meaningful.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal
                key={b.title}
                direction="up"
                delay={(i % 3) * 120}
                className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary hover:bg-secondary hover:shadow-card-hover"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:scale-120 group-hover:bg-primary/30 group-hover:shadow-glow">
                  <b.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-120" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-card-foreground">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-4xl px-6 space-y-12">
          <Reveal direction="up" className="overflow-hidden rounded-3xl border border-border/60 shadow-sm">
            <div className="relative">
              <img
                src={mtKeyboardImage.src}
                srcSet={mtKeyboardImage.srcSet}
                sizes={SIZES_CONTENT}
                alt="Music therapist playing keyboard with a client in a home-based session"
                loading="lazy"
                decoding="async"
                width={1600}
                height={1066}
                className="w-full object-cover object-[85%_50%] opacity-90 saturate-[0.85] contrast-[0.92] aspect-[1600/720]"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-secondary/25 mix-blend-multiply" />
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">Who is it for?</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Music therapy is for everyone. Most people already use music self-therapeutically without labelling it
                as such — calming music after a stressful day, upbeat music to lift motivation, or background music to
                sustain attention while studying.
              </p>
              <p>
                Clinical music therapy builds on those mechanisms and applies them intentionally and systematically.
                Eligibility isn't defined by diagnosis but by assessed goals, strengths and challenges. Clients with
                very different presentations often share similar functional goals, and the flexibility of music as a
                medium allows those goals to be targeted through each person's own preferences and capacities.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              How is it different from a music lesson?
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                A music lesson teaches musical skill; music therapy uses music to work towards emotional, social,
                cognitive and physical outcomes. There is no requirement to become a musician, and no performance or
                grading. That said, structured instrumental learning has documented therapeutic value — supporting
                selective attention, fine and gross motor control, executive functioning, emotional regulation and
                impulse control.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">Progress takes time</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Measurable developmental outcomes rarely emerge from a single session. The evidence points consistently
                to therapeutic alliance and consistent, repeated engagement as key mediators of change — a relationship
                in which a person feels safe enough to attempt something new. If you're weighing up providers, take the
                time you need: an appropriate clinical match matters more than starting quickly.
              </p>
            </div>
          </Reveal>

          <Reveal className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/" hash="contact">
                Ask a question
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/services">See sessions & services</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <QuoteBand
        quote={`What we were creating in therapy... was performance... and that performance was of wonderful, developmental, therapeutic value.

People were learning how to 'perform' — people were learning to perform beyond themselves.

We become who we are by continuously being who we are not.`}
        author="Fred Newman"
      />
    </SitePage>
  );
}
