import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Music, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import instrumentsBg from "@/assets/instruments-bg.webp";

type NavItem = {
  label: string;
  to?: string;
  href?: string;
};

export const navItems: NavItem[] = [
  { label: "Music Therapy", to: "/music-therapy" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Resources", to: "/resources" },
];

export function SiteBackground() {
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 bg-background" />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-multiply"
        style={{ backgroundImage: `url(${instrumentsBg})` }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/40 to-background/70"
      />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-primary/5" />
    </>
  );
}

function NavLink({ item, onClick, className }: { item: NavItem; onClick?: () => void; className?: string }) {
  if (item.to) {
    return (
      <Link
        to={item.to}
        onClick={onClick}
        className={className}
        activeProps={{ className: "text-primary" }}
      >
        {item.label}
      </Link>
    );
  }
  return (
    <a href={item.href} onClick={onClick} className={className}>
      {item.label}
    </a>
  );
}

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Music className="h-6 w-6 text-primary" />
          <span className="font-heading text-xl font-semibold text-foreground">
            Music Therapy
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            />
          ))}
          <Button asChild size="sm" className="rounded-full">
            <Link to="/" hash="contact">Contact Us</Link>
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
              />
            ))}
            <Button asChild className="rounded-full">
              <Link to="/" hash="contact" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40 backdrop-blur-sm py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Music className="h-5 w-5 text-primary" />
            <span className="font-heading text-lg font-semibold text-foreground">
              Music Therapy
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Music Therapy Practice. All rights reserved.
          </p>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SitePage({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <SiteBackground />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
