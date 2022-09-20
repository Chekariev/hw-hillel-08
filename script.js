'use strict';

const num1 = document.querySelector("#Num1");
const num2 = document.querySelector("#Num2");
const calcBtn = document.querySelector("#calcBtn");
const sign = document.querySelector("#sign");

const rez = document.querySelector("#rez");

function calculateFunc(){

    switch(sign.value){
        case "+":{
            if(!isNaN(num1.value) && !isNaN(num2.value)){
                rez.innerHTML = (Number(num1.value) + Number(num2.value)).toString();     
            }
            else{
                rez.innerHTML = "Операція не можлива, введіть число!";
            }
            break;
        }
        case "-":{
            if(!isNaN(num1.value) && !isNaN(num2.value)){
                rez.innerHTML = (num1.value - num2.value).toString();
            }
            else{
                rez.innerHTML = "Операція не можлива, введіть число!";
            }
            break;
        }
        case "*":{
            if(!isNaN(num1.value) && !isNaN(num2.value)){
                rez.innerHTML = (num1.value * num2.value).toString();

            }
            else{
                rez.innerHTML = "Операція не можлива, введіть число!";
            }
            break;
        }
        case "/":{
            if(!isNaN(num1.value) && !isNaN(num2.value) && num2.value != 0){
                rez.innerHTML = (num1.value / num2.value).toString();
            }
            else{
                rez.innerHTML = "Перевірте коректність введення операндів(Num1, Num2)\n Num2 != 0 та Num1 і Num2 мають бути числовими";
            }
            break;
        }
    }
}

calcBtn.addEventListener('click', calculateFunc);