// dom events

document.getElementById("ce").addEventListener(`click`, ce);
document.getElementById("cc").addEventListener("click", ce);
document.getElementById(`sumar`).addEventListener("click", buttonAddClicked);
document.getElementById(`restar`).addEventListener("click", buttonSubtractClicked);
document.getElementById(`multi`).addEventListener("click", buttonMultiplyClicked);
document.getElementById(`division`).addEventListener("click", buttonDivideClicked);
document.getElementById(`igual`).addEventListener("click", buttonEqualsClicked);
document.getElementById("masmenos").addEventListener("click", buttonNegativeClicked);
document.getElementById("decimales").addEventListener("click", buttonPointClicked);
document.getElementById("uno").addEventListener("click", button1Clicked);
document.getElementById("dos").addEventListener("click", button2Clicked);
document.getElementById("tres").addEventListener("click", button3Clicked);
document.getElementById("cuatro").addEventListener("click", button4Clicked);
document.getElementById("cinco").addEventListener("click", button5Clicked);
document.getElementById("seis").addEventListener("click", button6Clicked);
document.getElementById("siete").addEventListener("click", button7Clicked);
document.getElementById("ocho").addEventListener("click", button8Clicked);
document.getElementById("nueve").addEventListener("click", button9Clicked);
document.getElementById("zero").addEventListener("click", button0Clicked);

// variables

let operatorClicked = false;
let number1 = "";
let number2 = "";
let number3 = "";
let operator;

// pantalla "" al inicio

let pantallaTop = document.getElementById("pantallaTop");
let pantallaBottom = document.getElementById("pantallaBottom");
pantallaTop.textContent = "";
pantallaBottom.textContent = "";

// operaciones

function operatorUsed(operatorButtonPressed){
  if (number1 != ""){
    if (number2 == ""){
      switch(operatorButtonPressed){
        case "+":
          operator = "+";
          operatorClicked = true;
          pantallaTop.textContent = number1 + " " + operator;
          pantallaBottom.textContent = "";
          break;  
        case "-":
          operator = "-";
          operatorClicked = true;
          pantallaTop.textContent = number1 + " " + operator;
          pantallaBottom.textContent = "";
          break;  
        case "*":
          operator = "*";
          operatorClicked = true;
          pantallaTop.textContent = number1 + " " + operator;
          pantallaBottom.textContent = "";
          break;  
        case "/":
          operator = "/";
          operatorClicked = true;
          pantallaTop.textContent = number1 + " " + operator;
          pantallaBottom.textContent = "";
          break;  
      }
    }
    if (number2 != ""){
      switch(operatorButtonPressed){
        case "+":
          operator = "+";
          pantallaTop.textContent = number1 + " " + operator + " " + number2;
          pantallaBottom.textContent = "";
          break;    
        case "-":
          operator = "-";
          pantallaTop.textContent = number1 + " " + operator + " " + number2;
          pantallaBottom.textContent = "";
          break;      
        case "*":
          operator = "*";
          pantallaTop.textContent = number1 + " " + operator + " " + number2;
          pantallaBottom.textContent = "";
          break;      
        case "/":
          operator = "/";
          pantallaTop.textContent = number1 + " " + operator + " " + number2;
          pantallaBottom.textContent = "";
          break;      
      }
    }
  }
} 

function operate(){
  switch(operator){
    case "+":
      number3 = add(number1, number2);
      pantallaTop.textContent = number1 + " " + operator + " " + number2 + " " + "=";
      pantallaBottom.textContent = " " + number3;
      break;
    case "-":
      number3 = subtract(number1, number2);
      pantallaTop.textContent = number1 + " " + operator + " " + number2 + " " + "=";
      pantallaBottom.textContent = " " + number3;
      break;
    case "*":
      number3 = multiply(number1, number2);
      pantallaTop.textContent = number1 + " " + operator + " " + number2 + " " + "=";
      pantallaBottom.textContent = " " + number3;
      break;
    case "/":
      number3 = divide(number1, number2);
      pantallaTop.textContent = number1 + " " + operator + " " + number2 + " " + "=";
      pantallaBottom.textContent = " " + number3;
      break;
  }
}

// botones

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
    pantallaTop.textContent = "error";
    pantallaBottom.textContent = "";
    number1 = "";
    number2 = ""
    number3 = "";
    operatorClicked = false;
  }
  else if(number2 != ""){
    operate();       
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
  let number1 = 0;
  let number2 = 0;
  let number3 = 0;
  let operatorClicked = false;
  pantallaTop.textContent = "";
  pantallaBottom.textContent = ""; 
}

function add(number1, number2){
  let suma = parseFloat(number1) + parseFloat(number2);
    return suma
}

function subtract(number1, number2){
  let resta = number1 - number2;
    return resta
}

function multiply(number1, number2){
  return number1 * number2;
}

function divide(number1, number2){
  return number1 / number2;
}