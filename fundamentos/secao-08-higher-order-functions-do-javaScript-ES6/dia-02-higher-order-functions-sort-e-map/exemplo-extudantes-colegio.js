const estudantes = [
  {
    nome: "Jorge",
    sobrenome: "Silva",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 67 },
      { name: "Português", nota: 79 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 65 },
    ],
  },
  {
    nome: "Mario",
    sobrenome: "Ferreira",
    idade: 15,
    turno: "Tarde",
    materias: [
      { name: "Matemática", nota: "59" },
      { name: "Português", nota: "80" },
      { name: "Química", nota: "78" },
      { name: "Biologia", nota: "92" },
    ],
  },
  {
    nome: "Jorge",
    sobrenome: "Santos",
    idade: 15,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "76" },
      { name: "Português", nota: "90" },
      { name: "Química", nota: "70" },
      { name: "Biologia", nota: "80" },
    ],
  },
  {
    nome: "Maria",
    sobrenome: "Silveira",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "91" },
      { name: "Português", nota: "85" },
      { name: "Química", nota: "92" },
      { name: "Biologia", nota: "90" },
    ],
  },
  {
    nome: "Natalia",
    sobrenome: "Castro",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "70" },
      { name: "Português", nota: "70" },
      { name: "Química", nota: "60" },
      { name: "Biologia", nota: "50" },
    ],
  },
  {
    nome: "Wilson",
    sobrenome: "Martins",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "80" },
      { name: "Português", nota: "82" },
      { name: "Química", nota: "79" },
      { name: "Biologia", nota: "75" },
    ],
  },
];

// Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.

// Usando o 'for':
const allNameStudents = [];
for (let index = 0; index < estudantes.length; index += 1) {
  if (estudantes[index].turno === "Manhã") {
    allNameStudents.push(
      `${estudantes[index].nome} ${estudantes[index].sobrenome}`
    );
  }
}
console.log(allNameStudents);

// Com forEach:

// Com map e filter:
const allNameStudents1 = estudantes
  .filter((estudante) => estudante.turno === "Manhã")
  .map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);
console.log(allNameStudents);

// Saiba mais 💡: Você pode juntar duas HOFs para resolver o problema acima. Nesse caso, poderiam ser utilizadas as HOFs map e filter. O filter possui a mesma estrutura do forEach, map, entre outros, e é responsável por retornar um array filtrado de acordo com alguma condição. Então o map itera pelo array filtrado e retorna o nome e sobrenome da pessoa estudante. Caso queira saber mais, clique aqui.

// Buscar um estudante pelo nome e retornar a situação dele em cada matéria:
// Apenas com for:
const findStudent = (name, students) => {
  for (let index = 0; index < students.length; index += 1) {
    if (students[index].nome === name) {
      return students[index];
    }
  }
};
const reportStatus = (name, students) => {
  const getStudent = findStudent(name, students);
  const report = [];
  for (let index = 0; index < getStudent.materias.length; index += 1) {
    if (getStudent.materias[index].nota >= 60) {
      report.push(`${getStudent.materias[index].name} Aprovado`);
    } else {
      report.push(`${getStudent.materias[index].name} Reprovado`);
    }
  }
  return report;
};
console.log(reportStatus("Natalia", estudantes));

// Usando o map com um find:
const reportStatus2 = (name, students) => {
  const studentInfo = students.find((student) => student.nome === name);
  return studentInfo.materias.map(
    (materia) =>
      `${materia.name} ${materia.nota >= 60 ? "Aprovado" : "Reprovado"}`
  );
};
console.log(reportStatus2("Natalia", estudantes));

// Primeiro, fizemos um find para buscar e retornar os dados do estudante. O objeto foi retornado e salvo na variável studentInfo, depois o map foi usado para percorrer as matérias do objeto retornado e salvar o que se queria em um array da forma desejada.
