"use strict";
console.log("Запуск приложения")
const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Подготовка данных...");

        const product = {
            name: "TV",
            price: 2000
        };

        resolve(product);
    }, 2000);
});
req.then((product) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Данные получены");
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then(product => {
    product.modify = "true";
    return product;

}).then((data) => {
    console.log(data);
})



// req.then((product) => {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             console.log(product);
//             resolve(product);
//         }, 2000);
//     });
// }).then(product => {
//     console.log(product);
// })


// setTimeout(() => {

// }, 2000);