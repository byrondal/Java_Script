console.log('Hola, me llama JavaScript')

const title = document.querySelector('h1') // va a buscar el primer elemento h1

console.log(title)

title.innerText = 'Aprendemos selectores con JS';

const secondTitle = document.querySelector('h2'); // si queremos elegir el último h2: "h2:last-of-type" o poner un ide en html
console.log('secondTitle:', secondTitle);

const studyTitle = document.getElementById('study');
console.log('studyTitle:', studyTitle);

const technologies = document.getElementsByClassName('technology');
console.log('Technologies', technologies);

for(let i = 0; i < technologies.length; i++){
    const technology = technologies[i];
    const prevText = technology.innerText;
    technology.innerText = `${i + 1} - ${prevText}`;
}

const thepower_url = 'https://www.iberia.com/'
const titleLink = document.querySelector('h2.title_link > a');
console.log('Title Link', titleLink);
titleLink.href = thepower_url
