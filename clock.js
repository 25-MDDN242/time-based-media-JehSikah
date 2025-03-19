//VARIABLES
let wheelMax = 1500;
let sunrise = 6;
let sunset = 18;

//image var/load
let boat, fishMid, fishSmall, sun, moon;

function preload() {
  boat = loadImage("images/boat.png");
  fishBig = loadImage("images/fishBig.png");
  fishMid = loadImage("images/fishMid.png");
  fishSmall = loadImage("images/fishSmall.png");
  sun = loadImage("images/sun.png");
  moon = loadImage("images/moon.png");
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
  angleMode(DEGREES);
  rectMode(CENTER);
  imageMode(CENTER);
  noStroke();

  //colour palettes
  let skyPalette = [/*night*/color(11,20,42), /*duskPurp*/color(91,77,130), /*duskOran*/color(200,144,120), /*duskYell*/color(229,195,137), /*day*/color(141,201,254), /*dawnYell*/color(245,180,52), /*dawnOran*/color(229,129,67),/*dawnPurp*/color(57,64,126)];
  let waterPalette = [/*night*/color(19,54,95), /*duskPurp*/color(42,52,118), /*duskOran*/color(92,97,118), /*duskYell*/color(105,131,124), /*day*/color(65,135,230), /*dawnYell*/color(103,121,223), /*dawnOran*/color(118,103,223),/*dawnPurp*/color(62,75,150)];
  let sandPalette = [/*night*/color(162,150,127), /*duskPurp*/color(106,92,101), /*duskOran*/color(169,122,92), /*duskYell*/color(192,165,97), /*day*/color(208,183,132), /*dawnYell*/color(208,163,132), /*dawnOran*/color(206,139,134),/*dawnPurp*/color(165,133,123)];


  //timings
  //smooth transition/no ticking
  let exactSecs = obj.seconds + (obj.millis / 1000); 
  let exactMins = obj.minutes + (exactSecs / 60);
  let exactHours = obj.hours + (exactMins / 60);

  //smooth spin
  let secSpin = map(exactSecs, 0, 60, 0, 360);
  let minSpin = map(exactMins, 0, 60, 0, 360);
  let hourSpin = map(exactHours, 0, 24, 0, 360);

  //wave vars
  let tide, waveRad;
  if (exactMins < 30) { //rising tide
    tide = map(exactMins, 0, 60, 5, 30);
    waveRad = map(exactMins, 0, 60, 300, 400);
  } else { //falling tide
    tide = map(exactMins, 0, 60, 30, 5);
    waveRad = map(exactMins, 0, 60, 400, 300);
  }



  //main code
  //shift (0,0)
  translate(width/2, height);

  //sky
  push();
  fillLerp(skyPalette, exactHours);
  rect(0, -height/2, width, height);
  pop();

  //sun + moon
  push();
  rotate(-hourSpin);
  celest(exactHours);
  pop();

  //sun + moon
  push();
  rotate(-hourSpin);
  cloud();
  pop();

  

  //alarm
  push();
  //drawBoat(waveRad);
  alarm(obj.seconds_until_alarm, waveRad);
  pop();






  //wave
  push();
  rotate(-secSpin/2);
  fillLerp(waterPalette, exactHours, 100);
  wave(tide, waveRad);
  pop();

  //fishies
  push();
  rotate(-secSpin+180);
  fishies(waveRad, exactMins);
  pop();
  
  //wave overlay to tint fishies
  push();
  rotate(-secSpin/2);
  fillLerp(waterPalette, exactHours, 80);
  wave(tide, waveRad);
  pop();

  //ocean floor
  push();
  rotate(-minSpin);
  fillLerp(sandPalette, exactHours);
  wave(1,140);  
  pop();

  //tinting so images fit in
  //stronger tint at night to make darker
  let overlay;
  if (exactHours < (sunset - sunrise)) { 
    overlay = map(exactHours, 0, 24, 150, 60);
  } else { 
    overlay = map(exactHours, 0, 24, 60, 150);
  }

  push();
  blendMode(MULTIPLY);
  fillLerp(skyPalette, exactHours, overlay);
  rect(0, -height/2, width, height);
  pop();
  
}


function fillLerp(palette, time, alpha) {
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

function celest(time) {
  let skyLevel = 7 * height / 8
  let size;
  if (time < (sunset - sunrise)) { 
    size = map(time, 0, 24, 100, 200);
  } else { 
    size = map(time, 0, 24, 200, 100);
  }

  image(sun, 0, skyLevel, size, size);

  image(moon, 0, -skyLevel, size, size);
}

function cloud() {




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

function fishies(waterLev, time) {
  let watMid = (waterLev + 140) / 2;
  let size = 90;
  let spacer = 30;

  let distS = map(time, 0, 60, 20, 10);
  let distM = map(time, 0, 60, 25, 15);

  let s = int(time % 10);
  let m = int(time / 10);
  


  //sardines
  push();
  rotate(-spacer);
  if (time > 0) {
    for (let i = 0; i < s; i += 2) {
      push();
      rotate(distS * i);
      image(fishSmall, 0, -watMid + 30, size, size);
      pop();
    }
    for (let i = 1; i < s; i += 2) {
      push();
      rotate(distS * i);
      image(fishSmall, 0, -watMid + 45, size, size);
      pop();
    }
  }
  

  //snapper
  rotate(spacer);
  if (time >= 10) {
    for (let i = 0; i < m; i += 2) {
      push();
      rotate(distM * i);
      image(fishMid, 0, -watMid - 30, size, size);
      pop();
    }
    for (let i = 1; i < m; i += 2) {
      push();
      rotate(distM * i);
      image(fishMid, 0, -watMid - 20, size, size);
      pop();
    }
  }


  //the other fish
  rotate(-2*spacer/3);
  if (int(time) == 30 || int(time) == 0) {
    image(fishBig, 0, -watMid - 20, size, size);
  }
  pop();

}

function drawBoat(waterLev) {
  let size = 600;

  push();
  fill(255);
  scale(-1,1);
  image(boat, 0, -waterLev - size/15, size, size);
  pop();

}




 let chugaWant = 190;

function alarm(alarm, waterLev) {
  let chuga = 0; 
  let done = false;

  if (alarm > 0) {
    //lead up
    done = false;
    chuga = map(alarm, 30, 0, -180, 0);
  } else if (alarm == 0) {
    //alarm on
    // for (let i = 0; i < 180; i++) {
    //   chuga = i;
    // }
    chuga = 0;

  } else if (alarm < 0 || alarm === undefined) {
    //off
    //rotate(180);
    
   
    // chuga = lerp(chuga, chugaWant, 0.05);
    done = true;
    
  }

  while (done == true) {
    //chuga += 0.1;
    chuga = lerp(chuga, chugaWant, 0.05);
    if (chuga >= 180) {
      done = false;
    }
  }
  
  console.log(chuga);
  rotate(chuga);
  drawBoat(waterLev);
  

}















/*


  // if alarm is 0 AKA going off 
  // save seconds value into a verable, same for hour
  // take the value of the saved moment, make new variable thats 10 sec in future 
  /// check obj to see if future is now 

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
  
  //console.log("alarm: " + alarm +  "  A: " + A + "  chuga: " + chuga + "  counter: " + counter + "  tick: " + tick);
  loop();

  //https://editor.p5js.org/p5/sketches/Sound:_Load_and_Play_Sound
}


*/




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

simple fish
  // fill("orange");
  // ellipse(0, -watMid, 20, 10);
  // triangle(5, -200, 15, -205, 15, -195);

*/