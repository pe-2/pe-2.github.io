var login = document.getElementsByClassName('login')[0];

var sign = document.getElementsByClassName('sign')[0];

var loginimg = "../imgforall/WechatIMG62.jpeg"
var two = "../imgforall/WechatIMG63.jpeg";

login.onclick = function() {
    sign.className = "sign";
    sign.style.color = "#999";
    document.getElementsByClassName('mainfor-login')[0].style.display = "block";
    document.getElementsByClassName('mainform-sign')[0].style.display = "none";
    login.className += " yellowBorder";
    login.style.color = "black";
}


sign.onclick = function() {
    login.className = "login";
    login.style.color = "#999";
    document.getElementsByClassName('mainform-sign')[0].style.display = "block";
    document.getElementsByClassName('mainfor-login')[0].style.display = "none";
    sign.className += " yellowBorder";
    sign.style.color = "black";
}