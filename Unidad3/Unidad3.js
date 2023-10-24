// 15. Se le solicita al usuario que ingrese un número. Realice un programa para informar 
// si el número es cero, par o impar.
var numero = parseInt(prompt("Ingrese un número:"));

if(numero == 0){
    console.log('Es cero');
}
else if(numero%2 == 0){
    console.log('Es par');
}
else{
    console.log('Es impar');
}
// 16. Se le solicita al usuario que ingrese un número. Realice un programa para informar 
// si el número es múltiplo de 3.
numero = parseInt(prompt("Ingrese un número:"));

if(numero%3 == 0){
    console.log('Es múltiplo de 3');
}
else{
    console.log('No es múltiplo de 3');
}
// 17. Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si 
// el valor ingresado es una vocal.
var letra = prompt("Ingrese una letra:");

if(letra == 'a' | letra == 'e' | letra == 'i' | letra == 'o' | letra == 'u'){
    console.log('Es vocal');
}
else{console.log('No es vocal');}
// 18. Se le solicita al usuario que ingrese los extremos de un rango numérico y un 
// número. Realice un programa para informar si el número está dentro del rango.
// Si está en rango, informar si el número es par.
// Si no está dentro del rango, informar si es número es impar.
// Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números 
// enteros.
var a = parseInt(prompt("Ingrese el valor inicial del rango:"));
var b = parseInt(prompt("Ingrese el valor final del rango:"));

numero = parseInt(prompt("Ingrese un número:"));

if(numero>=a & numero<=b){
    if(numero%2 == 0){
        console.log('Es par');
    }
}
else{
    if(numero%2 != 0){
        console.log('Es impar');
    }
}
// 19. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice 
// un programa para calcular e informar la operación solicitada entre ambos números.
a = parseInt(prompt("Ingrese un número:"));
b = parseInt(prompt("Ingrese otro número:"));

var operador = prompt("Ingrese un operador (+, -, *, /) :");

if(operador == '+'){
    console.log(a + b);
}
else if(operador == '-'){
    console.log(a - b);
}
else if(operador == '*'){
    console.log(a * b);
}
else{
    console.log(a / b);
}
// 20. Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el 
// algoritmo para informar si el triángulo es equilátero, isósceles o escaleno.
var lado1 = parseInt(prompt("Ingrese un lado del triángulo:"));
var lado2 = parseInt(prompt("Ingrese otro lado del triángulo:"));
var lado3 = parseInt(prompt("Ingrese el último lado del triángulo:"));

if (lado1 == lado2 & lado1 == lado3) {
    console.log('Es equilátero');
}else if (lado1 == lado2 | lado1 == lado3 | lado2 == lado3) {
    console.log('Es isósceles');
} else { console.log('Es escaleno'); }
// 21. Realizar un sistema para el cálculo de sueldo de una empresa. Se le solicita al 
// usuario que ingrese la categoría a la que pertenece que define el sueldo básico 
// mensual (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las 
// horas extras. Se sabe que:
// a. Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500 
// más.
// b. Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000 
// más.
// Realice un programa para calcular e informar el sueldo mensual del empleado, 
// indicando si su sueldo supera o no los u$s 4000.
var categoria = parseInt(prompt("Ingrese la categoría a la que pertenece:"));
var horas_extra = parseInt(prompt("Ingrese la cantidad de horas extra que realizó:"));
var sueldo;

if(categoria == 1){
    sueldo = 2000;
    if(horas_extra>20){
        sueldo += 500;
    }
    console.log(sueldo);
}else if(categoria == 3){
    sueldo = 4000;
    if(horas_extra>30){
        sueldo += 1000
        console.log("Su sueldo supera los u$s 4000:")
    }
    console.log(sueldo);
}else{
    sueldo = 3000;
    console.log(sueldo);
}