/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

let wheel_max = 1000;

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





  //main setup
  background(50);
  angleMode(DEGREES);
  noStroke();

  //let exactSeconds = secs + millis / 1000.0; //smooth transition/no ticking

  hour_wheel();
  
  rect(0,0, 100)

  //min_wheel();

  //sec_wheel();  

}

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

function hour_wheel() {
  /*
  let day = color(90,200,200);
  let night = color(100,100,200);
  let mid = lerpColor(day, night, 0.5)

  fill(day);
  circle(width/2, height, wheel_max);

  fill(night);
  arc(width/2, height, wheel_max, wheel_max, -90, 90); //night half

  fill(mid);
  arc(width/2, height, wheel_max, wheel_max, -110, -70); //night half
  */
 
  push();
  circ_grad(
    0, width/2, height/2,//Start angle, pX, pY
    [
      color(100,100,200),
      color(255,142,126),
      color(90,200,200),
      color(85,63,136)
    ]
  );
  circle(width/2, height/2, 400);
  pop();
}

function min_wheel() {

  fill(90,170,200);
  circle(width/2, height, 2*wheel_max/3);

}

function sec_wheel() {

  fill(90,150,200);
  circle(width/2, height, wheel_max/3);

}
