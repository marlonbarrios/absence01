let canvas;

//LOOPING to Draw a Circles
// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);
  mbsFramework();
  credits();

}

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

// Render loop that draws shapes with p5
function draw(){
  // For consistent sizing regardless of portrait/landscape
  const dim = Math.min(width, height);
  
  // Black background
  background(255);
  
  // Stroke only with a specific join style and thickness
  noFill();
  stroke(0);
  strokeCap(ROUND);
  strokeWeight(dim * 0.0025);

  // # of elements we wish to draw
  const count = 50;
  
  // Margin from edge of screen
  const margin = dim * 0.05;
  
  // The size with margin in consideration
  const innerWidth = (width - margin * 1);
  
  // Compute the diameter of each circle
  const diameter = innerWidth / (count - 4);

  // Draw each circle
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      const t = count <= 1 ? 0.5 : i / (count - 1);
      const t2 = count <= 1 ? 0.5 : j / (count - 1);
      const x = lerp(margin, width - margin, t);
      const y = lerp(margin, height - margin, t2);
      strokeWeight(dim * j * 0.0003);
    ellipse(x, y, j * 0.00009);
  }
}
fill(255);
  noStroke();

circle(width/2, height/2, dim * 0.5);
}

function keyPressed() {
  let m = month();
  let d = day();
  let y = year();
  let t = hour() + ':' + minute();
  if (key == 'S' || key == 's') 
    saveCanvas(canvas, 'canvas' + m + d + y + t , 'png');
}
  
function windowResized() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 900) {
    resizeCanvas(windowWidth * 0.85, windowWidth* 0.85);
    canvas.style("margin", "auto");
    canvas.style("margin-top", "10%");
  
  } else {
      resizeCanvas(windowWidth, windowWidth);
  }
}

function mbsFramework() {
  //template for canvas while printing and exporting/exhition on web/minimal
  canvas = createCanvas(1024, 1024); // will export as 512x512
  canvas.style("margin", "auto");
  canvas.style("margin-top", "5%");
  canvas.style("display", "flex");
  canvas.style("justify-content", "center");
  canvas.style("align-items", "center");
  canvas.style("border-radius", "10px");
  canvas.style("position", "relative");
  canvas.style("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
  canvas.style("zoom", "0.5");
  canvas.style('dpi', '300');
  canvas.style('bleed', '1/8');
  noCursor();
}

function credits() {
//credits
  createP("Absence 01");
  createP("Landscape of disappearing circles as a context for an absence." );
  createP("Press 's' to save a png image");
  var link =createA("https://marlonbarrios.github.io/", "Programmed by Marlon Barrios Solano");

  createElement('title', 'Absence 01')

  var allPs = selectAll("p")
  for (var i = 0; i < allPs.length; i++) {
    allPs[i].style("font-family", "Helvetica");
    allPs[i].style("justify-content", "center");
    allPs[i].style("align-items", "center");
    allPs[i].style("position", "relative");
    allPs[i].style("text-align", "center");
    allPs[i].style("display", "flex");
    allPs[i].style("font-size", "15px");
    allPs[i].style("color", "black");
    allPs[i].style("margin", "8px");
  }

  link.style("font-family", "Helvetica");
  link.style("justify-content", "center");
  link.style("align-items", "center");
  link.style("position", "relative");
  link.style("text-align", "center");
  link.style("display", "flex");
  link.style("font-size", "15px");
  link.style("color", "black");
  link.style("text-decoration", "none");

}
