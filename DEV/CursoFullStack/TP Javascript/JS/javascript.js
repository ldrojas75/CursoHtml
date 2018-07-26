var total, numero1, numero2;

function totalPagar(numero1, numero2){
    total = numero1 * numero2;
    return total;
};

var granTotal = totalPagar(10, 20);
var calculadora = document.getElementById('resultado').innerHTML = granTotal + " pesos";

/*

const IMPUESTO = .21;
var cantidad;
function totalPagar(numero){
    numero = numero + (numero * IMPUESTO);
    return numero;
};

var resultado = totalPagar(100);
console.log("El total a pagar es: " + resultado);



console.log("-------------")



// Usando el if
var edad1 = 30 ;
var edad2 = 20 ;

if(edad1>edad2){console.log("edad1 es mayor")}
else if (edad1==edad2) {console.log("son iguales")}
else {console.log("edad2 es mayor")}
;



var cantidadAPagar = 300;
var saldo = 500 ;
if (cantidadAPagar>saldo) {console.log("No alcanza para pagar")
} else {
    console.log("El pago se realizó con éxito")
};

*/

/*
var texto = "Esto es una cadena de texto"

//-------------------------------

var fecha = new Date();
console.log("el año actual es " + fecha.getFullYear());
console.log("el año día es " + fecha.getDate());
console.log("el día de la semana " + fecha.getDay());
console.log("la hora actual es " + fecha.getHours());
console.log("los minutos actual es " + fecha.getMinutes());
//-------------------------------

*/


/*

var nombre = prompt('Como te llamas?');
var pais = prompt('De donde eres?');
alert("Bienvenido " + nombre + " de " + pais);

*/

//comentario de una sola linea

/*
var modelo = 'Mustang';
var motor = 5.5 ;
console.log(modelo) ;
console.log(motor) ;
*/

/*
var auto = {
	nombre : 'mustang',
	motor : 5.5 ,
	anio : 1975,
	clasico: true,
	color: "azul"
};

console.log(auto.nombre);
console.log(auto.motor);
console.log(auto.anio);
console.log(auto.clasico);
console.log(auto.color);
*/
console.log("Filtro");

var PremierLeague = ["Chelsea", "Manchester United", "Liverpool", "Arsenal"];

var NuevoArreglo = PremierLeague.filter(function(equipo) {
    return (equipo !== 'Chelsea')
});

console.log(NuevoArreglo);
