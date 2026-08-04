import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SitePage } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import { QuoteBand } from "@/components/quote-band";

import aboutImage from "@/assets/about-therapist.webp";

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
  "Master of Music Therapy — University of Melbourne",
  "Bachelor of Music (Performance) — University of Melbourne",
  "Registered Music Therapist (RMT)",
  "Over 8 years of clinical experience",
  "Clinical placement supervisor for music therapy students at Western Sydney University and the University of Melbourne",
];

const experience = [
  {
    title: "Hospital & mental health",
    description:
      "Holistic mental health teams in hospital settings, including transdisciplinary learning and collaborative care planning.",
  },
  {
    title: "Clinic & multidisciplinary teams",
    description:
      "Working alongside speech pathology and occupational therapy so goals are shared, reinforced and genuinely integrated.",
  },
  {
    title: "Community & disability",
    description:
      "Extensive community practice with children and adults with disability, neuro-developmental conditions and acquired brain injuries.",
  },
  {
    title: "Telehealth",
    description:
      "Sessions for rural areas, adults with disability, and clients for whom physical or social challenges make telehealth the better fit.",
  },
  {
    title: "Group programs",
    description:
      "Day programs, aged care and childcare settings — including performance elements and opportunities for music learning and engagement.",
  },
  {
    title: "Across the lifespan",
    description:
      "Children, adults and older people in schools, aged care, palliative care and community services.",
  },
];

const instruments = [
  "Voice",
  "Guitar",
  "Piano",
  "Percussion",
  "Clarinet",
  "Saxophone",
  "Traditional Asian woodwind",
];

function AboutPage() {
  return (
    <SitePage>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              About Me
            </p>
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
              Music is simply the medium. Relationships create lasting change.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I'm a Registered Music Therapist (RMT) with a Master of Music Therapy from the
              University of Melbourne. Over more than eight years I've had the privilege of
              supporting children, adults and older people across hospitals, schools, disability
              services, aged care, mental health, palliative care and community settings.
              Working alongside multidisciplinary teams has given me a broad perspective and
              shaped the flexible, person-centred approach I bring to every therapeutic
              relationship.
            </p>
          </Reveal>

          <Reveal direction="scale" delay={150} className="mt-12 overflow-hidden rounded-3xl shadow-xl">
            <img
              src={aboutImage}
              alt="Hands holding a wooden ukulele"
              width={1200}
              height={675}
              loading="lazy"
              decoding="async"
              className="aspect-[16/9] w-full object-cover"
            />
          </Reveal>

          <div className="mt-14 space-y-12">
            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                How I came to this work
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  My journey into music therapy began long before university. As a child and
                  aspiring musician, I was deeply influenced by my godfather, a music therapy
                  lecturer at New York University, who taught me that music belongs to everyone
                  — that nobody should feel judged for expressing themselves through it. That
                  simple belief has guided every step of my career.
                </p>
                <p>
                  Rather than specialising early, I chose to immerse myself in as many areas of
                  music therapy as I could. I rarely said "no" to an opportunity, because I
                  wanted to understand people, not just diagnoses. I was fortunate to find my
                  way into a wide range of therapy spaces alongside acclaimed mentors who
                  challenged me to think creatively, adapt my approach, and recognise the
                  strengths and stories each client brings in their own way of engaging with
                  music.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                Qualifications
              </h2>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                {credentials.map((c) => (
                  <li key={c}>• {c}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                Breadth of experience
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                A wide range of settings means a wide range of approaches to draw on — so
                sessions can be shaped around the person in front of me rather than a single
                method.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {experience.map((item, i) => (
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
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                What keeps me inspired
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  The most beautiful singing isn't always technically perfect — it's authentic.
                  My wife might never receive a standing ovation on karaoke night, yet I'll
                  always think her voice is the most beautiful I'll ever hear. I've also watched
                  parents moved to tears hearing their child sing in a way they never thought
                  possible. Those moments of connection, confidence and joy are why I love this
                  work.
                </p>
                <p>
                  Whether we're building communication skills, supporting emotional wellbeing,
                  navigating grief, encouraging independence, or simply finding a safe space for
                  self-expression, the most meaningful outcomes happen when people feel seen,
                  supported and believed in.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                In the session room
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                As a musician I draw on a range of instruments to create engaging, responsive
                sessions tailored to each individual — and I'm committed to lifelong learning so
                I can keep offering the best possible support to the people and families I work
                with.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {instruments.map((inst) => (
                  <li
                    key={inst}
                    className="rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-foreground/80"
                  >
                    {inst}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Above all, I aim to create a welcoming space where people feel safe to connect,
                express themselves, and discover what's possible through music.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-14 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/" hash="contact">Start a conversation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/services">See sessions & services</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <QuoteBand
        quote="Where words fail, music speaks."
        author="Hans Christian Andersen"
      />
    </SitePage>
  );
}
