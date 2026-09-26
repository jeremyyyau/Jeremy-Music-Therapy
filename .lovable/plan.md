# Smooth About testimonial scrolling

## Changes
- Keep the existing Web Animations API auto-scroll and visual presentation.
- On touch devices, hand off to native horizontal scrolling without changing coordinates during the active gesture.
- Resume auto-scroll only after momentum scrolling has settled, preserving the exact visible position.
- On desktop fine-pointer devices, prevent mouse-driven horizontal scrolling while retaining hover pause and resume.

## Verification
- Check touch drag, momentum, seamless resume, and repeated interactions on a phone viewport.
- Check desktop auto-scroll, hover pause, and confirm mouse drag/wheel cannot move the strip.
