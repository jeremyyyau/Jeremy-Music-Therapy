import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, Calendar, Brain, Sparkles, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SitePage } from "@/components/site-chrome";

export const Route = createFileRoute("/music-therapy")({
  component: MusicTherapyPage,
  head: () => ({
    meta: [
      { title: "What is Music Therapy | Music Therapy Practice" },
      {
        name: "description",
        content:
          "Learn what music therapy is, how it works, who it helps, and what an evidence-based session actually looks like.",
      },
      { property: "og:title", content: "What is Music Therapy | Music Therapy Practice" },
      {
        property: "og:description",
        content:
          "Learn what music therapy is, how it works, who it helps, and what an evidence-based session actually looks like.",
      },
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
      "Shared rhythm and song create moments of eye contact, turn-taking, and connection, especially for those who find talking hard.",
  },
  {
    icon: Brain,
    title: "Cognition & memory",
    description:
      "Familiar songs activate memory pathways, supporting attention, orientation, and recall — particularly in dementia care.",
  },
  {
    icon: Calendar,
    title: "Developmental goals",
    description:
      "Music-based play supports speech, motor coordination, and social skills in children on all developmental paths.",
  },
  {
    icon: Sparkles,
    title: "Pain & stress relief",
    description:
      "Live music and guided listening lower physiological stress markers and can reduce perceived pain.",
  },
  {
    icon: Music,
    title: "Identity & self-expression",
    description:
      "Songwriting, improvisation, and preferred-music listening help clients explore who they are and who they're becoming.",
  },
];

function MusicTherapyPage() {
  return (
    <SitePage>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            What is Music Therapy?
          </p>
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
            Evidence-based care, delivered through music.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Music therapy is the clinical, research-supported use of music by a credentialed
            professional to help clients meet personalized, non-musical goals — from emotional
            regulation to communication to rehabilitation.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-card-foreground">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-4xl px-6 space-y-12">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              What a session actually looks like
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                We start with an assessment — a conversation and some musical exploration — so
                I understand your goals, preferences, and what music already means to you. From
                there, I design sessions around a mix of experiences:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong className="text-foreground">Improvisation</strong> — making music
                  together on instruments chosen for accessibility, no experience needed.
                </li>
                <li>
                  <strong className="text-foreground">Songwriting</strong> — using lyrics and
                  melody to give shape to what's hard to say.
                </li>
                <li>
                  <strong className="text-foreground">Receptive listening</strong> — guided
                  listening to preferred or curated music to support relaxation, memory, or
                  emotional processing.
                </li>
                <li>
                  <strong className="text-foreground">Singing & movement</strong> — using voice
                  and body to build breath, coordination, and expression.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              How is it different from a music lesson?
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                A music lesson teaches you to play. Music therapy uses music to help you grow —
                emotionally, socially, cognitively, or physically. You don't need to become a
                musician, and there's no performance or grading. The music is a tool, not the
                goal.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Is it right for me?
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Music therapy has been studied in a wide range of populations — children with
                autism and other developmental differences, people managing anxiety or
                depression, stroke and Parkinson's rehabilitation, dementia care, palliative
                and hospice care, and much more. If you're not sure, a free consultation is the
                easiest way to find out.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/" hash="contact">Book a Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/services">See Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
