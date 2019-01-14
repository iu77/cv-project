var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function () {
    var month = select.value;
    var days = 31;
    if (month === 'February') {
        days = 28;
    } else if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
        days = 30;
    }

    createCalendar(days, month);
}

function createCalendar(days, month) {
    list.innerHTML = '';
    h1.textContent = month;
    for (var i = 1; i <= days; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

createCalendar(31, 'January');