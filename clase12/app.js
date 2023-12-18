autosImportados = require("./autos")

let concesionaria = {
    autos: autosImportados,

    buscarAuto : function (nroPatente) {
        const autoBuscado = this.autos.find(function (auto) {
            return auto.patente == nroPatente
        })
        if (autoBuscado) {
            return autoBuscado
        } else {
            return null
        }
    },
    venderAuto: function (nroPatente) {
        let autoBuscado = this.buscarAuto(nroPatente)
        if (autoBuscado) {
            return autoBuscado.vendido = true;
        } else {
            return null
        }
    },
    autosParaLaVenta: function () {
        let autosEnStock = this.autos.filter(function (auto) {
            return auto.vendido == false;
        })
        return autosEnStock
    },
    autosNuevos: function () {
        let autosAEvaluar = this.autosParaLaVenta();
        let autosListoParaLaVenta = autosAEvaluar.filter(function (auto) {
            return auto.km < 100
        })
        return autosListoParaLaVenta
    },
    listaDeVentas: function () {
        let autosVendidos = this.autos.filter(function (auto) {
            return auto.vendido === true;
        });
        return autosVendidos.map(function (auto) {
            return auto.precio;
        });
    },
    totalDeVentas: function () {
        let autosVendidos = this.listaDeVentas()
        if (autosVendidos.length === 0) {
            return 0;
        } else {
            let sumatoriaVendidos = autosVendidos.reduce(function (acumulador, precio) {
                return acumulador + precio;
            })
            return sumatoriaVendidos;
        }
    },
    puedeComprar: function (auto, persona) {

        let costoTotal = auto.precio;
        let costoCuota = auto.precio / auto.cuotas;
        return (persona.capacidadDePagoTotal >= costoTotal) && (persona.capacidadDePagoEnCuotas >= costoCuota);
    },
    autosQuePuedeComprar: function (persona) {
        return this.autosParaLaVenta().filter((auto) =>
           this.puedeComprar(auto, persona)
        );
     },
}

console.log(concesionaria.buscarAuto("jjj"))


