


function CalcularTotalCliente(tipoHamburguesa, jamon,queso,salsaDeTomate,mayonesa,mostaza,tomate,lechuga,cebolla){
let valorHamburguesa

if (tipoHamburguesa == "Carne a la Parrilla"){
    valorHamburguesa = 1800;
} else if (tipoHamburguesa == "Pollo") {
    valorHamburguesa = 1500;
} else if (tipoHamburguesa == "Vegetariana"){
    valorHamburguesa = 1200;
}

if (jamon){
    valorHamburguesa = valorHamburguesa + 30;
}

if (queso){
    valorHamburguesa = valorHamburguesa + 25;
}

if (salsaDeTomate){
    valorHamburguesa = valorHamburguesa + 5
}

if (mayonesa){
    valorHamburguesa = valorHamburguesa + 5;
}

if (mostaza){
    valorHamburguesa = valorHamburguesa + 5;
}

if (tomate){
    valorHamburguesa = valorHamburguesa + 15;
}

if (lechuga){
    valorHamburguesa = valorHamburguesa + 10;
}

if (cebolla){
    valorHamburguesa = valorHamburguesa + 10;
}
return valorHamburguesa;
}

function NombreDeUsuario(nombre, apellido, callback, tipoHamburguesa, jamon,queso,salsaDeTomate,mayonesa,mostaza,tomate,lechuga,cebolla){
    let precioHamburguesa = callback (tipoHamburguesa, jamon,queso,salsaDeTomate,mayonesa,mostaza,tomate,lechuga,cebolla)
    console.log("Estimado " + nombre + " " + apellido + ", el monto total a pagar es de: $" + precioHamburguesa) 
    console.log(`Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${precioHamburguesa}`)

}

NombreDeUsuario("Emanuel","Tejerina",CalcularTotalCliente,"Pollo",true,true,true,true,true,true,true,true)

console.log(CalcularTotalCliente("Pollo",true,true,true,true,true,true,true,true))


