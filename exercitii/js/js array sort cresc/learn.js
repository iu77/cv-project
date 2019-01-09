var numbers = [15, 8, 23, 9, 41, 2, 12, 1, 43];
document.getElementById("demo").innerHTML = numbers;

function myFunction(){
    numbers.sort(function(a, b){return a-b});
    document.getElementById("demo").innerHTML = numbers;
}