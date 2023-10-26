// Resolver los ejercicios utilizando variables y operadores. Para el ingreso y egreso de 
// información utilizar los métodos de JavaScript vistos en clase. Cada ejercicio debe ser 
// realizado en un archivo HTML y un JS (extensiones .html y .js).

// 22. Se le solicita al usuario que ingrese 3 números. Realice un programa para informar 
// si el número es múltiplo de 3, múltiplo 5, múltiplo de ambos o múltiplo de ninguno.

for(let cont = 0; cont < 3; cont ++ ){
    var a = parseInt(prompt('Ingrese un número'))
    if(a%3 == 0 & a%5 == 0){
        alert('Es múltiplo de ambos')
    }
    else if(a%3 == 0){
        alert('Es múltiplo de 3')}
    else if(a%5 == 0){
        alert('Es múltiplo de 5')
    }
    else{alert('No es múltiplo de ninguno')}
}


// 23. Se le solicita al usuario que ingrese los extremos de un rango numérico y una 
// cantidad de valores desconocidos.
// Realice un programa para informar si cada número está dentro del rango.
// Si está en rango, informar si el número es par.
// Si no está dentro del rango, informar si es número es impar.
// Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números 
// enteros.

var inicio = parseInt(prompt('Ingrese el origen del rango'))
var fin = parseInt(prompt('Ingrese el fin del rango'))
if((fin-inicio)<5){
    fin = parseInt(prompt('El rango debe tener una diferencia mínima de 5. Ingrese otro fin'))
}

var numeros = []
var opcion = true

while(opcion){
    var numero = prompt('Ingrese un número. Cuando no quiera ingresar más, ingrese "BASTA"');
    if (numero.toUpperCase() === 'BASTA') {
        opcion = false;
    } else {
        numeros.push(parseInt(numero));
    }
}

for(let num = 0;num < numeros.length;num++){
    if(numeros[num]>=inicio && numeros[num]<=fin){
        if(numeros[num]%2 === 0){
            alert('Es par')
        }
    }else{
        if(numeros[num]%2 != 0){
            alert('Es impar')
        }
    }
}

// 24. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice 
// un programa para calcular e informar cada operación deseada entre los dos números. 
// Ese proceso se puede repetir mientras lo desee el usuario. Todos los valores deben ser 
// validados.

opcion = true
while(opcion){
    a = parseInt(prompt('Ingrese un número'))
    var b = parseInt(prompt('Ingrese otro número'))

    var c = prompt('Ingrese el operador de la operación que desee realizar (+, -, *, /)')
    while(c!='+' && c!='-' && c!='*' && c!='/'){
        c = prompt('Ingrese el operador de la operación que desee realizar (+, -, *, /)')
    }
    if(c=='+'){
        alert( a + b )
    }
    else if(c=='-'){
        alert( a - b )
    }
    else if(c=='*'){
        alert ( a * b )
    }
    else{ alert ( a / b ) }

    continuar = prompt('Desea continuar? S/N')
    if(continuar == 'N'|continuar == 'n'){
        opcion = false
    }
}

// 25. Se le solicita al usuario que ingrese las notas del parcial de los alumnos de una 
// comisión. Se desconoce la cantidad de alumnos. Realice el algoritmo para informar:
//  El porcentaje de alumnos aprobados (nota igual o superior a 4).
//  El porcentaje de alumnos desaprobados (nota inferior a 4).
//  El promedio de las notas.
// Tenga en cuenta que solamente las notas pueden ir del 1 al 10.

var notas = []
opcion = true

while(opcion){
    var nota = parseInt(prompt('Ingrese una nota. Presione 0 (cero) cuando no quiera ingresar más'))
    if(nota === 0){
        opcion = false
    }else if(nota >= 1 && nota <= 10){
        notas.push(nota)
    }else{alert('Ingrese una nota válida (de 1 a 10)')}
}

var suma = 0
var aprobados = 0
var desaprobados = 0

for(let num = 0; num < notas.length ; num++){
    suma = suma + notas[num]
    if(notas[num]>=4){
        aprobados = aprobados + 1
    }
    if(notas[num]<4){
        desaprobados = desaprobados + 1
    }
}

var promedio = suma / notas.length
aprobados = (aprobados*100)/notas.length
desaprobados = (desaprobados*100)/notas.length

alert('El promedio de las notas es ' + promedio + '. El porcentaje de aprobados es del ' + aprobados + '% y de desaprobados del ' + desaprobados + '%')

// 26. Se le solicita al usuario que ingrese una cantidad desconocida de números. Realice 
// un programa para calcular e informar:
// a. La sumatoria de los valores ingresados.
// b. El menor valor ingresado.
// c. El mayor valor ingresado.

numeros = []
opcion = true

while(opcion){
    var numero = prompt('Ingrese un número. Cuando no quiera ingresar más, ingrese "BASTA"');
    if (numero.toUpperCase() === 'BASTA') {
        opcion = false;
    } else {
        numeros.push(parseInt(numero));
    }
}

suma = 0
var minimo = numeros[0]
var maximo = numeros[0]

for(let num = 0;num < numeros.length;num++){
    suma = suma + numeros[num]
    if(numeros[num]<minimo){
        minimo = numeros[num]
    }
    if(numeros[num]>maximo){
        maximo = numeros[num]
    }
}

alert('La sumatoria de los valores ingresados da como resultado ' + suma + '. El mínimo es ' + minimo + ' y el máximo ' + maximo)

// 27. Como resultado de una encuesta se recogen los siguientes datos: sexo (H: Hombre, 
//     M: Mujer), edad (en años) y altura (en centímetros). Realice un programa para calcular 
//     e informar:
//     a. El porcentaje de mujeres mayores a 25 años.
//      b. El porcentaje de hombres menores de 18 años.
//      c. El promedio de edad de las mujeres.
//      d. El promedio de altura de los hombres.
//      e. La menor edad ingresada.
//      f. La mayor altura ingresada

var mujeres = 0;
var mujeresMayores25 = 0;
var hombres = 0;
var hombresMenores18 = 0;
var edadMujeres = 0;
var alturaHombres = 0;
var menorEdad = 120;
var mayorAltura = 0;

opcion = true;

while (opcion) {
    var sexo = prompt('Ingrese el sexo (H: Hombre, M: Mujer)');
    var edad = parseInt(prompt('Ingrese la edad (en años)'));
    var altura = parseInt(prompt('Ingrese la altura (en centímetros)'));

    if (sexo.toUpperCase() === 'M') {
        mujeres++;
        edadMujeres += edad;
        if (edad > 25) {
            mujeresMayores25++;
        }
    } else if (sexo.toUpperCase() === 'H') {
        hombres++;
        alturaHombres += altura;
        if (edad < 18) {
            hombresMenores18++;
        }
    }

    if (edad < menorEdad) {
        menorEdad = edad;
    }

    if (altura > mayorAltura) {
        mayorAltura = altura;
    }

    opcion = confirm('¿Desea ingresar otro registro?');
}

mujeresMayores25 = (mujeresMayores25 / mujeres) * 100;
hombresMenores18 = (hombresMenores18 / hombres) * 100;
edadMujeres = edadMujeres / mujeres;
alturaHombres = alturaHombres / hombres;

alert('El porcentaje de mujeres mayores a 25 años: ' + mujeresMayores25 + '%. El porcentaje de hombres menores de 18 años: ' + hombresMenores18 + '%. El promedio de edad de las mujeres: ' + edadMujeres + '. El promedio de altura de los hombres: ' + alturaHombres + '. La menor edad ingresada: ' + menorEdad + '. La mayor altura ingresada: ' + mayorAltura);
