const displayFridays = (fridaysArray) => {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', () => {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
        //caso o texto não tenha sido substituído, ao clicar no botão ele será substituído pelo novo texto;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
        //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
      }
    }
  });
}


const displayFridays = (fridaysArray) => {
	//...
	}
	
	let decemberFridays = [ 4, 11, 18, 25 ];
	displayFridays(decemberFridays);





	const createFridayButton = (buttonName) => {
		let buttonContainer = document.querySelector('.buttons-container');
		let newButton = document.createElement('button');
		let newButtonID = 'btn-friday';
	
		newButton.innerHTML = buttonName;
		newButton.id = newButtonID;
		buttonContainer.appendChild(newButton); //adiciona o botão como filho do container de botões
	}