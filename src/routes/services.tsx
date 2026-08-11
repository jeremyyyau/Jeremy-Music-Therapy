import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SitePage } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import { QuoteBand } from "@/components/quote-band";

import svcIndividual from "@/assets/svc-individual.webp";
import svcGroup from "@/assets/svc-group.webp";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Sessions & Services | Independent Music Therapy" },
      {
        name: "description",
        content:
          "Home visits with all instruments provided, telehealth for older children and adults, home clinic sessions in Picnic Point, group programs and therapeutic instrumental learning.",
      },
      { property: "og:title", content: "Sessions & Services | Independent Music Therapy" },
      {
        property: "og:description",
        content:
          "Home visits, telehealth, home clinic sessions in Picnic Point, group programs and therapeutic instrumental learning — tailored to your goals and funding.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const services = [
  {
    title: "Home Visits",
    who: "Children, adults and families best supported in their own environment.",
    description:
      "Sessions in your natural environment, where newly acquired skills are most likely to generalise into daily routines. All instruments and equipment are provided — nothing to purchase or set up.",
    format: "Individual or family • Weekly or fortnightly • In your home",
  },
  {
    title: "Home Clinic — Picnic Point",
    who: "Clients who benefit from a dedicated, low-distraction therapy space.",
    description:
      "A calm, purpose-equipped clinic room with a full range of instruments, suited to focused sessions where reduced sensory distraction and access to broader resources support engagement.",
    format: "Individual or family • Weekly or fortnightly • Picnic Point",
  },
  {
    title: "Telehealth",
    who: "Older children and adults, including clients in rural and remote areas.",
    description:
      "Online delivery where distance, physical access or social anxiety present barriers to in-person attendance. Telehealth is a clinically appropriate mode of delivery in its own right, not simply a substitute.",
    format: "Individual • Weekly or fortnightly • Video call",
  },
  {
    title: "Instrumental Learning",
    who: "Clients with cognitive, motor and self-regulation goals.",
    description:
      "Therapeutic instrumental instruction with documented benefits for selective attention, fine and gross motor control, executive functioning, emotional regulation and impulse control — with technique and equipment adapted to accessibility and sensory needs.",
    format: "Individual • Weekly • Home, clinic or telehealth",
  },
  {
    title: "Group & Day Programs",
    who: "Day programs, aged care, childcare and school settings.",
    description:
      "Group music therapy structured around social participation, peer interaction and shared goals — with scope for performance elements and music-learning opportunities where they serve the group's aims.",
    format: "Custom scope and length • On-site",
  },
  {
    title: "An Initial Conversation",
    who: "Anyone considering music therapy.",
    description:
      "A no-pressure discussion of goals, funding and clinical suitability. If another service is the better clinical match, I'll say so — appropriate referral matters more than filling a caseload.",
    format: "Around 20 minutes • Phone or video call",
  },

];

const moreThanMusic = [
  {
    title: "Continuity of care",
    description:
      "Working directly with one therapist means no handovers, consistent goals and a relationship that deepens over time.",
  },
  {
    title: "Flexible and responsive",
    description:
      "Flexible scheduling, direct communication and less administrative complexity, so time and funding go further.",
  },
  {
    title: "Family at the centre",
    description:
      "Parents and carers know their loved one best. Your insights shape the work, and we support the wellbeing of everyone involved.",
  },
  {
    title: "Success, broadly defined",
    description:
      "Confidence, connection, participation, self-expression and moments of joy — alongside clinical goals, not instead of them.",
  },
];

function ServicesPage() {
  return (
    <SitePage>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Sessions & Services
            </p>
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
              Sessions designed around you.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Therapy can happen at home, in the clinic, online or in a group program. If you're
              not sure which fits, start with a conversation and we'll work it out together —
              including whether my practice is the right place to begin.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-5xl px-6">
          <Reveal direction="up" className="overflow-hidden rounded-3xl border border-border/60 shadow-sm">
            <img
              src={svcIndividual}
              alt="Therapist and client sharing a warm moment in a sunlit session room"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1024}
              className="h-64 w-full object-cover mix-blend-multiply md:h-96"
            />
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-5xl px-6">
          <div className="space-y-6">
            {services.map((s, i) => (
              <Reveal
                key={s.title}
                direction={i % 2 === 0 ? "left" : "right"}
                as="article"
                className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary hover:bg-secondary hover:shadow-card-hover md:p-10"
              >
                <h2 className="font-heading text-2xl font-semibold text-card-foreground">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-primary">{s.who}</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Format:</span> {s.format}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl px-6">
          <Reveal direction="up" className="mb-12 overflow-hidden rounded-3xl border border-border/60 shadow-sm">
            <img
              src={svcGroup}
              alt="Small group circle sharing hand percussion in warm afternoon light"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1024}
              className="h-56 w-full object-cover mix-blend-multiply md:h-72"
            />
          </Reveal>

          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              More Than Music
            </p>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Choosing the right therapist is about more than qualifications.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                It's about finding someone whose approach feels right for you and your family.
                Larger clinics are the best fit for some people; others value a more personal,
                flexible experience where therapy is tailored to their goals, lifestyle and
                changing needs.
              </p>
              <p>
                As an independent music therapist, I offer a personalised service built on
                trust, collaboration and genuine connection. Together we can adapt sessions,
                explore different approaches, and make the most of your funding and time so that
                therapy stays meaningful and sustainable.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {moreThanMusic.map((item, i) => (
              <Reveal
                key={item.title}
                direction="up"
                delay={(i % 2) * 120}
                className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary hover:bg-secondary hover:shadow-card-hover"
              >
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 rounded-3xl border border-border/60 bg-secondary/40 p-8 md:p-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Finding the right fit
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I encourage every family to find the service that feels right for them. There is no
              one-size-fits-all approach to therapy, and the best outcomes happen when clients
              feel comfortable, supported and genuinely connected with their therapist. Equally,
              it often takes time to build the foundations that developmental progress grows
              from — so give any therapeutic relationship room to establish itself. Either way, I
              feel privileged to be part of that journey.
            </p>
          </Reveal>

          <Reveal className="mt-12 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/" hash="contact">Start a conversation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/music-therapy">Learn about music therapy</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <QuoteBand
        quote="Music is the shorthand of emotion."
        author="Leo Tolstoy"
      />
    </SitePage>
  );
}
