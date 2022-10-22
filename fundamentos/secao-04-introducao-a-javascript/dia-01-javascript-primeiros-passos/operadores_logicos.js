const currentHour = 10;
let message = "";

if (currentHour >= 22) {
	console.log("Não deveriamos comer nada, é hora de dormir.");
} else if (currentHour >= 18 && currentHour < 22) {
	console.log("Rango da noite, vamos jantar :D");
} else if (currentHour >= 14 && currentHour<18) {
	console.log("Vamos fazer um bolo pro café da tarde?");
} else if (currentHour >= 11 && currentHour <14) {
	console.log("Hora do almoço!!!");
} else if (currentHour >= 4 && currentHour <11) {
	console.log("Hmmm, cheirinho de café recém-passado");
} 

console.log(message);