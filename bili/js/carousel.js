var carouItem = document.getElementsByClassName('carousel-item');
var triggerItem = document.querySelectorAll('.trigger>span');
//实现队列

function Queue() {
    this.top = 0;
    this.end = this.top;
    this.length = 0;
    this.pop = function(elem) {
        this[this.top] = elem;
        this.top++;
        this.length++;
    }
    this.shift = function(elem) {
        var res;
        if (this.top == this.end) {
            return null;
        } else {
            res = this[this.end];
            delete(this[this.end]);
            this.end++;
            this.length--;
            return res;
        }
    }
}
var caroQu = new Queue();
//将排队轮播项目入队
for (var i = 2; i < carouItem.length; i++) {
    caroQu.pop(carouItem[i]);
}
//初始化轮播图位置
for (var i = caroQu.end; i < caroQu.top; i++) {
    caroQu[i].style.left = '-100%';
}
var atimer;

function run(item) {
    var pos = item.left;
    var temp = pos;
    atimer = setInterval(function(item) {
        pos += 5;
        item.style.left = pos + "px";
        if (pos - temp >= 550) {
            clearInterval(atimer);
            atimer = null;
        }
    }(item), 5)
}

// carouItem[0].className += "animation-carousel";

function Carousel() {
    this.displayItem = carouItem[0];
    this.nextDisplayItem = carouItem[1];

    this.index = 0;
    this.start = setInterval(function() {
        run(carousel.displayItem, carousel.nextDisplayItem);
        caroQu.pop(carousel.displayItem);
        carousel.displayItem = carousel.nextDisplayItem;
        carousel.nextDisplayItem = caroQu.shift();
        carousel.nextDisplayItem.style.left = '100%';
        changeTrigger(carousel.index);

    }, 5000);

}
//加动画，去动画，定位
var carousel = new Carousel();

// carousel.start();




function run(item1, item2) {
    var pos1 = parseInt(getComputedStyle(item1).left);
    var temp1 = pos1;
    var pos2 = parseInt(getComputedStyle(item2).left);
    var atimer = setInterval(function() {
        pos1 -= 27.5;
        pos2 -= 27.5;
        item1.style.left = pos1 + 'px';
        item2.style.left = pos2 + 'px';
        if (temp1 - pos1 >= 550) {
            clearInterval(atimer);
        }
    }, 10)
}

function changeTrigger(index) {
    var nexIndex = (carousel.index + 1) % 5;
    triggerItem[nexIndex].className = "on";
    triggerItem[index].className = "off";
    carousel.index++;
    carousel.index %= 5;
}
// clearInterval(carousel.start);
for (var i = 0; i < triggerItem.length; i++) {
    (function(n) {
        triggerItem[n].onclick = function() {
            if (n != carousel.index) {
                carouItem[n].style.left = "100%";
                run(carousel.displayItem, carouItem[n]);
                if (atimer == null) {
                    carousel.displayItem = carouItem[n];
                    triggerItem[n].className = 'on';
                    triggerItem[carousel.index].className = 'off';
                    carousel.index = n;
                    console.log((n + 1) % 5);
                    carousel.nextDisplayItem = carouItem[(n + 1) % 5];
                    console.log(carousel.nextDisplayItem);
                    carousel.nextDisplayItem.style.left = "100%";
                    for (var i = caroQu.end, j = 2; i < caroQu.top; i++, j++) {
                        caroQu[i] = carouItem[(carousel.index + j) % 5];
                        caroQu[i].style.left = "-100%";
                    }
                }
            }
        }
    }(i))
}
var count = 0;
document.getElementsByTagName('button')[0].onclick = function() {
    count++;
    console.log(count);
    if (count % 2) {
        document.getElementsByClassName('carousel')[0].style.overflow = "visible";
        document.getElementsByTagName('button')[0].innerHTML = "隐藏其他";
    } else {
        document.getElementsByClassName('carousel')[0].style.overflow = "hidden";
        document.getElementsByTagName('button')[0].innerHTML = "显示其他";
    }
}