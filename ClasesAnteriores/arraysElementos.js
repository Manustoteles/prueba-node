
//console.log(conjuntoDeSeis[3]);


//let valorAQuitar = conjuntoDeSeis.shift();

//console.log(conjuntoDeSeis);

//conjuntoDeSeis.push(valorAQuitar);

//console.log(conjuntoDeSeis);

//conjuntoDeSeis.push("freidora","plancha");

//console.log(conjuntoDeSeis);

/*let aBuscar = "cafetera"

if (conjuntoDeSeis.indexOf(aBuscar) != - 1){
    console.log("Producto Encontrado");
}else{
    console.log("El producto buscado no existe");
}*/



/*let conjuntoArreglado = conjuntoDeSeis.join(" ");

console.log(conjuntoDeSeis)

console.log(conjuntoArreglado)*/


//console.log(conjuntoDeSeis.length)

let conjuntoDeSeis = ["cafetera","licuadora","tostadora","batidora","microondas","sanguchera"];

let conjuntoArreglado = conjuntoDeSeis.join(" ");

let nuevoConjunto = conjuntoArreglado.replace("tostadora","LAVADORA")

//console.log(nuevoConjunto);

console.log(nuevoConjunto.split(" "))