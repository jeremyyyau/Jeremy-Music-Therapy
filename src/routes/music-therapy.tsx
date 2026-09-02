import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  Users,
  Calendar,
  Brain,
  Sparkles,
  Music,
  Mic2,
  Ear,
  GraduationCap,
  Target,
  Clock,
  CheckCircle2,
} from "lucide-react";
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

const activeInterventions = [
  "Clinical improvisation",
  "Supported songwriting",
  "Soundtrack creation",
  "Therapeutic singing",
  "Instrumental play",
];

const receptiveInterventions = [
  "Guided music listening",
  "Song lyric analysis",
  "Playlist creation",
  "Music-assisted relaxation",
];

const whoItsFor = [
  "People who already use music self-therapeutically — calming music after stress, upbeat music for exercise, or background music to sustain attention.",
  "Clients with very different presentations who share similar functional goals, where the flexibility of music can be matched to individual preferences and capacities.",
  "People who do not always fit comfortably within conventional therapeutic approaches and need additional support to engage.",
  "Those who require activities to be adapted, feel anxious or unmotivated in unfamiliar environments, or find direct social interaction challenging.",
  "People who have experienced difficulty with traditional approaches, become overwhelmed by expectations, or engage more readily when activities are creative, predictable and aligned with their interests.",
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
              (RMT) uses music-based interventions to address non-musical therapeutic goals across emotional, cognitive,
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
              <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-primary/10 p-3">
                    <Mic2 className="h-5 w-5 text-primary" />
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

              <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-primary/10 p-3">
                    <Ear className="h-5 w-5 text-primary" />
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

            <div className="mt-8 rounded-2xl border border-border/60 bg-secondary/40 p-6">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 hidden rounded-full bg-primary/10 p-2.5 sm:block">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">What makes music therapy distinct?</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    Music therapy can incorporate strategies informed by speech pathology, occupational therapy, psychology
                    and other allied health disciplines where these align with assessed goals, complementing or working
                    alongside other professional supports. What distinguishes music therapy is the unique motivational
                    potential of music — its ability to capture attention, evoke emotion, create anticipation and make
                    participation inherently rewarding. Music can transform tasks that may otherwise feel difficult,
                    repetitive or challenging into experiences that are engaging and meaningful, supporting willingness to
                    participate, sustained practice and skill development within a therapeutic context.
                  </p>
                </div>
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-muted-foreground">
              These methods are flexibly adapted for diverse populations, including children and adults with disability,
              neuro-developmental conditions, acquired brain injury and mental health presentations — so interventions
              remain accessible, strengths-based, resource-oriented and clinically relevant.
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

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-primary/10 p-3">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">Who is it for?</h2>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Music therapy is for everyone. Eligibility is not defined by diagnosis, but by assessed goals,
                  strengths and challenges.
                </p>
                <ul className="mt-5 space-y-3">
                  {whoItsFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/80" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  By meeting people within their existing strengths and interests, music can reduce the pressure of
                  participation while creating genuine opportunities for connection, communication, confidence and growth.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-primary/10 p-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                    How is it different from a music lesson?
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  A music lesson teaches musical skills. Music therapy uses music as a way of supporting broader goals.
                  There is no expectation to become a musician, perform or be graded.
                </p>
                <div className="mt-5 space-y-4">
                  <div className="rounded-xl bg-secondary/40 p-4">
                    <h3 className="font-heading text-sm font-semibold text-foreground">Music lesson</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Teaches musical skills, technique, performance and repertoire.
                    </p>
                  </div>
                  <div className="rounded-xl bg-primary/5 p-4">
                    <h3 className="font-heading text-sm font-semibold text-foreground">Music therapy</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Uses music to support communication, confidence, emotional regulation, attention, physical skills and
                      social connection.
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  Music can still be taught as part of therapy when learning an instrument supports a person's goals —
                  building attention, coordination, planning, impulse control and emotional regulation. The focus, however,
                  is not on becoming a better musician, but on what music can help make possible.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-8 rounded-2xl border border-border/60 bg-card p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex rounded-xl bg-primary/10 p-3">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">Progress takes time</h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Measurable developmental outcomes rarely emerge from a single session. Meaningful therapeutic change
                usually develops through a strong therapeutic relationship, consistent engagement and repeated
                opportunities to practice and build skills. A client being able to do something in their first session is
                encouraging, but it is not necessarily a therapeutic outcome in itself — it may simply indicate that they
                respond well to this type of approach. What matters is whether that initial engagement can be built upon
                over time.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                For parents and carers, progress may be seen in small, incremental changes:
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {progressSigns.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/80" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                If you're weighing up providers, take the time you need: an appropriate clinical match matters more than
                starting quickly.
              </p>
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

People were learning how to 'perform' — people were learning to perform beyond themselves.

We become who we are by continuously being who we are not.`}
        author="Fred Newman"
      />
    </SitePage>
  );
}
