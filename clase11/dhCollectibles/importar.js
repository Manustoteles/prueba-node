const fs = require('fs');

const figurita1JSON = fs.readFileSync("./datos/figuras1.json","utf-8");

const figurita1JS = JSON.parse(figurita1JSON);

const figurita2JSON = fs.readFileSync("./datos/figuras2.json","utf-8");

const figurita2JS = JSON.parse(figurita2JSON);

const figurita3JSON = fs.readFileSync("./datos/figuras3.json","utf-8");

const figurita3JS = JSON.parse(figurita3JSON);

function buscarPorMarca(laMarca){
    
    if (laMarca === figurita1JS[0].marca){
        return figurita1JS
    }else if (laMarca === figurita2JS[0].marca) {
        return figurita2JS
    }else if (laMarca === figurita3JS[0].marca){
        return figurita3JS
    }
    return "La marca no existe"
}




module.exports = {buscarPorMarca}
