
let graduadosHTML5 = "30 45 25 34 18 23 16 50 72 70";
let graduadosCSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let graduadosJAVASCRIPT = "70 65 58 45 23 57 34 17 72";
let graduadosNODEJS = "45 56 73 34 65 72 70 32";

graduadosHTML5 = graduadosHTML5.split(" ");
graduadosCSS3 = graduadosCSS3.split(" ")
graduadosJAVASCRIPT = graduadosJAVASCRIPT.split(" ")
graduadosNODEJS = graduadosNODEJS.split(" ")

console.log(graduadosNODEJS)

function promedio(graduadosHTML5,graduadosCSS3,graduadosJAVASCRIPT, graduadosNODEJS, numero){

    if (numero < 1 || numero > 4){
        console.log("El numero no es valido");
        return 0
    }  else {

    switch(numero){
        case 1: 
        return promedioCalculado(graduadosHTML5)
        case 2: 
        return promedioCalculado(graduadosCSS3)
        case 3: 
        return promedioCalculado(graduadosJAVASCRIPT)
        case 4: 
        return promedioCalculado(graduadosNODEJS)
    }
    }
}

function promedioCalculado(notas){
let promedio = 0;

    for (let i = 0; i < notas.length; i++){
        promedio += +notas[i];
    }

return promedio / notas.length
}

console.log(promedio(graduadosHTML5,graduadosCSS3,graduadosJAVASCRIPT, graduadosNODEJS, 0))