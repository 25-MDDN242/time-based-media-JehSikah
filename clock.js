//VARIABLES
let wheelMax = 1500;

let boat;

function preload() {
  boat = loadImage("images/boat.png");
}




function draw_clock(obj) {
  /* NOTES
  use p5.js to draw a clock on a 960x500 canvas
  draw your own clock here based on the values of obj:
     obj.hours goes from 0-23
     obj.minutes goes from 0-59
     obj.seconds goes from 0-59
     obj.millis goes from 0-999
     obj.seconds_until_alarm is:
         < 0 if no alarm is set
         = 0 if the alarm is currently going off
         > 0 --> the number of seconds until alarm should go off
         if (alarm === undefined) { no alarm clause }
  Date();
  let dayOfWeek = Date();.split(" ")[0];
  let month = Date();.split(" ")[1];
  let year = Date();.split(" ")[2];
  */

  //main setup

  // if alarm is 0 AKA going off 
  // save seconds value into a verable, same for hour
  // take the value of the saved moment, make new variable thats 10 sec in future 
  /// check obj to see if future is now 
  angleMode(DEGREES);
  rectMode(CENTER);
  imageMode(CENTER);
  noStroke();

  //colour palettes
  let skyPalette = [/*night*/color(11,20,42), /*duskPurp*/color(91,77,130), /*duskOran*/color(200,144,120), /*duskYell*/color(229,195,137), /*day*/color(141,201,254), /*dawnYell*/color(245,180,52), /*dawnOran*/color(229,129,67),/*dawnPurp*/color(57,64,126)];
  //water
  //sand?


  //timings
  let exactSecs = obj.seconds + (obj.millis / 1000); //smooth transition/no ticking
  let exactMins = obj.minutes + (exactSecs / 60);
  let exactHours = obj.hours + (exactMins / 60);

  let secSpin = map(exactSecs, 0, 60, 0, 360);
  let minSpin = map(exactMins, 0, 60, 0, 360);
  let hourSpin = map(exactHours, 0, 24, 0, 360);

  //timing vars
  let sunrise = 6;
  let sunset = 18;

  //wave vars
  let tide;
  let waveRad;
  if (exactMins < 30) { //rising tide
    tide = map(exactMins, 0, 60, 5, 30);
    waveRad = map(exactMins, 0, 60, 300, 400);
  } else { //falling tide
    tide = map(exactMins, 0, 60, 30, 5);
    waveRad = map(exactMins, 0, 60, 400, 300);
  }


  //shift (0,0)
  translate(width/2, height);


  //main code
  //sky
  push();
  fillLerp(skyPalette, exactHours, sunrise, sunset);
  rect(0, -height/2, width, height);
  pop();

 
  //sun/moon
  push();
  rotate(-hourSpin);
  celest();
  pop();

  
  //alarm
  push();
  //drawBoat(waveRad);
  alarm(obj.seconds_until_alarm, exactSecs, waveRad);
  pop();

  
  //wave
  push();
  rotate(-secSpin/2);
  fill(53, 134, 210, 200);
  wave(tide, waveRad);
  pop();



  push();
  rotate(-secSpin);
  fishies();
  pop();


  //ocean floor
  push();
  rotate(-minSpin);

  sandFloor();  
  pop();


  //tint?
  push();
  blendMode(MULTIPLY);
  fillLerp(skyPalette, exactHours, sunrise, sunset, 100);
  rect(0, -height/2, width, height);
  pop();
  
}


function fillLerp(palette, time, sunrise, sunset, alpha) {
  //transition from orange to purple was too harsh so intermediate colours made
  let riseMid = lerpColor(palette[1], palette[2], 0.5);
  let setMid = lerpColor(palette[6], palette[7], 0.5);
  
  let filler = paletteLerp([

    //night
    [palette[0], 0],
    [palette[0], sunrise-4/24],

    //rise
    [palette[1], sunrise-2/24], //purp
    [riseMid, sunrise-1/24], //lerp
    [palette[2], sunrise+1/24], //oran
    [palette[3], sunrise+2/24], //yell

    //day
    [palette[4], sunrise+4/24],
    [palette[4], sunset-4/24],

    //set
    [palette[5], sunset-2/24], //yell
    [palette[6], sunset-1/24], //oran
    [setMid, sunset+1/24], //lerp
    [palette[7], sunset+2/24], //purp

    //night
    [palette[0], sunset+4/24],
    [palette[0], 1],

  ], time);

  //console.log(time);

  if (alpha === undefined) {
    filler.setAlpha(255);
  } else {
    filler.setAlpha(alpha);
  }

  fill(filler);
}

