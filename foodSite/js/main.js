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
    /**********/

    /*** Timer **/
    const clock = document.querySelectorAll('.timer__block span'),
        NEED_DATE = '2022-06-12';

    function getTime(date) {
        const miliseconds = Date.parse(date) - new Date();

        let day = Math.floor(miliseconds / (1000 * 60 * 60 * 24));
        let hour = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);
        let minute = Math.floor((miliseconds / (1000 * 60)) % 60);
        let second = Math.floor((miliseconds / (1000)) % 60);

        return {
            miliseconds,
            day,
            hour,
            minute,
            second
        };
    }

    function setTimerOnSite(date) {
        const time = getTime(date);
        if (time.miliseconds < 0) {
            clearInterval(startTimer);
        } else {
            clock[0].innerHTML = time.day;
            clock[1].innerHTML = time.hour;
            clock[2].innerHTML = time.minute;
            clock[3].innerHTML = time.second;
        }
    }
    setTimerOnSite(NEED_DATE);

    const startTimer = setInterval(setTimerOnSite, 1000, NEED_DATE);
    /**********/


});