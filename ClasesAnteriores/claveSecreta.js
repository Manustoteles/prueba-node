let claveADecifrar =  ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] 

function laClaveSecreta(clave){
    let resultado = []
     for (i = 0; i < clave.length; i++){
        if (clave[clave.length - i -1] !== "*"){
            resultado.push(clave[clave.length - i -1 ])
        }
    }
 return resultadoString = resultado.join("")
}

console.log(laClaveSecreta(claveADecifrar))
