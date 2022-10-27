    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    const pessoa = {
      nome: 'Henri',
      idade: 20
    }
    // pessoa.nome, pessoa.idade = {
    //   nome: 'Luna',
    //   idade: 19
    // }
		pessoa.nome = "Luna"
		pessoa.idade = 19

		//que outra forma eu posso utilizar alem dessa que é declarar 'pessoa.x'?
		
		// Altere essa estrutura para corrigir o erro.
    console.log('Nome:', pessoa.nome);
    console.log('Idade:', pessoa.idade);