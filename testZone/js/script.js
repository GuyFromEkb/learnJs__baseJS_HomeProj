"use strict";
const request = new XMLHttpRequest(),
    btn = document.querySelector('.btn'),
    inputIn = document.querySelector('.in'),
    inputOutUsd = document.querySelector('#usd'),
    inputOutUah = document.querySelector('#uah');
let requestData;

request.open("GET", 'js/current.json');
request.responseType = "json";
request.send();
request.onload = function() {
    requestData = request.response;
};

inputIn.addEventListener('input', () => {
    inputOutUsd.value = (inputIn.value / request.response.current.usd).toFixed(2);
    inputOutUah.value = (inputIn.value / request.response.current.uah).toFixed(2);
});