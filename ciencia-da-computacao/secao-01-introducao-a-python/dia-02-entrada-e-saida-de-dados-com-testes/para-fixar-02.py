numeros = input("Digite numeros separados por um espaço: ")

numero_arr = numeros.split(" ")

soma = 0
for num in numero_arr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} é um valor inválido.")
    else:
        soma += int(num)
        print(f"A soma dos valores digitados é: {soma}")
