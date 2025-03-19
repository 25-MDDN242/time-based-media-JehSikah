// Update this function to draw you own maeda clock on a 960x500 canvas

function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  angleMode(DEGREES);
  background(0); 

  /////SECONDS
  display(obj.seconds, 10, "pink");

  /////MINUTES
  display(obj.minutes, 20, "lavender");

  /////HOURS
  display(obj.hours, 30, "cyan");

}

function draw_num(num, circ_rad, colour) {

  let circ_space = 40;

  noFill();
  strokeWeight(3);
  stroke(colour);

  if (num == 1) {

    for (let i = 3; i > -4; i--) {
      circle(2 * circ_space, i * circ_space, circ_rad);
    }
    //circle(1 * circ_space, -2 * circ_space, circ_rad);

  } else if (num == 2) {

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, -3 * circ_space, circ_rad);
    }

    circle(2 * circ_space, -2 * circ_space, circ_rad);
    circle(2 * circ_space, -1 * circ_space, circ_rad);

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, 0, circ_rad);
    }

    circle(-2 * circ_space, 1 * circ_space, circ_rad);
    circle(-2 * circ_space, 2 * circ_space, circ_rad);

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, 3 * circ_space, circ_rad);
    }

  } else if (num == 3) {

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, -3 * circ_space, circ_rad);
    }

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, 0, circ_rad);
    }

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, 3 * circ_space, circ_rad);
    }

    for (let i = 3; i > -4; i--) {
      circle(2 * circ_space, i * circ_space, circ_rad);
    }

  } else if (num == 4) {

    for (let i = 3; i > -4; i--) {
      circle(2 * circ_space, i * circ_space, circ_rad);
    }

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, 0, circ_rad);
    }

    circle(-2 * circ_space, -3 * circ_space, circ_rad);
    circle(-2 * circ_space, -2 * circ_space, circ_rad);
    circle(-2 * circ_space, -1 * circ_space, circ_rad);

  } else if (num == 5) {

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, -3 * circ_space, circ_rad);
    }

    circle(-2 * circ_space, -2 * circ_space, circ_rad);
    circle(-2 * circ_space, -1 * circ_space, circ_rad);

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, 0, circ_rad);
    }

    circle(2 * circ_space, 1 * circ_space, circ_rad);
    circle(2 * circ_space, 2 * circ_space, circ_rad);

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, 3 * circ_space, circ_rad);
    }

  } else if (num == 6) {

    for (let i = 3; i > -4; i--) {
      circle(-2 * circ_space, i * circ_space, circ_rad);
    }

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, -3 * circ_space, circ_rad);
    }

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, 0, circ_rad);
    }

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, 3 * circ_space, circ_rad);
    }

    circle(2 * circ_space, 1 * circ_space, circ_rad);
    circle(2 * circ_space, 2 * circ_space, circ_rad);

  } else if (num == 7) {

    for (let i = 3; i > -4; i--) {
      circle(2 * circ_space, i * circ_space, circ_rad);
    }

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, -3 * circ_space, circ_rad);
    }

  } else if (num == 8) {

    for (let i = 3; i > -4; i--) {
      circle(-2 * circ_space, i * circ_space, circ_rad);
    }

    for (let i = 3; i > -4; i--) {
      circle(2 * circ_space, i * circ_space, circ_rad);
    }

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, -3 * circ_space, circ_rad);
    }

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, 0, circ_rad);
    }

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, 3 * circ_space, circ_rad);
    }

  } else if (num == 9) {

    for (let i = 3; i > -4; i--) {
      circle(2 * circ_space, i * circ_space, circ_rad);
    }

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, -3 * circ_space, circ_rad);
    }

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, 0, circ_rad);
    }

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, 3 * circ_space, circ_rad);
    }

    circle(-2 * circ_space, -2 * circ_space, circ_rad);
    circle(-2 * circ_space, -1 * circ_space, circ_rad);

  } else if (num == 0) {

    for (let i = 3; i > -4; i--) {
      circle(-2 * circ_space, i * circ_space, circ_rad);
    }

    for (let i = 3; i > -4; i--) {
      circle(2 * circ_space, i * circ_space, circ_rad);
    }

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, -3 * circ_space, circ_rad);
    }

    for (let i = 2; i > -3; i --) {
      circle(i * circ_space, 3 * circ_space, circ_rad);
    }

  } else {
    for (let x = 3; x > -4; x--) {
      for (let i = 2; i > -3; i --) {
        circle(i * circ_space, x * circ_space, circ_rad);
      }
    }
    
  }

}

function display(time, size, colour) {

  let pad = width/8;

  let timeA = time.toString().split("");
  let t = timeA[0];
  let o = timeA[1];

  if (timeA.length == 1) {
    push();
    translate(width/2 - pad, height/2);
    draw_num(0, size, colour);
    pop()

    push();
    translate(width/2 + pad, height/2);
    draw_num(t, size, colour);
    pop()
  } else {
    push();
    translate(width/2 - pad, height/2);
    draw_num(t, size, colour);
    pop()

    push();
    translate(width/2 + pad, height/2);
    draw_num(o, size, colour);
    pop()
  }
  
}