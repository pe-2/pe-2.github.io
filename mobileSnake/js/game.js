var atom = new Object();
atom.width = 3.704;
atom.height = 6.667;
atom.px = '0';
atom.py = '0';
var map = {};
map.width = 27;
map.height = 15;

function Food() {
    this.px = Math.floor(Math.random() * 27);
    this.py = Math.floor(Math.random() * 15);
    this.ele = document.createElement('div');
    this.ele.className = 'food';
    this.ele.style.left = this.px * atom.width + '%';
    this.ele.style.top = this.py * atom.height + '%';
    document.getElementsByClassName('game')[0].appendChild(this.ele);
}

var food = new Food();

function Snake() {
    this.head = {
        px: 1,
        py: 0,
    }
    this.body = [];
    this.body.push(this.head);
    this.bodyEle = undefined;
    for (let i = 0; i < 4; i++) {
        this.bodyEle = {};
        this.bodyEle.px = this.head.px;
        this.bodyEle.py = this.head.py - i - 1;
        this.body.push(this.bodyEle);
    }
}

var snake = new Snake();

for (var i in snake.body) {
    var ele = document.createElement('div');
    snake.body[i].ele = ele;
    ele.style.left = snake.body[i].px * atom.width + '%';
    ele.style.top = snake.body[i].py * atom.height + '%';
    ele.className = 'snake';
    ele.style.opacity = 1 - i * (1 / snake.body.length) / 1.4;
    document.getElementsByClassName('game')[0].appendChild(ele);
}

function Run() {
    this.direction = 'down';
    this.speed = '200';
    this.runItem = [];
    for (let i in snake.body) {
        this.runItem.push(snake.body[i]);
        this.runItem[i].direction = this.direction;
    }
}


var runSnake = new Run();

var canChangeDre = true;
document.onkeydown = function(e) {
    e = e || window.event;
    kc = e.keyCode;
    // console.log(kc);
    if (canChangeDre && !isStop) {
        if (kc == 37 && runSnake.direction !== 'left' && runSnake.direction !== 'right') {
            runSnake.direction = 'left';
            canChangeDre = false;
        } else if (kc == 38 && runSnake.direction !== 'up' && runSnake.direction !== 'down') {
            runSnake.direction = 'up';
            canChangeDre = false;
        } else if (kc == 39 && runSnake.direction !== 'left' && runSnake.direction !== 'right') {
            runSnake.direction = 'right';
            canChangeDre = false;
        } else if (kc == 40 && runSnake.direction !== 'down' && runSnake.direction !== 'up') {
            runSnake.direction = 'down';
            canChangeDre = false;
        }
    }
    if (kc == 32) {
        if (isStop === false) {
            isStop = true;
            document.getElementsByClassName('button-pause')[0].style.display = 'none';
            document.getElementsByClassName('button-continue')[0].style.display = 'block';
        } else if (isStop === true) {
            isStop = false;
            document.getElementsByClassName('button-continue')[0].style.display = 'none';
            document.getElementsByClassName('button-pause')[0].style.display = 'flex';
        }
    }
}

var isStop = false;

