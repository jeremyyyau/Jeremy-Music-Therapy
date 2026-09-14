import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Users, Calendar, Home, Armchair, Video, Guitar, MessagesSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { homeHeroImage, homeAboutImage, SIZES_HALF } from "@/lib/images";
import { SitePage } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import { QuoteBand } from "@/components/quote-band";

const ContactForm = lazy(() => import("@/components/contact-form"));

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Registered Music Therapist | Personalised Music Therapy" },
      {
        name: "description",
        content:
          "Independent Registered Music Therapist (RMT) with 8+ years across hospitals, schools, disability, aged care and community settings. Home visits, telehealth and clinic sessions.",
      },
      {
        property: "og:title",
        content: "Registered Music Therapist | Personalised Music Therapy",
      },
      {
        property: "og:description",
        content:
          "Independent Registered Music Therapist (RMT) with 8+ years of clinical experience. Home visits, telehealth and home clinic sessions in Picnic Point.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jeremymusictherapy.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Registered Music Therapist | Personalised Music Therapy" },
      {
        name: "twitter:description",
        content:
          "Independent Registered Music Therapist (RMT) with 8+ years of clinical experience. Home visits, telehealth and home clinic sessions in Picnic Point.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://jeremymusictherapy.com/" },
      {
        rel: "preload",
        as: "image",
        href: homeHeroImage.src,
        imageSrcSet: homeHeroImage.srcSet,
        imageSizes: SIZES_HALF,
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Jeremy Yau Music Therapy",
          url: "https://jeremymusictherapy.com/",
          description:
            "Independent Registered Music Therapist (RMT) with 8+ years of clinical experience. Home visits, telehealth and home clinic sessions in Picnic Point.",
          areaServed: { "@type": "City", name: "Sydney, Australia" },
          address: { "@type": "PostalAddress", addressLocality: "Picnic Point", addressRegion: "NSW", addressCountry: "AU" },
          knowsAbout: ["Music therapy", "NDIS", "Telehealth music therapy"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <SitePage>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <Reveal direction="left" className="order-2 flex flex-col justify-center lg:order-1">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Registered Music Therapist (RMT) · Jeremy Yau
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Where music meets connection.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              An independent, person-centred music therapy practice for children, adults and older people across Sydney
              — grounded in over eight years of clinical experience. Sessions are tailored to each client’s goals,
              whether that means building communication, supporting emotional expression, or finding meaningful ways to
              connect through music.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="#contact">Start a conversation</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="#about">Learn more</a>
              </Button>
            </div>
          </Reveal>
          <Reveal direction="right" delay={150} className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={homeHeroImage.src}
                srcSet={homeHeroImage.srcSet}
                alt="Close-up of hands playing an acoustic guitar in a warm, intimate music therapy setting"
                width={1920}
                height={1280}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                sizes={SIZES_HALF}
                className="aspect-[3/2] w-full object-cover opacity-90 saturate-[0.8] contrast-[0.9]"
              />
              <div className="pointer-events-none absolute inset-0 bg-secondary/30 mix-blend-multiply" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-secondary/85 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal direction="left" className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src={homeAboutImage.src}
              srcSet={homeAboutImage.srcSet}
              sizes={SIZES_HALF}
              alt="Jeremy Yau, Registered Music Therapist, playing an acoustic guitar beside a bookshelf"
              width={1200}
              height={1545}
              loading="lazy"
              decoding="async"
              className="aspect-[5/6] w-full object-cover object-[50%_35%] opacity-90 saturate-[0.85] contrast-[0.92]"
            />
            <div className="pointer-events-none absolute inset-0 bg-secondary/25 mix-blend-multiply" />
          </Reveal>
          <Reveal direction="right" delay={120}>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">About Me</p>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Broad experience, grounded in clinical expertise.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I’m a Registered Music Therapist (RMT) with a Master of Music Therapy from the University of Melbourne
                and over eight years of clinical practice across hospital, education, disability, aged care and
                community settings. This range of experience has taught me how to adapt quickly, listen deeply, and meet
                people where they are — clinically, emotionally and creatively.
              </p>
              <p>
                That breadth has shaped a resource-oriented approach where sessions are matched to presentation,
                capacity and preference, in a space where people feel safe to connect and explore. My role is to support
                each client in discovering what music can do for them, creating a therapeutic approach that is uniquely
                shaped around who they are.
              </p>
            </div>

            <div className="mt-8">
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/about">Read my full story</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What is Music Therapy */}
      <section id="music-therapy" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">What is Music Therapy?</p>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Goal-directed, not diagnosis-defined.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A clinical, evidence-based allied health discipline that uses music to work towards non-musical goals —
              emotional, cognitive, communication, physical and social. It’s not about talent or performance; it’s about
              growth, regulation and connection.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Active interventions",
                description:
                  "Improvisation, songwriting, singing and instrumental play — building confidence, communication and social interaction through natural opportunities for creativity.",
              },
              {
                icon: Users,
                title: "Receptive interventions",
                description:
                  "Guided listening, lyric analysis and music-assisted relaxation to encourage reflection and regulation, as well as support emotional awareness and identity formation.",
              },
              {
                icon: Calendar,
                title: "Tailored to you",
                description:
                  "Methods adapted to each individual to inspire and motivate — ensuring accessible, strengths-based and resource-oriented processes.",
              },
            ].map((item, i) => (
              <Reveal
                key={item.title}
                direction="up"
                delay={i * 120}
                className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-card-hover"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:scale-120 group-hover:bg-primary/30 group-hover:shadow-glow">
                  <item.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-120" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-card-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/music-therapy">Learn more about music therapy</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary/85 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Sessions</p>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Therapy that meets you where you are.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              At home, in the clinic, via telehealth or in the community — delivery is matched to goals, routine and
              funding, with flexibility built in as needs change over time.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Home,
                title: "Home Visits",
                description: "Sessions in your own home environment, with all instruments and equipment provided.",
              },
              {
                icon: Armchair,
                title: "Home Clinic — Picnic Point",
                description:
                  "A calm, purpose-equipped therapy room with fewer distractions and a wider array of instruments.",
              },
              {
                icon: Video,
                title: "Telehealth",
                description: "Online sessions for older children and adults, including rural and overseas clients.",
              },
              {
                icon: Guitar,
                title: "Instrumental Learning",
                description:
                  "Therapeutic music-based instruction supporting attention, resilience and self-regulation.",
              },
              {
                icon: Users,
                title: "Community Sessions",
                description:
                  "Individual and group work in childcare, schools and SIL settings to generalise skills in familiar environments.",
              },
              {
                icon: MessagesSquare,
                title: "Consultation",
                description:
                  "An initial conversation about goals, funding, clinical structure and suitability for music therapy.",
              },
            ].map((service, i) => (
              <Reveal
                key={service.title}
                direction="up"
                delay={(i % 3) * 120}
                className="group rounded-2xl border border-border/60 bg-background p-8 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-card-hover"
              >
                <div className="mb-4 flex items-center gap-3">
                  <h3 className="font-heading text-xl font-semibold text-foreground">{service.title}</h3>
                  <div className="ml-auto inline-flex shrink-0 rounded-full border border-primary/20 bg-primary/10 p-2.5 transition-all duration-300 group-hover:bg-primary/25 group-hover:shadow-glow">
                    <service.icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/services">See full session details</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* More than music */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">More Than Music</p>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Taking your time, finding the right fit.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Some families prefer a large clinic; others value a personal, flexible service where one therapist holds
              the whole clinical picture. I prioritise direct communication and time to build a genuine therapeutic
              relationship — so progress becomes a shared, family-centred experience.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Continuity of care",
                description:
                  "One therapist, no handovers — consistent goals and a therapy plan that deepens over time.",
              },
              {
                title: "Flexible and responsive",
                description:
                  "Direct communication, adaptable scheduling and minimal administrative or policy overhead.",
              },
              {
                title: "Family at the centre",
                description:
                  "Parents and carers empowered to observe and make decisions, shaping assessment and goal setting.",
              },
              {
                title: "Holistic outcomes",
                description:
                  "Confidence, connection, motivation and improved quality of life tracked alongside clinical goals.",
              },
            ].map((item, i) => (
              <Reveal
                key={item.title}
                direction="up"
                delay={i * 100}
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

          <Reveal className="mt-12">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/services">What we offer</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <QuoteBand
        quote="Music therapy is at once an art, a science, and an interpersonal process."
        author="Kenneth E. Bruscia"
      />

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          <Reveal direction="left">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Get in Touch</p>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              I’d love to hear from you.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Whether you’re exploring music therapy for the first time, comparing providers, or ready to discuss goals,
              referrals and funding, send me a message and I’ll reply within 1–2 business days.
            </p>

            <p className="mt-10 max-w-md text-sm italic leading-relaxed text-muted-foreground">
              Enquiries from allied health and healthcare professionals are welcomed, including referral discussions,
              professional supervision, networking opportunities, or additional information regarding music therapy.
            </p>
          </Reveal>

          <Reveal
            direction="right"
            delay={150}
            className="rounded-3xl border border-border/60 bg-card p-8 shadow-lg md:p-10"
          >
            <DeferredContactForm />
          </Reveal>
        </div>
      </section>
    </SitePage>
  );
}

function DeferredContactForm() {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const boundary = boundaryRef.current;
    if (!boundary || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(boundary);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={boundaryRef} className="min-h-[500px]">
      {shouldLoad ? (
        <Suspense fallback={<ContactFormPlaceholder />}>
          <ContactForm />
        </Suspense>
      ) : (
        <ContactFormPlaceholder />
      )}
    </div>
  );
}

function ContactFormPlaceholder() {
  return <div aria-hidden className="h-[500px] animate-pulse rounded-2xl bg-secondary/40 motion-reduce:animate-none" />;
}
