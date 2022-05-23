import GetData from './helpers/getData.js'
import PrintFood from './modules/printFood.js'
import { breakfastURL } from './helpers/url.js'
import { lunchURL } from './helpers/url.js'
import { dinnerURL } from './helpers/url.js'
import { drinksURL } from './helpers/url.js'
import searched from './helpers/search.js'

const container = document.getElementById("main-container");
const btnBreakfast = document.getElementById('breakfast');
const btnDinner = document.getElementById('dinner');
const btnLunch = document.getElementById('lunch');
const btnDrinks = document.getElementById('drinks');
const change_theme = document.getElementById('change-theme');
let breakfastData;
let dinnerData;
let lunchData;
let drinksData;
const $form = document.querySelector('form#mail-form');
const $buttonMailto = document.getElementById('contact0')
const form = document.querySelector('form#search');
const emailInput = document.getElementById('email');
const footer = document.querySelector('footer#footer');

document.addEventListener('click', (e) => {
    if (e.target.id === 'change-theme') {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            footer.classList.remove('bg-dark');
            footer.classList.add('bg-light');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            footer.classList.remove('bg-light');
            footer.classList.add('bg-dark');
        }
    }
})

document.addEventListener('DOMContentLoaded', async () => {
    const { data } = await GetData(breakfastURL);
    breakfastData = data;
    PrintFood(container, breakfastData);
});

btnBreakfast.addEventListener('click', async (e) => {
    e.preventDefault();
    PrintFood(container, breakfastData);
});

btnDinner.addEventListener('click', async (e) => {
    e.preventDefault();
    const { data } = await GetData(dinnerURL);
    dinnerData = data;
    PrintFood(container, dinnerData);
});

btnLunch.addEventListener('click', async (e) => {
    e.preventDefault();
    const { data } = await GetData(lunchURL);
    lunchData = data;
    PrintFood(container, lunchData);
});

btnDrinks.addEventListener('click', async (e) => {
    e.preventDefault();
    const { data } = await GetData(drinksURL);
    drinksData = data;
    PrintFood(container, drinksData);
});


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchInput = document.getElementById('search-food').value;
    const containerSearch = document.getElementById('searched-food');
    const { data: data1 } = await GetData(breakfastURL);
    const { data: data2 } = await GetData(dinnerURL);
    const { data: data3 } = await GetData(lunchURL);
    const { data: data4 } = await GetData(drinksURL);
    const h2 = document.createElement('h2');
    h2.innerHTML = `Search results for: ${searchInput}`;
    let array = [];
    array = [].concat(data1, data2, data3, data4);
    PrintFood(containerSearch, searched(searchInput, array, containerSearch));
    containerSearch.prepend(h2);
})

const validateEmail = (email) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.value.match(mailFormat)) {
        return true;
    } else {
        return false;
    }
}

$form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateEmail(emailInput.value)) {
        emailInput.classList.remove('error');
        new FormData(this)
        $buttonMailto.setAttribute('href', `mailto:santiagovalencialeon@gmail.com?subject=¡Hola! Me gustaria contactar con ustedes.&body=Hola, Quiero hacer contacto con su empresa. Muchas Gracias.`)
        $buttonMailto.click()
    } else {
        emailInput.classList.add('error');
        alert('Por favor, ingrese un correo electrónico válido.');
        emailInput.focus();
    }
});
