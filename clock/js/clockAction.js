var date = new Date();
var beginHour = date.getHours(),
    beginMinutes = date.getMinutes(),
    beginSeconds = date.getSeconds();
var hourNeedle = document.getElementsByClassName('handsHour')[0],
    minutsNeedle = document.getElementsByClassName('handsMinute')[0],
    secondsNeedle = document.getElementsByClassName('handsSeconds')[0];
var hoursDeg = (beginHour % 12) * 30 - 90;
var minDeg = beginMinutes * 6 - 90;
var secondsDeg = beginSeconds * 6 - 90;

hourNeedle.style.transform = 'rotate(' + hoursDeg + 'deg)';
minutsNeedle.style.transform = 'rotate(' + minDeg + 'deg)';
secondsNeedle.style.transform = 'rotate(' + secondsDeg + 'deg)';

var sseconds = beginSeconds;
var mminutes = beginMinutes;
var hhours = beginHour;
setInterval(function() {
    sseconds++;
    secondsDeg = sseconds * 6 - 90;
    if (sseconds >= 60) {
        sseconds = 0;
        mminutes++;
        minDeg = minutes * 6 - 90;
        if (mminutes >= 60) {
            mminutes = 0;
            hhours++;
            hhoursDeg = (hours % 12) * 30 - 90;
        }
        minutsNeedle.style.transform = 'rotate(' + minDeg + 'deg)';
    }
    secondsNeedle.style.transform = 'rotate(' + secondsDeg + 'deg)';

}, 1000)