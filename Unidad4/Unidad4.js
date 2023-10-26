// Resolver los ejercicios utilizando variables y operadores. Para el ingreso y egreso de 
// información utilizar los métodos de JavaScript vistos en clase. Cada ejercicio debe ser 
// realizado en un archivo HTML y un JS (extensiones .html y .js).
// 22. Se le solicita al usuario que ingrese 3 números. Realice un programa para informar 
// si el número es múltiplo de 3, múltiplo 5, múltiplo de ambos o múltiplo de ninguno.

var a = parseInt(prompt('Ingrese un número'))
var b = parseInt(prompt('Ingrese otro número'))
var c = parseInt(prompt('Ingrese un número más'))

if((a+b+c)/3 == 0 & (a+b+c)/5 == 0){
    alert('Es múltiplo de ambos')
}
else if((a+b+c)/3 == 0){
    alert('Es múltiplo de 3')}
else if((a+b+c)/5 == 0){
    alert('Es múltiplo de 5')
}
else{alert('No es múltiplo de ninguno')}

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
    var numero = prompt('Ingrese un número. Cuando no quiera ingresar más presione')
    if(numero >= 'a' & numero <= 'z' & numero >= 'A' & numero <= 'Z'){
        opcion = false
    }
    else{
        numeros += parseInt(numero)
    }
}

for(let num = 0;numeros.length-1;num++){
    if(numero[num]>=inicio&numero[num]<=fin){
        if(numero[num]%2 == 0){
            alert('Es par')
        }
    }
    else{
        if(numero[num]%2 != 0){
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
    b = parseInt(prompt('Ingrese otro número'))

    c = prompt('Ingrese el operador de la operación que desee realizar (+, -, *, /)')
    while(c!='+'&c!='-'&c!='*'&c!='/'){
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

// 26. Se le solicita al usuario que ingrese una cantidad desconocida de números. Realice 
// un programa para calcular e informar:
// a. La sumatoria de los valores ingresados.
// b. El menor valor ingresado.
// c. El mayor valor ingresado.

// 27. Como resultado de una encuesta se recogen los siguientes datos: sexo (H: Hombre, 
//     M: Mujer), edad (en años) y altura (en centímetros). Realice un programa para calcular 
//     e informar:
//     a. El porcentaje de mujeres mayores a 25 años.
//      b. El porcentaje de hombres menores de 18 años.
//      c. El promedio de edad de las mujeres.
//      d. El promedio de altura de los hombres.
//      e. La menor edad ingresada.
//      f. La mayor altura ingresada