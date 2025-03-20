[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/M3ipj5sV)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18378354&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

# OSHIN
by Jess Merriman

**_ALARM INVOLVES SOUND_**

Pages: https://25-mddn242.github.io/time-based-media-JehSikah/

### MY DESIGN PROCESS

In the beginning of my design process, I drew up several designs on paper before choosing a look I liked and moving into p5js. 

Initially I was going to make a very legible clock using with a cozy aesthetic. My plans then changed to a more artsy clock which was less legible to avoid accidentally creating project 2.
I felt like one of the best ways to show the passage of time and keep a relaxing aesthetic was to build a clock revolving around some aspect of nature. This would also give me an easy opportunity to show time by creating a day/night cycle.

I decided on a constantly rotating ocean to tie into the eternal spinning of clock hands. I was going to have three major rings (sky, water and ground) to represent each measurement of time. 
E.g.
- Clouds in the sky slowly passing by
- Fish schools swimming past
- A coral reef making bubbles

As for the alarm function, I immediately had the plan for a boat that drives past blaring a horn, much like SpongeBob's alarm clock.
Little did I know, this decision would evolve into hours of problem solving.

When starting digitally, I focused on the functionality of my code before visuals.

I started with a basic layout of my sketch, then I focused on the sky. I had the idea of a gradient going in a circle so you could see when sunrise or sunset was approaching, these were going to be paramaterised to change when they happen throughout the year. I created the gradient via a reference, however, it made my scene very cluttered and messy, so I changed it to colour the whole background and lerp through a palette of colours. My initial timing for the changing colours was really harsh, so I continually tweaked it throughout the process. I also added the sun and moon which would rotate using the hours, midday and midnight having the highest sun and moon respectively.

Next came the waves which, after finding the right resource, was pretty straightforward. I added a tide which would rise and fall with the passing minutes and spin with slowed seconds.

After that, I started working on my alarm, which took the most time out of everything. 
The initial two phases of driving the boat on screen and pausing in the middle when the alarm went off were simple, however, making the boat drive back off screen proved to be a real pain. I spent multiple days rewriting my alarm function in the hopes of somehow getting it to cooperate, yet it never did what I wanted it to. I tried basing its movement on obj.seconds, but that never guaranteed that it would start turning at the correct spot. I tried basing it on framerate which gave me mixed results on different devices. I tried setting an interval which made it go haywire and spin at an alarming rate. Phoebe even tried her hand at it and made a variable reach infinity. After many many hours of failure, I finally decided to give up on it and work on other aspects which put me behind a bit since I was supposed to start on them at an earlier date.

Creating the assets for this project was fun. Since I was going to use SpongeBob's alarm, I aimed to draw my assets in a similar style.
In total, I created:
- 1 boat
- 3 different fish
- 3 different cloud shapes
- 1 sun
- 1 moon

Unfortunately, I had run out of time to do my ocean floor decorations.

After each group of asset, I added them into their respective places and made each correspond to some time variable. 
I put the most work into my fish. Each fish would represent a number of time; the grey ones were each a minute, the red ones ten minutes, and the blue and yellow fish would appear every half hour.

I had one more try at fixing my boat alarm. By some miracle, I figured out how to make it work and it'd chug along like it was supposed to. I quickly added in the sound effect which involves adding a whole other javascript library into my code but it eventually worked.

As my deadline approached, I rushed to impliment the functionality of my clouds. I made them simply rotate each size using a different time like the hands of a clock.



### REFERENCES
**Conical Gradients:**
https://editor.p5js.org/george.gala/sketches/iRDaD_VNn


**Wave Shape:**
https://editor.p5js.org/SafakOnol/sketches/_GApyXh3B 


**Boat Takeoff Help:**
https://editor.p5js.org/ag3439/sketches/S1fu-umj7 


**Sound Issues Help:**
https://stackoverflow.com/questions/57064681/referenceerror-soundformats-is-not-defined


**Alarm Mp3:**
https://www.zedge.net/ringtones/06ade776-ce5d-34bb-9721-a58a26a4cc3c
