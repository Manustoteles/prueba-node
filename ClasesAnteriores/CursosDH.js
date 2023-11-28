
const cursos = [["html5", 4000],["css3", 5000],["javascript", 10000],["react",7000],["nodejs",15000]];

const cursosATomar =["CSS3","NODEJS"];


function totalAPagar(cursos,cursosATomar){
let montoTotalAPagar = 0;


for (let i = 0; i < cursosATomar.length; i++){
    for (let j = 0; j < cursos.length;j++){
            if (cursos[j][0] === cursosATomar[i].toLowerCase()){
                montoTotalAPagar = montoTotalAPagar + cursos[j][1];
            }
        }
 
    }
return montoTotalAPagar;
}

function datosDelAlumno(nombre, apellido, callback, cursos,cursosATomar){

let callbackTotalAPAgar = callback(cursos,cursosATomar)

let mensaje = "Estimado " + nombre + " " + apellido + " los cursos seleccionados son: \n" 

let j = 1
while (cursosATomar.length != 0){
    mensaje = mensaje + j + ".- " + cursosATomar.pop() + "\n"
    j++
}

mensaje = mensaje + "El monto total a Pagar es de: $" + callbackTotalAPAgar + "\n"

mensaje = mensaje + "Bienvenido a la gran aventura Digital House."

return mensaje

}


console.log(datosDelAlumno("Emanuel","Tejerina",totalAPagar,cursos,cursosATomar));
