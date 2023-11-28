

function CalculoDeAlquiler(tipo, dias, sillaParaBebe){
   
    if (tipo == "Compacto"){
        valorVehiculo = 14000;
    } else if (tipo == "Mediano"){
        valorVehiculo = 17000;
    } else if (tipo == "Camioneta"){
        valorVehiculo = 28000;
    }else{
        return console.log("Error el vehiculo no existe");
    }

    calculoSinSilla = valorVehiculo * dias;

    if (sillaParaBebe == "si"){
        valorFinalCalculado = calculoSinSilla + 1200;
    }else {
        valorFinalCalculado = calculoSinSilla;
    }
    return valorFinalCalculado;
}

let diasDeAlquiler = 6;
let tipoDeVehiculo = "Medno"

console.log("Estimado cliente: en base al tipo de vehículo " + tipoDeVehiculo + " alquilado, considerando los " +  diasDeAlquiler +  " días \n" + 
 "utilizados, el monto total a pagar es de $" + CalculoDeAlquiler(tipoDeVehiculo, diasDeAlquiler, "no"));

