import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { Heart, Users, Calendar, Mail, Phone, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { contactFormSchema, type ContactFormValues } from "@/lib/contact.schema";
import { submitContactForm } from "@/lib/contact.functions";
import heroImage from "@/assets/hero-music-therapy.webp";
import aboutImage from "@/assets/about-therapist.webp";
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
              Registered Music Therapist (RMT) · 8+ Years Experience
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Music is simply the medium. Relationships create lasting change.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              An independent, person-centred practice for children, adults and older people —
              drawing on eight years of clinical experience across hospitals, schools, disability
              services, aged care, mental health and community settings.
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
                src={heroImage}
                alt="Warm, inviting music therapy room with guitar, drums, and soft natural light"
                width={1200}
                height={800}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal direction="left" className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src={aboutImage}
              alt="Close-up of hands holding a wooden ukulele, representing a personal, gentle approach to music therapy"
              width={800}
              height={1008}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal direction="right" delay={120}>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              About Me
            </p>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Experience built by saying yes.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm a Registered Music Therapist (RMT) with a Master of Music Therapy and a
                Bachelor of Music (Performance) from the University of Melbourne, and over eight
                years of clinical practice. I also supervise clinical placements for music
                therapy students at Western Sydney University and the University of Melbourne.
              </p>
              <p>
                Rather than specialising early, I chose to immerse myself in as many areas of
                music therapy as I could — hospital mental health teams, multidisciplinary clinic
                work alongside speech and occupational therapy, disability services, aged care,
                palliative care and community programs. I wanted to understand people, not just
                diagnoses.
              </p>
              <p>
                That breadth means a wide range of approaches to draw on, so sessions can be
                shaped around the person in front of me. Above all, I aim to create a welcoming
                space where people feel safe to connect, express themselves and discover what's
                possible through music.
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
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              What is Music Therapy?
            </p>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              More than music lessons. More than entertainment.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Music therapy is the clinical and evidence-based use of music to support
              non-musical goals. A board-certified music therapist designs each session around
              your needs — whether that's emotional expression, communication, motor skills,
              memory, or simply finding a moment of calm.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Emotional Wellbeing",
                description:
                  "Use music to express feelings, reduce anxiety, and process life experiences in a supportive setting.",
              },
              {
                icon: Users,
                title: "Connection & Communication",
                description:
                  "Strengthen relationships, build social skills, and find new ways to share what's inside.",
              },
              {
                icon: Calendar,
                title: "Growth & Rehabilitation",
                description:
                  "Support developmental, cognitive, or physical goals through structured musical experiences.",
              },
            ].map((item, i) => (
              <Reveal
                key={item.title}
                direction="up"
                delay={i * 120}
                className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:border-primary hover:bg-secondary/50 hover:shadow-card-hover"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:scale-120 group-hover:bg-primary/30 group-hover:shadow-glow">
                  <item.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-120" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
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
      <section id="services" className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Services
            </p>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Sessions designed around you.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Individual Sessions",
                description:
                  "One-on-one music therapy tailored to your personal goals, preferences, and pace. In-person or online.",
              },
              {
                title: "Family Sessions",
                description:
                  "Shared musical experiences that support bonding, communication, and family routines.",
              },
              {
                title: "Group Sessions",
                description:
                  "Small group sessions focused on social connection, shared goals, and the joy of making music together.",
              },
              {
                title: "Adaptive Lessons",
                description:
                  "Instrument or voice instruction adapted for accessibility and therapeutic goals.",
              },
              {
                title: "Community & Workshops",
                description:
                  "Presentations and workshops for schools, organizations, or care communities.",
              },
              {
                title: "Consultation",
                description:
                  "A free 20-minute call to explore whether music therapy is a good fit for you or your loved one.",
              },
            ].map((service, i) => (
              <Reveal
                key={service.title}
                direction="up"
                delay={(i % 3) * 120}
                className="group rounded-2xl border border-border/60 bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:border-primary hover:bg-secondary/50 hover:shadow-card-hover"
              >
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/services">See full service details</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <QuoteBand
        quote="Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything."
        author="Plato"
      />

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28">

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          <Reveal direction="left">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Get in Touch
            </p>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              I'd love to hear from you.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Whether you're curious about music therapy, ready to schedule a session, or just
              have a question, send me a message. I'll respond within 1-2 business days.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">hello@yourpractice.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">In-person and virtual sessions available</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150} className="rounded-3xl border border-border/60 bg-card p-8 shadow-lg md:p-10">
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
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
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
                  <Input placeholder="(555) 123-4567" {...field} className="rounded-xl" />
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
          <div className="rounded-xl bg-destructive/10 p-4 text-sm text-destructive">
            {errorMessage}
          </div>
        )}

        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full"
          size="lg"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
