def validate_email(email):
    index = 0
    # validar primeira letra
    if not email[index].isalpha():
        # sem o "not" retorna "false", com o "not" retorna "true"
        raise ValueError("Username deve começar com uma letra")

    # validar username
    while email[index] != "@" and index < len(email):
        letter = email[index]
        if (
          not letter.isalpha()
          and not letter.isdigit()
          and letter not in ("_", "-")
        ):
            raise ValueError(
              "Username deve conter apenas letras,"
              "digitos, travessões ou sublinhados"
            )
        index += 1
    index += 1  # garante que o codigo pule o "@"

    # validar website
    while email[index] != "." and index < len(email):
        letter = email[index]
        if not letter.isalpha() and not letter.isdigit():
            raise ValueError(
              "Website deve conter somente letras e digitos"
            )
        index += 1
    index += 1  # garante que o codigo pule o ponto "."

    # validar extensão
    counter = 0
    while index < len(email):
        counter += 1
        index += 1

    if counter > 3:
        raise ValueError("Extensão deve conter no maximo 3 letras")
    return None
