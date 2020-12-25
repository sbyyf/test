// JavaScript source code
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var scene = document.getElementById("scene");
document.onkeydown = keyDown;
document.onkeyup = keyUp;
var go11 = null;
var go22 = null;
var f1 = 0;
var f2 = 0;
var p2f=0;
function keyDown(e) {
    switch (event.keyCode) {  // 获取当前按下键盘键的编码
        case 65:  //p1后退
            if (f1 == 0)
            {
                p1.style.width = "200px"
                p1.style.top = "380px";
                p1.style.height = "200px";
                p1.style.backgroundSize = "800% 100%";
                p1.style.backgroundImage = "url(img/p1b.png)";
                p1.classList.remove('p1n');
                p1.classList.remove('p1g');
                p1.classList.remove('p1a');
                p1.classList.remove('p1d');
                p1.classList.add('p1b');
                backback1();
                f1 = 1;
            }
            break;
        case 68:  //p1前进
            if (f1 == 0)
            {   p1.style.width = "200px"
                p1.style.top = "380px";
                p1.style.height = "200px";
                p1.style.backgroundSize = "800% 100%";
                p1.style.backgroundImage = "url(img/p1g.png)";
                p1.classList.remove('p1n');
                p1.classList.remove('p1a');
                p1.classList.remove('p1b');
                p1.classList.remove('p1d');
                p1.classList.add('p1g');
                gogogo1();
                f1 = 1;
            }
            break;
        case 83:  //p1防守
            clearInterval(go11);
            flag1 = 0;
            p1.style.width = "200px"
            p1.style.top = "380px";
            p1.style.height = "200px";
            p1.style.backgroundSize = "200% 100%";
            p1.style.backgroundImage = "url(img/p1d.png)";
            p1.classList.remove('p1n');
            p1.classList.remove('p1g');
            p1.classList.remove('p1a');
            p1.classList.remove('p1b');
            p1.classList.add('p1d');
            break;
        case 74:  //p1 攻击
            clearInterval(go11);
            flag1 = 0;
            p1.style.width = "350px"
            p1.style.top = "245px";
            p1.style.height = "350px";
            p1.style.backgroundSize = "800% 100%";
            p1.style.backgroundImage = "url(img/p1a.png)";
            p1.classList.remove('p1g');
            p1.classList.remove('p1b');
            p1.classList.remove('p1d');
            p1.classList.remove('p1n');
            p1.classList.add('p1a');
            p1.addEventListener('animationend', function (e) {
                var self = this;
                self.classList.remove('p1a');
                setTimeout(function () {
                    self.classList.add('p1a')
                }, 1)
            })
            break;
        case 39:  //p2后退
            if (f2 == 0)
            {
                if (p2f == 1) {
                    p2.style.left = p2.offsetLeft + 200 + "px";
                    p2f = 0;
                }
                p2.style.width = "200px"
                p2.style.top = "380px";
                p2.style.height = "200px";
                p2.style.backgroundSize = "500% 100%";
                p2.style.backgroundImage = "url(img/p2b.png)";
                p2.classList.remove('p2n');
                p2.classList.remove('p2g');
                p2.classList.remove('p2a');
                p2.classList.remove('p2d');
                p2.classList.add('p2b');
                backback2();
                f2 = 1;
            }  
            break;
        case 37:  // p2前进
            if (f2 == 0) {
                if (p2f == 1) {
                    p2.style.left = p2.offsetLeft + 200 + "px";
                    p2f = 0;
                }
                p2.style.width = "200px"
                p2.style.top = "380px";
                p2.style.height = "200px";
                p2.style.backgroundSize = "500% 100%";
                p2.style.backgroundImage = "url(img/p2g.png)";
                p2.classList.remove('p2n');
                p2.classList.remove('p2b');
                p2.classList.remove('p2a');
                p2.classList.remove('p2d');
                p2.classList.add('p2g');
                gogogo2();
                f2 = 1;
            } 
            break;
        case 40:  // p2防守
            if (p2f == 1) {
                p2.style.left = p2.offsetLeft + 200 + "px";
                p2f = 0;
            }
            clearInterval(go22);
            flag2 = 0;
            p2.style.width = "200px"
            p2.style.top = "380px";
            p2.style.height = "200px";
            p2.style.backgroundSize = "200% 100%";
            p2.style.backgroundImage = "url(img/p2d.png)";
            p2.classList.remove('p2n');
            p2.classList.remove('p2g');
            p2.classList.remove('p2a');
            p2.classList.remove('p2b');
            p2.classList.add('p2d');
            break;
        case 49:  // p2攻击
            clearInterval(go22);
            flag2 = 0;
            if (p2f == 0)
            {
                p2.style.left = p2.offsetLeft - 200 + "px";
                p2f = 1;
            }
            p2.style.width = "400px"
            p2.style.top = "380px";
            p2.style.height = "200px";
            p2.style.backgroundSize = "600% 100%";
            p2.style.backgroundImage = "url(img/p2a.png)";
            p2.classList.remove('p2n');
            p2.classList.remove('p2b');
            p2.classList.remove('p2g');
            p2.classList.remove('p2d');
            p2.classList.add('p2a');
            p2.addEventListener('animationend', function (e) {
                var self = this
                self.classList.remove('p2a')
                setTimeout(function () {
                    self.classList.add('p2a')
                }, 1)
            })
            break;
    }
    return false
}
function keyUp(e) {
    switch (event.keyCode) {  // 获取当前按下键盘键的编码
        case 65:  //p1取消后退
            f1 = 0;
            clearInterval(go11);
            flag1 = 0;
            p1.style.width = "200px"
            p1.style.top = "380px";
            p1.style.height = "200px";
            p1.style.backgroundSize = "300% 100%";
            p1.style.backgroundImage = "url(img/p1n.png)";
            p1.classList.remove('p1b')
            p1.classList.add('p1n');
            break;
        case 68:  // p1取消前进
            f1 = 0;
            clearInterval(go11);
            flag1 = 0;
            p1.style.width = "200px"
            p1.style.top = "380px";
            p1.style.height = "200px";
            p1.style.backgroundSize = "300% 100%";
            p1.style.backgroundImage = "url(img/p1n.png)";
            p1.classList.remove('p1g')
            p1.classList.add('p1n');
            break;
        case 83:  // p1取消防守
            p1.style.width = "200px"
            p1.style.top = "380px";
            p1.style.height = "200px";
            p1.style.backgroundSize = "300% 100%";
            p1.style.backgroundImage = "url(img/p1n.png)";
            p1.classList.remove('p1d')
            p1.classList.add('p1n');
            break;
        case 74:  // p1取消进攻
            p1.style.width = "200px"
            p1.style.top = "380px";
            p1.style.height = "200px";
            p1.style.backgroundSize = "300% 100%";
            p1.style.backgroundImage = "url(img/p1n.png)";
            p1.classList.remove('p1a')
            p1.classList.add('p1n');
            break;
        case 39:  //p2取消后退
            if (p2f == 1) {
                p2.style.left = p2.offsetLeft + 200 + "px";
                p2f = 0;
            }
            f2 = 0;
            clearInterval(go22);
            flag2 = 0;
            p2.style.width = "200px"
            p2.style.top = "380px";
            p2.style.height = "200px";
            p2.style.backgroundSize = "600% 100%";
            p2.style.backgroundImage = "url(img/p2n.png)";
            p2.classList.remove('p2b')
            p2.classList.add('p2n');
            break;
        case 37:  // p2取消前进
            if (p2f == 1) {
                p2.style.left = p2.offsetLeft + 200 + "px";
                p2f = 0;
            }
            f2 = 0;
            clearInterval(go22);
            flag2 = 0;
            p2.style.width = "200px"
            p2.style.top = "380px";
            p2.style.height = "200px";
            p2.style.backgroundSize = "600% 100%";
            p2.style.backgroundImage = "url(img/p2n.png)";
            p2.classList.remove('p2g')
            p2.classList.add('p2n');
            break;
        case 40:  // p2取消防守
            if (p2f == 1) {
                p2.style.left = p2.offsetLeft + 200 + "px";
                p2f = 0;
            }
            p2.style.width = "200px"
            p2.style.top = "380px";
            p2.style.height = "200px";
            p2.style.backgroundSize = "600% 100%";
            p2.style.backgroundImage = "url(img/p2n.png)";
            p2.classList.remove('p2d')
            p2.classList.add('p2n');
            break;
        case 49:  // p2取消进攻
            if (p2f == 1) {
                p2.style.left = p2.offsetLeft + 200 + "px";
                p2f = 0;
            }
            p2.style.width = "200px"
            p2.style.top = "380px";
            p2.style.height = "200px";
            p2.style.backgroundSize = "600% 100%";
            p2.style.backgroundImage = "url(img/p2n.png)";
            p2.classList.remove('p2a')
            p2.classList.add('p2n');
            break;
    }
    return false
}
var flag1 = 0;
function gogogo1() {
    if (flag1 != 1) { go11 = setInterval(go1, 5); }
    flag1 = 1;
}
function backback1() {
    if (flag1 != 1 ) { go11 = setInterval(back1, 5); }
    flag1 = 1;
}
function back1() {
    if (p1.offsetLeft>=0)p1.style.left = p1.offsetLeft - 6 + "px";
}
function go1() {
    if (p1.offsetLeft <= scene.offsetWidth - 200 && p1.offsetLeft <= p2.offsetLeft - 200)
    p1.style.left = p1.offsetLeft + 6 + "px";
}
var flag2 = 0;
function gogogo2() {
    if (flag2 != 1) { go22 = setInterval(go2, 5); }
    flag2 = 1;
}
function backback2() {
    if (flag2 != 1) { go22 = setInterval(back2, 5); }
    flag2 = 1;
}
function back2() {
    if (p2.offsetLeft <= scene.offsetWidth - 200)p2.style.left = p2.offsetLeft + 6 + "px";
}
function go2() {
    if (p2.offsetLeft >= p1.offsetLeft + p1.offsetWidth)p2.style.left = p2.offsetLeft - 6 + "px";
}
