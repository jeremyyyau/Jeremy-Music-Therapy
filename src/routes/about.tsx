import { createFileRoute, Link } from "@tanstack/react-router";
import { AudioLines, Check, Drum, Guitar, MicVocal, Music2, Music3, Piano, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SitePage } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import { QuoteBand } from "@/components/quote-band";

import { aboutHeroImage, SIZES_CONTENT } from "@/lib/images";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About | Registered Music Therapist (RMT)" },
      {
        name: "description",
        content:
          "Registered Music Therapist with a Masters of Music Therapy (University of Melbourne) and 8+ years of clinical experience across hospitals, schools, disability, aged care and community settings.",
      },
      { property: "og:title", content: "About | Registered Music Therapist (RMT)" },
      {
        property: "og:description",
        content:
          "Registered Music Therapist with a Masters of Music Therapy (University of Melbourne) and 8+ years across hospitals, schools, disability, aged care and community settings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const credentials = [
  "Masters of Music Therapy — University of Melbourne",
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
    title: "Multidisciplinary teams",
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
    description: "Children, adults and older people in schools, aged care, palliative care and community services.",
  },
];

const instruments = [
  { name: "Voice", icon: MicVocal },
  { name: "Guitar", icon: Guitar },
  { name: "Piano", icon: Piano },
  { name: "Drumkit", icon: Drum },
  { name: "Clarinet", icon: Music3 },
  { name: "Saxophone", icon: Music2 },
  { name: "Percussion", icon: AudioLines },
  { name: "Traditional Chinese flute", icon: Wind },
];

function AboutPage() {
  return (
    <SitePage>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">About Me</p>
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
              Music gives us a way to connect.
              <br />
              Connection gives us a way to grow.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I'm a Registered Music Therapist (RMT) with a Master of Music Therapy from the University of Melbourne.
              Over more than eight years of clinical practice I've supported children, adults and older people across
              hospital, education, disability, aged care, mental health, palliative care and community settings. Working
              within multidisciplinary teams has shaped the flexible, person-centred and evidence-based approach I bring
              to every therapeutic relationship.
            </p>
          </Reveal>

          <Reveal direction="scale" delay={150} className="relative mt-12 overflow-hidden rounded-3xl shadow-xl">
            <img
              src={aboutHeroImage.src}
              srcSet={aboutHeroImage.srcSet}
              sizes={SIZES_CONTENT}
              alt="Music therapist seated with a client during a warm, indoor session"
              width={1920}
              height={1280}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover object-[55%_55%]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"
            />
          </Reveal>

          <div className="mt-14 space-y-12">
            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                How I came to this work
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  My path into music therapy began long before university. As a child and aspiring musician, I was
                  deeply influenced by my godfather, a music therapy lecturer at New York University, who taught me that
                  music belongs to everyone — that nobody should feel judged for expressing themselves through it. That
                  principle still underpins how I practise.
                </p>
                <p>
                  Rather than specialising early, I chose to practise across as many clinical populations as I could —
                  hospital mental health teams, multidisciplinary clinic work alongside speech pathology and
                  occupational therapy, disability services, aged care, palliative care and community programs. I rarely
                  declined an opportunity, because I wanted to understand people and their presentations, not diagnoses
                  alone.
                </p>
                <p>
                  That transdisciplinary grounding allowed me to establish a resource-oriented approach that integrates
                  perspectives across disciplines to identify strengths, capacities and meaningful opportunities for
                  growth. I draw from a wide repertoire of evidence-informed interventions, so each session plan can be
                  matched to presentation, capacity and preference, then adjusted through ongoing clinical observation
                  and review. I also supervise clinical placements for music therapy students at Western Sydney
                  University and the University of Melbourne.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">Qualifications</h2>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary/70" aria-hidden />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">Breadth of experience</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                A wide range of clinical settings means a wide range of evidence-informed approaches to draw on — so
                interventions can be selected for the person in front of me rather than applied from a single fixed
                method.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {experience.map((item, i) => (
                  <Reveal
                    key={item.title}
                    direction="up"
                    delay={(i % 2) * 120}
                    className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary hover:bg-secondary hover:shadow-card-hover"
                  >
                    <span
                      aria-hidden
                      className="absolute right-5 top-4 font-heading text-2xl font-semibold text-primary/15 transition-colors duration-300 group-hover:text-primary/40"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-card-foreground">{item.title}</h3>
                    <div
                      aria-hidden
                      className="mt-2 h-px w-10 bg-gradient-to-r from-primary/50 to-transparent transition-all duration-300 group-hover:w-16 group-hover:from-primary"
                    />
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
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
                  Over the years, I've had the privilege of witnessing moments that have changed the way I understand
                  music. I've supported a non-speaking client to sing at an end-of-year concert, where his one-word
                  contribution of “be” in 'Let It Be' was met with tears and thunderous applause. I've guided a client
                  with cancer through songwriting about a grandchild he would never meet - a wonderful parting gift to
                  his pregnant daughter. I've worked with a child who was introduced by his parents as “non-verbal”, and
                  had the privilege of witnessing communication develop into full sentences in two years.
                </p>
                <p>
                  These experiences have gradually changed my relationship with music. I have become less interested in
                  music as a relationship between performer and audience, and more interested in music as something that
                  belongs to all of us - whether that be a made-up lullaby between a mother and her child, an inspiring
                  rap song blasting in a teenagers headphones, or a shaky duet of 'Fly Me To The Moon' sung between a
                  husband and wife in their golden years.
                </p>
                <p>
                  Music doesn't have to be perfect to be meaningful. It doesn't have to be performed for an audience to
                  matter. Sometimes a single word, a shared melody, or a song written for a loved one, can hold more
                  significance than a polished performance in front of thousands.
                </p>
                <p>
                  That is what ultimately drew me to music therapy: the belief that there is music in every person, and
                  that everyone deserves the opportunity to discover what it can mean for them. I want to bring music
                  beyond the stage and into the places where it can create connection, express what words cannot, build
                  confidence, preserve identity, and offer moments of joy and meaning to those who need it most.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">In the session room</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                As a multi-instrumentalist I can adapt the musical medium to each client's preferences, sensory profile
                and physical access needs — and I maintain ongoing professional development and clinical supervision so
                practice stays current with the evidence base.
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                {instruments.map((inst) => (
                  <li
                    key={inst.name}
                    className="group flex flex-col items-center gap-2.5 rounded-2xl border border-border/60 bg-secondary/80 px-4 py-5 text-center transition-all duration-300 hover:border-primary hover:bg-secondary hover:shadow-card-hover"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <inst.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-sm font-medium leading-snug text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
                      {inst.name}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Above all, I aim to create a welcoming space where people feel safe to connect, express themselves, and
                discover what's possible through music.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-14 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/" hash="contact">
                Start a conversation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/services">See sessions & services</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <QuoteBand quote="Where words fail, music speaks." author="Hans Christian Andersen" />
    </SitePage>
  );
}
