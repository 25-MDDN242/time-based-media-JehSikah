/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

let wheelMax = 1500;

//timing vars
let sunrise = 6;
let sunset = 18;

//wave vars
let waveRad = 300;
let tide = 10;

function draw_clock(obj) {
  /* NOTES
  draw your own clock here based on the values of obj:
     obj.hours goes from 0-23
     obj.minutes goes from 0-59
     obj.seconds goes from 0-59
     obj.millis goes from 0-999
     obj.seconds_until_alarm is:
         < 0 if no alarm is set
         = 0 if the alarm is currently going off
         > 0 --> the number of seconds until alarm should go off
  Date();
  let dayOfWeek = Date();.split(" ")[0];
  let month = Date();.split(" ")[1];
  let year = Date();.split(" ")[2];
  */

  //main setup
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();

  let skyPalette = [/*night*/color(11,20,42), /*duskPurp*/color(91,77,130), /*duskOran*/color(200,144,120), /*duskYell*/color(229,195,137), /*day*/color(141,201,254), /*dawnYell*/color(245,180,52), /*dawnOran*/color(229,129,67),/*dawnPurp*/color(57,64,126)];

  //timings
  let exactSecs = obj.seconds + (obj.millis / 1000); //smooth transition/no ticking
  let exactMins = obj.minutes + (exactSecs / 60);
  let exactHours = obj.hours + (exactMins / 60);

  let secSpin = map(exactSecs, 0, 60, 0, 360);
  let minSpin = map(exactMins, 0, 60, 0, 360);
  let hourSpin = map(exactHours, 0, 24, 0, 360);



  //main code

  push();
  fillLerp(skyPalette, exactHours);
  rect(width/2, height/2, width, height);
  pop();

  //hour items
  push();
  translate(width/2, height);
  rotate(-hourSpin);

  pop();
  
  
  //minute items
  push();
  translate(width/2, height);
  rotate(-minSpin);
  
  
  pop();

  
  //second items
  push();
  translate(width/2, height);
  rotate(-secSpin);
  
  wave();
  sec_wheel();  
  pop();
}



function wave() {
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

function fillLerp(palette, time) {
  let filler = paletteLerp([

    [palette[0], 0],
    [palette[0], sunrise-2/24],

    [palette[1], sunrise-1/24],
    [palette[2], sunrise/24],
    [palette[3], sunrise+1/24],

    [palette[4], sunrise+2/24],
    [palette[4], sunset-2/24],

    [palette[5], sunset-1/24],
    [palette[6], sunset/24],
    [palette[7], sunset+1/24],

    [palette[0], sunset+2/24],
    [palette[0], 1],

  ], time);

  //console.log(time);

  fill(filler);
}




function min_wheel() {

  //main wheel
  fill(90,170,200,100);
  circle(0, 0, wheelMax/2);

}

function sec_wheel() {
  let sand = color(239,217,149);

  fill(sand);
  circle(0, 0, wheelMax/4);

}




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


*/