/*5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
*/
const primerNumero = parseInt(prompt("ingresa el primer numero"))
const segundoNumero = parseInt(prompt("ingresa el segundo numero"))
document.writeln("la suma de los 2 numeros es ", primerNumero + segundoNumero)