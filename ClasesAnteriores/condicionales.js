let perfil = "Asistente";

/*if (perfil.toLowerCase() == " ")
{
    console.log("Debe especificar el perfil del usuario")
}else if (perfil == "administrador"){

    console.log("Usted tiene todos los privilegios de uso del sistema")
}else if (perfil == "asistente"){
    console.log("Usted solo tiene permisos de registrar, modificar y consultar datos")

}else if (perfil == "invitado"){
    console.log("Usted solo tiene permiso de consultar datos")
}else{
    console.log("Debe especificar un perfil valido")
}*/

switch(perfil.toLowerCase()){
    case " ":
        console.log("Debe especificar el perfil del usuario")
        break;
        case "administrador":
            console.log("Usted tiene todos los privilegios de uso del sistema")
            break;
        case "asistente":
            console.log("Usted solo tiene permisos de registrar, modificar y consultar datos")
            break;
        case "invitado":
            console.log("Usted solo tiene permiso de consultar datos")
            break;
        default:
            console.log("Debe especificar un perfil valido")
}