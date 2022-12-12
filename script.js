// buttons listeners #decimales

let sumar = document.getElementById(`sumar`).addEventListener(`click`, add);
let restar = document.getElementById(`restar`).addEventListener(`click`, substract);
let multi = document.getElementById(`multi`).addEventListener(`click`, multiply);
let divid = document.getElementById(`division`).addEventListener(`click`, divide);
let igual = document.getElementById(`igual`).addEventListener(`click`, operate);

let uno = document.getElementById(`uno`).addEventListener(`click`, );
let dos = document.getElementById(`dos`).addEventListener(`click`, );
let tres = document.getElementById(`tres`).addEventListener(`click`, );
let cuatro = document.getElementById(`cuatro`).addEventListener(`click`, );
let cinco = document.getElementById(`cinco`).addEventListener(`click`, );
let seis = document.getElementById(`seis`).addEventListener(`click`, );
let siete = document.getElementById(`siete`).addEventListener(`click`, );
let ocho = document.getElementById(`ocho`).addEventListener(`click`, );
let nueve = document.getElementById(`nueve`).addEventListener(`click`, );

// add, substract, multiply, divide

function add(a, b) {
    document.getElementsByClassName('pantalla').innerHTML = "";
}

function substract(a, b) {
    document.getElementsByClassName('pantalla').innerHTML = "";
}

function multiply(a, b) {
    document.getElementsByClassName('pantalla').innerHTML = "";
}

function divide(a, b) {
    document.getElementsByClassName('pantalla').innerHTML = "";
}

// operate (takes operator and 2 numbers and calls function above)

function operate (a, b) {
    document.getElementsByClassName('pantalla').innerHTML = "";
}

// storing display value

function screenvalue() {
    document.getElementsByClassName('pantalla').innerHTML = "";
}