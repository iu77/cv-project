
function multiplyBy() {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value; 
        document.getElementById("result").innerHTML = num1 / num2;
}
function sumBy() {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        var a = parseInt(num1) + parseInt(num2);
        document.getElementById("result").innerHTML = a;
}
function difBy() {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        var b = parseInt(num1) - parseInt(num2);
        document.getElementById("result").innerHTML = b;
}