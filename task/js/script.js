/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
//1
const deleteAds = document.querySelector('.promo__adv');
deleteAds.remove();
//2
const afishaInfo = document.querySelector('.promo__bg');
afishaInfo.children[0].textContent = "драма";
//3
afishaInfo.style.background = "url('./img/bg.jpg') center(center / cover) no - repeat";




const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

//4,5
movieDB.movies.sort();

const movieList = document.querySelectorAll('.promo__interactive-item');

for (let i = 0; i < movieList.length; i++) {

    movieList[i].textContent = `${i+1}. ${movieDB.movies[i]}`;

}