let numeros = [10, 7, 5, 9, 8, 6, 150, 20, 25, 35];

let [num0, , num2, , num4] = numeros

function nuevoArray(num0,num2,num4,...numeros){
    return numeros
}

console.log(nuevoArray(10,5,9,numeros))

let mascota = {
    nombre : "fido",
    tipoDeMascota : "perro",
    color : "marron",
    raza : "salchicha"
}

let {nombre,tipoDeMascota,color,raza} = mascota

//console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipoDeMascota}, de
//color: ${color} y su raza es: ${raza}`)