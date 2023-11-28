let conjuntoDePeliculas = ["Turno de dia", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor:amor y trueno"]


function LaPeliculaMasVendida(nombrePelicula){
    let existe = conjuntoDePeliculas.includes(nombrePelicula);
    let nombrePeliculaMay = nombrePelicula.toUpperCase();

    
    if (existe){
        let peliculasAString = conjuntoDePeliculas.join(",")
        let pliculasSinPelicula = peliculasAString.replace(nombrePelicula,"")
        let peliculaAArrow = pliculasSinPelicula.split(",")
        peliculaAArrow.unshift(nombrePeliculaMay)

        console.log(peliculaAArrow);
       
     } else {
        console.log("La Pelicula no fue encontrada");
     }
}

LaPeliculaMasVendida("Top gun maverick")