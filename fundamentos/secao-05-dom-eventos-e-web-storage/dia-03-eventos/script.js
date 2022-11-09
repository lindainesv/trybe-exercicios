// gabarito exercicio e explicações de passo a passo
//https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/d8690b8d-eaa4-4344-997c-cd1a2674076f/day/353d541f-9b31-4a51-bdc1-37b126ded6c7/lesson/b9b2e818-570b-4313-ba30-0a95eef4e8cf/solution



const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//  Parte 1
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const createDaysOfTheMonth = () => {
  let getDaysList = document.querySelector("#days");

  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let day = decemberDaysList[i];
    let dayItem = document.createElement("li");
    dayItem.innerHTML = day;

    if (day === 24 || day === 31) {
      //feriados
      dayItem.className = "day holiday";
      getDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      //sexta-feiras
      dayItem.className = "day friday";
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      // feriado e sexta-feira
      dayItem.className = "day holiday friday";
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.className = "day";
      getDaysList.appendChild(dayItem);
    }
  }
};
createDaysOfTheMonth();

// Parte 2
const createHolidayButton = (buttonName) => {
  let buttonContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");
  let newButtonID = "btn-holiday";

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;

  buttonContainer.appendChild(newButton);
};
createHolidayButton("Feriados");

// Parte 3
const criarCorBotao = () => { 
	let selecionarBotaoFeriado = document.querySelector("#btn-holiday");
	let selecionarFeriados = document.querySelectorAll(".holiday");
	let backgroundColor = 'rgb(238,238,238)';
	let selecionarNovaCor = 'white';

selecionarBotaoFeriado.addEventListener("click", () => {

	for (let i = 0; i < selecionarFeriados.length; i +=1 ) {
		if (selecionarFeriados[i].style.backgroundColor === selecionarNovaCor) {
				selecionarFeriados[i].style.backgroundColor = backgroundColor;

		} else {
			selecionarFeriados[i].style.backgroundColor = selecionarNovaCor;
			}
		}
	});
}
criarCorBotao ();

// Parte 4
const criarBotaoSexta = (buttonName) => {
	let buttonContainer = document.querySelector('.buttons-container');
	let newButton = document.createElement("button");
	let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
	buttonContainer.appendChild(newButton);

}
criarBotaoSexta ('Sexta-Feira');

// Parte 5
const mostrarSextas = (listaDeSextas) => { 
	let selecionarBotaoSexta = document.querySelector("#btn-friday");
	let sextas = document.getElementsByClassName("friday");
	let textoDeSexta = 'SEXTOU o/';

	selecionarBotaoSexta.addEventListener("click", () => {

	for (let i = 0; i < sextas.length; i +=1 ) {
		if (sextas[i].innerHTML !== textoDeSexta) {
				sextas[i].innerHTML = textoDeSexta;

		} else {
			sextas[i].innerHTML = listaDeSextas[i];
			}
		}
	});
}
let decemberFridays = [4, 11, 18, 25];
mostrarSextas (decemberFridays);

// Parte 6
const mouseDia = () => {
	let dia = document.querySelector("#days");
	dia.addEventListener("mouseover", (event) => {
	event.target.style.fontSize = '30px'; // Ele pega o evento alvo e altera o estilo de fontSize para 30px
	event.target.style.fontWeight = '600'; 	
});
}

const mouseOut = () => {
	let dia = document.querySelector("#days");
	dia.addEventListener("mouseout", (event) => {
	event.target.style.fontSize = '20px'; // Ele pega o evento alvo e altera o estilo de fontSize para 20px
	event.target.style.fontWeight = '200'; 	
});
}
mouseDia();
mouseOut();

// Parte 7
const adicionaTarefa = (tarefa) => {
	let armazenarTarefas = document.querySelector(".my-tasks");
let nomeTarefa = document.createElement("span");

nomeTarefa.innerHTML = tarefa;
armazenarTarefas.appendChild (nomeTarefa)
}
adicionaTarefa ('projeto')


// Parte 8



/* const createDaysOfTheMonth = () => { 
document.getElementsByClassName("month-container");
decemberDaysList = document.createElement("ul");
decemberDaysList.id = "decemberDaysList	";
ul.appendChild(decemberDaysList);
} */
