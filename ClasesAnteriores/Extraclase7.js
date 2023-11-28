
/*function losDiezSiguientes(parametro){
i = 0

    while (i < 10){
        console.log(parametro + 1)
        parametro = parametro + 1
        i++
    }
return
}

losDiezSiguientes(10);*/

/*for (i = 1; i <= 57; i = i + 3){
    console.log(i)
}*/

/*function letrasAMayusculas(cadenaDeTexto){
    textoAMayuscula = cadenaDeTexto.toUpperCase()
    console.log(textoAMayuscula)
}

letrasAMayusculas("vamos a ver si funciona esta cosa")*/

let numerosPositivos = [1,3,4,8,9,10,101,193,268,999,85,105,94,70]

function numerosPares(numerosAValidar){
let numerosPares =[];

    for(i = 0; i < numerosAValidar.length; i++){
    
        if(numerosAValidar[i] % 2 === 0){

            numerosPares.push(numerosAValidar[i])
        }
    
    }
   
    console.log(numerosPares);
}

numerosPares(numerosPositivos);
