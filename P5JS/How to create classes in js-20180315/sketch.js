/*
 *
 *	A simple class example
 *
 */

// one variable for the LineDrawer object
var lineDrawer;

// EXAMPLE 2: Create an empty array
var multipleLineDrawers = []

function setup() {
    console.log("setup");
    createCanvas(400, 400);
    stroke(0, 128);

    // this instantiates one LineDrawer
    lineDrawer = new LineDrawer();
}


// EXAMPLE 2: on mouse pressed, create a new LineDrawer object and add it to the array
function mousePressed() {
    // create new LineDrawer
    var newLineDrawer = new LineDrawer();
    // add to the array
    multipleLineDrawers.push(newLineDrawer);
    console.log("We now have " + multipleLineDrawers.length + " LineDrawers in the array");
}


function draw() {

    background(240);

    // call the public updateAndDraw() function on the object
    lineDrawer.updateAndDraw();


    // EXAMPLE 2: call the public updateAndDraw() function of all lineDrawers in the array
    for (var ld of multipleLineDrawers) {
        ld.updateAndDraw();
    }

}






/*
 *	The LineDrawer "class"
 */

function LineDrawer() {

    var x = random(width);
    var speed = random(0.5, 2);
    console.log("LineDrawer created at x=" + x);

    // to create a publicly accessible function use 
    // this.nameOfFunction = function() {}
    this.updateAndDraw = function() {
        line(x, 0, x, height);
        x = x + speed;
        if (x > width) x = x - width;
    }
}