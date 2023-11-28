let operador = "";
let resultado = 0;
let num1 = 0;
let num2 = 0;

num1 = 10;
num2 = 15;
operador = "*";

switch(operador){
    case "+":
        resultado = num1 + num2;
        console.log("el resultado de la suma " + num1 + " + " + num2 + " es " + resultado) 
        break;
    case "-":
        resultado = num1 - num2;
        console.log("el resultado de la resta " + num1 + " - " + num2 + " es " + resultado) 
        break;
    case "/":
        resultado = num1 / num2;
        console.log("el resultado de la division " + num1 + " / " + num2 + " es " + resultado) 
        break;
    case "*":
            resultado = num1 * num2;
            console.log("el resultado de la multiplicacion " + num1 + " * " + num2 + " es " + resultado) 
            break;
    default:
        console.log("Las operaciones aceptadas son: suma - resta - multiplicacion - division")
}
