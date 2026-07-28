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
import heroImage from "@/assets/hero-music-therapy.jpg";
import aboutImage from "@/assets/about-therapist.jpg";
import { SitePage } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Music Therapy | Healing Through Sound" },
      {
        name: "description",
        content:
          "A warm, person-centered music therapy practice offering individual and group sessions for children, adults, and families seeking growth, connection, and healing.",
      },
      {
        property: "og:title",
        content: "Music Therapy | Healing Through Sound",
      },
      {
        property: "og:description",
        content:
          "A warm, person-centered music therapy practice offering individual and group sessions for children, adults, and families seeking growth, connection, and healing.",
      },
      { name: "twitter:title", content: "Music Therapy | Healing Through Sound" },
      {
        name: "twitter:description",
        content:
          "A warm, person-centered music therapy practice offering individual and group sessions for children, adults, and families seeking growth, connection, and healing.",
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
              Board-Certified Music Therapist
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Healing happens when music meets connection.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              I offer a gentle, creative space where children, adults, and families can use
              music to process emotions, build skills, and feel more at home in themselves.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="#contact">Book a Free Consultation</a>
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
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-secondary/40 backdrop-blur-sm py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal direction="left" className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src={aboutImage}
              alt="Close-up of hands holding a wooden ukulele, representing a personal, gentle approach to music therapy"
              width={800}
              height={1008}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal direction="right" delay={120}>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              About Me
            </p>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Hi, I'm your music therapist.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I became a music therapist because I saw, again and again, how music reaches
                places that words alone cannot. Whether it's a child finding their first
                confident voice, an adult navigating grief, or a family learning to communicate
                in new ways, music creates a safe bridge.
              </p>
              <p>
                My approach is warm, collaborative, and grounded in evidence. I hold a
                board-certification in music therapy and have experience supporting clients
                across the lifespan — from early childhood through older adulthood.
              </p>
              <p>
                I don't believe in a one-size-fits-all session. Every person who walks through
                the door brings their own story, preferences, and goals. Together, we'll find
                the sounds, songs, and rhythms that feel right for you.
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
                className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <item.icon className="h-6 w-6 text-primary" />
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
      <section id="services" className="bg-secondary/40 backdrop-blur-sm py-20 lg:py-28">
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
                className="rounded-2xl border border-border/60 bg-background p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
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
