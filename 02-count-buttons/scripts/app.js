(function () {
    var state = {
        first: 0,
        second: 0
    }

    function updateLabel(labelElement, prefix, count) {
        labelElement.innerText = prefix + ' ' + count;
    }

    var labelFirst = document.querySelector('#label-first');
    var firstButton = document.querySelector('#btn-first');

    var labelSecond = document.querySelector('#label-second');
    var secondButton = document.querySelector('#btn-second');

    var thirdButton = document.querySelector('#btn-third');

    var fourthButton = document.querySelector('#btn-fourth');

    firstButton.addEventListener('click', function (e) {
        state.first = state.first + 1;
        updateLabel(labelFirst, 'First counter:', state.first);
    })

    secondButton.addEventListener('click', function (e) {
        state.second = state.second + 1;
        updateLabel(labelSecond, 'Second counter:', state.second);
    });

    thirdButton.addEventListener('click', function (e) {
        state.first = state.first - 1;
        updateLabel(labelFirst, 'First counter:', state.first);
    })

    fourthButton.addEventListener('click', function (e) {
        state.second = state.second - 1;
        updateLabel(labelSecond, 'Second counter:', state.second);
    })
})()