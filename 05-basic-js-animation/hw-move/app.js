(function () {
    var div = document.querySelector('div');

    var initTop = 85;
    var initLeft = 0;

    var step = 1;

    function update() {
        initTop = initTop - step;
        initLeft = initLeft + step;
    }

    setInterval(function () {
        if (initTop >= 0 && initTop <= 85 && initLeft >= 0 && initLeft <= 85) {
            update();
        } else {
            step = -step;
            update();
        }

        div.style.top = initTop + "%"
        div.style.left = initLeft + "%"

    }, 100);
})()