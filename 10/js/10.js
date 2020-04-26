// piscina030 2020.04.26
var i = 1;//全局变量，i的值会保留下来
var t;
var begin = 0;//用于判断是否按了开始
function chgimg() {
    var obj = document.getElementById("myimg");
    obj.src = "img/dl1d.jpg"
}
function resetimg() {
    var obj = document.getElementById("myimg");
    obj.src = "img/dl1.jpg"
}
function lunbo() {
    var obj = document.getElementById("lb")
    i++;
    if (i > 5) {
        i = 1;
        obj.src = "img/love1.jpg";
    }
    else {
        obj.src = "img/love" + i + ".jpg";
    }
}
function start() {
    if (begin == 0) {
        t = setInterval("lunbo()", 500);
        begin = 1;
    }
}
function stop() {
    if (begin == 1) {
        clearInterval(t);
        begin = 0;
    }
}