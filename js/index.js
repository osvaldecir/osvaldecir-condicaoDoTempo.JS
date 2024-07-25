"use strict";
const form = document.querySelector('#search-form > form');
const imput = document.querySelector('#input-localizacao');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submeteu');
});
