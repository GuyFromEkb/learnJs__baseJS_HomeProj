"use strict";
const btn = document.querySelectorAll('button');
const wrap = document.querySelector('.bg');

const btnFromJS = document.createElement("button");
btnFromJS.classList.add('blue');
// document.querySelector('.bg').append(btnFromJS);

wrap.addEventListener('click', (e) => {

    // console.dir(e.target);
    if (e.target && e.target.tagName == "BUTTON") {
        console.log("block if");
        wrap.append(document.createElement("button"));
    }

});

// btn.forEach(element => {
//     element.addEventListener('click', function(e) {
//         e.target.classList.toggle('red');
//         // console.dir(e.target);
//     });
// });