/*Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
*/
const numerodividir = parseInt(prompt("ingresa un numero para dividirlo"))
//resultado = numerodividir MOD 2 = 0
if (numerodividir % 2 == 0){
    document.writeln("Tu numero es divisible en 2")
}else{
    document.writeln("tu numero no es divisible")
}