//Naotaka Kinoshita, Tiffany Moi
//Team 
//SoftDev2 pd7
//K10 -- Objectification
//2018-03-09
var pic = document.getElementById("vimage");
var btn = document.getElementById("clear");

var newClear = function() {
    while (pic.firstChild) {
	pic.removeChild(pic.firstChild);
    }
};

var draw = function(e) {
    var circle = drawCircle(e.offsetX, e.offsetY);
    circle.display();
};

var drawCircle = function(x, y) {
    //instantiate obj
    var cl = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    );
    
    //accessors
    cl.getFill = function() {
	return this.getAttribute("fill");
    };
    cl.getR = function() {
	return this.getAttribute("r");
    };
    cl.getPos = function() {
	var p = {"x" : this.getAttribute("cx"), "y" : this.getAttribute("cy")};
	return p;
    };
    cl.getStroke = function() {
	return this.getAttribute("stroke");
    };
    
    //mutators
    cl.setFill = function(c) {
	this.setAttribute("fill", c);
    };
    cl.setR = function(r) {
	this.setAttribute("r", r);
    };
    cl.setPos = function(x, y) {
	this.setAttribute("cx", x);
	this.setAttribute("cy", y);
    };
    cl.setStroke = function(c) {
	this.setAttribute("stroke", c);
    };
    
    //display fxn
    cl.display = function() {
	pic.appendChild(this);
    };

    //what to do if clicked
    cl.changeC = function(e) {
	if (this.getFill() == "green") { //if green set to red and change pos
	    //change to random position
	    this.setPos(Math.floor(Math.random() * pic.getAttribute("height")),
			Math.floor(Math.random() * pic.getAttribute("width")));
	    this.setFill("red"); //change to red
	    e.stopPropagation(); //prevent redrawing
	}
	else { //if red change to green
	    this.setFill("green"); //change to green
	    e.stopPropagation(); //prevent redrawing
	}
    };

    //set attributes
    cl.setPos(x, y);
    cl.setR(20);
    cl.setFill("red");
    cl.setStroke("black");
    
    cl.addEventListener("click", cl.changeC, true); //add click on circle listener
    return cl;
};

pic.addEventListener("click", draw);
btn.addEventListener("click", newClear);
