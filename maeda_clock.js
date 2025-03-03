// Update this function to draw you own maeda clock on a 960x500 canvas
let circ_rad = 30;
let circ_space = circ_rad + 10;


function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  angleMode(DEGREES);
  background(0); //  beige

  let pad = width/8;

  /*
  let spacer = 50;

  push();
  translate(width/3 - pad - spacer, height/2);
  draw_num(1);
  pop()

  push();
  translate(width/3 + pad - spacer, height/2);
  draw_num(7);
  pop()

  //mid dots
  push();
  translate(width/2, height/2);
  circle(0, -circ_space, circ_rad);
  circle(0, circ_space, circ_rad);
  pop();


  push();
  translate(2*width/3 - pad + spacer, height/2);
  draw_num(2);
  pop()

  push();
  translate(2*width/3 + pad + spacer, height/2);
  draw_num(9);
  pop()
  */

  push();
  translate(width/2 - pad, height/2);
  draw_num(2);
  pop()

  push();
  translate(width/2 + pad, height/2);
  draw_num(8);
  pop()


}

function draw_num(num) {
  //fill(255);
  noFill();
  strokeWeight(3);
  stroke(255);

  //for (let i = 3; i > -4; i--) {} height dots
  //for (let i = 2; i > -3; i --) {} width dots
  //circle(circ_space, circ_space, circ_rad);

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
