//DESAFIO ENTREGABLE 1
//El ejercicio consiste en la reserva de entradas para un cine

let cantReservas;
let cantAsientosDisponibles = 10;

while(cantAsientosDisponibles > 0){
    console.log(cantAsientosDisponibles);
    cantReservas= parseInt(prompt("Bienvenido a CineJimenita, por favor ingrese la cantidad de asientos que quiere reservar"));
    if(cantReservas <= 4 && cantReservas <= cantAsientosDisponibles){
        cantAsientosDisponibles = cantAsientosDisponibles - cantReservas;    
        alert("Se han reservado tus asientos")
    } 
    else if(cantReservas >= 5){
        alert("Solo puede reservar un máximo de 4 asientos")
    }
    else if(cantReservas > cantAsientosDisponibles){
        alert("No hay esa cantidad de asientos disponibles en la sala")
    }
    else{
        alert("Por favor, ingrese solo el numero de los asientos que quiera reservar")
    }
    
}
alert("Ya no hay más asientos disponibles en la sala")