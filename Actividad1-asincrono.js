//Ejemplo 
/*let foo = (valor) => console.log(valor);
let array = ['a', 'b', 'c']

array.forEach(foo);// Esto es un callback
setTimeout(foo, 3000);*/
//------------------------------------------
/*let foo = () => console.log('in callback!');
setTimeout(foo, 3000) */

//Convierte en promesa los ejercicios 1


//Recorre un arreglo usando un callback, imprime cada elemento

/*Haz varios callbacks de forma que se imprima:
1 después de 3 segundos
2 después de 1 segundo
3 después de 4 segundos
En consola debería verse 2 1 3*/

   /* setTimeout(()=> console.log(2),1000);
    setTimeout(()=> console.log(1),2000);
    setTimeout(()=> console.log(3),3000);*/

//Escribe un callback que recibe un argumento y lo imprime
/*function arg(palabra){
    console.log(2)
    console.log(palabra);
    console.log(3)
}
//funcion que recibe el call back anterior y lo ejecuta
function gets(callback){
    console.log(1)
    callback('Recibiendo')
}

gets(arg)
*/
//Crea una función que llama a un callback y usa el valor que regresa para llamar a otro. Después debe llamar a un tercer callback con el valor que regresa el segundo*/

/*function first (){
    callback('first');

}
function second (value, callback){
    callback(`second, ${value}`);
    
}
function third (firstValue, secondValue, callback){
    callback(`third, (${secondValue}), ${firstValue}`);
    
}

first(firstValue =>{
    second(firstValue, secondValue => {
        third(firstValue, secondValue, thirdValue => {
            console.log(thirdValue);
        });
    });
});

*/


//Promises
//Convierte todos los ejercicios de la parte 1 a usar Promises
/*Promise.resolve('first').then(firstValue => {
    Promise.resolve(`second, ${firstValue}`).then(secondValue => {
        Promise.resolve(`third, (${secondValue}), ${firstValue}`).then(console.log);
    })
})

//async await
const asyncHell = async () => {
    const firstValue= await Promise.resolve('first');
    const secondValue = await Promise.resolve(`second, ${firstValue}`);
    const thirdValue = await Promise.resolve(`third, (${secondValue}), ${firstValue}`);
    console.log(thirdValue);
}
asyncHell();*/
//Crea una Cadena de Promesas en la cual una lanza un error (no hagas Catch)

Promise.resolve(1).then(num => num * 2).then(num => num - 1).then(resp => console.log(resp)); //sigue la secuencia porque no hay reject



//Agrega un catch al ejercicio anterior

Promise.resolve(1).then(num => num *2).then(num => Promise.reject(num)).then(num => num -1).catch(resp => console.log('Error' + resp)); //cuando llega a la reject ya no ejecuta eol siguiente paso y se pasa al catch


//Agrega un finally al ejercicio anterior
Promise.resolve(1).then(num => num *2).then(num => Promise.reject(num)).then(num => num -1).finally(resp => console.log('Finalizo' + resp));


//Crea una función con 3 promesas, que acaben a tiempos diferentes y regresa en cuanto la primera termina
let prom = () => { 

a1= new Promise((resolve, reject)=>setTimeout(resolve,1000, 1))
a2= new Promise((resolve, reject)=>setTimeout(resolve,2000, 2))
a3= new Promise((resolve, reject)=>setTimeout(resolve,3000, 3))
return Promise.race([a1, a2, a3]);
}

prom().then((mensaje) => console.log(mensaje));

//Crea una función con 4 promesas, que acaben a tiempos diferentes y regresa cuando todas acaben

let promesas = () => { 

    p1= new Promise((resolve, reject)=>setTimeout(resolve,1000, 1))
    p2= new Promise((resolve, reject)=>setTimeout(resolve,2000, 2))
    p3= new Promise((resolve, reject)=>setTimeout(resolve,3000, 3))
    p4= new Promise((resolve, reject)=>setTimeout(resolve,3000, 3))
    return Promise.all([p1, p2, p3, p4]);
    }
    
    promesas().then((mensaje) => console.log(mensaje));
    
//Crea una Cadena de Promesas en la cual una se rechaza, asegurate de agregar un catch
//Crea una Cadena de Promesas en la cual una se rechaza, agrega varios catch

