# Website loading and image performance

## Goal
Make every page feel faster on phones, tablets, and desktops while preserving the current image quality and appearance.

## Changes
- Prioritise each page’s main image with responsive preloading and immediate rendering, while keeping below-the-fold imagery lazy-loaded.
- Refine responsive image sizing so each device downloads the smallest existing high-quality image that fully covers its rendered size and pixel density.
- Defer the home-page contact form code until the reader approaches it, reducing the initial page download without changing the form.
- Reduce background work by pausing the testimonial scroller when it is off screen or the tab is hidden, and release animation rendering hints after reveal effects finish.
- Add appropriate low-priority hints to resource thumbnails and preserve their full source quality.

## Validation
- Check all public pages on mobile, tablet, and desktop for image rendering, layout stability, overflow, and console errors.
- Confirm responsive image selection and that only the relevant above-the-fold image is prioritised per page.
- Confirm the contact form still loads and submits normally when reached.
