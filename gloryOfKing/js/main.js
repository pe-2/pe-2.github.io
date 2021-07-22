var li = document.getElementsByTagName("li");
var scHeight = window.screen.availHeight;
var scWidth = window.screen.availWidth;
scHeight *= 0.88;
var y = [0, scHeight, scHeight * 2, scHeight * 3, scHeight * 4];
var autoscroll = false;
var canJump = true;
var pos = {
    x: 50,
    y: 50,
}
var pxPos = {
    x: 720,
    y: 260,
}

function sssss(targe, now) {
    autoscroll = true;
    var count = 0;
    var timer = setInterval(function() {
        count++;
        if (window.pageYOffset !== targe) {
            window.scrollTo(0, now + (targe - now) / 100 * count);
        } else {
            clearInterval(timer);
            autoscroll = false;
        }
    }, 4)
}

// window.onscroll = function() {
//     console.log(window.pageYOffset);
// }

document.getElementsByClassName("next")[0].onclick = function() {
    sssss(scHeight, 0);
    li[1].className = "clickmenu ";
    li[0].className = "";
}

for (let i = 0; i < li.length; i++) {
    li[i].onclick = function() {
        if (!canJump) {
            return;
        }
        canJump = false;
        var j;
        for (let k = 0; k < li.length; k++) {
            if (li[k].className == "clickmenu ") {
                j = k;
            }
        }
        li[j].className = "";
        li[i].className = "clickmenu ";
        sssss(y[i], y[j]);
        setTimeout(function() {
            canJump = true;
        }, 405);

    }
}
var yyy = window.pageYOffset;
var canscroll = true;

function ssccc() {
    if (autoscroll) {
        return;
    }
    if (!canscroll) {
        return;
    }
    canscroll = false;
    if (window.pageYOffset >= y[0] && window.pageYOffset < y[1]) {
        for (let k = 0; k < li.length; k++) {
            li[k].className = "";
        }
        li[0].className = "clickmenu ";

    } else
    if (window.pageYOffset >= y[1] && window.pageYOffset < y[2]) {
        for (let k = 0; k < li.length; k++) {
            li[k].className = "";
        }
        li[1].className = "clickmenu ";
    } else if (window.pageYOffset >= y[2] && window.pageYOffset < y[3]) {
        for (let k = 0; k < li.length; k++) {
            li[k].className = "";
        }
        li[2].className = "clickmenu ";
    } else if (window.pageYOffset >= y[3] && window.pageYOffset < y[4]) {
        for (let k = 0; k < li.length; k++) {
            li[k].className = "";
        }
        li[3].className = "clickmenu ";
    } else if (window.pageYOffset >= y[4]) {
        for (let k = 0; k < li.length; k++) {
            li[k].className = "";
        }
        li[4].className = "clickmenu ";
    }
    setTimeout(() => {
        canscroll = true;
    }, 100);
}

window.onscroll = function() {
    ssccc();
}


var photoWrapper = document.getElementsByClassName("photo-wrapper")[0];
var leftButton = document.getElementsByClassName("left-button")[0];
var rightButton = document.getElementsByClassName("right-button")[0];

var x = [0, 244, 243 * 2, 243 * 3, 243 * 4, 243 * 5];
var canClick = true;

function sssleft() {
    if (canClick) {
        if (photoWrapper.scrollLeft === 0) {
            photoWrapper.scrollLeft = x[5];
            return;
        } else {
            canClick = false;
            var sclet = photoWrapper.scrollLeft;
            var count = 0;
            var timer = setInterval(function() {
                count++;
                photoWrapper.scrollLeft = sclet - 245 / 100 * count;
                if (photoWrapper.scrollLeft - sclet === -245 || photoWrapper.scrollLeft === 0) {
                    clearInterval(timer);
                    canClick = true;
                }
            }, 8);
        }
    }
}

function sssright() {
    if (canClick) {
        if (photoWrapper.scrollLeft + photoWrapper.offsetWidth === photoWrapper.scrollWidth) {
            photoWrapper.scrollTo(0, 0);
            return;
        } else {
            canClick = false;
            var sclet = photoWrapper.scrollLeft;
            var count = 0;
            var timer = setInterval(function() {
                count++;
                photoWrapper.scrollLeft = sclet + 245 / 100 * count;
                if (photoWrapper.scrollLeft - sclet === 245 || photoWrapper.scrollLeft + photoWrapper.offsetWidth === photoWrapper.scrollWidth) {
                    clearInterval(timer);
                    canClick = true;
                }
            }, 8);
        }
    }
}
leftButton.onclick = function() {
    sssleft();
}
rightButton.onclick = function() {
    sssright();
}

var X, Y;
var home = document.getElementsByClassName('home')[0];
var canmousemove = true;
home.onmousemove = function() {
    if (!canmousemove) {
        return;
    }
    canmousemove = false;
    if (X === undefined && Y === undefined) {
        X = window.event.offsetX;
        Y = window.event.offsetY;
    }
    if (window.event.offsetX > X) {
        pos.x += 0.1;
        home.style.backgroundPositionX = pos.x + "%";
        X = window.event.offsetX;
    } else {
        pos.x -= 0.1;
        home.style.backgroundPositionX = pos.x + "%";
        X = window.event.offsetX;
    }
    if (window.event.offsetY > Y) {
        pos.y += 0.1;
        home.style.backgroundPositionY = pos.y + "%";
        Y = window.event.offsetY;
    } else {
        pos.y -= 0.1;
        home.style.backgroundPositionY = pos.y + "%";
        Y = window.event.offsetY;
    }
    setTimeout(function() { canmousemove = true; }, 1);
}