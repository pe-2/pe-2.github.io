var minutes = document.getElementsByClassName('time')[0];
var seconds = document.getElementsByClassName('time')[1];
var millisecond = document.getElementsByClassName('time')[2];
var buttonBegin = document.getElementsByClassName('begin')[0];
var buttonCount = document.getElementsByClassName('countTimes')[0];
var buttonPause = document.getElementsByClassName('pauseButton')[0]
var buttonContinue = buttonPause;
var buttonReset = buttonCount;
var buttonWorking = document.getElementsByClassName('working')[0];
var recordBox = document.getElementsByClassName('countTime')[0];

function timeStart() {
    var M = Number(minutes.innerHTML);
    var S = Number(seconds.innerHTML);
    var mS = Number(millisecond.innerHTML);

    function MiSeStart() {
        mS++;
        if (mS >= 100) {
            mS %= 100;
            S++;
            if (S >= 60) {
                S %= 60;
                M++;
                if (M < 10) {
                    minutes.innerHTML = "0" + M;
                } else {
                    minutes.innerHTML = M;
                }

            }
            if (S < 10) {
                seconds.innerHTML = "0" + S;
            } else {
                seconds.innerHTML = S;
            }
        }
        if (mS < 10) {
            millisecond.innerHTML = "0" + mS;
        } else {
            millisecond.innerHTML = mS;
        }
    }
    return MiSeStart;
}
var begin;

function Begin() {
    var a = timeStart();
    begin = setInterval(function() { a() }, 10);
    buttonBegin.style.display = "none";
    buttonWorking.style.display = "flex";
}


function pause() {
    clearInterval(begin);
    buttonPause.innerHTML = "继续";
    buttonPause.onclick = goOn;
    buttonCount.innerHTML = "复位";
    buttonCount.onclick = resetTime;
}


function goOn() {
    var a = timeStart();
    begin = setInterval(function() { a() }, 30);
    buttonContinue.innerHTML = "暂停";
    buttonContinue.onclick = pause;
    buttonReset.innerHTML = "计次";
    buttonReset.onclick = count;
}
var countime = 0;
var lastMinutes, lastSeconds, lastMilliseconds, lastAllSeconds;

function count() {
    //  <p class="record"><span>01</span><span>00:04.54</span><span>+00.00.90</span></p>
    var recordP = document.createElement('p');
    recordP.setAttribute("class", "record");
    if (recordBox.childElementCount) {
        recordBox.insertBefore(recordP, recordBox.children[0])
    } else {
        recordBox.appendChild(recordP);
    }
    var span1 = document.createElement('span');
    countime++;
    if (countime < 10) {
        span1.innerHTML = "0" + countime;
    } else {
        span1.innerHTML = countime;

    }
    recordP.appendChild(span1);
    var span2 = document.createElement('span');
    var nowMinuts = minutes.innerHTML,
        nowSeconds = seconds.innerHTML,
        nowMilliseconds = millisecond.innerHTML;
    span2.innerHTML = nowMinuts + ":" + nowSeconds + "." + nowMilliseconds;
    recordP.appendChild(span2);
    var span3 = document.createElement('span');
    if (lastMinutes === undefined) {
        span3.innerHTML = "+" + nowMinuts + ":" + nowSeconds + "." + nowMilliseconds;
    } else {
        var nowAllSeconds = Number(nowMinuts) * 60 + Number(nowSeconds) + Number(nowMilliseconds) / 100;
        var secondsCha = nowAllSeconds - lastAllSeconds;
        var chaMillseconds = parseInt(secondsCha % 1 * 100);
        if (chaMillseconds < 10) {
            chaMillseconds = "0" + chaMillseconds;
        }
        var chaSeconds = parseInt(secondsCha % 60);
        if (chaSeconds < 10) {
            chaSeconds = "0" + chaSeconds;
        }
        var chaMinitues = parseInt(secondsCha / 60);
        if (chaMinitues < 10) {
            chaMinitues = "0" + chaMinitues;
        }
        span3.innerHTML = "+" + chaMinitues + ":" + chaSeconds + "." + chaMillseconds;
    }
    recordP.appendChild(span3);
    lastMinutes = Number(nowMinuts);
    lastSeconds = Number(nowSeconds);
    lastMilliseconds = Number(nowMilliseconds);
    lastAllSeconds = lastMilliseconds / 100 + lastSeconds + lastMinutes * 60;
}

function resetTime() {
    clearInterval(begin);
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    millisecond.innerHTML = "00";
    buttonContinue.innerHTML = "暂停";
    buttonContinue.onclick = pause;
    buttonReset.innerHTML = "计次";
    buttonReset.onclick = count;
    buttonWorking.style.display = "none";
    buttonBegin.style.display = "grid";
    recordBox.innerHTML = "";
    lastMinutes = undefined;
    countime = 0;
}

buttonBegin.onclick = Begin;
buttonPause.onclick = pause;
buttonCount.onclick = count;