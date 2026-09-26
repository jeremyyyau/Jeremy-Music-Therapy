# Reliable mobile testimonial auto-scroll

## Goal
Keep the About-page testimonial strip visually unchanged while making its automatic movement reliable on the affected iPhone.

## Changes
- Move automatic motion from repeated JavaScript scroll updates to a compositor-driven track animation.
- Preserve the current speed, spacing, edge fade, card styling, seamless loop, desktop hover pause, and mobile swipe interaction.
- When a visitor swipes, pause automatic motion without a visible jump, retain their position, then resume smoothly after interaction ends.
- Keep the change isolated to the testimonial strip and its supporting styles.

## Verification
- Check phone and desktop sizes for unchanged appearance and layout.
- Confirm automatic movement without tapping, manual touch scrolling, smooth restart, seamless looping, and no browser errors.

## Technical details
Use the Web Animations API on the duplicated inner track so iOS can animate the transform on the compositor. Synchronise the transform with the scroll container during touch interaction, then restart the infinite linear animation from the resulting offset.
