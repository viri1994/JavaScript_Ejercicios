// Ejemplo para conseguir input del usuario
//let a = window.prompt('dame un valor'); // Siempre regresa una cadena
// Ejemplo para imprimir a consola
//console.log('esto es un mensaje', 'este también');
// Ejemplo para imprimir a documento
//document.writeln('esto es un mensaje');

//--------------------------------------------------------------------------------------

/*let a=new Date(); IMPRIME LA FECHA ACTUAL
console.log('La hora y fecha es:'+ ' ' + a);

document.body.innerHTML = "Time right now is:  " + a;

*/
//---------------------------------------------------------------------------------------

// Obten el área de un triángulo. Pidele los 3 lados al usuario//
/*
let lado1=window.prompt('Dame lado 1');
console.log('lado1:' + ' '+ lado1);
let lado2=window.prompt('Dame lado 2');
console.log('Lado2:'+ ' ' + lado2);

let result=lado1*lado2/2;
console.log('El area es:'+ ' ' + result);
*/
/*
function area(){
  let lado1=Number(window.prompt("Ingresa el lado1"));
  let lado2=Number(window.prompt("Ingresa el lado2"));
  let lado3=Number(window.prompt("Ingresa el lado3"));
  semiperim = (lado1 + lado2 + lado3) / 2;
  console.log(semiperim);
  area = Math.sqrt(semiperim*((semiperim-lado1), (semiperim-lado2), (semiperim-lado3)));
  console.log("El area del triangulo es "+ area");+
}
*/

/*Voltea una string dada por el usuario
const p = window.prompt('Dame una palabra');
console.log(p.split('').reverse().join('')); /*El método split() devuelve el nuevo array.



/*Voltea una string dada por el usuario sin usar el método de reverse
var entrada = window.prompt('Dame una palabra');
var entradaInvertida = "";

//Itero la cadena de manera inversa
for(var i = entrada.length-1; i>=0; i--)
{
  //Voy concatenando el valor a la cadena resultado
  entradaInvertida+=entrada[i];
}
console.log(entradaInvertida);

// Convierte una temperatura dada en C o F a F o C, respectivamente
/*
  C -> F: (C x 9/5) + 32
  F -> C: (F - 32) x 5/9
  Ejemplos:
  60C: 140F
  45C: 7.222222222222222C


C o F
var ce= Number(window.prompt('Ingresa los grados Celsius'));
console.log((ce * 9/5) + 32);

F o C
var fa = Number (window.prompt('Ingresa los grados Fahrenheit'));
console.log((fa - 32) * (5/9)); 

// Crea un objeto que tenga una propiedad cuyo nombre es definido por el usuario. Su valor debe ser verdadero

  var unObjeto= new Object();
  unObjeto[('dame el nombre de la propiedad')]=true;
  console.log(unObjeto);
  document.writeln(unObjeto);

// Realiza la suma de los valores que de el usuario hasta recibir un valor negativo
var n1=Number(window.prompt('Ingresa un numero'));
var n2=0;

while(n1 >= 0){ 
n2 += n1;
var n1=Number(window.prompt('Ingresa un numero'))
}
console.log('La suma es:' + ' ' + n2);


// Convierte a mayúscula la primer letra de cada palabra en una cadena dada por el usuario
let frase = (window.prompt('Ingresa una oracion'));
let palabras = frase.split(" ");//Divide por espacios la palabra
let palabrasMayusculas = palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
console.log(palabrasMayusculas.join(' ')); //une la frase*/

// Revisa si un número dado es múltiplo de 3 o de 7
/*function multiplo(){
  let num = window.prompt('Ingresa numero: ')
num = parseInt(num);
var res = 0;
if(num % 3== 0 && num % 7 == 0){
res = "Numero multiplo de 3 y de 7"
console.log(res);  
}
*/




// Revisa cuantas veces se repite un caracter dado en una cadena dada

// Revisa cuantas veces se repite un valor dado en un arreglo

// Divide un número de 3 dígitos en sus centenas, decenas y unidades

  // 103 -> 1 centena, 0 decenas, 3 unidades

// Regresa todos los caracteres que no sean letras de una cadena


// Haz una función que lanza un error con el mensaje dado por el usuario
//let error = (window.prompt('Ingresa el nombre del error'));



// Extiende la función anterior para atrapar el error e imprimir su mensaje y stack

// Suma los contenidos de un arreglo de números
/*
var array=[1,2,3,4,5,6];
var array1=[5,10,8,5,7];
let reducer = (a, b) => a + b;
console.log(array.reduce(reducer));
console.log(array1.reduce(reducer));
*/


// Regresa un arreglo nuevo con el cuadrado de cada valor del arreglo original

// Regresa que tipo de ángulo es el dado
/*
  Agudo: 0 a 90 grados
  Recto: 90 grados
  Obtuso: 90 a 180 grados
  Llano: 180 grados*/

// Regresa un arreglo nuevo sin los valores repetidos de un arreglo original
// Quita los valores repetidos de un arreglo (sin usar otro arreglo)
// Convierte un número binario dado por el usuario a decimal
// Convierte un número decimal dado por el usuario a binario, octal y hexadecimal (bases 2, 8 y 16)
// Regresa la cantidad de valores que comparten dos arreglos diferentes

var array=[1,2,5,6,8];
var array1=[2,5,1,8,10];
const result=array


/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
// Valida que una cadena dada no tenga espacios en blanco

// Dada una cadena, determina su valor de scrabble

 /* 1: E, A, I, O, N, R, T, L, S, U
  2: D, G
  3: B, C, M, P
  4: F, H, V, W, Y
  5: K
  8: J, X
  10: Q, Z */
  
  // Determina si una cadena dada por el usuario es un acrónimo
  // Implementa una lista ligada
  // Implementa una lista doblemente ligada
  // Obten el Máximo común divisor de dos números dados
