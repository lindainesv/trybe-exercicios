import json  # json é um modulo que vem embutido, porém precisamos importá-lo


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]
    # content = file.read()  # leitura do arquivo
    # pokemons = json.loads(content)["results"]  # o conteúdo é transformado
    # em estrutura python equivalente, dicionário neste caso.
    # acessamos a chave results que é onde contém nossa lista de pokemons

# Separamos somente os do tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

# Abre o arquivo para escrevermos apenas o pokemons do tipo grama
with open("grass_pokemons.json", "w") as file:
    # json_to_write = json.dumps(
    # grass_type_pokemons
    # )  # conversão de Python para o formato json (str)
    # file.write(json_to_write)
    json.dump(grass_type_pokemons, file)

# print(pokemons[0])  # imprime o primeiro pokemon da lista
