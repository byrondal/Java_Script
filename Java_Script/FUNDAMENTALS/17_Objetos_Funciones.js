const getMaxCapacityFromVehicles = (vehicles) => {
    let maxCapacity = 0;

for(let i = 0; i < vehicles.length; i++) {
    const vehicle = vehicles[i];
    if (vehicle.capacity > maxCapacity) {
        maxCapacity = vehicle.capacity;
    }
}
    return maxCapacity;
}

const getFavoriteVehicle = (vehicles) => {
    for(let i = 0; i < vehicles.length; i++){
        const vehicle = vehicles[i];
        if(vehicle.favorite === true) {
            return vehicle;
        }
    }
   
}


const person = {
    name: 'Miguel',
};


const vehicles = [
    {
        model: 'Seat Ibiza',
        capacity: 5,
        favorite: false,
    },
    {
        model: 'Mercedes Vito',
        capacity: 8,
        favorite: false,
    },
    {
        model: 'Kawasaki Ninja',
        capacity: 2,
        false: true,
    },
];


const maxCapacity = getMaxCapacityFromVehicles(vehicles);
console.log(`En mis vehiculos tengo una capacidad maxima de ${maxCapacity} personas `);


const favoriteVehicle = getFavoriteVehicle(vehicles);
person['vehicle'] = favoriteVehicle;
console.log(`La persona tiene estos valores:`, person)

