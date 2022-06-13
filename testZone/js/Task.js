console.log("Запуск приложения")

const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Загрузка данных");
        resolve();

    }, 2000);
});

prom.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Данные загружены");
            const obj = {
                name: "Tv-box",
                price: 3000
            };
            resolve(obj);
        }, 2000);
    });
}).
then(obj => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Данные изменены");
            obj['order'] = true;
            console.log(obj);
            resolve(obj);
        }, 2000);
    });
}).then(obj => {
    setTimeout(() => {
        console.log("Заказ отправлен");
        obj['status'] = "delivery";
        console.log(obj);
    }, 2000);
});