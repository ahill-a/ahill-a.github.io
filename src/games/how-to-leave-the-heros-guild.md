---
title: "How to Leave the Hero's Guild"
layout: 'layouts/page.html'
date: '2026-08-13'
tags: ['game', 'uni']
thumbnail: '/images/games/heroguild_thumb.webp'
thumbnailALT: "How to Leave the Hero's Guild"
extURL: 'https://ahill-a.itch.io/heroquit'
blurb: 'If thou couldst just fill out one more form...'
itch: '<a href="https://ahill-a.itch.io/heroquit" target="_blank" class="subtext itch">Play <i class="icon-itch"></i></a>'
---
<a href="/images/games/heroguild_01.gif" target="_blank"><img src="/images/games/heroguild_01.gif" alt="How to Leave the Hero's Guild main menu"></a>

How to Leave the Hero's Guild is a short game made over spring break to teach myself how to use the fantasy console Pico-8. A
fantasy console is software that acts like a retro console emulator, but the original physical console never existed. Pico-8 operates sort of as an "all-in-one" software, where you can code the game, create pixel art, and make sound effects and music all in the same space. 

<a href="/images/games/heroguild_02.gif" target="_blank"><img src="/images/games/heroguild_02.gif" alt="How to Leave the Hero's Guild gameplay"></a>


In How to Leave the Hero's Guild, the player controls the Hero, who, after many years performing heroic deeds and defeating the Demon Lord, must now navigate the perpexingly complicated bureaucracy of the Hero's Guild in order to retire. 

The original concept for this game started as an in-class activity designing a game mechanic around a "dark pattern" of interface design. For my mechanic I used the dark pattern of "hard to cancel" recontextualied in a fantasy setting and guild membership. This idea spoke to me and I decided to expand upon it over spring break. 

<a href="/images/games/heroguild_03.gif" target="_blank"><img src="/images/games/heroguild_03.gif" alt="How to Leave the Hero's Guild end screen"></a>

## My Roles
### Game Design
Dialogue/narrative and progression conditions. 

It was a challenge designing an experience that was annoying but not *too* annoying. I mitigated the "bad" kind of annoying by making sure each NPC was distinguishable even at such limited resolution and making sure the distance between each station wasn't too far. 

The bulk of the design work centered around creating a coherent dialogue tree. I wrote out the general shape of the entire interaction (player vs guild) and color coded each speaker to make sure the overall story progressed without any loose ends.

### Coding
Taught myself LUA over the course of development. Scripts made by me include a state handler, player movement, and a dialogue handler. The actual dialog box drawing was done using a free to use script by Rusty Bailey.

### Art
All art was made by me in the Pico-8 sprite editor.

The visual aesthetic of the game is inpsired by medieval illuminated manuscripts.

<div class="flex-horizontal">
<a href="/images/games/heroguild_04.webp" target="_blank"><img src="/images/games/heroguild_04.webp" alt="Sprite sheet showing player and npc sprites and border tiles."></a>
<a href="/images/games/heroguild_05.webp" target="_blank"><img src="/images/games/heroguild_05.webp" alt="Sprite sheet showing demon king sprite, cutscene tiles, and decorative letters."></a>
</div>