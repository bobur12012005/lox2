let user = {
    name: 'bruno',
    surname: 'McGreen',
    age: 13,
    passport: {
        serries: 'AD',
        number: 1123456786421,
        born: '12-01-2005',
        gender: 'male',
    },
    ratio: {
        height: 175,
        weight: 70,
    },
    status: 'not-married',
    family_members: {
        father: 'John',
        mother: 'Suzy',
        brother: 'Tom',
        sister: 'Saly',
    }
}

let car = {
    model: 'Lamborghini Terzo Millenio',
    company: 'Lamborghini',
    country: 'Italy',
    tech_passport: {
        year: 2017,
        type: 'electric',
        number_of_engines: 4,
    },
    sports_characteristics: {
        acceleration: 2,
        max_speed: 400,
    }
}

let bobur_and_his_lovely_car = {}
console.log(Object.assign(bobur_and_his_lovely_car, user, car));

let keys = Object.keys(bobur_and_his_lovely_car);
let values = Object.values(bobur_and_his_lovely_car);
let all = Object.entries(bobur_and_his_lovely_car);
console.log(keys,values, all);