function deStr(str) {
    var deStack = [];
    var temp = 0,
        small = 0,
        ten = 0.1;
    for (var i = 0; i < str.length; i++) {
        var elem = Number(str[i]);
        if (elem.toString() != "NaN") {
            temp *= 10;
            temp += elem;
        } else if (str[i] == '.') {
            for (var j = i + 1; j < str.length && Number(str[j]).toString() !== "NaN"; j++) {
                elem = Number(str[j]);
                small += elem * ten;
                ten /= 10;
            }
            i = j - 1;
            temp += small;
            small = 0;
            ten = 0.1;
        } else {
            if (temp) {
                deStack.push(temp);
                temp = 0;
            }
            deStack.push(str[i]);
        }
    }
    if (temp) {
        deStack.push(temp);
        temp = 0;
    }
    return deStack;
}

function tranRPN(str) {
    var numStack = [],
        opStack = [];
    var top;
    for (var i in str) {
        if (typeof(str[i]) === "number") {
            numStack.push(str[i]);
        } else {
            if (str[i] == '(') {
                opStack.push(str[i]);
            } else if (str[i] == ')') {
                top = opStack.length - 1;
                while (opStack[top] != '(') {
                    var elem = opStack.pop();
                    numStack.push(elem);
                    top--;
                }
            } else if (str[i] == '+' || str[i] == '-') {
                top = opStack.length - 1;
                while (opStack.length && opStack[top] != '(') {
                    var elem = opStack.pop();
                    numStack.push(elem);
                    top--;
                }
                opStack.push(str[i]);
            } else if (str[i] == '*' || str[i] == '/') {
                top = opStack.length - 1;
                if (opStack[top] == "*" || opStack[top] == "/") {
                    while (opStack[top] == "*" || opStack[top] == "/") {
                        var elem = opStack.pop();
                        numStack.push(elem);
                        top--;
                    }
                }
                opStack.push(str[i]);
            }
        }
    }
    var top = opStack.length - 1;
    while (opStack.length) {
        if (opStack[top] != '(') {
            var elem = opStack.pop();
            numStack.push(elem);
            top--;
        } else {
            opStack.pop();
        }
    }
    return numStack;
}

function evalRPN(tokens) {
    var arr = new Array();
    for (var i in tokens) {
        var elem = tokens[i];
        if (typeof(tokens[i]) === "number") {
            arr.push(elem);
        } else {
            if (tokens[i] === "+") {
                arr[arr.length - 2] = arr[arr.length - 2] + arr[arr.length - 1];
                arr.pop();
            } else if (tokens[i] === "-") {
                arr[arr.length - 2] = arr[arr.length - 2] - arr[arr.length - 1];
                arr.pop();
            } else if (tokens[i] === "*") {
                arr[arr.length - 2] = arr[arr.length - 2] * arr[arr.length - 1];
                arr.pop();
            } else if (tokens[i] === "/") {
                arr[arr.length - 2] = arr[arr.length - 2] / arr[arr.length - 1];
                arr.pop();
            }
        }
    }
    return arr[0];
}