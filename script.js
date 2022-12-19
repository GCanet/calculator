// variables

let AC = document.getElementById("ce").addEventListener(`click`, ce);
let C = document.getElementById("c").addEventListener("click", ce);
let masmenos = document.getElementById("masmenos").addEventListener("click", buttonNegativeClicked);
let sumar = document.getElementById(`sumar`).addEventListener("click", buttonAddClicked);
let restar = document.getElementById(`restar`).addEventListener("click", buttonSubtractClicked);
let multi = document.getElementById(`multi`).addEventListener("click", buttonMultiplyClicked);
let divid = document.getElementById(`division`).addEventListener("click", buttonDivideClicked);
let igual = document.getElementById(`igual`).addEventListener("click", buttonEqualsClicked);
let buttonPoint = document.getElementById("decimales").addEventListener("click", buttonPointClicked);
let button1 = document.getElementById("uno").addEventListener("click", button1Clicked);
let button2 = document.getElementById("dos").addEventListener("click", button2Clicked);
let button3 = document.getElementById("tres").addEventListener("click", button3Clicked);
let button4 = document.getElementById("cuatro").addEventListener("click", button4Clicked);
let button5 = document.getElementById("cinco").addEventListener("click", button5Clicked);
let button6 = document.getElementById("seis").addEventListener("click", button6Clicked);
let button7 = document.getElementById("siete").addEventListener("click", button7Clicked);
let button8 = document.getElementById("ocho").addEventListener("click", button8Clicked);
let button9 = document.getElementById("nueve").addEventListener("click", button9Clicked);
let button0 = document.getElementById("zero").addEventListener("click", button0Clicked);
let pantallaTop = document.getElementById("pantallaTop");
let pantallaBottom = document.getElementById("pantallaBottom");
pantallaTop.textContent = "";
pantallaBottom.textContent = "";
let defaultBottomNumber = 0;
let number1 = "";
let number2 = "";
let number3 = "";
let operatorClicked = false;
let operator;

// operaciones

function add(number1, number2){
  return number1 + number2;
}

function substract(number1, number2){
  return number1 - number2;
}

function multiply(number1, number2){
  return number1 * number2;
}

function divide(number1, number2){
  return number1 / number2;
}

function operatorUsed(operatorButtonPressed){
  if (number1 != ""){
    if (number2 == ""){
      switch(operatorButtonPressed){
        case "+":
          operator = "+";
          break;
        case "-":
          operator = "-";
          break;
        case "*":
          operator = "*";
          break;
        case "/":
          operator = "/";
          break;
      }
      operatorClicked = true;
      pantallaTop.textContent = number1 + " " + operator + " " + number2;
    }
    if (number2 != ""){
      switch(operatorButtonPressed){
        case "+":
          operator = "+";
          break;
        case "-":
          operator = "-";
          break;
        case "*":
          operator = "*";
          break;
        case "/":
          operator = "/";
          break;
      }
      number1 = number3;
      number3 = "";
      number2 = "";
      pantallaTop.textContent = number1 + " " + operator + " " + number2;
      pantallaBottom.textContent = "";        
    }
  }
} 

function operate(){
  switch(operator){
    case "+":
      number3 = add(number1, number2);
      number3 = Math.round(number3*100)/100;
      break;
    case "-":
      number3 = subtract(number1, number2);
      number3 = Math.round(number3*100)/100;
      break;
    case "*":
      number3 = multiply(number1, number2);
      number3 = Math.round(number3*100)/100;
      break;
    case "/":
      number3 = divide(number1, number2);
      number3 = Math.round(number3*100)/100;
      break;
  }
  pantallaTop.textContent = number1 + " " + operator + " " + number2 + " =";
  pantallaBottom.textContent = number3;
}

// botones

function button1Clicked(){     
  if (operatorClicked == false && number1.length <= 8){
    number1 += 1;        
    pantallaBottom.textContent = number1;
  }
  else if (operatorClicked == true && number2.length <= 8){
    number2 += 1;        
    pantallaBottom.textContent = number2;
  }
}

function button2Clicked(){      
  if (operatorClicked == false && number1.length <= 8){
    number1 += 2;        
    pantallaBottom.textContent = number1;
  }
  else if (operatorClicked == true && number2.length <= 8){
    number2 += 2;        
    pantallaBottom.textContent = number2;
  }
}

