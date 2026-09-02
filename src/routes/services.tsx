import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Armchair, Video, Guitar, Users, MessagesSquare } from "lucide-react";
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
      { name: "twitter:card", content: "summary_large_image" },
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
      "Online delivery where distance, physical access or social anxiety present barriers to in-person attendance. Telehealth is a clinically appropriate mode of delivery in its own right, not simply a substitute.",
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
      "Individual and group services delivered in everyday environments, integrating therapeutic support into familiar routines to foster social capacity and group participation — with scope for performance elements and music-learning opportunities where they serve the group's aims.",
    format: "Custom scope and length • On-site",
  },
  {
    icon: MessagesSquare,
    title: "Consultation",
    who: "Anyone considering music therapy.",
    description:
      "An open dialogue about goals, funding and the suitability of music therapy in alignment with desired therapeutic outcomes, including discussion of therapeutic processes and clinical rationale. If another service is the better clinical match, I'll say so — appropriate referral matters more than filling a caseload.",
    format: "Around 20 minutes • Phone or video call",
  },
];

const moreThanMusic = [
  {
    title: "Continuity of care",
    description:
      "Working with one clinician means no handovers, consistent goals and a therapeutic relationship that deepens over time — a known contributor to outcomes.",
  },
  {
    title: "Flexible and responsive",
    description:
      "Adaptable scheduling, direct communication and minimal administrative overhead, so clinical time and funding go further.",
  },
  {
    title: "Family at the centre",
    description:
      "Parents and carers are key informants. Your observations inform assessment and goal setting, and the wellbeing of everyone involved is part of the picture.",
  },
  {
    title: "Outcomes, broadly measured",
    description:
      "Confidence, connection, participation, self-expression and quality of life tracked alongside clinical goals, not instead of them.",
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
              Every person engages with therapy differently, and sessions can be shaped around what feels comfortable,
              accessible and meaningful for you. Therapy may take place at home, in the clinic, via telehealth or within
              a group program, depending on your needs and goals. If you're unsure where to begin, start with a
              conversation — together, we can explore what approach feels right and whether my practice is the
              appropriate clinical fit for you.
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
              loading="lazy"
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
                className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary hover:bg-secondary hover:shadow-card-hover md:p-10"
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
                  <span className="font-medium text-foreground">Format:</span> {s.format}
                </p>
              </Reveal>
            ))}
          </div>
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
                Finding the right clinician is about finding an approach that fits you and your family. Larger clinics
                can suit some families, offering consistency and established clinical processes across therapists.
                Others value the continuity and flexibility of working with one clinician who can hold the broader
                clinical picture and adapt care around their circumstances and needs.
              </p>
              <p>
                As an independent Registered Music Therapist, I offer personalised care built on therapeutic alliance,
                collaboration and shared decision-making. Working directly with one clinician allows sessions to be
                adapted responsively, different approaches to be explored, and clinical time and funding used
                thoughtfully so therapy remains meaningful and sustainable.
              </p>
              <p>
                Finding the right therapeutic fit is personal. Every individual should have the space to explore their
                options without pressure, while allowing time to recognise where meaningful connection, potential and
                growth may emerge.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {moreThanMusic.map((item, i) => (
              <Reveal
                key={item.title}
                direction="up"
                delay={(i % 2) * 120}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary hover:bg-secondary hover:shadow-card-hover"
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

          <Reveal className="mt-12 rounded-3xl border border-border/60 bg-secondary/70 p-8 md:p-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">Finding the right fit</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Finding the right therapist matters. Every person and family is different, and the best therapeutic
              relationship is one where you feel understood, respected and comfortable with the clinician you choose.
              There is no single approach that will suit everyone, so I encourage families to take the time to explore
              their options and consider not only the service, but the person providing it. A strong therapeutic fit
              takes time to establish, and meaningful progress can grow from the trust and connection that develops
              along the way. I am privileged to be trusted with the opportunity to work with my clients and to be part
              of that relationship.
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

      <QuoteBand quote="Music is the shorthand of emotion." author="Leo Tolstoy" />
    </SitePage>
  );
}
