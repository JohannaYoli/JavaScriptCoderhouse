/*var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

for (dia in dias) {
	
	if (dias [dia] == "sabado" || dias [dia] == "domingo") {
		console.log("Hoy",dias[dia],", fin de semana!");
	}	else {
		console.log("Hoy",dias[dia],", es día de semana.")
	
	}
}*/



/*var usuario = prompt("Bienvenido! Ingrese un día de la semana para continuar.").toLowerCase();
var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

for (dia in dias) {
	
	if (usuario == dias [0] || usuario == dias [1] || usuario == dias [2] || usuario == dias [3] || usuario == dias [4]) {
		alert("Hoy "+usuario+", es día de semana.");
		break;
	}	else if (usuario == dias [5] || usuario == dias [6]) {
		alert("Hoy "+usuario+", es fin de semana!");
		break;
	} else {
		alert("Ingrese un día válido.");
		break;
	}
}*/

var usuario = prompt("Bienvenido! Ingrese un día de la semana para continuar.").toLowerCase();
var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

for (dia in dias) {
	
	if (usuario == dias [5] || usuario == dias [6]) {
		alert("Hoy "+usuario+", es fin de semana!.");
		break;
	}	else if (usuario == dias [dia]) {
		alert("Hoy "+usuario+", es día de semana.");
		break;
	} else {
		alert("Ingrese un día válido.");
		break;
	}
}
