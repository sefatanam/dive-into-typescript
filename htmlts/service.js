var button = document.querySelector('button');
var numberInput1 = document.getElementById('number1');
var numberInput2 = document.getElementById('number2');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+numberInput1.value, +numberInput2.value));
    alert(add(+numberInput1.value, +numberInput2.value));
});
