const button = document.querySelector("button");
const numberInput1=document.getElementById("number1")! as HTMLInputElement;
const numberInput2 = document.getElementById("number2")!as HTMLInputElement;

function add(num1:number,num2:number){
    return num1+num2;
}

button.addEventListener("click",function(){
    console.log(add(+numberInput1.value,+numberInput2.value));
    alert(add(+numberInput1.value,+numberInput2.value));

})