function runTimer() {
    var timer = setInterval(function() {
            // console.log('run');
            if (isStop) {
                return;
            }
            var nextItem;
            for (let i = runSnake.runItem.length - 1; i >= 0; i--) {
                thisItem = runSnake.runItem[i];
                if (i > 0) {
                    nextItem = runSnake.runItem[i - 1];
                }
                if (i == 0 && thisItem.direction !== runSnake.direction) {
                    thisItem.direction = runSnake.direction;
                } else {
                    if (thisItem.direction !== nextItem.direction) {
                        thisItem.direction = nextItem.direction;
                    }
                }
            }
            var thisItem;
            for (let i in runSnake.runItem) {
                thisItem = runSnake.runItem[i];
                if (thisItem.direction == 'left') {
                    thisItem.px--;
                    if (thisItem.px === -1) {
                        thisItem.px = 26;
                    }
                    thisItem.ele.style.left = thisItem.px * atom.width + '%';
                } else if (thisItem.direction == 'up') {
                    thisItem.py--;
                    if (thisItem.py === -1) {
                        thisItem.py = 14;
                    }
                    thisItem.ele.style.top = thisItem.py * atom.height + '%';
                } else if (thisItem.direction == 'right') {
                    thisItem.px++;
                    if (thisItem.px === 27) {
                        thisItem.px = 0;
                    }
                    thisItem.ele.style.left = thisItem.px * atom.width + '%';
                } else if (thisItem.direction == 'down') {
                    thisItem.py++;
                    if (thisItem.py === 15) {
                        thisItem.py = 0;
                    }
                    thisItem.ele.style.top = thisItem.py * atom.height + '%';
                }
            }
            if (food.px === snake.head.px && food.py === snake.head.py) {
                food.ele.remove();
                var ele = document.createElement('div');
                var newBody = {};
                runSnake.runItem.push(newBody);
                newBody.ele = ele;
                var lastItem = runSnake.runItem[runSnake.runItem.length - 2];
                newBody.direction = lastItem.direction;
                if (newBody.direction == 'right') {
                    newBody.px = lastItem.px - 1;
                    newBody.py = lastItem.py;
                } else if (newBody.direction == 'left') {
                    newBody.px = lastItem.px + 1;
                    newBody.py = lastItem.py;
                } else if (newBody.direction == 'up') {
                    newBody.px = lastItem.px;
                    newBody.py = lastItem.py + 1;
                } else if (newBody.direction == 'down') {
                    newBody.px = lastItem.px;
                    newBody.py = lastItem.py - 1;
                }
                ele.style.left = newBody.px * atom.width + '%';
                ele.style.top = newBody.py * atom.height + '%';
                ele.className = 'snake';
                for (var i in runSnake.runItem) {
                    runSnake.runItem[i].ele.style.opacity = 1 - i * (1 / runSnake.runItem.length) / 1.4;
                }
                document.getElementsByClassName('game')[0].appendChild(ele);
                food = new Food();
                score.score++;
            }
            for (var i = 1; i < runSnake.runItem.length; i++) {
                if (runSnake.runItem[i].px === snake.head.px && runSnake.runItem[i].py === snake.head.py) {
                    // isStop = true;
                    score.score = 0;

                    for (var i = runSnake.runItem.length - 1; i >= 0; i--) {
                        runSnake.runItem.shift().ele.remove();
                    }
                    snake = new Snake();
                    for (var i in snake.body) {
                        var ele = document.createElement('div');
                        snake.body[i].ele = ele;
                        ele.style.left = snake.body[i].px * atom.width + '%';
                        ele.style.top = snake.body[i].py * atom.height + '%';
                        ele.className = 'snake';
                        ele.style.opacity = 1 - i * (1 / snake.body.length) / 1.4;
                        document.getElementsByClassName('game')[0].appendChild(ele);
                    }
                    runSnake = new Run();
                    // isStop = false;
                    break;
                }
            }
            if (canChangeDre === false) {
                canChangeDre = true;
            }
        },
        Number(runSnake.speed));
    return timer;
}


var timer = runTimer();

var lastValue = document.getElementsByClassName('speedIput')[0].value;
document.getElementsByClassName('speedIput')[0].onchange = function() {
    if (document.getElementsByClassName('speedIput')[0] !== lastValue) {
        clearInterval(timer);
        lastValue = document.getElementsByClassName('speedIput')[0].value;
        runSnake.speed = lastValue;
        timer = runTimer();
    }
}

document.getElementsByClassName('button-up')[0].onclick = function() {
    if (canChangeDre && !isStop && runSnake.direction !== 'down' && runSnake.direction !== 'up') {
        runSnake.direction = 'up';
        canChangeDre = false;
    }
}
document.getElementsByClassName('button-down')[0].onclick = function() {
    if (canChangeDre && !isStop && runSnake.direction !== 'down' && runSnake.direction !== 'up') {
        runSnake.direction = 'down';
        canChangeDre = false;
    }
}
document.getElementsByClassName('button-left')[0].onclick = function() {
    if (canChangeDre && !isStop && runSnake.direction !== 'left' && runSnake.direction !== 'right') {
        runSnake.direction = 'left';
        canChangeDre = false;
    }
}
document.getElementsByClassName('button-right')[0].onclick = function() {
    if (canChangeDre && !isStop && runSnake.direction !== 'left' && runSnake.direction !== 'right') {
        runSnake.direction = 'right';
        canChangeDre = false;
    }
}
document.getElementsByClassName('button-pause')[0].onclick = function() {
    isStop = true;
    this.style.display = 'none';
    document.getElementsByClassName('button-continue')[0].style.display = 'block';
}
document.getElementsByClassName('button-continue')[0].onclick = function() {
    isStop = false;
    this.style.display = 'none';
    document.getElementsByClassName('button-pause')[0].style.display = 'flex';
}