

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sum = exams.reduce((acc,exam) => acc + exam.score, 0); //se pone el cero porque es el primer valor 

console.log(sum);



const sumPased = exams.filter(exam => exam.score >= 5)
    .reduce((acc,exam) => acc + exam.score, 0);

console.log(sumPased);

const avarageScores = sum / exams.length;

console.log(avarageScores);


