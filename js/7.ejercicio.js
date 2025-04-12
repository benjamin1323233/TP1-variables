/* Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
*/
const primerNumero = parseInt(prompt("ingresa el primer numero"))
const segundoNumero = parseInt(prompt("ingresa el segundo numero"))
const tercerNumero = parseInt(prompt("ingresa el tercer numero"))
if(primerNumero > segundoNumero & primerNumero > tercerNumero){
    document.writeln("el " + primerNumero + " es el mayor")
}else if(segundoNumero > tercerNumero){
    document.writeln("el "+ segundoNumero + " es el mayor")
}else{
    document.writeln("el "+ tercerNumero + " es el mayor")
}
