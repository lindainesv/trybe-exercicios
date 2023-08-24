import json
import csv


# Função para recuperar o arquivo livros
def recupera_livros(file):
    return json.load(file)


# Função para calcular quantidade de livros por categoria
def categorias_livros(livros):
    categorias = {}
    for livro in livros:
        for categoria in livro["categories"]:
            if not categorias.get(categoria):
                categorias[categoria] = 0
            categorias[categoria] += 1
    return categorias


# Função para calcular percentual de livros por categoria
def calcular_percentual_por_categoria(calculo_por_categoria, total):
    return [
      [categoria, num_livros / total]
      for categoria, num_livros in calculo_por_categoria.items()
    ]


# Função para escrever o csv
def escrever_csv(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    # recuperar
    with open("livros.json") as file:
        livros = recupera_livros(file)

    # contar
    calcular_livros_por_categoria = categorias_livros(livros)

    # calcular
    numero_de_livros = len(livros)
    porcentagem_por_tipo_de_livros = calcular_percentual_por_categoria(
      calcular_livros_por_categoria, numero_de_livros
    )

    # escrever
    header = ["categoria", " percentagem"]
    with open("livros.csv", "w") as file:
        escrever_csv(file, header, porcentagem_por_tipo_de_livros)
