import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Armchair, Video, Guitar, Users, MessagesSquare, Calendar, Clock, Phone, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SitePage } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import { QuoteBand } from "@/components/quote-band";

import { svcIndividualImage, svcGroupImage, SIZES_CONTENT } from "@/lib/images";

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
      { property: "og:url", content: "https://harmony-connect-folio.lovable.app/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://harmony-connect-folio.lovable.app/services" },
      {
        rel: "preload",
        as: "image",
        href: svcIndividualImage.src,
        imageSrcSet: svcIndividualImage.srcSet,
        imageSizes: SIZES_CONTENT,
        fetchPriority: "high",
      },
    ],
  }),
});

const services = [
  {
    icon: Home,
    title: "Home Visits",
    who: "Children, adults and families best supported in their own environment.",
    description:
      "Sessions in your natural environment, where newly acquired skills are most likely to generalise into daily routines. All instruments and equipment are provided — nothing to purchase or set up.",
    format: "Individual or family • Weekly or fortnightly • In your home",
  },
  {
    icon: Armchair,
    title: "Home Clinic — Picnic Point",
    who: "Clients who benefit from a dedicated, low-distraction therapy space.",
    description:
      "A calm, purpose-equipped clinic room with a full range of instruments, suited to focused sessions where reduced sensory distraction and access to broader resources support engagement.",
    format: "Individual or family • Weekly or fortnightly • Picnic Point",
  },
  {
    icon: Video,
    title: "Telehealth",
    who: "Older children and adults, including clients in rural and remote areas.",
    description:
      "Online delivery where distance, physical access or social anxiety make in-person attendance difficult — a clinically appropriate format that uses technology and music collaboratively.",
    format: "Individual • Weekly or fortnightly • Video call",
  },
  {
    icon: Guitar,
    title: "Instrumental Learning",
    who: "Clients with cognitive, motor and self-regulation goals.",
    description:
      "Therapeutic instrumental instruction with documented benefits for selective attention, fine and gross motor control, executive functioning, emotional regulation and impulse control — with technique and equipment adapted to accessibility and sensory needs.",
    format: "Individual • Weekly • Home, clinic or telehealth",
  },
  {
    icon: Users,
    title: "Community & Group Sessions",
    who: "Childcare, schools, Supported Independent Living (SIL), day programs and aged care.",
    description:
      "Individual and group services delivered in everyday environments, integrating therapeutic support into familiar routines to foster social capacity and group participation.",
    format: "Custom scope and length • On-site",
  },
  {
    icon: MessagesSquare,
    title: "Consultation",
    who: "Anyone considering music therapy.",
    description:
      "An open conversation about individual goals, funding, and support needs, with a focus on finding the right fit and a sustainable approach that genuinely meets each person where they are.",
    format: "Around 20 minutes • Phone or video call",
  },
];

const moreThanMusic = [
  {
    title: "Continuity of care",
    description:
      "Working with one clinician means no handovers, consistent goals and a therapeutic relationship that deepens over time — a\u00A0crucial aspect of achieving positive outcomes.",
  },
  {
    title: "Flexible and responsive",
    description:
      "Adaptable scheduling, direct communication and minimal administrative overhead, so clinical time and funding go further.",
  },
  {
    title: "Family at the centre",
    description:
      "Parents and carers are key informants, with observations informing assessment and goal setting, and the wellbeing of everyone involved is part of the picture.",
  },
  {
    title: "Outcomes, broadly measured",
    description:
      "Confidence, connection, participation, self-expression and enjoyment are tracked alongside clinical goals, supporting each individual’s holistic growth.",
  },
];

