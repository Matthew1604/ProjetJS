var canvas = document.getElementById("firstCanvas");
var context = canvas.getContext("2d");
var w = window.innerWidth-4;
var h = window.innerHeight-4;
var ratio = window.devicePixelRatio;

var sprite = new Image();
sprite.onload = animate;
sprite.src = "img/sprite.png";

canvas.width = w;
canvas.height = h;
context.scale(ratio, ratio);
context.imageSmoothingEnabled = false;

//context.fillStyle = "green";
//context.fillRect(10, 20, 100, 200);

function animate() {
    draw();
    update();
    requestAnimationFrame(animate);
}

function draw() {
    context.clearRect(0, 0, w, h);
    drawSprite(w/2, h, 150);
}

function drawSprite(x, y, scale) {
    var s = scale/23;
    context.drawImage(sprite, 0, 26, 23, 23, x-11*s, y-23*s, 23*s, 23*s);
}

function update() {
    
}