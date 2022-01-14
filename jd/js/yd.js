function startMove(obj, style, end) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var stylenum = 0;
        if (style == 'opacity')
            stylenum = Math.round(parseFloat(getComputedStyle(obj)[style]) * 100);
        else
            stylenum = parseInt(getComputedStyle(obj)[style]);
        var speed = (end - stylenum) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (stylenum == end) {
            clearInterval(obj.timer);
        } else {
            if (style == 'opacity')
                obj.style.opacity = (stylenum + speed) / 100
            else
                obj.style[style] = stylenum + speed + 'px';
        }
    }, 30)
}