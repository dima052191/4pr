let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'assets/images/firefox-icon.png') {
        myImage.setAttribute('src', 'assets/images/firefox2.jpg');
    } else {
        myImage.setAttribute('src', 'assets/images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

myButton.onclick = function() {
    changeColors(); // Змінити кольори при натисканні кнопки
    setUserName(); // Запитати користувача про ім'я при натисканні кнопки
}

function changeColors() {
    // Отримуємо тіло документу
    var body = document.body;

    // Отримуємо поточний колір тла
    var currentBackgroundColor = getComputedStyle(body).backgroundColor;

    // Функція для конвертації кольору у протилежний
    function invertColor(color) {
        // Перевірка, чи кольор є RGB або HEX
        if (color.match(/^rgb/)) {
            var rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            return 'rgb(' + (255 - parseInt(rgb[1])) + ',' + (255 - parseInt(rgb[2])) + ',' + (255 - parseInt(rgb[3])) + ')';
        } else if (color.match(/^#([0-9a-f]{6})$/i)) {
            var hex = parseInt(color.slice(1), 16);
            var invertedHex = 0xFFFFFF ^ hex;
            var invertedColor = '#' + invertedHex.toString(16).padStart(6, '0');
            return invertedColor;
        } else {
            return color;
        }
    }

    // Змінюємо колір тла на протилежний
    var invertedColor = invertColor(currentBackgroundColor);
    body.style.backgroundColor = invertedColor;
}
