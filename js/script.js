/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


"use strict";


let personalMovieDB = {
    count: {},
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start() {
        for (;;) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
            if (this.count !== "" && this.count !== null && !isNaN(this.count)) {
                break;
            }
            alert("ответ не может быть в виде пустой строки, вы не можете отменить ответ или ввести не цифровое значение.\nПовторите попытку");
        }
    },
    rememberMyFilms() {
        let count = 0,
            filmName,
            filmGrade;

        while (count < 2) {
            filmName = prompt("Один из последних просмотренных фильмов?", "");

            if (filmName == null || filmName.length == 0 || filmName.length > 50) {
                alert("ответ не может быть в виде пустой строки, вы не можете отменить ответ или ввести название фильма длинее, чем 50 символов.\nПовторите попытку");
                continue;
            }
            filmGrade = +prompt("На сколько оцените его?", "0");
            if (filmGrade == null || filmGrade.length == 0 || filmGrade > 10) {
                alert("ответ не может быть в виде пустой строки, вы не можете отменить ответ или ввести значение больше 10.\nПовторите попытку");
                continue;
            }

            this.movies[filmName] = filmGrade;

            count++;

        }
    },
    detectPersonalLevel() {
        if (this.count <= 10)
            console.log('Просмотрено довольно мало фильмов');
        else if (this.count <= 30)
            console.log('Вы классический зритель');
        else if (this.count > 30)
            console.log('Вы киноман');
        else
            console.log('Произошла ошибка');
    },
    toggleVisibleMyDB() {
        this.privat = !this.privat;
    },
    showMyDB() {
        if (this.privat)
            console.log('Нет доступа')
        else
            console.log(personalMovieDB);
    },
    writeYourGenres() {
        for (let i = 0; i < 1; i++) {

            this.genres = prompt(`Введите ваши любимы жанры через запятую`, "").toLowerCase().split(",");
            if (this.genres == null || this.genres == "") {
                i--;
                alert("ответ не может быть в виде пустой строки, и вы не можете его отменить.\nПовторите попытку");
            }
        }
        // this.genres.sort();

        this.genres.sort().forEach((elem, index) => {
            console.log(`Любимый жанр ${index+1} это ${elem}`);
        });
    }

};


personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();