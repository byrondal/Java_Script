

const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minicraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersU = streamers.filter(streamer => streamer.name.includes('u'));

console.log(streamersU);


