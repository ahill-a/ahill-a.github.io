---
title: 'Reef Painter'
layout: 'layouts/page.html'
date: '2026-08-11'
tags: ['game', 'uni']
thumbnail: '/images/games/reefpainter_thumb.webp'
thumbnailALT: 'Reef Painter'
extURL: 'https://raesuarez.itch.io/reef-painter'
blurb: 'Help bring the temperature down to restore bleached corals.'
itch: '<a href="{{extURL}}" title="{{blurb}}" class="subtext itch">Play <i class="icon-itch"></i></a>'
---
<a href="/images/games/reefpainter_01.webp" target="_blank"><img src="/images/games/reefpainter_01.webp" alt="Reef Painter gameplay"></a>

Reef Painter was created for my Games With A Purpose Bootcamp course with my peers Rae Suarez and Aryan Shrivastava. In this game, the player is a hermit crab protecting their coral reef from rising ocean temperatures. By destroying trash found around the reef, the hermit crab gains magic energy that they use to cool water around a coral and bring color back to the reef. 

Games With A Purpose Bootcamp is a class dedicated to the field of serious games and the design framework of triadic game design, which we applied when developing Reef Painter. Triadic game design is a design framwork for developing serious games (games intended to have an impact on the real world) in which three "worlds" are given equal weight in the design process.

<a href="/images/games/reefpainter_02.webp" target="_blank"><img src="/images/games/reefpainter_02.webp" alt="Reef Painter instructions"></a>

These three worlds are:
- Reality: the game contains a model representation of the real world grounded in the disciplines related to the game's subject
- Meaning: on playing the game, the player creates meaning that is useful in the real world
- Play: the game is still engaging, immersive, and fun

Our class was priveleged to have feedback from an NOAA scientist as part of our development process. 


## My roles:
### Gameplay Design
I researched mechanics of coral bleaching and ways coral reefs recover from bleaching events to ensure the core game experience was based on real-life information. While the bulk of this research ultimately did not make it into the game, it was still a helpful starting point to draw from. Research that made it into the final game includes the impact of pollution and water temperature on coral health.

While designing the core gameplay, we struggled with tying fun gameplay with realistic mechanisms for healing coral. After our feedback session, we decided to make the crab's involvement more fantastical. What was important to our game was not the specific method for healing coral, but the overall message on the importance of ocean health. 

### Art
Early on in development, my team agreed on a 3D environment with 2D sprites. I created sprite artwork for the crab and trash pieces, as well as UI elemetns for energy and temperature. I also made a seamless sandy ground texture.

<div class="flex-horizontal flex-center">
<a href="/images/games/reefpainter_04.gif" target="_blank"><img src="/images/games/reefpainter_04.gif" alt="Hermit crab celebration"></a>
<a href="/images/games/reefpainter_05.gif" target="_blank"><img src="/images/games/reefpainter_05.gif" alt="Full energy meter"></a>
</div>

### Shader Creation
I used Unity's shader graph feature to create a shader for the coral that showed bleaching progress. It essentially functions like a vertial progress bar, and the percentage "filled" with color can be accessed and changed by a script. 

<div class="flex-horizontal">
<a href="/images/games/reefpainter_06.webp" target="_blank"><img src="/images/games/reefpainter_06.webp" alt="Mostly bleached coral"></a>
<a href="/images/games/reefpainter_07.webp" target="_blank"><img src="/images/games/reefpainter_07.webp" alt="Mostly restored coral"></a>
</div>
<a href="/images/games/reefpainter_08.webp" target="_blank"><img src="/images/games/reefpainter_08.webp" alt="Coral shader graph"></a>