/*Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los
enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).*/

function sigma(num){
var sum = 0;
for(var x = 0; x <= num; x++){
 sum = sum + x;
}
console.log("sigma","(",(num),")"," = ", (sum));

}

/*Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación)
de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); 
factorial(5) = 120 (1*2*3*4*5).*/

function factorial(num){
var fact = 1;
for(var x = 1; x <= num; x++){
 fact = fact * x;
}
console.log("factorial","(",(num),")"," = ", (fact));
}

/*Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número
es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un 
índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). 
Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), 
fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5),
fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes
puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. */

function fibonacci(m){
    if(m == 0) {
        return 0;
    }
    if(m == 1){
        return 1;
    }
    return fibonacci(m-1) + fibonacci(m-2);
}

/*Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. 
Si el array es muy pequeño, devuelve null. */

function penultimo_de_array (arr){
    var y = 0;

    if(arr.length <= 2) { 
    return null;
    }
    else{
    y = [arr.length-2];
    }
    
    console.log(arr[y]); 
}

/*Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 4. 
Si el array es muy pequeño, devuelve null.*/ 

function N_ultimo(arr,y){
var num = 0;
if( arr[y] <= arr.length){
num = arr[y]; 
console.log(num);
}
else {return null;  
}
    }

/////PENDIENTE//////
/*Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7],
devuelve 7.  Si el array es muy pequeño, devuelve null.*/

function big_second(arr){
var max = arr[0]; 
for(var x = 0; x < arr.length; x++){
    if(arr[x] > max){
        max = arr[x];
}
}
var maxsec = 0;
for(var x = 0; x < arr.length; x++){
        if(arr[x] != max){
            if(arr[x] > maxsec){
            maxsec = arr[x];
}
}
}
return maxsec;
}

/*Doble Problema Par: Crea una función que cambie un array dado duplicando cada
uno de sus elementos en una posición par, y manteniendo el orden original. 
Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", 42, 42, false].*/

function doble_par(arr){
    var  otroarr = [];
    for(var x = 0; x < arr.length; x++){
        if( arr[x]%2 == 1){
            otroarr.push(arr[x]);
            otroarr.push(arr[x]);
           
        }
        else {otroarr.push(arr[x]);
        }
    }
return otroarr;
    }



