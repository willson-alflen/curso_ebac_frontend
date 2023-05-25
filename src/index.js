/*
 * EXERCÍCIO MÓDULO 25 - RECURSOS DO ES6+
 */

/*
1- Crie um array de objetos, onde teremos como atributos 
do objeto: o nome e a nota de alunos;
*/

// classe da abstração aluno
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

// array com instâncias de alunos
const students = [
  new Student("João", 73),
  new Student("Maria", 96),
  new Student("Everton", 87),
  new Student("Marcos", 45),
  new Student("Daniela", 59),
  new Student("Elis", 78),
];

console.log(students);
console.log(students[0].name);
console.log(students[1].grade);

/*
2- Crie uma função que irá retornar apenas os alunos
que tiveram nota maior ou igual à 6
*/

// função que recebe como argumento um array e utiliza o método filter
function getPassingStudents(array) {
  return array.filter((student) => student.grade >= 60);
}

// armazenamento do retorno da função aplicada ao array "students"
const passingStudents = getPassingStudents(students);

console.log(passingStudents);
