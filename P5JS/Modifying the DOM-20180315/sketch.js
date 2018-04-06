/*
 *
 *	A small introductionary demo on p5.dom.js
 *
 */

var canvas;
var bgColor;
var div0;
var divRotate;


function setup() {
    console.log("setup");

    // EXAMPLE 1:
    // create the canvas...
    canvas = createCanvas(300, 300);
    // ... & create random background color
    randomBgColor();

    // EXAMPLE 2: position the canvas randomly on the webpage
    //canvas.position(random(200),random(200));

    // EXAMPLE 4: Create a div...
    div0 = createDiv();

    // EXAMPLE 5: Create a div...
    divRotate = createDiv("Weeee!");

}

// change the background color when the mouse is pressed
function mousePressed() {
    randomBgColor();
}

function randomBgColor() {
    bgColor = color(random(255), random(255), random(255));
}

function draw() {

    // EXAMPLE 1:
    // set the background color
    background(bgColor);
    // draw an oscillating line
    var lineX = map(sin(map(frameCount, 0, 99, 0, TWO_PI)), -1, 1, 0, 300)
    line(lineX, 0, lineX, height);
    // draw a line to the mouse
    line(width / 2, height / 2, mouseX, mouseY);

    /*
    // EXAMPLE 3: Animate the position of the canvas in the DOM
    var canvasX = map(sin(map(frameCount,0,250,0,TWO_PI)),-1,1,200,400);
    canvas.position( canvasX, 40);
    */

    // EXAMPLE 4: ... and change the text of the div
    div0.html("X-Position of the oscillating line: " + round(lineX));


    // EXAMPLE 5: ... and use processing to animate the div position in the DOM
    var rd = map(frameCount, 0, 167, 0, TWO_PI);
    var weeX = map(cos(rd), -1, 1, 0, 200);
    var weeY = map(sin(rd), -1, 1, 4, 240);
    divRotate.position(weeX, weeY);


}