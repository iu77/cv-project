var numbers = [5, 8, 2, 9, 12, -5, -31, 0, 1, 43];
function $(id){
    document.getElementById("demo").innerHTML = numbers;
}

function sortCresc(){
    numbers.sort(function(a,b){return a-b});
    document.getElementById("demo").innerHTML = numbers;
    console.log("Array crescator  :  " + numbers);
}


function sortDescresc(){
    numbers.sort(function(a,b) {return b - a });
    document.getElementById("demo").innerHTML = numbers;
    console.log("Array descrescator:  " + numbers);
}

function micNumber(){
    numbers.sort(function(a,b){return a-b});
    document.getElementById("demo").innerHTML= numbers[0];
}

function mareNumber(){
    numbers.sort(function(a,b) {return b-a });
    console.log("se sorteaza sirul descrescator  " + numbers);
    document.getElementById("demo").innerHTML = numbers[0];
    console.log("Numarul cel mai mare este primul numar din sirul descrescator:  " + numbers[0]);
}

