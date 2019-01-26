(function () {
    var div = document.querySelector('div');

    var isBig = false;
    setInterval(function () {
        if (isBig) {
            div.className = ""
        } else {
            div.className = "big-img"
        }

        isBig = !isBig;
    }, 500);
})();