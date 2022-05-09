/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


"use strict";

let numberOfFilms;
let fstQuestion;
let fstQuestionPart2;
let count = 0;

let personalMovieDB = {
    count: {},
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {

    for (;;) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        if (numberOfFilms !== "" && numberOfFilms !== null && !isNaN(numberOfFilms)) {
            personalMovieDB.count = numberOfFilms;
            break;
        }
        alert("ответ не может быть в виде пустой строки, вы не можете отменить ответ или ввести не цифровое значение.\nПовторите попытку");
    }
}

function rememberMyFilms() {
    while (count < 2) {
        fstQuestion = prompt("Один из последних просмотренных фильмов?", "");

        if (fstQuestion == null || fstQuestion.length == 0 || fstQuestion.length > 50) {
            alert("ответ не может быть в виде пустой строки, вы не можете отменить ответ или ввести название фильма длинее, чем 50 символов.\nПовторите попытку");
            continue;
        }
        fstQuestionPart2 = +prompt("На сколько оцените его?", "0");
        if (fstQuestionPart2 == null || fstQuestionPart2.length == 0 || fstQuestionPart2 > 10) {
            alert("ответ не может быть в виде пустой строки, вы не можете отменить ответ или ввести значение больше 10.\nПовторите попытку");
            continue;
        }

        personalMovieDB.movies[fstQuestion] = fstQuestionPart2;

        count++;

    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10)
        console.log('Просмотрено довольно мало фильмов');
    else if (personalMovieDB.count <= 30)
        console.log('Вы классический зритель');
    else if (personalMovieDB.count > 30)
        console.log('Вы киноман');
    else
        console.log('Произошла ошибка');
}

function showMyDB(privatStatus) {
    if (!privatStatus)
        console.log(personalMovieDB);
    else
        console.log('Нет доступа')

}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {

        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${ i + 1 }`, "");

    }
}

start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);