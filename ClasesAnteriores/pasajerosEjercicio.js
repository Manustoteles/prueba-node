function reporteDePasajeros(cantidadEstaciones){
    let listaReporteDePasajeros = []
    let cantidadDePasajeros = 0

    for (i = 0; i < cantidadEstaciones + 1; i++){
        if (i ===0 ){
             cantidadDePasajeros = 200;
        }else if (i === 5){
             cantidadDePasajeros = cantidadDePasajeros + 120 - 80;
            
        } else {
             cantidadDePasajeros = cantidadDePasajeros + 50 - 30;
        }
        listaReporteDePasajeros.push("En la estación " + i + " hay " + cantidadDePasajeros + " pasajeros arriba del tren")

    }
    return listaReporteDePasajeros
}


function reporteDePasajeros (cantidadEstaciones){
     let pasajeros = 200;
    let reportes = [];
    let estacion = 0;
    do{
     reportes.push("En la estación " + estacion + " hay " + pasajeros + " pasajeros arriba del tren")
     estacion++;
    if(estacion !== 5){
     pasajeros += 20;
    }else{
     pasajeros += 40;
    }
    } while(estacion <= cantidadEstaciones)
    return reportes;
    }
    
console.log(reporteDePasajeros(5))