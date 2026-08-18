import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { Heart, Users, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { contactFormSchema, type ContactFormValues } from "@/lib/contact.schema";
import { submitContactForm } from "@/lib/contact.functions";
import heroImageAsset from "@/assets/hero-music-therapy.webp.asset.json";
import aboutImageAsset from "@/assets/about-jeremy.webp.asset.json";
import { SitePage } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import { QuoteBand } from "@/components/quote-band";

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
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Registered Music Therapist | Personalised Music Therapy" },
      {
        name: "twitter:description",
        content:
          "Independent Registered Music Therapist (RMT) with 8+ years of clinical experience. Home visits, telehealth and home clinic sessions in Picnic Point.",
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
              An independent, person-centred practice offering music therapy for children, adults and older people
              across Sydney — informed by over eight years of clinical experience across hospital, early education,
              disability, aged care, mental health and community settings.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="#contact">Start a conversation</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </Reveal>
          <Reveal direction="right" delay={150} className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={heroImageAsset.url}
                alt="Close-up of hands playing an acoustic guitar in a warm, intimate music therapy setting"
                width={1920}
                height={1280}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[3/2] w-full object-cover opacity-90 saturate-[0.8] contrast-[0.9]"
              />
              <div className="pointer-events-none absolute inset-0 bg-secondary/30 mix-blend-multiply" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-secondary/70 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal direction="left" className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src={aboutImageAsset.url}
              alt="Jeremy Yau, Registered Music Therapist, playing an acoustic guitar beside a bookshelf"
              width={1200}
              height={1545}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover object-[50%_20%] opacity-90 saturate-[0.85] contrast-[0.92]"
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
                I'm a Registered Music Therapist (RMT) with a Master of Music Therapy from the University of Melbourne,
                and over eight years of clinical practice. I also supervise clinical placements for music therapy
                students at Western Sydney University and the University of Melbourne.
              </p>
              <p>
                Rather than specialising early, I chose to practise across as many clinical areas as I could — hospital
                mental health teams, multidisciplinary clinic work alongside speech pathology and occupational therapy,
                disability services, aged care, palliative care and community programs. That transdisciplinary grounding
                meant that I was able to establish a resource-oriented approach that integrates perspectives across
                disciplines to identify strengths, capacities and meaningful opportunities for growth.
              </p>
              <p>
                In my practice, I draw from a wide repertoire of evidence-informed interventions, so that each session
                plan can be matched to presentation, capacity and preference — adjusted through ongoing clinical
                observation and review. Above all, I aim to create a welcoming, safe therapeutic space where people can
                connect, express themselves and explore new possibilities through music.
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
              Music therapy is a clinical, evidence-based allied health discipline in which a registered therapist uses
              music- based interventions to address non-musical therapeutic goals across emotional, cognitive,
              communication, physical, and social domains. Whilst music holds inherent therapeutic qualities, music
              therapy harnesses these qualities through intentional, structured, and clinically directed practice,
              grounded in rapport and therapeutic connection.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Active interventions",
                description:
                  "Clinical improvisation, supported songwriting, soundtrack creation, therapeutic singing and instrument play to build confidence, communication and engagement.",
              },
              {
                icon: Users,
                title: "Receptive interventions",
                description:
                  "Guided music listening, song lyric analysis, playlist creation and music-assisted relaxation to support self-reflection, emotional exploration and sensory regulation.",
              },
              {
                icon: Calendar,
                title: "Tailored to individual needs",
                description:
                  "Methods adapted for disability, neuro-developmental conditions, acquired brain injury and mental health conditions — accessible, strengths-based and resource-oriented.",
              },
            ].map((item, i) => (
              <Reveal
                key={item.title}
                direction="up"
                delay={i * 120}
                className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary hover:bg-secondary hover:shadow-card-hover"
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
      <section id="services" className="bg-secondary/70 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Sessions</p>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Therapy that meets you where you are.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Whether it is at home, in our dedicated clinic space, via telehealth, or in the community — service
              delivery is matched according to therapeutic goals, functional needs, daily routine and funding.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Home Visits",
                description:
                  "Sessions in your natural environment, where skills are most likely to generalise. All instruments and equipment are provided.",
              },
              {
                title: "Clinic Visits - Picnic Point",
                description:
                  "Our calm, purpose-equipped therapy room for focused sessions with a wider range of instruments and fewer distractions.",
              },
              {
                title: "Telehealth",
                description:
                  "Evidence-supported online delivery for older children and adults, including rural clients and those for whom in-person attendance is a barrier.",
              },
              {
                title: "Instrumental Learning",
                description:
                  "Therapeutic instrumental instruction targeting selective attention, fine and gross motor skills, executive functioning and impulse control.",
              },
              {
                title: "Community Sessions",
                description:
                  "Individual and group services across childcare, schools, and Supported Independent Living (SIL),                          integrating therapeutic support into everyday environments to foster social capacity and group participation.",
              },
              {
                title: "Consultation",
                description:
                  "Open dialogue of goals, funding and suitability of music therapy in alignment to desired therapeutic                     outcomes, as well as discussions around therapeutic processes and clinical rationale.",
              },
            ].map((service, i) => (
              <Reveal
                key={service.title}
                direction="up"
                delay={(i % 3) * 120}
                className="group rounded-2xl border border-border/60 bg-background p-8 shadow-sm transition-all duration-300 hover:border-primary hover:bg-secondary hover:shadow-card-hover"
              >
                <h3 className="font-heading text-xl font-semibold text-foreground">{service.title}</h3>
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
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Choosing a therapist involves more than qualifications and experience. Larger clinics may suit some
                families, offering consistency and standardized clinical processes across therapists. However, others
                might value a personal, flexible service where one therapist holds the whole clinical picture and is
                free to adapt according to each family's circumstance and needs.
              </p>
              <p>
                Finding the right therapeutic fit is personal. Each individual should have the space to explore their
                options without pressure, while allowing time to recognise where meaningful connection, potential, and
                growth may emerge.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Continuity of care",
                description:
                  "One therapist, no handovers — consistent goals and a therapy plan that deepens over time.",
              },
              {
                title: "Flexible & responsive",
                description: "Direct communication, adaptable scheduling and minimal administrative overhead.",
              },
              {
                title: "Family at the centre",
                description:
                  "Parents and carers are empowered to make observations and decisions that shape assessment and goal setting.",
              },
              {
                title: "Holistic outcomes",
                description:
                  "Confidence, connection, participation and quality of life tracked alongside clinical goals.",
              },
            ].map((item, i) => (
              <Reveal
                key={item.title}
                direction="up"
                delay={i * 100}
                className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary hover:bg-secondary hover:shadow-card-hover"
              >
                <h3 className="font-heading text-lg font-semibold text-card-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Reveal>
            ))}
          </div>
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
              I'd love to hear from you.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Whether you're exploring music therapy for the first time, comparing providers, or ready to discuss goals,
              referrals and funding, send me a message. I'll respond within 1–2 business days.
            </p>

            <p className="mt-10 max-w-md text-sm italic leading-relaxed text-muted-foreground">
              Enquiries from allied health and other healthcare professionals are also welcomed, including referral
              discussions, professional supervision, networking opportunities, or additional information regarding music
              therapy.
            </p>
          </Reveal>

          <Reveal
            direction="right"
            delay={150}
            className="rounded-3xl border border-border/60 bg-card p-8 shadow-lg md:p-10"
          >
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </SitePage>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitContactForm({ data: values });
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} className="rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" type="email" {...field} className="rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Phone (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="(+61)123-456-789" {...field} className="rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Subject (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Individual sessions" {...field} className="rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me a little about what you're looking for..."
                  rows={5}
                  {...field}
                  className="rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {status === "success" && (
          <div className="rounded-xl bg-primary/10 p-4 text-sm text-primary">
            Thank you for reaching out. I've received your message and will be in touch soon.
          </div>
        )}

        {status === "error" && (
          <div className="rounded-xl bg-destructive/10 p-4 text-sm text-destructive">{errorMessage}</div>
        )}

        <Button type="submit" disabled={status === "submitting"} className="w-full rounded-full" size="lg">
          {status === "submitting" ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
