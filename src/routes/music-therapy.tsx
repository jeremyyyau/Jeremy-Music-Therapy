import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, Calendar, Brain, Sparkles, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SitePage } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import { QuoteBand } from "@/components/quote-band";

import mtSession from "@/assets/mt-session.webp";
import mtListening from "@/assets/mt-listening.webp";

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
      "Music can reach feelings that words can't touch — grief, anxiety, joy, anger — and give them a safe form of expression.",
  },
  {
    icon: Users,
    title: "Connection & communication",
    description:
      "Shared rhythm and song create moments of eye contact, turn-taking and connection, especially for those who find talking hard.",
  },
  {
    icon: Brain,
    title: "Cognition & memory",
    description:
      "Familiar songs activate memory pathways, supporting attention, orientation and recall — particularly in dementia care.",
  },
  {
    icon: Calendar,
    title: "Developmental goals",
    description:
      "Music-based play supports speech, motor coordination and social skills in children on all developmental paths.",
  },
  {
    icon: Sparkles,
    title: "Regulation & relaxation",
    description:
      "Live music and guided listening support regulation, lower physiological stress markers and can reduce perceived pain.",
  },
  {
    icon: Music,
    title: "Identity & self-expression",
    description:
      "Songwriting, improvisation and preferred-music listening help clients explore who they are and who they're becoming.",
  },
];

function MusicTherapyPage() {
  return (
    <SitePage>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              What is Music Therapy?
            </p>
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
              Evidence-based care, delivered through music.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Music therapy is a clinical, evidence-based practice that uses music to support
              non-musical therapeutic goals across emotional, cognitive, physical and social
              domains.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-5xl px-6">
          <Reveal direction="up" className="overflow-hidden rounded-3xl border border-border/60 shadow-sm">
            <img
              src={mtSession}
              alt="Hands gently playing an acoustic guitar in warm natural light"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1024}
              className="h-64 w-full object-cover mix-blend-multiply md:h-96"
            />
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-4xl px-6 space-y-12">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Active and receptive approaches
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Sessions can draw on <strong className="text-foreground">active
                interventions</strong> — improvisation, songwriting, singing and playing
                instruments — or <strong className="text-foreground">receptive
                interventions</strong> such as guided listening, lyric analysis and
                music-assisted relaxation. Most often, they blend both.
              </p>
              <p>
                These methods are flexibly adapted to suit diverse populations, including
                children and adults with disabilities, neuro-developmental conditions, acquired
                brain injuries and mental health challenges — so outcomes stay accessible,
                resource-oriented and meaningful for everyone.
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
                <h3 className="font-heading text-xl font-semibold text-card-foreground">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-4xl px-6 space-y-12">
          <Reveal direction="up" className="overflow-hidden rounded-3xl border border-border/60 shadow-sm">
            <img
              src={mtListening}
              alt="Small hand drum and mallets on soft woven fabric in warm light"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1024}
              className="h-56 w-full object-cover mix-blend-multiply md:h-72"
            />
          </Reveal>

          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Who is it for?
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Music therapy is for everyone. Most people already use music therapeutically
                without realising it — listening to something calming after a stressful day,
                playing upbeat songs to lift motivation, or using music to focus while studying.
              </p>
              <p>
                Music therapy builds on that, using music in a more intentional and clinical
                way. It isn't defined by diagnosis, but by goals, strengths and challenges.
                People from very different backgrounds often share similar goals, and the
                inherent creativity of music therapy supports them in ways that draw on their
                own preferences and abilities.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              How is it different from a music lesson?
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                A music lesson teaches you to play. Music therapy uses music to help you grow —
                emotionally, socially, cognitively or physically. You don't need to become a
                musician, and there's no performance or grading. That said, learning an
                instrument can itself be therapeutic, supporting selective attention, fine and
                gross motor movement, executive functioning, regulation and impulse control.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Progress takes time
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Meaningful developmental outcomes rarely arrive in a single session. They grow
                out of trust, consistency and the right foundations — a relationship where a
                person feels safe enough to try something new. If you're weighing up options,
                take the time you need. Finding the service that genuinely fits you or your
                family matters more than starting quickly.
              </p>
            </div>
          </Reveal>

          <Reveal className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/" hash="contact">Ask a question</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/services">See sessions & services</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <QuoteBand
        quote="Music can name the unnameable and communicate the unknowable."
        author="Leonard Bernstein"
      />
    </SitePage>
  );
}
