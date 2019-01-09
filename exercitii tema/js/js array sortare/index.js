var numbers = [5, 8, 2, 9, 12, -5, -31, 0, 1, 43];
document.getElementById("demo").innerHTML = numbers;

console.log(" sirul de numere neordonate este :" + numbers);

function sortCresc(){
    numbers.sort(function(a,b){return a-b});
    document.getElementById("demo").innerHTML = numbers;
    console.log("Sir ordonat crescator :" + numbers);
}


function sortDescresc(){
    numbers.sort(function(a,b) {return b - a });
    document.getElementById("demo").innerHTML = numbers;
    console.log("Sir ordonat descrescator: " + numbers);
}

function micNumber(){
    numbers.sort(function(a,b){return a-b});
    console.log("numerele au fost sortate crescator" + numbers);
    document.getElementById("demo").innerHTML = numbers[0];
}

function mareNumber(){
    numbers.sort(function(a,b) {return b-a });
    console.log("se sorteaza sirul descrescator" + numbers);
    document.getElementById("demo").innerHTML = numbers[0];
    console.log(" ultimul numar din sirul descrescator:" + numbers[0]);
}