function ServicesPage() {
  return (
    <SitePage>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Sessions & Services</p>
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
              Sessions designed around you.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Sessions are shaped around what feels comfortable, accessible and meaningful for you — at home, in the
              clinic, via telehealth or in a group program. Not sure where to begin? Start with a conversation.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-5xl px-6">
          <Reveal direction="up" className="relative overflow-hidden rounded-3xl border border-border/60 shadow-sm">
            <img
              src={svcIndividualImage.src}
              srcSet={svcIndividualImage.srcSet}
              sizes={SIZES_CONTENT}
              alt="Music therapist playing guitar outdoors with young children during a play-based session"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={1920}
              height={1280}
              className="aspect-[16/9] w-full object-cover object-[50%_35%] md:object-[50%_30%]"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-secondary/20 mix-blend-multiply" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"
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
                className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-card-hover md:p-10"
              >
                <div className="flex items-center gap-4">
                  <h2 className="font-heading text-2xl font-semibold text-card-foreground">{s.title}</h2>
                  <div className="inline-flex shrink-0 rounded-full border border-primary/20 bg-primary/10 p-2.5 transition-all duration-300 group-hover:bg-primary/25 group-hover:shadow-glow">
                    <s.icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                </div>
                <p className="mt-2 text-sm font-medium text-primary">{s.who}</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.description}</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  <span className="block font-medium text-foreground sm:inline">Format:</span>{" "}
                  <span className="block sm:inline">{s.format}</span>
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl px-6">
          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Practical Details</p>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">What to expect</h2>
          </Reveal>

          <Reveal
            direction="up"
            className="mt-8 overflow-hidden rounded-3xl border border-border/60 bg-secondary/85 shadow-sm"
          >
            <ol className="divide-y divide-border/50 md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
              {[
                {
                  icon: Calendar,
                  label: "Session rhythm",
                  title: "Weekly or fortnightly sessions",
                  description: "Regular one-hour sessions, scheduled at a time that fits your routine.",
                },
                {
                  icon: Phone,
                  label: "Notice & flexibility",
                  title: "Cancellations",
                  description: (
                    <>
                      24 hour notice is
                      <br />
                      appreciated, though
                      <br />
                      flexibility offered according
                      <br />
                      to circumstances.
                    </>
                  ),
                },
                {
                  icon: Receipt,
                  label: "Funding",
                  title: "Fees",
                  description: "Sessions are charged in line with the most current NDIS price guide and rates.",
                },
              ].map((item, i) => (
                <li
                  key={item.title}
                  className="group relative flex h-full flex-col p-6 transition-colors duration-300 hover:bg-card/85 md:p-8"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="whitespace-nowrap text-xs font-medium uppercase tracking-widest text-primary/80">{item.label}</span>
                    <span className="font-heading text-3xl font-semibold text-primary/15 transition-colors duration-300 group-hover:text-primary/35">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-grow items-start gap-4">
                    <div className="inline-flex shrink-0 rounded-full border border-primary/20 bg-primary/10 p-2.5 transition-all duration-300 group-hover:bg-primary/25 group-hover:shadow-glow">
                      <item.icon className="h-4.5 w-4.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading text-base font-semibold text-card-foreground line-clamp-2 text-balance md:leading-snug">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-balance">{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 max-w-5xl px-6">
          <Reveal
            direction="up"
            className="relative mb-12 overflow-hidden rounded-3xl border border-border/60 shadow-sm"
          >
            <img
              src={svcGroupImage.src}
              srcSet={svcGroupImage.srcSet}
              sizes={SIZES_CONTENT}
              alt="Music therapist playing guitar alongside a client on electronic drums in a bright home clinic space"
              loading="lazy"
              decoding="async"
              width={1920}
              height={1111}
              className="aspect-[16/9.25] w-full object-cover object-[65%_100%] md:object-[60%_100%]"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-secondary/20 mix-blend-multiply" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"
            />
          </Reveal>

          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">More Than Music</p>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Choosing the right therapist is about more than qualifications.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Larger clinics suit some families, while others value the continuity and flexibility of one clinician who holds the whole clinical picture. 


                As an independent Registered Music Therapist, I offer personalized care built on therapeutic alliance, collaboration and shared decision-making — so clinical time and funding are used thoughtfully and therapy stays meaningful and sustainable.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {moreThanMusic.map((item, i) => (
              <Reveal
                key={item.title}
                direction="up"
                delay={(i % 2) * 120}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-card-hover"
              >
                <div
                  aria-hidden
                  className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-primary/25 transition-colors duration-300 group-hover:bg-primary/60"
                />
                <h3 className="font-heading text-lg font-semibold text-card-foreground">{item.title}</h3>
                <div
                  aria-hidden
                  className="mt-2 h-px w-10 bg-gradient-to-r from-primary/50 to-transparent transition-all duration-300 group-hover:w-16 group-hover:from-primary"
                />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 rounded-3xl border border-border/60 bg-secondary/85 p-8 md:p-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">Finding the right fit</h2>
            <p className="mt-4 text-base italic leading-relaxed text-muted-foreground">
              There is no single approach that suits everyone. Take the time to explore your options — not only the
              service, but the person providing it.&nbsp; &nbsp;


              A strong therapeutic fit grows from trust and connection, and I am privileged to be trusted by my clients
              with that opportunity.
            </p>
          </Reveal>

          <Reveal className="mt-12 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/" hash="contact">
                Start a conversation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/music-therapy">Learn about music therapy</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <QuoteBand
        quote="I would teach children music, physics and philosophy; but most importantly music, for the patterns in music and all the arts are the keys to learning."
        author="Plato"
      />
    </SitePage>
  );
}
