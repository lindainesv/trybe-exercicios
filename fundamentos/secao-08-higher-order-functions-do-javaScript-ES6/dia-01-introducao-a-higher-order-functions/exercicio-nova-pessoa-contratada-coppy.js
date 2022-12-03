const newEmployees = (gerarEmailPeloNome) => {
  const employees = {
    id1: gerarEmailPeloNome('Pedro Guerra'),
    id2: gerarEmailPeloNome('Luiza Drumond'),
    id3: gerarEmailPeloNome('Carla Paiva'),
  };
  return employees;
};

const gerarEmailPeloNome = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase(/* nome completo em letras minusculas */).replace(' ', '_');
  return { nomeCompleto, email: `${email}@trybe.com` };
};

console.log(newEmployees(gerarEmailPeloNome));
