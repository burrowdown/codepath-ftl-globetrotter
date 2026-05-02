This website is Hells Canyon, the deepest river canyon in North America. I crew up at the mouth of Hells Canyon and spent a lot of time there, and I think it's the most beautiful place on earth. 

My primary audience is first-time visitors who will access the canyon by boat on the Snake River. I am not targeting visitors who will access the canyon by hiking, kayak or raft, or ATV. 

Hells Canyon is a place of incredible majesty and harsh conditions. I want visitors to understand the limitations of visiting the canyon, adn the amount of professional support and guidance they will need for their first visit by boat.

Hells Canyon is a very dramatic landscape with a very limited color palette, photographs are relatively low-contrast and desaturated. I want the site to feature photographs very heavily, hopefully including as low-opacity backgrounds, if I can find color palettes that are flattering and high enough contrast for accessibility.


### Design Intent

The color pallet is warm, rich browns, very pale beige, and actually nothing else. It's very simple. 

I'm not a big font person, but it's definitely serif. Slightly old-timey. Times seems fine, maybe I'll pick something fancier for the header in a later phase. 

The main visual choice is the image background. It's unusal, but it's low key enough not to be overwhelming. 


### Flexbox Layout Plan

I actually can't do this section, I simply cannot wrap my head around step 3 "styling" without layout. That makes no sense to me. How is anything the right or wrong size without also being in the right location?

The vision has always been: 
* Guide and Attractions styled the same (they have the same wireframe)
  * desktop: vertical stack of cards with image on one side and text on the other, alternating sides
  * mobile: vertical stack of cards with image on top and text on the bottom
* Photos
    * grid layout, however many fit at whatever screen width

### Breakpoints plan

The instructions say to use three layouts, but I just really only see the need for two. There just aren't that many elements, the desktop view is going to look fine in a tablet. 

The guide pages will have al  l information in vertical columns, wider on desktop (image and text side by side) and narrower on mobile (image on top and text below). 

The photos page will use grid so it will be responsive to a variety of widths, it won't even need a breakpoint to switch to single column. 

## Stretch features plan

Embed: It'll be simple to add a youtube embed of a video, maybe the one about Even Knievel's jump over the Snake River Gorge
Grid: Already done
Deployment: sure why not
Interactive Navigation: This seems hard for the layout I picked so I'm not going to bother
Sign-up form: This seems pretty easy to add to the homepage? I'll give it a shot. Errr, have Claude give it a shot. 
Custom styling: I can add a font, sure. I don't think class covers variables, but I always use them, so that's an easy lift. Pretty confident we won't cover clamp() either.