function wave(tide, waveRad) {
  let phase = 0;

  angleMode(RADIANS);

  let increment = .01 / 32;
  beginShape();
  for (let a = 0; a < TWO_PI; a += increment) {
    let r1 = waveRad + sin(a * 20 + phase) * tide;
    let x = r1 * cos(a);
    let y = r1 * sin(a);
    curveVertex(x, y);
  }
  endShape(CLOSE);
  phase += 0.05;

  angleMode(DEGREES);
}

function sandFloor() {
  fill(239,217,149);
  circle(0, 0, wheelMax/5);
}

function celest() {
  let skyLevel = 7 * height / 8

  fill("yellow");
  circle(0, skyLevel, 100);

  fill("white");
  circle(0, -skyLevel, 100);
}

function fishies() {
  //bob up and down?

  fill("orange");
  ellipse(0, -200, 20, 10);
  triangle(5, -200, 15, -205, 15, -195);
}




function drawBoat(waterLev) {
  let size = 600;

  push();
  fill(255);
  scale(-1,1);
  image(boat, 0, -waterLev - size/15, size, size);
  pop();

}
















let tick = setInterval(ticker, 1000);
let counter = 0;
function ticker() {
  counter ++;
}

let alarmTick = true;

function alarm(alarm, time, waterLev) {
  let chuga;
  let timer = 30;
  let A;
  

  
  if (alarm == 0) {
    //alarm ringing
    drawBoat(waterLev);
    counter = 0;
    
    if (alarmTick == true) {
      clearInterval(tick);

      // if counter is 0. 
      tick = setInterval(ticker, 1000);
      alarmTick = false;
    }

  } else if (alarm > 0) {
    //lead up
    chuga = map(alarm, 30, 0, -180, 0);

    push();
    rotate(chuga);
    drawBoat(waterLev);
    pop();

  } else if (alarm < 0)  {
    //send off

    A = timer - counter;
    
    if(A <= 0 || A === undefined) {
      clearInterval(tick);
      A += timer;
      alarmTick = true;
      //noLoop();
    }

    chuga = map(A, 30, 0, 0, 180);


    

    
    push();
    rotate(chuga);
    drawBoat(waterLev);
    pop();
    
    //https://editor.p5js.org/sandyyt10/sketches/QWkTAMI-i
  } else if (alarm === undefined) {
    //off
    push();
    rotate(180);
    drawBoat(waterLev);
    pop();

  } 
  
  console.log("alarm: " + alarm +  "  A: " + A + "  chuga: " + chuga + "  counter: " + counter + "  tick: " + tick);
  loop();

  //https://editor.p5js.org/p5/sketches/Sound:_Load_and_Play_Sound
}






///////DELETE BEFORE HAND IN/////////

////////OLD CODE & TESTS////////

/*

function sky_grad(sA, sX, sY, colours){
  let gradient = drawingContext.createConicGradient(
    sA, sX, sY
  );
  gradient.addColorStop(0, colours[0]);
  gradient.addColorStop(5/24, colours[0]);
  gradient.addColorStop(5.5/24, colours[1]);
  gradient.addColorStop(6/24, colours[2]);
  gradient.addColorStop(6.5/24, colours[3]);
  gradient.addColorStop(7/24, colours[4]);
  gradient.addColorStop(17/24, colours[4]);
  gradient.addColorStop(17.5/24, colours[5]);
  gradient.addColorStop(18/24, colours[6]);
  gradient.addColorStop(18.5/24, colours[7]);
  gradient.addColorStop(19/24, colours[0]);
  gradient.addColorStop(1, colours[0]);


  drawingContext.strokeStyle = gradient;
  drawingContext.fillStyle = gradient;
}

function hour_wheel() {
  push();
  sky_grad(-HALF_PI, 0, 0,//Start angle, pX, pY
    [
      night,
      duskPurp,
      duskOran,
      duskYell,
      day,
      dawnYell,
      dawnOran,
      dawnPurp,
    ]
  );
  circle(0, 0, wheelMax);
  pop();

  // debug stick
  // fill(255);
  // arc(0,0,wheelMax,wheelMax,-90.1,-89.9);
  
}

let colorArray = [color('#0b6a88'), color('#ec015a'), color('#f89e4f'), color('#2dc5f4'), color('#9253a1')];
let test = paletteLerp([
  
  [colorArray[0], 0],
  [colorArray[1], 0.25],
  [colorArray[2], 0.5],
  [colorArray[3], 0.75],
  [colorArray[4], 1]    
  
], (millis() / 10000 % 1));
fill(test);


  tint(0, 0, 150, 150);
  image(boatFill, 0, -waterLev - size/15, size, size);

*/