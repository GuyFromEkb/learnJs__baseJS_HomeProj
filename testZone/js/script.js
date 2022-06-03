"use strict";


function getTime(date) {
    const deadline = Date.parse(date) - new Date();

    let day = Math.floor(deadline / (1000 * 60 * 60 * 24));
    let hour = Math.floor((deadline / (1000 * 60 * 60)) % 24);
    let minute = Math.floor((deadline / (1000 * 60)) % 60);
    let second = Math.floor((deadline / (1000)) % 60);

    return {
        day,
        hour,
        minute,
        second
    };
}