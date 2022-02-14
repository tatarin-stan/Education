
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
var raf;

function color() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);

    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}


let id = 0;

let balls = [];


canvas.onmousedown = function (event) {

    var ball = {
        id: 1,
        x: event.offsetX,
        y: event.offsetY,
        vx: Math.floor(Math.random() * (10 - -10)) + -10,   //Rand
        vy: Math.floor(Math.random() * (10 - -10)) + -10,   //Rand
        radius: Math.floor(Math.random() * (50 - 10)) + 10,  //rand
        color: color(),  //rand
        draw: function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };



    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);


            ball.draw();
            ball.x += ball.vx;
            ball.y += ball.vy;

            raf = window.requestAnimationFrame(draw);

            if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
                ball.vy = -ball.vy;
            }
            if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
                ball.vx = -ball.vx;
            }


    }

    draw();
}

module.exports = {color}




