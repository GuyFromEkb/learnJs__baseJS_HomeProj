/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const deleteAds = document.querySelector('.promo__adv'),
    formFilm = document.querySelector('.add'),
    formInput = formFilm.querySelector('.adding__input'),
    formChekbox = formFilm.querySelector('[type="checkbox"]'),
    afishaInfo = document.querySelector('.promo__bg'),
    movieList = document.querySelector('.promo__interactive-list'),
    movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };

function toLower(a, b) {
    if (a.toLowerCase() < b.toLowerCase())
        return -1;
    if (a.toLowerCase() > b.toLowerCase())
        return 1;
    return 0;
}

function changeSite() {
    deleteAds.remove();
    afishaInfo.children[0].textContent = "драма";
    afishaInfo.style.backgroundImage = 'url(img/bg.jpg)';
}

function addFilmsFromDB(database, locationOnSite) {
    locationOnSite.innerHTML = "";
    database.sort(toLower);
    database.forEach((film, i) => {
        movieList.innerHTML += `<li class = "promo__interactive-item">${i+1}. ${film} <div class = "delete"> </div> </li>`;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            database.splice(i, 1);
            addFilmsFromDB(movieDB.movies, movieList);
        });
    });

}

function addFilmsFromForm(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (formInput.value.length < 3) { return; } else if (formInput.value.length > 21) {
            formInput.value = formInput.value.slice(0, 21) + "...";
        }
        if (formChekbox.checked) {
            console.log(`Добавлен любимый фильм: ${formInput.value}`);
        }
        movieDB.movies.push(formInput.value);
        addFilmsFromDB(movieDB.movies, movieList);
        formFilm.reset();


    });




}




console.dir(formFilm);
console.dir(formInput);
console.dir(formChekbox);

changeSite();
addFilmsFromDB(movieDB.movies, movieList);
addFilmsFromForm(formFilm);