function startTime() {
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth();
    var d = today.getDay();
    var ho = today.getHours();
    var mi = today.getMinutes();
    var se = today.getSeconds();
    mi = checktime(mi);
    se = checktime(se);
    document.getElementById('space').innerHTML =
        '   ' +
        y + '/' + m + '/' + d + "<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>" + ho + ':' + mi + ':' + se;
    setTimeout(function() {
        startTime();
    }, 500);
}

function checktime(i) {
    if (i < 10)
        i = '0' + i;
    return i;
}