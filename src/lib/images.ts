/**
 * Responsive image sources.
 *
 * Each entry exposes the full-size asset as `src` plus a `srcSet` of
 * pre-scaled variants so browsers download only what the viewport needs.
 * The largest candidate is always the original file, so rendered quality
 * is unchanged from before.
 */

import heroFull from "@/assets/hero-music-therapy.webp";
import hero640 from "@/assets/hero-music-therapy-640.webp";
import hero960 from "@/assets/hero-music-therapy-960.webp";
import hero1280 from "@/assets/hero-music-therapy-1280.webp";

import jeremyFull from "@/assets/about-jeremy.webp";
import jeremy640 from "@/assets/about-jeremy-640.webp";
import jeremy960 from "@/assets/about-jeremy-960.webp";
import jeremy1280 from "@/assets/about-jeremy-1280.webp";

import aboutFull from "@/assets/about-hero.webp";
import about640 from "@/assets/about-hero-640.webp";
import about960 from "@/assets/about-hero-960.webp";
import about1280 from "@/assets/about-hero-1280.webp";

import familyFull from "@/assets/mt-family.webp";
import family640 from "@/assets/mt-family-640.webp";
import family960 from "@/assets/mt-family-960.webp";
import family1280 from "@/assets/mt-family-1280.webp";

import keyboardFull from "@/assets/mt-keyboard.webp";
import keyboard640 from "@/assets/mt-keyboard-640.webp";
import keyboard960 from "@/assets/mt-keyboard-960.webp";
import keyboard1280 from "@/assets/mt-keyboard-1280.webp";

import svcIndFull from "@/assets/svc-individual.webp";
import svcInd640 from "@/assets/svc-individual-640.webp";
import svcInd960 from "@/assets/svc-individual-960.webp";
import svcInd1280 from "@/assets/svc-individual-1280.webp";

import svcGrpFull from "@/assets/svc-group.webp";
import svcGrp640 from "@/assets/svc-group-640.webp";
import svcGrp960 from "@/assets/svc-group-960.webp";
import svcGrp1280 from "@/assets/svc-group-1280.webp";

import resFull from "@/assets/resources-hero.webp";
import res640 from "@/assets/resources-hero-640.webp";
import res960 from "@/assets/resources-hero-960.webp";
import res1280 from "@/assets/resources-hero-1280.webp";

function build(
  full: string,
  fullWidth: number,
  variants: Array<[string, number]>,
): { src: string; srcSet: string } {
  return {
    src: full,
    srcSet: [
      ...variants.map(([p, w]) => `${p} ${w}w`),
      `${full} ${fullWidth}w`,
    ].join(", "),
  };
}

/** Half-width columns on desktop, full width on smaller screens. */
export const SIZES_HALF = "(min-width: 1280px) 616px, (min-width: 1024px) calc(50vw - 48px), calc(100vw - 48px)";
/** Centred content images capped by a max-w-5xl / max-w-4xl container. */
export const SIZES_CONTENT = "(min-width: 1024px) 976px, calc(100vw - 48px)";

export const homeHeroImage = build(heroFull, 1920, [
  [hero640, 640],
  [hero960, 960],
  [hero1280, 1280],
]);

export const homeAboutImage = build(jeremyFull, 1491, [
  [jeremy640, 640],
  [jeremy960, 960],
  [jeremy1280, 1280],
]);

export const aboutHeroImage = build(aboutFull, 1920, [
  [about640, 640],
  [about960, 960],
  [about1280, 1280],
]);

export const mtFamilyImage = build(familyFull, 1600, [
  [family640, 640],
  [family960, 960],
  [family1280, 1280],
]);

export const mtKeyboardImage = build(keyboardFull, 1600, [
  [keyboard640, 640],
  [keyboard960, 960],
  [keyboard1280, 1280],
]);

export const svcIndividualImage = build(svcIndFull, 1920, [
  [svcInd640, 640],
  [svcInd960, 960],
  [svcInd1280, 1280],
]);

export const svcGroupImage = build(svcGrpFull, 1920, [
  [svcGrp640, 640],
  [svcGrp960, 960],
  [svcGrp1280, 1280],
]);

export const resourcesHeroImage = build(resFull, 1920, [
  [res640, 640],
  [res960, 960],
  [res1280, 1280],
]);
