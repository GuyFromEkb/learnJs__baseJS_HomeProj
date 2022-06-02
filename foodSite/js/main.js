const tabImg = document.querySelectorAll('.tabcontent');
const tabBtn = document.querySelectorAll('.tabheader__item');


function hideTabContent() {
    tabImg.forEach(item => {
        item.classList.add('hide', 'fade');
        item.classList.remove('show', 'fade');
    });
    tabBtn.forEach(item => {
        item.classList.remove('tabheader__item_active')
    });
}

function showTabContect(i = 0) {
    tabImg[i].classList.add('show', 'fade');
    tabImg[i].classList.remove('hide');

    tabBtn[i].classList.add('tabheader__item_active');
}
hideTabContent();
showTabContect();

tabBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        hideTabContent();
        showTabContect(i);
    });
});