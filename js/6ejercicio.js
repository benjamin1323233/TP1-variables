/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3

Output: El 15 es el número más grande*/

const primerNumero = parseInt(prompt("ingresa el primer numero"));
const segundoNumero = parseInt(prompt("ingresa el segundo numero"));
if(primerNumero > segundoNumero){
    document.writeln("el "+ primerNumero + " es el mayor")
}else{
    document.writeln("el "+ segundoNumero + " es el mayor")
}
