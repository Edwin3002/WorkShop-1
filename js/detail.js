const carta = document.querySelector('.carta');

const getLocalStorage = () => {
    const det = JSON.parse(localStorage.getItem("Detalle"));
    const { name, description, img, price } = det;
    console.log(det)
    carta.innerHTML += `
    <div class="card cardSola mb-3" style="max-width: 98%;">
        <div class="row g-0">
        <div class="col-md-4 mosaico2">
            <img src="${img.img3}" class="card-img-top" alt="...">
        </div>
        <div class="col-md-8 d-flex align-items-center">
            <div class="card-body">
            <h2 class="card-title text-uppercase">${name}</h2>

            <p class="card-text fs-3 fw-bold">${price}$</p>
            <p class="card-text fs-3 resumen">${description}</p>
            <p class="card-text d-flex flex-row-reverse">  <button class="btn btn-dark " type="button" id="agregar">Agregar <i class="fas fa-shopping-cart"></i></button> <input id="nCantidad"  type="number" value="1"></p>
            <a href="productos.html"> <button class="btn btn-danger " type="button" id="volver">Volver <i class="fa-solid fa-arrow-rotate-left"></i></button><a>
            </div>
        </div>
        </div>
    </div>
    `
}

document.addEventListener('DOMContentLoaded', getLocalStorage)

// carta.addEventListener('click', (e) => {

//     if (e.target.classList.contains('btn-danger')) {
//         window.location.href = "prod.html";
//     }

// })




function pintarSola(name) {
    console.log(name)
    let resultado = API.filter(cat => cat.nombre == name)
    resultado.forEach(element => {
        const { nombre, resumen, img, precio, categoria } = element;
        space.innerHTML = `
        <div class="card cardSola mb-3" style="max-width: 98%;">
        <div class="row g-0">
        <div class="col-md-4 mosaico2">
            <img src="${img}" class="card-img-top" alt="...">
        </div>
        <div class="col-md-8 d-flex align-items-center">
            <div class="card-body">
            <h2 class="card-title text-uppercase">${nombre}</h2>

            <p class="card-text fs-3 fw-bold">${precio}$</p>
            <p class="card-text fs-3 resumen">${resumen}</p>
            <p class="card-text d-flex flex-row-reverse">  <button class="btn btn-dark " type="button" id="agregar" onclick="guardarCarrito('${nombre}', '${precio}')">Agregar <i class="fas fa-shopping-cart"></i></button> <input id="nCantidad"  type="number" value="1"></p>
            </div>
        </div>
        </div>
    </div>
    `
    });
}