function button3Clicked(){
  if (operatorClicked == false && number1.length <= 8){
    number1 += 3;        
    pantallaBottom.textContent = number1;  
  }
  else if (operatorClicked == true && number2.length <= 8){
    number2 += 3;        
    pantallaBottom.textContent = number2;
  }
}

function button4Clicked(){     
  if (operatorClicked == false && number1.length <= 8){
    number1 += 4;        
    pantallaBottom.textContent = number1;            
  }
  else if (operatorClicked == true && number2.length <= 8){
    number2 += 4;        
    pantallaBottom.textContent = number2;            
  }
}

function button5Clicked(){    
  if (operatorClicked == false && number1.length <= 8){
    number1 += 5;        
    pantallaBottom.textContent = number1;     
  }
  else if (operatorClicked == true && number2.length <= 8){
    number2 += 5;        
    pantallaBottom.textContent = number2;      
  }
}

function button6Clicked(){
  if (operatorClicked == false && number1.length <= 8){
    number1 += 6;        
    pantallaBottom.textContent = number1;            
  }
  else if (operatorClicked == true && number2.length <= 8){
    number2 += 6;        
    pantallaBottom.textContent = number2;            
  }
}

function button7Clicked(){
  if (operatorClicked == false && number1.length <= 8){
    number1 += 7;        
    pantallaBottom.textContent = number1;            
  }
  else if (operatorClicked == true && number2.length <= 8){
    number2 += 7;        
    pantallaBottom.textContent = number2;            
  }
}

function button8Clicked(){   
  if (operatorClicked == false && number1.length <= 8){
    number1 += 8;        
    pantallaBottom.textContent = number1;            
  }
  else if (operatorClicked == true && number2.length <= 8){
    number2 += 8;        
    pantallaBottom.textContent = number2;            
  }
}

function button9Clicked(){
  if (operatorClicked == false && number1.length <= 8){
    number1 += 9;        
    pantallaBottom.textContent = number1;            
  }
  else if (operatorClicked == true && number2.length <= 8){
    number2 += 9;        
    pantallaBottom.textContent = number2;            
  }
}

function button0Clicked(){     
  if (operatorClicked == false && number1.length <= 8){
    number1 += 0;        
    pantallaBottom.textContent = number1;            
  }
  else if (operatorClicked == true && number2.length <= 8){
    number2 += 0;        
    pantallaBottom.textContent = number2;            
  }
}

function buttonAddClicked(){
  operatorUsed("+")
}

function buttonSubtractClicked(){
  operatorUsed("-")
}

function buttonMultiplyClicked(){
  operatorUsed("*")
}

function buttonDivideClicked(){
  operatorUsed("/")
}

function buttonEqualsClicked(){
  if(number2 == 0 && operator == "/"){
    pantallaTop.textContent = "Dividir por 0?";
    pantallaBottom.textContent = "Pillin ;)";
    number1 = "";
    number2 = ""
    number3 = "";
    operatorClicked = false;
  }
  else if(number2 != ""){
    operate()       
  }
}

function buttonPointClicked(){
  if (operatorClicked == false){
    if (number1.includes(".") != true){
      number1 += ".";        
      pantallaBottom.textContent = number1;                
    }
  }
  else if (operatorClicked == true){
    if (number2.includes(".") != true){
      number2 += ".";        
      pantallaBottom.textContent = number2;                
    }            
  }
}

function buttonNegativeClicked(){
  let negative = "-";
  if (operatorClicked == false){   
    if (number1.includes("-") != true){                
      number1 = negative += number1;
      pantallaBottom.textContent = number1;
    }
    else if (number1.includes("-") == true){
      number1 = number1.substring(1);
      pantallaBottom.textContent = number1;
    }           
  }
  else if (operatorClicked == true){
    if (number2.includes("-") != true){
      number2 = negative += number2;
      pantallaBottom.textContent = number2;
    }
    else if (number2.includes("-") == true){
      number2 = number2.substring(1);
      pantallaBottom.textContent = number2;
    }       
  }       
}

function ce(){
  pantallaTop.textContent = "";
  pantallaBottom.textContent = "";
  let number1 = "";
  let number2 = "";
  let number3 = "";
  let operatorClicked = false;
}