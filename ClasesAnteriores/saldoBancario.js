let operacionesBancarias = [200,300,-500,-200,100,30,-20,50,5000]

function calcularMovimientos (movimientos){
let depositos = 0
let retiros = 0
let saldo = 0

    for (i = 0; i < movimientos.length; i++){
        saldo = saldo + movimientos[i];

        if (movimientos[i] > 0){
            depositos = depositos + movimientos[i];
        } else {
            retiros = retiros + movimientos[i];
        }

    }
console.log("El monto total de los depositos es de : $" + depositos);
console.log("El monto total de los retiros es de : $" + retiros)
console.log("Por lo tanto, su saldo actual en la cuenta es de: $" + saldo)
}




function calcularMovimientosConNombres (nombre,apellido,callback,operaciones){
 
console.log("Estimado " + nombre + " " + apellido)
callback(operaciones)
}

calcularMovimientosConNombres("Emanuel","Tejerina",calcularMovimientos,operacionesBancarias)
