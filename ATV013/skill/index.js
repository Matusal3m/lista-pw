const alunos = [
  { nome: "Pedro", idade: 18, skills: ["Javascript", "HTML", "Java"] },
  { nome: "Maria", idade: 46, skills: ["Cobol", "Go", "React Native"] },
  { nome: "Joaquim", idade: 20, skills: ["Java", "C#"] },
  { nome: "Lucas", idade: 17, skills: ["Python", "C++"] },
  { nome: "Ana", idade: 15, skills: ["C", "C++", "Ruby"] },
];

const findSkill = (aluno, skill) => {
  const filtroAluno = aluno.filter((aluno) => aluno.skills.includes(skill));

  if (filtroAluno.length === 0)
    return "Não foi possível encontrar a skill desejada";

  const nomeDosAlunos = filtroAluno.map((aluno) => aluno.nome);

  return nomeDosAlunos;
};

const skillJava = findSkill(alunos, "Java");

console.log(skillJava);
