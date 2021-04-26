var input = document.getElementsByClassName('now')[0];
var button = document.getElementsByClassName('button');
var show = document.getElementsByClassName('before')[0];


for (var i = 0; i < button.length; i++) {
    (function(n) {
        button[n].onclick = function() {
            if (n == 3) {
                input.innerHTML = "";
                show.innerHTML = "";
            } else if (n == 18) {
                var str = input.innerHTML;
                if (str) {
                    console.log(str);
                    console.log(deStr(str));
                    console.log(tranRPN(deStr(str)));
                    show.innerHTML = input.innerHTML;
                    var txt = document.createTextNode("=");
                    show.appendChild(txt);
                    var ans = evalRPN(tranRPN(deStr(str)));
                    if (ans == undefined) {
                        ans = "Input arithmetic type is illegal";
                    }
                    input.innerHTML = ans;
                }
            } else if (n == 2) {
                var str = input.innerHTML;
                if (Number(str).toString() != "NaN") {
                    show.innerHTML = input.innerHTML;
                    var txt = document.createTextNode("%=");
                    show.appendChild(txt);
                    input.innerHTML = Number(str) / 100;
                }
            } else {
                var txt = document.createTextNode(button[n].innerHTML);
                input.appendChild(txt);
            }
        }
        button[n].onmousedown = function() {
            // this.style.backgroundColor = "aliceblue";
            // this.style.color = "cyan";
            this.style.boxShadow = "-3px -3px 7px #ffffff73, 2px 2px 5px rgba(94, 104, 121, 0.288)";
        }
        button[n].onmouseup = function() {
            //this.style.backgroundColor = "#fff";
            this.style.boxShadow = "2px 2px 5px rgba(94, 104, 121, 0.288), 2px 2px 5px rgba(94, 104, 121, 0.288)";
            // this.style.color = "black";
        }
        button[n].onmouseout = function() {
            // this.style.backgroundColor = "#fff";
            // this.style.color = "black";
            this.style.boxShadow = "2px 2px 5px rgba(94, 104, 121, 0.288), 2px 2px 5px rgba(94, 104, 121, 0.288)";
        }
        button[n].ontouchstart = function() {
            // this.style.backgroundColor = "aliceblue";
            // this.style.color = "cyan";
            this.style.boxShadow = "-3px -3px 7px #ffffff73, 2px 2px 5px rgba(94, 104, 121, 0.288)";
        }
        button[n].ontouchend = function() {
            // this.style.backgroundColor = "#fff";
            // this.style.color = "black";
            this.style.boxShadow = "2px 2px 5px rgba(94, 104, 121, 0.288), 2px 2px 5px rgba(94, 104, 121, 0.288)";
        }
    }(i))
}
var DeleteButton = document.getElementsByClassName('button-delete')[0];

DeleteButton.onclick = function() {
        if (input.innerHTML) {

            input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);
        }
    }
    // function isNum(s) {
    //     if (s < '0' || s > '9') {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

// function calculate(st) {
//     var answer = 0,
//         temp = 0,
//         ten = 1,
//         right = 1;
//     for (var i = st.length - 1; i >= 0; i--) {
//         if (!isNum(st[i])) {
//             temp += Number(st[i]) * ten;
//             ten *= 10;
//         }
//         if (st[i] == "+") {
//             temp *= right;
//             right = 1;
//             answer += temp;
//             temp = 0;
//             ten = 1;
//         } else if (st[i] == "-") {
//             temp *= right;
//             right = 1;
//             answer -= temp;
//             temp = 0;
//             ten = 1;
//         } else if (st[i] == '*') {
//             right = temp;
//             temp = 0;
//             ten = 1;
//         } else if (st[i] == "/") {
//             right = 1 / temp;
//             temp = 0;
//             ten = 1;
//         }
//         if (i == 0) {
//             if (st[i] == "+" || !isNum(st[i])) {
//                 temp *= right;
//                 right = 1;
//                 answer += temp;
//                 temp = 0;
//                 ten = 1;
//             } else if (st[i] == "-") {
//                 temp *= right;
//                 right = 1;
//                 answer -= temp;
//                 temp = 0;
//                 ten = 1;
//             }

//         }

//     }
//     if (st[st.length - 1] == "%") {
//         answer /= 100;
//     }
//     return answer;
// }
document.onselectstart = function() { return false; };