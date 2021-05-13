var button1 = document.getElementsByClassName('intro-nav')[0];
var button2 = document.getElementsByClassName('comments')[0];
var recommendBox = document.getElementsByClassName('vedio-recom')[0];
var commitBox = document.getElementsByClassName('vedio-comments')[0];

var scrollBox = document.getElementsByClassName('vedio-else-wrapper')[0];

button1.onclick = function() {
    button1.className += " yellow";
    button1.style.cssText = "border-bottom: 0.1px solid #ffc300;margin-top:0.5em;padding-bottom:0.5em;";
    button2.style.cssText = "";
    button2.className = "comments"
    scrollBox.scrollLeft = 0;
}
button2.onclick = function() {
    button2.className += " yellow";
    button2.style.cssText = "border-bottom: 0.1px solid #ffc300;margin-top:0.5em;padding-bottom:0.5em;";
    button1.style.cssText = "";
    button1.className = "intro-nav";
    scrollBox.scrollLeft = 360;
}
scrollBox.ontouchend = function() {
    if (scrollBox.scrollLeft >= 0 && scrollBox.scrollLeft <= 180) {
        scrollBox.scrollLeft = 0;
        button1.className += " yellow";
        button1.style.cssText = "border-bottom: 0.1px solid #ffc300;margin-top:0.5em;padding-bottom:0.5em;";
        button2.style.cssText = "";
        button2.className = "comments"

    } else if (scrollBox.scrollLeft > 180 && scrollBox.scrollLeft < 360) {
        scrollBox.scrollLeft = 360;
        button2.className += " yellow";
        button2.style.cssText = "border-bottom: 0.1px solid #ffc300;margin-top:0.5em;padding-bottom:0.5em;";
        button1.style.cssText = "";
        button1.className = "intro-nav";
    }
}


function runleft() {
    setInterval(function() {}, );
}

function runright() {
    setInterval(function() {}, );
}