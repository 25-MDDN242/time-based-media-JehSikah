[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/M3ipj5sV)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18378354&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

### THIS IS YOUR README

Update this file as you go along to record your progress.

Pages: https://25-mddn242.github.io/time-based-media-JehSikah/

25/2: Testing that updating this works :D

27/2: Sketch crudely updated, started code imitiating someone elses maeda clock. Got all numbers blocked out and placements aligned.

4/3: https://editor.p5js.org/george.gala/sketches/iRDaD_VNn
https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

Playing with conical gradients so as I rotate throughout the day, the sky changes. 
Stolen code:

function circ_grad(sA, sX, sY, colors){
  let gradient = drawingContext.createConicGradient(
    sA, sX, sY
  );
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(0.15, colors[1]);
  gradient.addColorStop(0.5, colors[2]);
  gradient.addColorStop(0.75, colors[3]);
  gradient.addColorStop(1, colors[0]);

  drawingContext.strokeStyle = gradient;
  drawingContext.fillStyle = gradient;
}

when called:
push(); //MUST INCLUDE PUSH/POP or else everything after it will be gradient coloured
  circ_grad(
    0, width/2, height/2,//Start angle, pX, pY
    [
      //could add more or less colours, havent tried to make it responsive yet
      color(100,100,200),
      color(255,142,126),
      color(90,200,200),
      color(85,63,136)
    ]
  );
  circle(width/2, height/2, 400);
  pop();

NEXT WEEK: access days of week/months?

5/3: Have added sky colours to the background that will spin as the day progresses. Also added the second ring as an "ocean" with lowered opacity and the third ring as sand.

6/3: Changed sky to lerp since the rest of the scene would be pretty cluttered. Sky objects would npw signify hours passing. Timing of lerp still off? so needs tweaking.

7/3: Finished off the practice maeda clock.

10/3: https://editor.p5js.org/SafakOnol/sketches/_GApyXh3B
Rotating wave shape stolen. Also changed my palette lerp into its own function outside of colouring the background to be used to colour more than just the sky.

8/3: Variablised the waves so that they would rise and fall as well as have harsher waves. Started alarm functionality. Also added moon and sun

13/3: Imported my boat that will serve as my alarm. Initially tried using tint() so taht it would copy the shade of the sky, however I ended up adding a tint layer over everything to save time adding it to every individual feature. I also tweaked my palette lerp and added an intermediate since the transition between the oranges and purples was way too harsh. Drew one(1) fish.

18/3: Pan, alarm after not work still... almost did kinda. will try using purely framerate next.

19/3: Gave up on boat for now. Started adding in my fish that will count the minutes of the hour.

many assets and thigns and need more no boat :)))))



UPDATE PREVIEW.JPG
MARKDOWN FORMATTING