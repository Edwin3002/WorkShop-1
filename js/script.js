import getData from "./getData.js"
// import {showData} from './showData.js'

const url = 'https://clothsapi.herokuapp.com/Cloths/';

let ropa
document.addEventListener('DOMContentLoaded', async () => {
    const data = await getData(url);
    ropa = data
    console.log(data)
    pintarCartas(ropa)
})

let divCartas = document.getElementById('cartas');

function pintarCartas(data) {
    console.log(ropa)
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
            <p class="card-text fw-bold fs-3">${price}$<button class="btn btn-dark float-end agregar2" id="${name}">Ver más</button></p>
            </div>
        </div>
        `
    });
}

const element = document.querySelector('.cartas');

element.addEventListener('click', async(e) => {
    console.log('hola')
    const btnDetail = e.target.classList.contains('agregar2');
    const name = e.target.id;
    console.log(btnDetail, name);
    if(btnDetail){
         const lista = await getData(url);
         const objeto = lista.find(list => list.name === name)
         localStorage.setItem("Detalle",JSON.stringify(objeto));
         window.location.href = "./detalles.html"
    }

    

})




