/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

let wheelMax = 1500;
let sunrise = 6;
let sunset = 18;

function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  // Date();
  // let dayOfWeek = Date();.split(" ")[0];
  // let month = Date();.split(" ")[1];
  // let year = Date();.split(" ")[2];

  //main setup
  angleMode(DEGREES);
  noStroke();

  let exactSecs = obj.seconds + (obj.millis / 1000); //smooth transition/no ticking
  let exactMins = obj.minutes + (exactSecs / 60);
  let exactHours = obj.hours + (exactMins / 60);

  let secSpin = map(exactSecs, 0, 60, 0, 360);
  let minSpin = map(exactMins, 0, 60, 0, 360);
  let hourSpin = map(exactHours, 0, 24, 0, 360);


  //hour items
  push();
  translate(width/2, height);
  rotate(-hourSpin);

  hour_wheel(exactHours);
  /* debug stick
  fill(255);
  arc(0,0,wheelMax,wheelMax,-90.1,-89.9);
  */
  pop();
  

  //second items
  push();
  translate(width/2, height);
  rotate(-secSpin);

  sec_wheel();  
  pop();


  //minute items
  push();
  translate(width/2, height);
  rotate(-minSpin);

  min_wheel();
  pop();
}

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

function hour_wheel(time) {
  let night = color(11,20,42);
  let duskPurp = color(91,77,130);
  let duskOran = color(200,144,120);
  let duskYell = color(229,195,137);
  let day = color(141,201,254);
  let dawnYell = color(245,180,52);
  let dawnOran = color(229,129,67);
  let dawnPurp = color(57,64,126);

  let skyPalette = paletteLerp([

    [night, 0],
    [night, sunrise-2/24],

    [duskPurp, sunrise-1/24],
    [duskOran, sunrise/24],
    [duskYell, sunrise+1/24],

    [day, sunrise+2/24],
    [day, sunset-2/24],

    [dawnYell, sunset-1/24],
    [dawnOran, sunset/24],
    [dawnPurp, sunset+1/24],

    [night, sunset+2/24],
    [night, 1],

  ], time);

  console.log(time);

  background(skyPalette);
  
  
  /*
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
  */

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
