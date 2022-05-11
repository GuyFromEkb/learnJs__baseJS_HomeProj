"use strict";

let obj = {
    count: "2",
    movies: 1024,
    actors: {
        color: 'red',
        backgroud: 'black'
    },
    genres: [8, 12, 24, 33],
    privat: false
};

for (let key in obj) {
    console.log(`свойство ${key} имеет значение ${obj[key]}`);
}
// for (const key in object) {
//     if (Object.hasOwnProperty.call(obje, key)) {
//         console.log(`свойство ${key} имеет значение ${obje[key]}`);

//     }
//     console.log(`свойство ${key} имеет значение ${obj[key]}`);

// }