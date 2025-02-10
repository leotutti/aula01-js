// Exibir o console
// console só existe no navegador
console.log('Olá, sou o console');
console.log('Eu exibo conteúdo');

// variáveis
// let/const
// camelCase
let rmAluno = 666;
let nomeAluno = 'Rivaldo Jesus';
let turmaAluno = '3TI'
const ESCOLA_ALUNO = 'Lourdão';

console.log(rmAluno, nomeAluno);
console.log(turmaAluno, ESCOLA_ALUNO);

// concatenação - péssima prática, mas muito comum
console.log('Nome do Aluno: ' + nomeAluno + ' RM do Aluno: ' + rmAluno);

// Template String
console.log(`Nome do aluno ${nomeAluno} Rm do aluno ${rmAluno}`);

turmaAluno = '3A';
console.log(`turma do aluno ${turmaAluno}`);

turmaAluno = '3AC';
console.log(`turma do aluno ${turmaAluno}`);

// constante nao muda
ESCOLA_ALUNO = 'FIAP';
                               
console.log('Alterando o arquivo JS, executando um novo commit');

