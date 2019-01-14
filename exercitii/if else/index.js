var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);
function setWeather() {
    var choice = select.value;

    if (choice === 'sunny') {
        para.textContent = 'It is nice and sunny ';
    }
    else if (choice === 'rainy') {
        para.textContent = 'Rain is falling outside';
    }
    else if (choice === 'snowing') {
        para.textContent = 'The snow is coming down';
    }
}


