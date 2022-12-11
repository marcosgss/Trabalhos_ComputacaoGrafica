points = 4
function setup() {
    createCanvas(800, 500);
}
function verifyPoints(){
    if (mouseX < 60 || mouseX > 740) points = 10
    else if ((mouseX > 60 && mouseX < 120) || (mouseX > 680 && mouseX < 740))points = 9
    else if ((mouseX > 120 && mouseX < 180) || (mouseX > 620 && mouseX < 680)) points = 8
    else if ((mouseX > 180 && mouseX < 240) || (mouseX > 560 && mouseX < 620)) points = 7
    else if ((mouseX > 240 && mouseX < 300) || (mouseX > 500 && mouseX < 560)) points = 6
    else if ((mouseX > 300 && mouseX < 360) || (mouseX > 440 && mouseX < 500)) points = 5
    else if (mouseX > 360 && mouseX < 440) points = 4
}
function draw() {
    background(0);
    verifyPoints()
    push();
    translate(window.width / 2, window.height / 2);    
    star(0, 0, 50, 170, points);
    rotate(PI / points);
    star(0, 0, 50, 100, points)
    pop();
}
function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    strokeWeight();
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}