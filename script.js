// buttons listeners #decimales

let sumar = document.getElementById(`sumar`).addEventListener(`click`, add);
let restar = document.getElementById(`restar`).addEventListener(`click`, substract);
let multi = document.getElementById(`multi`).addEventListener(`click`, multiply);
let divid = document.getElementById(`division`).addEventListener(`click`, divide);
let igual = document.getElementById(`igual`).addEventListener(`click`, operate);
let numerosbtn = document.querySelectorAll(".botoniguales");
let pantallaUNO = document.getElementById('spanscreen');

// pantalla

pantallaUNO.innerHTML = "0";

numerosbtn.forEach((num) => {
    num.addEventListener("click", actnumeros);
});

function actnumeros(e) {
    let numVal; // Store the value of the number
        if (e.type === "click") {
          numVal = e.target.innerHTML;
          pantallaUNO.innerHTML = numVal;
        } else {
          return;
        }
}

/* crear 2 pantallas virtuales para poder operar entre ellas

pasar a numero el innerhtml de las pantallas para computar:

function compute () {
    let num1 = parseFloat(pantallaUNO.innerHTML);
    let num2 = parseFloat(pantallaDOS.innerHTML);
} */

// add, substract, multiply, divide <-- editar para que opere pantalla 1 vs pantalla 2

function add(a, b) {
    result = a + b;
    document.getElementsByClassName('pantalla').innerHTML = result;
}

function substract(a, b) {
    result = a - b;
    document.getElementsByClassName('pantalla').innerHTML = result;
}

function multiply(a, b) {
    result = a * b;
    document.getElementsByClassName('pantalla').innerHTML = result;
}

function divide(a, b) {
    result = a / b;
    document.getElementsByClassName('pantalla').innerHTML = result;
}

// operate (takes operator and 2 numbers and calls function above)

function operate (a, b) {
    
}

// botones de borrar