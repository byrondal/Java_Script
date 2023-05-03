

const users = [
    {id: 1, name: 'Abel'},
    {id: 2, name: 'Julia'},
    {id: 3, name: 'Pedro'},
    {id: 4, name: 'Amanda'}
];

const userList = users.map(({name}) => ({
    name: name.startsWith('A') ? 'Anacleto' : name
}));

console.log(userList);


