"use strict";
const box = document.querySelector('.box'),
    btn = document.querySelector('.btn');



btn.addEventListener('click', () => {
    let positinBox = 0;
    const animate = setInterval(() => {
        if (positinBox > 300) {
            clearInterval(animate);
        } else {
            box.style.left = positinBox + 'px';
            box.style.top = positinBox + 'px';
            positinBox++;
        }
    }, 10);
});