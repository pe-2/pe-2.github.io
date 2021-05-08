//初始化界面
var timer;
var main = document.getElementsByClassName('main')[0];
var showCanvas = 0;

function Map(atom, xnum, ynum) {
    this.atom = atom;
    this.xnum = xnum;
    this.ynum = ynum;

    this.canvas = null;

    this.create = function() {
        this.canvas = document.createElement('div');
        this.canvas.className = "canvas";
        this.canvas.style.width = this.atom * this.xnum + "px";
        this.canvas.style.height = this.atom * this.ynum + 'px';
        main.appendChild(this.canvas);

        if (showCanvas) {
            for (var i = 0; i < ynum; i++) {
                for (var j = 0; j < xnum; j++) {
                    var a = document.createElement('div');
                    a.className = 'a';
                    a.style.height = this.atom - 1 + 'px';
                    a.style.width = this.atom - 1 + 'px';
                    this.canvas.appendChild(a);
                }
            }
        }
    }

}

var map = new Map(20, 40, 25);
map.create();

// var randomColor = Math.floor(Math.random() * 256);
// console.log(randomNum);

// var randomPositionx = Math.floor(Math.random() * witdh);
// var randomPositiony = Math.floor(Math.random() * height);


function Food(map) {
    this.x = Math.floor(Math.random() * map.xnum);
    this.y = Math.floor(Math.random() * map.ynum);
    this.bgColor = "rgb(" + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';

    this.od = null;

    this.create = function() {
        this.od = document.createElement('div');
        this.od.style.position = "absolute";
        this.od.style.top = this.y * map.atom + 'px';
        this.od.style.left = this.x * map.atom + 'px';
        this.od.style.width = map.atom + 'px';
        this.od.style.height = map.atom + 'px';
        this.od.style.backgroundColor = this.bgColor;
        map.canvas.appendChild(this.od);
    }
}


var food = new Food(map);

food.create();

function Snake(map) {
    this.bodyNum = 4;
    this.head = null;
    this.body = null;
    this.headColor = "rgb(" + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    this.bodyColor = "rgb(" + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    this.nake = [];
    this.direction = "right";
    this.create = function() {
        this.head = document.createElement('div');
        this.head.className = "snake";
        this.head.style.left = -map.atom + 'px';
        this.head.style.top = 2 * map.atom + 'px';
        this.head.style.width = map.atom + 'px';
        this.head.style.height = map.atom + 'px';
        this.head.style.backgroundColor = this.headColor;
        map.canvas.appendChild(this.head);
        this.nake.push(this.head);
        for (var i = 0; i < this.bodyNum; i++) {
            this.body = document.createElement('div');
            this.body.className = "snake";
            this.body.style.left = -map.atom * (i + 2) + 'px';
            this.body.style.top = 2 * map.atom + 'px';
            this.body.style.width = map.atom + 'px';
            this.body.style.height = map.atom + 'px';
            this.body.style.backgroundColor = this.bodyColor;
            map.canvas.appendChild(this.body);
            this.nake.push(this.body);
        }
    }
}

var snake = new Snake(map);
snake.create();

for (var i in snake.nake) {
    snake.nake[i].direction = "right";
    snake.nake[i].pos = {};
    snake.nake[i].pos.x = snake.nake[i].style.left;
    snake.nake[i].pos.x = Number(snake.nake[i].pos.x.substring(0, snake.nake[i].pos.x.length - 2));
    snake.nake[i].pos.y = snake.nake[i].style.top;
    snake.nake[i].pos.y = Number(snake.nake[i].pos.y.substring(0, snake.nake[i].pos.y.length - 2));
}