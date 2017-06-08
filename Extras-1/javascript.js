/*var numero = 0;

while (numero < 100) {
	numero+= 2;
	console.log("Estos son los números pares:",numero);
}

while (numero < 100) {
	numero++;
	console.log("Estos son los números impares:",numero++);
}*/


//--------------------------------------------------------------------------------------------------------------------------------

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



//------------------------------------------------------------------------------------------------------------------------------



var opciones = ["piedra", "papel", "tijera"];

for (;;){

	var usuario = prompt("Bienvenido al piedra, papel o tijera!\nElija una opción.");
	var computadora = Math.floor(Math.random()*3);

	if (computadora==0) {
		computadora="piedra";
	} else if (computadora==1) {
		computadora="papel";
	} else if (computadora==2) {
		computadora="tijera";
	} else {
		alert("Ingrese una opción válida.");
	}

	for (cosas in opciones) {
		if (usuario == opciones [0] && computadora == "piedra") {
			alert("La computadora eligió "+computadora+". Es un Empate!");
			break;
		}
		else if (usuario == opciones [1] && computadora == "papel") {
			alert("La computadora eligió "+computadora+". Es un Empate!");
			break;
		}
		else if (usuario == opciones [2] && computadora == "tijera") {
			alert("La computadora eligió "+computadora+". Es un Empate!");
			break;
		}
		else if (usuario == opciones [0] && computadora == "tijera") {
			alert("La computadora eligió "+computadora+". Usted ganó!");
			break;
		}
		else if (usuario == opciones [1] && computadora == "piedra") {
			alert("La computadora eligió "+computadora+". Usted ganó!");
			break;
		}
		else if (usuario == opciones [2] && computadora == "papel") {
			alert("La computadora eligió "+computadora+". Usted ganó!");
			break;
		}
		else if (usuario == opciones [0] && computadora == "papel") {
			alert("La computadora eligió "+computadora+". Perdió el juego.");
			break;
		}
		else if (usuario == opciones [1] && computadora == "tijera") {
			alert("La computadora eligió "+computadora+". Perdió el juego.");
			break;
		}
		else if (usuario == opciones [2] && computadora == "piedra") {
			alert("La computadora eligió "+computadora+". Perdió el juego.");
			break;
		}
		else {
				alert("Ingrese una opción válida.");
				break;
			}
    }
}