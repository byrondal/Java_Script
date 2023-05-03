

const cities = [
    {isVisited: true, name:'Tokyo'},
    {isVisited: false, name: 'Madagascar'},
    {isVisited: true, name: 'Amsterdam'},
    {isVisited: false, name: 'Seul'}
];


const visitiedCities = cities.map(city => {
    return {
        name: city.isVisited ? city.name + ' (Visitado)' : city.name
    }
});


console.log(visitiedCities);


