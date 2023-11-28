const importar = require("./importar.js");

let hotToys = importar.buscarPorMarca("Hot Toys")
let bandai = importar.buscarPorMarca("Bandai")
let starWars = importar.buscarPorMarca("Star Wars")

let inifiedCollectibles = [...hotToys, ...bandai, ...starWars]

let collectibles = {
    datos: inifiedCollectibles,
    listFiguras: function () {
        this.datos.forEach(function (figura) {
            console.log(figura.nombre)
        })
    },
    figurasByBrand: function (laMarca) {
        let figuritasFiltradas = inifiedCollectibles.filter(function (figuritaMarca) {
            return figuritaMarca.marca === laMarca
        })

        console.log(figuritasFiltradas)

    }
}

collectibles.figurasByBrand("Hot Toys")
