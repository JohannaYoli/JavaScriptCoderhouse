//var respuesta = prompt("Querés seguir viendo la clase?").toLowerCase();

//if(respuesta == "si" || respuesta == "sí") {
//	alert("Seguimos con la clase!");
//} 
//else if (respuesta == "no") {
//	alert("Adiós!");
//}
//else {
//	alert("No entendí, podrías volver a intentar?");
//}

//respuesta == "si" ? alert("Seguimos!") : alert("Adiós!");

//if(respuesta) {
//	alert("Gracias!");
//}



//var nombre = prompt("Cuál es tu nombre?");

//if (nombre) {
//	alert("Bienvenido "+nombre);
//} else {
//	alert("Por favor, ingrese su nombre.");
//}




//var nombre = prompt("Cuál es tu nombre?");

//if (nombre) {
//	nombre == "camila" ? alert ("Hola profe!") : alert("Hola "+nombre+"!");
//}
//else {
//	alert("No escribiste tu nombre!");
//}


//var nombre = prompt("Cuál es tu nombre?");

//switch (nombre.toLowerCase) {
//	case "camila":
//		alert("Hola profe!");
//		break;
//	case "johanna" :
//		alert("Holita!");
//		break;
//	default :
//		alert("Hola "+nombre+"!");
//		break;
//}



/*var listado = ["pan", "leche", "coca", "queso", "manteca"];

for (var i = 0; i < listado.length; i++) {
	console.log("Agregué",listado [i],"a tu compra.");
}*/




/*var listado = ["pan", "leche", "coca", "queso", "manteca"];

for (item in listado) {
	console.log("Agregué",listado [item],"a tu compra.");
}*/



/*var pasos = 0;

while (pasos < 20) {
	pasos++;
	console.log("Diste",pasos);
}*/

//------------------------------------------------------------------------------------------------------------

/*var numero = 0;

while (numero < 100) {
	numero+= 2;
	console.log("Estos son los números pares:",numero);
}

while (numero < 100) {
	numero++;
	console.log("Estos son los números impares:",numero++);
}*/





/*var numero = Math.floor(Math.random()*11);

console.log("Te ha tocado el número",numero);

switch (numero) {
	case 0 :
		console.log("Perdió el juego.");
		break;
	case 1 :
	case 2 : 
	case 3 :
		console.log("Has ganado 5 puntos!");
		break;
	case 4 :
	case 5 :
	case 6 :
		console.log("Has ganado 10 puntos!");
		break;
	case 7 :
	case 8 :
	case 9 :
		console.log("Has ganado 15 puntos!");
		break;
	default :
		console.log("Ganó el juego!");
		break;
}*/

var usuario = prompt("Bienvenido al piedra, papel o tijera!\nElija una opción.");
var opciones = ["piedra", "papel", "tijera"];
var computadora = Math.floor(Math.random()*3);

for (elemento in opciones) {
	if ((usuario == opciones ["piedra"] && computadora == 0) || (usuario == opciones ["papel"] && computadora == 1) || (usuario == opciones ["tijera"] && computadora == 2)) {
		alert("La computadora eligió "+computadora+". Es un Empate!");
		break;
	}
	else if ((usuario == opciones ["piedra"] && computadora == 2) || (usuario == opciones ["papel"] && computadora == 0) || (usuario == opciones ["tijera"] && computadora == 1)) {
		alert("La computadora eligió "+computadora+". Usted ganó!");
		break;
} else {
		alert("La computador elegió "+computadora+". Perdió el juego.");
		break;
	}
}
