import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SitePage } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import svcIndividual from "@/assets/svc-individual.jpg.asset.json";
import svcGroup from "@/assets/svc-group.jpg.asset.json";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | Music Therapy Practice" },
      {
        name: "description",
        content:
          "Individual, family, and group music therapy sessions, adaptive lessons, community workshops, and free consultations — in person or online.",
      },
      { property: "og:title", content: "Services | Music Therapy Practice" },
      {
        property: "og:description",
        content:
          "Individual, family, and group music therapy sessions, adaptive lessons, community workshops, and free consultations — in person or online.",
      },
    ],
  }),
});

const services = [
  {
    title: "Individual Sessions",
    who: "Children, teens, and adults working toward personal goals.",
    description:
      "One-on-one music therapy tailored to your goals, preferences, and pace. Sessions often focus on emotional expression, anxiety management, self-esteem, communication, or rehabilitation goals.",
    format: "45 or 60 minutes • Weekly or bi-weekly • In-person or online",
  },
  {
    title: "Family Sessions",
    who: "Families with young children, or families navigating a transition.",
    description:
      "Shared musical experiences that strengthen bonding, communication, and daily routines. Especially helpful when a family member has a developmental difference or when a shared ritual is needed.",
    format: "45 or 60 minutes • Weekly or bi-weekly • In-person",
  },
  {
    title: "Group Sessions",
    who: "Small groups of 3–6 with shared goals.",
    description:
      "Music-based groups focused on social connection, peer support, and the specific joy of making music with others. Themes can include grief support, teen expression, or adaptive music for adults.",
    format: "60 minutes • Weekly • In-person",
  },
  {
    title: "Adaptive Lessons",
    who: "Clients who want to learn an instrument with therapeutic support.",
    description:
      "Instrument or voice instruction adapted for accessibility, sensory needs, and therapeutic goals. Progress is measured in growth and enjoyment, not audition-level performance.",
    format: "30 or 45 minutes • Weekly • In-person or online",
  },
  {
    title: "Community & Workshops",
    who: "Schools, care communities, and organizations.",
    description:
      "On-site workshops, presentations, and short-term programs. Popular formats include staff wellness workshops, in-service trainings, and family-education evenings.",
    format: "Custom scope and length • On-site",
  },
  {
    title: "Free Consultation",
    who: "Anyone curious about music therapy.",
    description:
      "A no-pressure conversation to explore whether music therapy is a good fit for you or your loved one. We'll talk about your goals, answer your questions, and figure out next steps together.",
    format: "20 minutes • Video call or phone",
  },
];

function ServicesPage() {
  return (
    <SitePage>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Services
            </p>
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
              Sessions designed around you.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Here's a closer look at how I work with clients. If you're not sure which offering
              fits, start with a free consultation and we'll figure it out together.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-5xl px-6">
          <Reveal direction="up" className="overflow-hidden rounded-3xl border border-border/60 shadow-sm">
            <img
              src={svcIndividual.url}
              alt="Therapist and client sharing a warm moment in a sunlit session room"
              loading="lazy"
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
                className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm md:p-10"
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

        <div className="mx-auto mt-16 max-w-4xl px-6">
          <Reveal className="rounded-3xl border border-border/60 bg-secondary/40 p-8 md:p-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Rates & payment
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Session rates vary by format and length. I offer a limited number of sliding-scale
              spots to keep music therapy accessible. I'm happy to provide a superbill for
              possible out-of-network reimbursement — reach out for current rates and
              availability.
            </p>
          </Reveal>

          <Reveal className="mt-12 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/" hash="contact">Book a Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/music-therapy">Learn about music therapy</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </SitePage>
  );
}
