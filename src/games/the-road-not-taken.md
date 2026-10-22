---
title: 'The Road Not Taken'
layout: 'layouts/page.html'
date: '2026-08-12'
tags: ['game']
thumbnail: '/images/games/roadnot_thumb.png'
thumbnailALT: 'The Road Not Taken'
extURL: 'https://ahill-a.itch.io/road'
blurb: 'Forest Walking Simulator'
---
<h2>{{title}} <a href="{{extURL}}" title="{{blurb}}" class="subtext itch">Play <i class="icon-itch"></i></a></h2>

The Road Not Taken was created for my Creative Computation course at DePaul. 

The objective for this project was to create an experience based on a single repeating action. I had been thinking a lot about hiking and walking simulators at the time, so I decided to make "choosing a fork in the path" as my action. As that description implies, The Road Not Taken is a game about walking along a path and choosing between two possible directions. As the title also implies, it was inspired by the Robert Frost poem of the same name. My personal objective for this game was to create an experience that allowed the player to slow down and meditate on the act of choosing.

This game was my first foray into coding with C#. As a result, there are some limitations to the game, the most prominent of which is the on-rails movement. The way the game works is it actually moves the ground underneath the player, rather than the player moving through the world space. This was done to make sure the player stayed on the path to hit the loading triggers. The environment consists of two chunks, a straight path and a forked path. When the player chooses left or right, a straight path is loaded along that path. After the chunk passes behind the player, it is unloaded. This game could theoretically loop forever. 

When a player chooses a path and starts walking down the straight stretch, a randomly chosen ambient nature audio loop plays. As the signpost at each fork is unmarked, the audio acts as the "reward" for choosing a path, answering the question of what is down that path. I decided to use audio to differentiate paths to encourage the player to engage a sense other than sight, which is greatly privileged in games. 

## My Roles
### Game Design
Core game experience, player interaction, environment handling.

### Coding
I created scripts for moving environment chunks and loading/unloading prefabs based on player decisions. Other features like menu functionality were coded by me as well.

### Art
I made a tree model in Blender and textured it in Marmoset Toolback by painting directly to it. Leaf and grass textures were created in Clip Studio Paint. I also used Clip Studio to create seamless ground textures and Blender to create terrain meshes. 