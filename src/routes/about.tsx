import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SitePage } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import aboutImage from "@/assets/about-therapist.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About | Music Therapy Practice" },
      {
        name: "description",
        content:
          "Meet your board-certified music therapist. Learn about my training, approach, and the values that shape every session.",
      },
      { property: "og:title", content: "About | Music Therapy Practice" },
      {
        property: "og:description",
        content:
          "Meet your board-certified music therapist. Learn about my training, approach, and the values that shape every session.",
      },
    ],
  }),
});

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
              The person behind the music.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I'm a board-certified music therapist (MT-BC) who believes every person carries a
              song worth listening to. My work is about creating the safety and space for that
              song to be heard — by you, and by the people around you.
            </p>
          </Reveal>

          <Reveal direction="scale" delay={150} className="mt-12 overflow-hidden rounded-3xl shadow-xl">
            <img
              src={aboutImage}
              alt="Hands holding a wooden ukulele"
              className="aspect-[16/9] w-full object-cover"
            />
          </Reveal>

          <div className="mt-14 space-y-10">
            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                My path to music therapy
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Music has been part of my life for as long as I can remember — from singing
                  in choirs as a child to picking up guitar in my teens. But it wasn't until I
                  saw a therapist use a simple lullaby to comfort a child in a hospital that I
                  understood music's clinical power. That moment set the course of my career.
                </p>
                <p>
                  I completed my degree in music therapy, an extensive clinical internship, and
                  the national board certification exam. I continue to invest in ongoing training
                  in trauma-informed care, neurologic music therapy, and family-centered practice.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                How I work
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Every client I meet is different, so no two sessions look the same. Some are
                  full of drumming and movement; others are quiet, with a single guitar and a
                  conversation woven through the chords. What stays constant is the intention:
                  meet you where you are, and use music to move gently toward the growth you're
                  hoping for.
                </p>
                <p>
                  I bring a warm, unhurried presence to my sessions. You don't need musical
                  experience — just a willingness to show up and try.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                Credentials & training
              </h2>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                <li>• Board-Certified Music Therapist (MT-BC)</li>
                <li>• Bachelor's degree in Music Therapy</li>
                <li>• 1,200+ hour clinical internship</li>
                <li>• Continuing education in trauma-informed care and NMT</li>
                <li>• Member of the American Music Therapy Association</li>
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                Populations I love working with
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Children with developmental differences, teens navigating identity and
                  anxiety, adults processing life transitions or grief, and older adults living
                  with dementia. If you're not sure whether music therapy is right for you or a
                  loved one, please reach out — I'm happy to talk it through.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-14 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/" hash="contact">Book a Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/services">See Services</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </SitePage>
  );
}
