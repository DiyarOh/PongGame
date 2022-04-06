// Game Area
const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
let ball_start = false

//Paddle Stats
let player_Paddle_Height = 120
let opponent_Paddle_Height = 100
canvas.height = window.innerHeight - 100
canvas.width = window.innerWidth - 100

//Game loop
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

class Ball {
    constructor() {
        this.position = {
            x: canvas.width / 2 - 100,
            y: canvas.height / 2 - 40
        }

        this.velocity = {
            x: 2,
            y: 7.5
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


}

function computerMove() {

    computer.position.y = compBall.position.y

}

let gains = 10
function resetball() {
    ball.position.x = canvas.width / 2;
    ball.position.y = canvas.height / 2;
}

// function testMove(){
//     player.position.y = ball.position.y - 4
// }

function compBallMove() {
    compBall.position.y = ball.position.y + gains

}
function ballMove() {
    ball.position.x = ball.position.x - ball.velocity.x
    ball.position.y = ball.position.y - ball.velocity.y
    if (ball.position.x <= canvas.width - canvas.width) {
        resetball()
        computer.score.score++
        ball_start = false
    } else if (ball.position.x >= canvas.width) {
        resetball()
        player.score.score++
        ball_start = false
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


function drawtext(text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = "80px fantasy";
    ctx.fillText(text, x, y,);
}

function game_loop() {
    requestAnimationFrame(game_loop)

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    ball.draw()
    compBall.draw()
    computer.update()
    if (ball_start === true) {
        ballMove()
    }

    document.addEventListener('keydown', function (event){
        if (event.keyCode === 32){
            ball_start = true
        }
    })
    computerMove()
    compBallMove()

    // testMove()
}

const player = new Player_Paddle()
const ball = new Ball()
const compBall = new Ball()
const computer = new Computer_Paddle()


compBall.velocity.x = 3
compBall.velocity.y = 8.5


game_loop()
// Paddle Movement
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
document.addEventListener("mousemove", e => {
    player.position.y = (e.y / window.innerHeight) * 1350
})


