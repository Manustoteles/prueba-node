let dhBici = require('./datosBici.js');

let bicicletas = dhBici.bicicletas

let bicicleteria = {

    buscarBici: function buscarBici(idBuscado) {

        let bicicletaBuscada = bicicletas.filter(function (bicicleta) {
            return bicicleta.id == idBuscado;
        })

        if (bicicletaBuscada.length > 0) {
            return bicicletaBuscada[0]
        } else {
            return null
        }
    },

    venderBici: function venderBici(idBuscado) {
        let bicicletaEncontrado = this.buscarBici(idBuscado)

        if (bicicletaEncontrado != null) {
            bicicletaEncontrado.vendida = "si"
            return bicicletaEncontrado
        } else {
            return "Bicicleta no encontrada"
        }

    },
    biciParaLaVenta: function biciParaLaVenta() {
        let biciEncontadasParaLaVenta = bicicletas.filter(function (bicicleta) {
            return bicicleta.vendida == "si"
        })

        return biciEncontadasParaLaVenta
    },

    totalDeVentas: function totalDeVentas() {
        arrayBicisParaLaVenta = this.biciParaLaVenta()
        let totalBicisParaLaVenta = arrayBicisParaLaVenta.reduce(function (total, bicicleta) {
            return total + bicicleta.precio;

        }, 0)

        return totalBicisParaLaVenta
    }



}

//console.log(bicicleteria.buscarBici(2))

//console.log(bicicleteria.venderBici(4))

//console.log(bicicleteria.biciParaLaVenta())
console.log(bicicleteria.totalDeVentas())
