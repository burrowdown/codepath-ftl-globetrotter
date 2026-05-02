# Globetrotter — Decisions Log

## Milestone 0: Setup and Planning

- Destination chosen: Hells Canyon
- Primary audience: Boat tourists
- One design decision that reflects the destination: use of photos as layout element
- Wireframe format used (hand-drawn / Figma / other): hand drawn

## Milestone 1: HTML Structure

It's kind of cheating because I'm using JS, but I really didn't want to be repeating all that HTML for the header and the item cards, so I went ahead and made web components.

Claude got the structure right on my first prompt, so all I had to change was content.

My wirefames show the navigation being outside the header for the desktop view but inside it for the mobile view. I realized this would be annoying, and also thought about it harder and decided it would be ugly too. Function informing form! So I put the nav inside the header after all.

## Milestone 2: CSS Styling

Color choice I made: Made the main text color not just technically brown, but noticeably brown instead of black.

Claude made the backgrounds white, but I softened them to a beige color. More fitting with the vibe of the canyon. Desert grasslands! I also decreased their opacity a little bit, so we can get the texture of the background image.

It also had the images run all the way to the edge of the cards, which would probably be the right call for most designs but looked insane with an image background.

The sub header on the guide page looked bad, out of place and didn't stand out enough. I added a background to it.

## Milestone 3: Flexbox Layout

This was so straightforward that there was simply nothing for Claude to get wrong. It did exactly what I wanted and I changed nothing.

## Milestone 4: Responsive Design

Claude used 768 for the max-width but that seemed a little excessive. Dialed it down to 650, kinda just based on vibes.

The only thing that needed to be genuinely different between the two layouts is the header. The vertically stacked nav is unconventional, and it just makes the header very tall on a mobile view. That's why it collapses to a hamburger on mobile.

## Stretch Features

- Video embed: Super easy, decided to go with a more vibey video instead of the Even Knievel one, which doesn't actually look like it has anything to do with the Canyon (and also technically doesn't, it's a bit downstream of what is actually considered Hells Canyon anyway.)
- Newsletter: As predicted, Claude got it in one.
- Google Font: I let Claude make a couple of font suggesteions, tried them out, picked the one I liked best. It applied to to both the header and "tagline" (or subheader) but I like it better with the tagline in Times, so I changed that.

  _Add entries if you implement any stretch features._
