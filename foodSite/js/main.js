"use strict";
window.addEventListener('DOMContentLoaded', function() {

    /*** Tabs **/
    const tabsImg = document.querySelectorAll('.tabcontent'),
        tabsName = document.querySelectorAll('.tabheader__item'),
        tabsSelector = document.querySelector('.tabheader__items');


    function hideTabs() {
        tabsImg.forEach(item => {
            item.classList.remove('show');
            item.classList.add('hide');
        });
        tabsName.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTab(tabNumber = 0) {
        tabsImg[tabNumber].classList.add('show', 'showTab');
        tabsName[tabNumber].classList.add('tabheader__item_active');
    }

    hideTabs();
    showTab();

    tabsSelector.addEventListener('click', function(e) {
        let target = e.target;
        if (target.classList.contains('tabheader__item')) {
            tabsName.forEach((item, index) => {
                if (target == item) {
                    hideTabs();
                    showTab(index);
                }
            });
        }

    });

    /*** Timer **/
    const clock = document.querySelectorAll('.timer__block span'),
        NEED_DATE = '2022-06-12';

    function getTime(date) {
        const miliseconds = Date.parse(date) - new Date();
        let day, hour, minute, second;

        if (miliseconds <= 0) {
            day = 0;
            hour = 0;
            minute = 0;
            second = 0;
        } else {
            day = Math.floor(miliseconds / (1000 * 60 * 60 * 24));
            hour = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);
            minute = Math.floor((miliseconds / (1000 * 60)) % 60);
            second = Math.floor((miliseconds / (1000)) % 60);
        }
        return {
            miliseconds,
            day,
            hour,
            minute,
            second
        };
    }

    function addZero(numb) {
        if (numb < 10) { numb = '0' + numb };
        return numb;
    }

    function setTimerOnSite(date) {
        function updateclock() {

            const time = getTime(date);
            clock[0].innerHTML = time.day;
            clock[1].innerHTML = addZero(time.hour);
            clock[2].innerHTML = addZero(time.minute);
            clock[3].innerHTML = addZero(time.second);

            if (time.miliseconds < 0) {
                clearInterval(startTimer);
            }
        }
        updateclock();
        const startTimer = setInterval(updateclock, 1000);
    }
    setTimerOnSite(NEED_DATE);

    /** Modal **/
    const modalWindow = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal__close'),
        modalBtn = document.querySelectorAll('[data-modal="open"]');

    function closeModal() {
        modalWindow.style.display = "none";
        document.body.style.overflow = 'visible';
    }

    function openModal() {
        modalWindow.style.display = "block";
        document.body.style.overflow = 'hidden';

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        document.addEventListener('click', function(e) {
            if (e.target === modalWindow) { closeModal(); }
            // if (e.target.classList.contains('modal')) { closeModal(); }
        });

        modalClose.addEventListener('click', closeModal);
    }

    modalBtn.forEach(item => {
        item.addEventListener('click', openModal);
    });



});