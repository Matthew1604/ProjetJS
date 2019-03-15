var canvas = document.getElementById("firstCanvas");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth-4;
canvas.height = window.innerHeight-4;
var ratio = window.devicePixelRatio;

var sprite = new Image();
sprite.onload = animate;
sprite.src = "img/sprite.png";
var step = 0;
var prevStep = 0;


context.scale(ratio, ratio);
context.imageSmoothingEnabled = false;

//context.fillStyle = "green";
//context.fillRect(10, 20, 100, 200);

var compt = 0;
function animate() {
    if (compt < 500) {
        draw();
        update(0.07);
        requestAnimationFrame(animate);
        compt++;
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawSprite(canvas.width/2, canvas.height, 200);
}

function drawSprite(x, y, scale) {
    var s = scale/23;
    context.drawImage(sprite, Math.floor(step)*25, 25, 23, 24, x-11*s, y-24*s, 24*s, 24*s);
}

function update(vitesse) {

    if (Math.floor(step) == 0) {
        if (prevStep == 0) {
            step += vitesse;
        } else {
            step -= vitesse;
        }

        if (step <= 0) {
            step = 1;
            prevStep = 0;
        }
    } else {
        if (Math.floor(step) == 1 || Math.floor(step) == 2) {
            if (prevStep == 0) {
                step += vitesse;
            }
            else {
                step -= vitesse;
            }
        }
    }

    if (Math.floor(step) == 3) {
        prevStep = 2;
        step = 2 ;
    }
}