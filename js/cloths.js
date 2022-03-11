
window.addEventListener('DOMContentLoaded', async (event) => {
    let container = document.getElementById('container-dataBase');



    const response = await fetch('https://clothsapi.herokuapp.com/Cloths/');  
    const json = await response.json()

    json.forEach(element => {
        const { name, description, price, img } = element;
        container.innerHTML += `
 <div class="card" style="width: 15rem;">
        
        <img src="${img.img1}" width="500" height="200" class="card-img-top" alt="..." style="width:10rem; border:3px solid black; margin-left:2.5rem; margin-top:1rem;">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${price}</p>
          
          <a href="index.html"><button id="a" class="btn btn-primary">Agregar carrito</button></a>
  

        </div>
      </div>


`
    });
    console.log(json.data);
});