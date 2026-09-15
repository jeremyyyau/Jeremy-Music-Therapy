# Soften decoration in white cards

## Changes
- Remove the musical staff, notes, and clef from the white service cards.
- Add a subtle abstract line motif along the bottom edge of those cards, using gently crossing curves without music notation.
- Keep the full musical staves in the coloured quote and feature sections unchanged.
- Position the new lines behind an empty lower margin so they never cross the wording, on phone, tablet, or desktop.

## Technical details
- Add a small reusable decorative line component using the existing site colour tokens.
- Replace only the `StaffLines` instances inside white `bg-card` panels.
- Verify the service cards at mobile and desktop sizes and confirm the site remains error-free.
