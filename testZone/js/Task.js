"use strict";

fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({ name: "Sergey", ids: 3 }),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(responce => responce.json())
    .then(responce => console.log(responce));