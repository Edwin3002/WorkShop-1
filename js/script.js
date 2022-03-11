import getData from "./getData.js"
// import {showData} from './showData.js'

const urlPaises = 'https://clothsapi.herokuapp.com/Cloths/';

let paises
document.addEventListener('DOMContentLoaded', async () => {
    const data = await getData(urlPaises);
    paises = data
    console.log(data)
    pintarCartas(paises)
})

let divCartas = document.getElementById('cartas');

function pintarCartas(data) {
    console.log(paises)
    
    divCartas.innerHTML = ''
    data.forEach(element => {
        const { name, img, price, description} = element;
        cartas.innerHTML += `
                <div class="card" style="width: 18rem;">
            <div class="mosaico">

                <img src="${img.img1}" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text fw-bold fs-3">${price}$<button class="btn btn-dark float-end agregar" type="button" value="${name}" id="agregar">Ver más</button></p>
            </div>
        </div>
        `
    });
}
let verMas = document.getElementById('agregar');
// console.log(verMas);
verMas.addEventListener("click", hola());

function hola() {
    console.log('hi dev')
}


