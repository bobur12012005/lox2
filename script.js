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
console.log(Object.assign(bobur_and_his_lovely_car, {user}, {car}));

let keys1 = Object.keys(bobur_and_his_lovely_car);
let keys2 = Object.keys(user);
let keys3 = Object.keys(user.passport);
let keys4 = Object.keys(user.ratio);
let keys5 = Object.keys(user.family_members);
let keys6 = Object.keys(car);
let keys7 = Object.keys(car.tech_passport);
let keys8 = Object.keys(car.sports_characteristics);
console.log(keys1, keys2, keys3, keys4, keys5, keys6, keys7, keys8);

let values1 = Object.values(bobur_and_his_lovely_car);
let values2 = Object.values(user);
let values3 = Object.values(user.passport);
let values4 = Object.values(user.ratio);
let values5 = Object.values(user.family_members);
let values6 = Object.values(car);
let values7 = Object.values(car.tech_passport);
let values8 = Object.values(car.sports_characteristics);
console.log(values1, values2, values3, values4, values5, values6, values7, values8);

let all1 = Object.entries(bobur_and_his_lovely_car);
let all2 = Object.entries(user);
let all3 = Object.entries(user.passport);
let all4 = Object.entries(user.ratio);
let all5 = Object.entries(user.family_members);
let all6 = Object.entries(car);
let all7 = Object.entries(car.tech_passport);
let all8 = Object.entries(car.sports_characteristics);
console.log(all1, all2, all3, all4, all5, all6, all7, all8);