// 🚀 Altere a expressão if/else utilizando ternary operator;

let speed = 90;
const speedCar = (speed) => {
	if (speed >= 120) {
		return `Você ultrapassou o limite de velocidade`;
	} else {
		return `Você está na velocidade permitida`;
	}
};
console.log(speedCar(speed));