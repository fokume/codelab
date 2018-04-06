
var balls;

var minRadius = 4;
var maxRadius = 12;
var gravity = 0.2;		// strength of gravity
var bounceDrag = 0.7;	// drag when bouncing on walls
var airDrag = 0.98;		// air drag

	
/*
*	Setup:
*	Create the canvas, setup the balls
*/

function setup() {
	console.log("setup");
	createCanvas(900,450);
	
	balls = [];
	for (var i=0;i<100;i++) {
		balls[i] = new Ball();
	}
}


function draw() {
	
	// do a "fading" background
	noStroke();
	fill(102,255,204,64);
	rect(0,0,width,height);
		
	// draw and move all the balls
	for (var i=0;i<balls.length;i++) {
		balls[i].draw();
	}
	
}




/*
*
*	All the ball functionality in one function (class)
*
*/


function Ball() {

	var x, y;				// x,y stores position
	var xm, ym;				// xm, ym stores movement
	var radius = random(minRadius,maxRadius);			// radius of the ball
	
	/*
	*	Setup:
	*	Create the canvas, position the ball randomly and set a random movement
	*/

	function setup() {
		console.log(this+".setup");
		x = random(radius,width-radius);
		y = random(radius,height-radius);
		xm = random(-25,25);
		ym = random(-25,25);
	}
	setup();

	
	this.draw = function() {
		
		
		
		// draw the circle
		fill(255,102,153);
		stroke(255,0,0);
		ellipse(x, y, radius*2, radius*2);
		
		// bounce on walls and notify every bounce in the console
		bounce = false;
		if (x+xm-radius<0||x+xm+radius>width) {
			xm*=-bounceDrag; // invert horizontal movement
			bounce = true;
		}
		if (y+ym-radius<0||y+ym+radius>height) {
			ym*=-bounceDrag; // invert vertical movement
			bounce = true;
		}
		if (bounce) {
			console.log("bounce!");
		}
		
		// move towards the mouse when pressing the mouse button
		if (mouseIsPressed) {
			moveTowardsMouse();
		}
		
		// add movement to position
		x += xm;
		y += ym;
		
		// change movement with air drag
		xm *= airDrag;
		ym *= airDrag;
		
		// change movement with gravity
		ym += gravity;
		
	}


	/*
	*	This function changes the movement so the ball moves towards the mouse
	*/
	function moveTowardsMouse() {
		var dx = mouseX-x;
		var dy = mouseY-y;
		var dirToMouse = createVector(dx, dy);
		dirToMouse.div(dirToMouse.mag()); // normalize
		xm += dirToMouse.x*5;
		ym += dirToMouse.y*5;
	}

}