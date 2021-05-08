var bgBth = document.getElementById('bg');
var pauBth = document.getElementById('pau');
var tail = snake.nake[snake.nake.length - 1];
var isGameover = false;
bgBth.onclick = function() {
    if (isGameover) {
        main.removeChild(map.canvas);
        map = new Map(20, 40, 25);
        map.create();
        food = new Food(map);
        food.create();
        snake = new Snake(map);
        snake.create();
        for (var i in snake.nake) {
            snake.nake[i].direction = "right";
            snake.nake[i].pos = {};
            snake.nake[i].pos.x = snake.nake[i].style.left;
            snake.nake[i].pos.x = Number(snake.nake[i].pos.x.substring(0, snake.nake[i].pos.x.length - 2));
            snake.nake[i].pos.y = snake.nake[i].style.top;
            snake.nake[i].pos.y = Number(snake.nake[i].pos.y.substring(0, snake.nake[i].pos.y.length - 2));
        }
        isGameover = 0;
    } else {
        this.innerHTML = '开始游戏';
    }
    if (!timer) {
        timer = setInterval(function() {
            //判断是否碰到自己
            for (var i = 1; i < snake.nake.length; i++) {
                if (snake.nake[i].pos.x == snake.nake[0].pos.x && snake.nake[0].pos.y == snake.nake[i].pos.y) {
                    clearInterval(timer);
                    map.canvas.innerHTML = "game over";
                    isGameover = 1;
                    timer = undefined;
                }
            }
            //
            for (var i = 0; i < snake.nake.length; i++) {
                if (snake.nake[i].direction == 'right') {
                    snake.nake[i].pos.x += map.atom;
                    snake.nake[i].style.left = snake.nake[i].pos.x + 'px';

                } else if (snake.nake[i].direction == 'left') {
                    snake.nake[i].pos.x -= map.atom;
                    snake.nake[i].style.left = snake.nake[i].pos.x + 'px';

                } else if (snake.nake[i].direction == 'up') {
                    snake.nake[i].pos.y -= map.atom;
                    snake.nake[i].style.top = snake.nake[i].pos.y + 'px';

                } else if (snake.nake[i].direction == 'down') {
                    snake.nake[i].pos.y += map.atom;
                    snake.nake[i].style.top = snake.nake[i].pos.y + 'px';
                }
            }
            if (snake.nake[0].pos.x < 0 || snake.nake[0].pos.y < 0) {
                map.canvas.innerHTML = "game over";
                clearInterval(timer);
                isGameover = 1;
                timer = undefined;
            }
            if (snake.nake[0].pos.x > map.atom * map.xnum - map.atom || snake.nake[0].pos.y > map.atom * map.ynum - map.atom) {
                clearInterval(timer);
                map.canvas.innerHTML = "game over";
                isGameover = 1;
                timer = undefined;
            }
            for (var j = snake.nake.length - 1; j >= 1; j--) {
                if (snake.nake[j].direction != snake.nake[j - 1].direction) {
                    snake.nake[j].direction = snake.nake[j - 1].direction;
                }
            }

            if (snake.nake[0].pos.x == food.x * map.atom && snake.nake[0].pos.y == food.y * map.atom) {

                var body = document.createElement('div');
                body.style.width = map.atom + 'px';
                body.style.height = map.atom + 'px';
                body.style.backgroundColor = snake.bodyColor;
                body.className = 'snake';
                body.pos = {};
                body.pos.x = snake.nake[snake.nake.length - 1].pos.x;
                body.pos.y = snake.nake[snake.nake.length - 1].pos.y;
                body.style.left = body.pos.x + 'px';
                body.style.top = body.pos.y + 'px';
                map.canvas.appendChild(body);
                snake.nake.push(body);
                map.canvas.removeChild(food.od);
                food = new Food(map);
                food.create();
            }

        }, 200);
    }
}
pauBth.onclick = function() {

    clearInterval(timer);
    timer = undefined;
    bgBth.innerText = '继续游戏';
}
var kc;
document.addEventListener("keydown", function(e) {
    e = e || window.event;
    kc = e.keyCode;
    if (kc == 38 && snake.nake[0].direction != "down") {
        snake.nake[0].direction = "up";
    } else if (kc == 40 && snake.nake[0].direction != "up") {
        snake.nake[0].direction = "down";
    } else if (kc == 37 && snake.nake[0].direction != "right") {
        snake.nake[0].direction = "left";
    } else if (kc == 39 && snake.nake[0].direction != "left") {
        snake.nake[0].direction = "right";
    }
    console.log(snake.direction);
});