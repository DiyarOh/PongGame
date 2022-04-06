// Game Area
const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
let ball_start = false


//Paddle Stats
let player_Paddle_Height = 120
let opponent_Paddle_Height = 120
canvas.height = window.innerHeight - 100
canvas.width = window.innerWidth - 100

//class creations all paddles / balls
class Player_Paddle {
    constructor() {
        this.position = {
            x: 10,
            y: canvas.height / 2 - 40
        }
        this.velocity = {
            x: 10,
            y: 50
        }
        this.score = {
            score: 0
        }
        this.width = 20
        this.height = player_Paddle_Height
    }

    draw() {
        ctx.fillStyle = "black"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
    }
}

class Computer_Paddle {
    constructor() {
        this.position = {
            x: canvas.width - 40,
            y: 460
        }
        this.velocity = {
            x: 10,
            y: 20
        }
        this.score = {
            score: 0
        }
        this.width = 20
        this.height = opponent_Paddle_Height
    }

    draw() {
        ctx.fillStyle = "black"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }



    update() {
        this.draw()
    }
}
class Ball {
    constructor() {
        this.position = {
            x: canvas.width / 2 - 100,
            y: canvas.height / 2 - 40
        }

        this.velocity = {
            x: 10,
            y: 10
        }
        this.height = 30
        this.width = 30
    }

    draw() {
        ctx.fillStyle = "black"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        drawtext(player.score.score, canvas.width / 4, canvas.height / 5, "BLACK")
        drawtext(computer.score.score, 3 * canvas.width / 4, canvas.height / 5, "BLACK")
    }
    draw2() {
        ctx.fillStyle = "transparent"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }


}


//Computer paddle movement
function computerMove() {
    computer.position.y = compBall.position.y
}

//Adds to the y to make the A.I lose
let gains = 10

// After scored
function resetball() {
    ball.position.x = canvas.width / 2;
    ball.position.y = canvas.height / 2;

    gains = 10
}
function resetpaddle() {
    player.position.y = canvas.height / 2;
    computer.position.y = canvas.height / 2;
}


// Incase testing is neccessary lets player paddle move to win
function testMove(){
    player.position.y = ball.position.y - 4
}


//The ball that the computer follows (To make winning possible)
function compBallMove() {
    compBall.position.y = ball.position.y + gains

}

//This is the ball movement.

function ballMove() {
    ball.position.x = ball.position.x - ball.velocity.x
    ball.position.y = ball.position.y - ball.velocity.y
    if (ball.position.x <= canvas.width - canvas.width) {
        resetpaddle();
        resetball()
        computer.score.score++
        ball_start = false
    } else if (ball.position.x >= canvas.width) {
        resetball()
        player.score.score++
        ball_start = false
        document.getElementById("scoreset").value = player.score.score

    } else if (player.position.x + player.width >= ball.position.x &&
        player.position.x <= ball.position.x + ball.width &&
        player.position.y + player.height >= ball.position.y &&
        player.position.y <= ball.position.y + ball.height) {
        ball.velocity.x = -10
        gains = gains + 0.5
    } else if (ball.position.y >= canvas.height) {
        ball.velocity.y = 7.5
    } else if (ball.position.y <= canvas.height - canvas.height) {
        ball.velocity.y = -7.5
    } else if (computer.position.x - computer.width >= ball.position.x &&
        computer.position.x <= ball.position.x + ball.width &&
        computer.position.y + computer.height >= ball.position.y &&
        computer.position.y <= ball.position.y + ball.height) {
        ball.velocity.x = 10
    }
}

//Score count
function drawtext(text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = "80px fantasy";
    ctx.fillText(text, x, y,);
}

//Game loop here its created
function game_loop() {
    requestAnimationFrame(game_loop)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    ball.draw()
    compBall.draw2()
    computer.update()
    computerMove()
    compBallMove()
    if (ball_start === true) {
        ballMove()
    }
    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 32) {
            ball_start = true
        }
    })

    // testMove()
}
//Creation of all components
const player = new Player_Paddle()
const ball = new Ball()
const compBall = new Ball()
const computer = new Computer_Paddle()
compBall.velocity.x = 3
compBall.velocity.y = 8.5


//Game loop here its called upon
game_loop()
// Paddle Movement by keybinds
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 40) {
        if (parseInt(player.position.y) < canvas.height - 100) {
            player.position.y = player.position.y + player.velocity.y;
        }

    } else if (event.keyCode === 38) {
        if (parseInt(player.position.y) > 0) {
            player.position.y = player.position.y - player.velocity.y;
        }
    } else if (event.keyCode === 83) {
        if (parseInt(computer.position.y) < canvas.height - 100) {
            computer.position.y = computer.position.y + computer.velocity.y;
        }

    } else if (event.keyCode === 87) {
        if (parseInt(computer.position.y) > 0) {
            computer.position.y = computer.position.y - computer.velocity.y;
        }
    }
});

//Cursor paddle movement

document.addEventListener("mousemove", e => {
    player.position.y = e.y - 60
})

