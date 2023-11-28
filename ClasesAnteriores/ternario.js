let pagoMes = 1500;
let consumoKWH = 301;

let valorAPagar = consumoKWH > 300 ? pagoMes*1.20 : pagoMes;

console.log("Debido a que su hogar tuvo un consumo de " + consumoKWH + "kwh, en base al ajuste tarifario\n" +
"(hogares con consumo mayor a 300kwh por mes tendran un aumento del 20%, \n" +
"cumplimos con informarle que se ha ajustado el total a pagar, que sera de $" + valorAPagar

)