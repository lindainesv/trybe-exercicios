'''
🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas",
"Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

'''


def lista(nomes):
    maiorNome = nomes[0]
    for nome in nomes:
        if len(nome) > len(maiorNome):
            maiorNome = nome
    return maiorNome
