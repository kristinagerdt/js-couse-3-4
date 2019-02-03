(function(){

    var data = {
        image: './jack.png',
        greeting: 'Hallo Genossen!',
    }

    var jackImageElement = document.getElementById('jack-image');
    var jackGreetingElement = document.querySelector('#jack-greeting');

    jackImageElement.src = data.image;
    jackGreetingElement.innerHTML = data.greeting;
})();