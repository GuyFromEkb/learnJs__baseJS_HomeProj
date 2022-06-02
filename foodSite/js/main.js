// const tabImg = document.querySelectorAll('.tabcontent');
// const tabBtn = document.querySelectorAll('.tabheader__item');


// function hideTabContent() {
//     tabImg.forEach(item => {
//         item.classList.add('hide', 'fade');
//         item.classList.remove('show', 'fade');
//     });
//     tabBtn.forEach(item => {
//         item.classList.remove('tabheader__item_active')
//     });
// }

// function showTabContect(i = 0) {
//     tabImg[i].classList.add('show', 'fade');
//     tabImg[i].classList.remove('hide');

//     tabBtn[i].classList.add('tabheader__item_active');
// }
// hideTabContent();
// showTabContect();

// tabBtn.forEach((item, i) => {
//     item.addEventListener('click', () => {
//         hideTabContent();
//         showTabContect(i);
//     });
// });


window.addEventListener('DOMContentLoaded', function() {

    // Tabs

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});