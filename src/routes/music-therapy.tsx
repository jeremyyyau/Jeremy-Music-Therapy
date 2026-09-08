import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, Calendar, Brain, Sparkles, Music, Mic2, Ear, Target, Clock, CheckCircle2 } from "lucide-react";
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
      "Music can access affect that language can’t reach — grief, anxiety, anger, joy — providing a contained, safe channel for expression and processing.",
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

const activeInterventions = [
  "Clinical improvisation",
  "Supported songwriting",
  "Soundtrack creation",
  "Therapeutic singing",
  "Instrumental play",
  "And more…",
];

const receptiveInterventions = [
  "Guided music listening",
  "Song lyric analysis",
  "Playlist creation",
  "Music-assisted relaxation",
  "And more…",
];

const progressSigns = [
  "Becoming more comfortable with the therapist",
  "Developing trust and rapport",
  "Being more willing to engage",
  "Tolerating new experiences",
  "Sustaining participation for longer",
  "Gradually working towards specific therapeutic goals",
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
              Music therapy is a clinical, evidence-based allied health discipline in which a Registered Music Therapist
              (RMT) uses music-based interventions to address non-musical goals — emotional, cognitive, communication,
              physical and social — through structured, intentional approaches grounded in therapeutic connection.
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

        <div className="mx-auto mt-16 max-w-5xl px-6">
          <Reveal>
            <div className="mx-auto max-w-4xl">
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                Active and receptive approaches
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Sessions can draw on <strong className="text-foreground">active</strong> or{" "}
                <strong className="text-foreground">receptive</strong> interventions. Most therapy plans combine both,
                selected on the basis of assessment and reviewed periodically as goals shift.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-card-hover">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:scale-120 group-hover:bg-primary/30 group-hover:shadow-glow">
                    <Mic2 className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-120" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">Active interventions</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Build confidence, communication and engagement through:
                </p>
                <ul className="mt-4 space-y-2">
                  {activeInterventions.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-card-hover">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:scale-120 group-hover:bg-primary/30 group-hover:shadow-glow">
                    <Ear className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-120" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">Receptive interventions</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Support self-reflection, emotional exploration and sensory regulation through:
                </p>
                <ul className="mt-4 space-y-2">
                  {receptiveInterventions.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-border/60 bg-secondary/85 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-[0.34fr_0.66fr]">
                <div className="flex items-center gap-3 border-b border-border/50 p-6 md:border-b-0 md:border-r md:p-8">
                  <div className="rounded-full bg-primary/10 p-2.5">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    What makes music therapy distinct?
                  </h3>
                </div>
                <p className="p-6 text-base leading-relaxed text-muted-foreground md:p-8">
                  Music therapy can complement other allied health supports, incorporating strategies informed by speech
                  pathology, occupational therapy and psychology where they align with assessed goals. What
                  distinguishes it is music’s unique motivational pull — its ability to capture attention, evoke emotion
                  and make participation inherently rewarding, turning difficult or repetitive tasks into engaging,
                  meaningful experiences.
                </p>
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-muted-foreground">
              Methods are flexibly adapted for children and adults with disability, neuro-developmental conditions,
              acquired brain injury and mental health presentations — keeping interventions accessible, strengths-based
              and clinically relevant.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal
                key={b.title}
                direction="up"
                delay={(i % 3) * 120}
                className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-card-hover"
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

        <div className="mx-auto mt-20 max-w-5xl px-6">
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

          <div className="mt-16 grid grid-cols-1 gap-8">
            <Reveal>
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                How is it different from a music lesson?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                A music lesson teaches musical skills, technique, performance and repertoire. Music therapy uses music
                as a way of supporting broader goals, and there is no expectation to become a musician, perform or be
                graded.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Music can still be taught as part of therapy when learning an instrument supports a person’s goals —
                building attention, coordination, planning, impulse control and emotional regulation. The focus,
                however, is not on becoming a better musician, but on what music can help make possible.
              </p>
            </Reveal>

            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm">
                <div className="flex flex-col gap-4 bg-secondary/60 p-6 md:flex-row md:items-center md:justify-between md:p-8">
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary">Inclusive care</p>
                    <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">Who is it for?</h2>
                  </div>
                  <div className="inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 p-3">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Music therapy is for everyone. Eligibility is defined not by diagnosis, but by goals, strengths and
                    challenges.
                  </p>
                  <div className="mt-6 space-y-5">
                    {[
                      {
                        title: "For people who connect through music",
                        description:
                          "People who already use music self-therapeutically — calming music after stress, upbeat music for exercise, background music to sustain attention.",
                      },
                      {
                        title: "For people who need adapted support",
                        description:
                          "People who don’t fit comfortably within conventional approaches, feel anxious or unmotivated in unfamiliar environments, or engage more readily when activities are creative, predictable and aligned with their interests.",
                      },
                      {
                        title: "For anyone with goals or areas to work on",
                        description:
                          "No formal diagnosis or musical background needed — the focus is on using music to support what matters to you.",
                      },
                    ].map((item, i) => (
                      <div key={item.title} className="grid grid-cols-[auto_1fr] gap-4">
                        <div className="flex flex-col items-center">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-semibold text-primary">
                            {i + 1}
                          </span>
                          {i < 2 ? <span className="mt-2 h-full min-h-10 w-px bg-border/70" aria-hidden /> : null}
                        </div>
                        <div className="pb-2">
                          <h3 className="font-heading text-sm font-semibold text-foreground">{item.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 border-t border-border/50 pt-5 text-base leading-relaxed text-muted-foreground">
                    Meeting people within their existing strengths and interests reduces the pressure of participation —
                    and opens genuine opportunities for connection, confidence and growth.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-8 overflow-hidden rounded-3xl border border-border/60 bg-secondary/85 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]">
                <div className="border-b border-border/50 p-6 md:p-8 lg:border-b-0 lg:border-r">
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                    Progress takes time
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Meaningful change rarely emerges from a single session — it develops through a strong therapeutic
                    relationship, consistent engagement and repeated practice. A first-session success is encouraging,
                    but what matters is whether that engagement can be built upon over time.
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    If you’re weighing up providers, take the time you need: an appropriate clinical match matters more
                    than starting quickly.
                  </p>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-primary/80">
                    Small signs of progress
                  </p>
                  <ul className="mt-5 space-y-4">
                    {progressSigns.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/80" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-12 flex flex-wrap gap-4">
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

People were learning how to ‘perform’ — people were learning to perform beyond themselves.

We become who we are by continuously being who we are not.`}
        author="Fred Newman"
      />
    </SitePage>
  );
}
