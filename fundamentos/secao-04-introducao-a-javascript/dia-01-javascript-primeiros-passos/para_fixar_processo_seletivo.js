
nota = '0';
let pessoaCandidata = 'Informação incorreta';

switch (nota) {
	case '0':
	case '1':
	case '2':
	case '3':
		pessoaCandidata = 'Você foi reprovada(o)';
		break;

	case '4':
	case '5':
	case "6":
	case "7":
		pessoaCandidata = "Você está na nossa lista de espera";
		break;

	case '8':
	case '9':
	case "10":
		pessoaCandidata = "Parabéns, você foi aprovada(o)!";
}


console.log(pessoaCandidata);