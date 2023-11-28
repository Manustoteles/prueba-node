var fs = require('fs');

// traigo el JSON en formato utf-8
const datosBici = fs.readFileSync("./bicicletas.json","utf-8");
// conveierto el JSON en un array de objetos
const bicicletas = JSON.parse(datosBici)

module.exports = { bicicletas}