


const FPS = 30;
let bSize = 30;
let bx, by;
let xv, yv;
let canvas, context;


canvas = document.getElementById("game-area")
context = canvas.getContext("2d");
canvas.width = window.innerWidth
canvas.height = window.innerHeight


//set up interval (game loop)
setInterval(update, 1000 / FPS);

// ball starting position
bx = canvas.width / 2;
by = canvas.height / 2;

// random ball direction speed
xv = Math.floor(Math.random() * 76 + 25) / FPS;
yv = Math.floor(Math.random() * 76 + 25) / FPS;

// random ball direction
if (Math.floor(Math.random() * 2) == 0) {
    xv = -xv;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv = -yv;
}


// update function
function update() {
    // move the ball
    bx += xv;
    by += yv;

    // bounce the ball off each wall
    if (bx - bSize / 2 < 0 && xv < 0) {
        xv = -xv;
    }
    if (bx + bSize / 2 > canvas.width && xv > 0) {
        xv = -xv;
    }
    if (by - bSize / 2 < 0 && yv < 0) {
        yv = -yv;
    }
    if (by + bSize / 2 > canvas.height && yv > 0) {
        yv = -yv;
    }


// draw background and ball
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "yellow";
    context.fillRect(bx - bSize / 2, by - bSize / 2, bSize, bSize);
}

