//crear un descuento de 15% que si el total es mayor a 10000 no se muestre
const precio = parseInt(prompt("ingresa el precio para realizar el descuento"))
const descuento = precio * 15 / 100
const final = precio - descuento
if(final > 10000){
    document.writeln("su precio final es de ", final)
}else{
    document.writeln("su precio final es de ", precio)
}
//por lo que entendi el descuento solo se aplicaba si el precio final era de mas de 10000, por eso el if y el else
