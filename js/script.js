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
        <div class="card" style="width: 15rem;">
        
        <img src="${img.img1}" width="500" height="200" class="card-img-top" alt="..." style="width:10rem; border:3px solid black; margin-left:2.5rem; margin-top:1rem;">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${price}</p>
          
          <a href="#"><button id="${name}" class="btn btn-primary agregar2">Ver detalle</button></a>
  

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




