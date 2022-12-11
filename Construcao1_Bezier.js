p1x = 100;
p1y = 600;
p2x = 300;
p2y = 200;
p3x = 500;
p3y = 600;
p4x = 700;
p4y = 200;  
arrastandoP1 = false;
arrastandoP2 = false;
arrastandoP3 = false;
arrastandoP4 = false;
function setup() {
    createCanvas(800, 800);
}
function draw() {
    background(0);
    if(arrastandoP1) {
        p1x = mouseX;
        p1y = mouseY;
    }
    else if(arrastandoP2) {
        p2x = mouseX;
        p2y = mouseY;
    }else if(arrastandoP3) {
        p3x = mouseX;
        p3y = mouseY;
    }else if(arrastandoP4) {
        p4x = mouseX;
        p4y = mouseY;
    }  
    stroke(255);
    strokeWeight(24);
    point(p1x, p1y);
    point(p2x, p2y);
    point(p3x, p3y);
    point(p4x, p4y);
    strokeWeight(4);
    noFill();
    bezier(p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y);
}
function mousePressed() {
    if(dist(p1x, p1y, mouseX, mouseY)<10) {
        arrastandoP1 = true;
    }
    if(dist(p2x, p2y, mouseX, mouseY)<10) {
        arrastandoP2 = true;
    }
    if(dist(p3x, p3y, mouseX, mouseY)<10) {
        arrastandoP3 = true;
    }
    if(dist(p4x, p4y, mouseX, mouseY)<10) {
        arrastandoP4 = true;
    }
}  
function mouseReleased() {
    arrastandoP1 = false;
    arrastandoP2 = false;
    arrastandoP3 = false;
    arrastandoP4 = false;
}