window.onload = function() {
    var banner = document.querySelector('.banner');
    var btn = document.querySelector('.btn');
    var next = document.querySelector('.next');
    var prev = document.querySelector('.prev');
    var img = document.querySelector('.img');
    var len = document.querySelectorAll('.img li').length - 1;
    var len2 = document.querySelectorAll('.img li').length - 8;
    var tab = document.querySelector('.tab');
    var tabLi = document.querySelectorAll('.tab li');
    var i = 0;
    // 下一张,上一张标志的显隐
    banner.onmouseover = function() {
        startMove(btn, 'opacity', 100);
    }
    banner.onmouseout = function() {
        startMove(btn, 'opacity', 0);
    }

    // 下一张,上一张标志的设置
    btn.onmouseover = function() {
        clearInterval(timer2);
    }
    btn.onmouseout = function() {
        timer2 = setInterval(lunbo, 2000);
    }

    // 小圆圈设置
    tab.onmouseenter = function() {
        clearInterval(timer2);
    }
    tab.onmouseout = function() {
        timer2 = setInterval(lunbo, 2000);
    }
    for (var m = 0; m < tabLi.length; m++) {
        tabLi[m].index = m;
        tabLi[m].onclick = function() {
            for (var n = 0; n < tabLi.length; n++) {
                tabLi[n].className = '';
            }
            this.className = 'active';
            startMove(img, 'left', this.index * (-750));
        }
    }

    // 下一张点击设置
    next.onclick = function() {
            i++;
            // console.log(i);
            startMove(img, 'left', i * (-750));
            if (i == len) {
                i = 0;
            }
            active();
        }
        // 上一张点击设置
    prev.onclick = function() {
        i--;
        if (i == len2) {
            i = 5;
        }
        // console.log(i);
        startMove(img, 'left', i * (-750));
        active();
    }

    function active() {
        for (let j = 0; j < tabLi.length; j++) {
            tabLi[j].className = "";
            tabLi[i].className = "active";
        }
    }

    // 轮播定时器
    timer2 = setInterval(lunbo, 3000);

    function lunbo() {
        next.click();
    }

}