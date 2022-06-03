"use strict";
window.addEventListener('DOMContentLoaded', function() {

    //Tabs
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







});