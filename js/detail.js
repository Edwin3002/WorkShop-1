const carta = document.querySelector('.carta');

const getLocalStorage = () => {
    const det = JSON.parse(localStorage.getItem("Detalle"));
    const { name, description, img, price } = det;
    console.log(det)
    carta.innerHTML += `
    <section class="featured" id="featured">
    <div class="row">
        <div class="image-container">
            <div class="small-image">
                <img src="${img.img1}" class="featured-image-1" alt="">
                <img src="${img.img2}" class="featured-image-1" alt="">
                <img src="${img.img3} "class="featured-image-1" alt="">
                <img src="${img.img4}" class="featured-image-1" alt="">
            </div>
            <div class="big-image">
                <img src="${img.img1}" class="big-image-1" alt="">
            </div>
        </div>
        <div class="content">
            <h3 id=" titulo-cloths">${name} </h3>

            <p> ${description}</p>
            <div class="price">${price} $</div></div>
            <p class="size">size</p>
<div id="sizes">
 <input type="text" class="redondeado" value="S">
<input type="text" class="redondeado" value="M">
<input type="text" class="redondeado" value="L">
<input type="text" class="redondeado" value="XL">
</div>
            <!-- <button type="button" class="btn btn-primary">ADD TO CARD</button>
           <button type="button" class="btn btn-dark">BUY IT NOW</button> -->
<a href="#" class="btn">add to cart</a>
<a href="#" class="btn2">add to cart</a>

        </div>
    </div>
</section>
<!-- Publicidad -->
  <section class="publicidad">
            <div class="box-container">
            </div>
        </section>
<!-- Footer-->
<section class="footer">
    <div class="box-container">
        <div class="box">
            <h3>Principe Fresco</h3>
        </div>

        <div class="box">
            <h3>nombre</h3>
          
        </div>
    </div>
</section>
    `
}

document.addEventListener('DOMContentLoaded', getLocalStorage)

// carta.addEventListener('click', (e) => {

//     if (e.target.classList.contains('btn-danger')) {
//         window.location.href = "prod.html";
//     }

// })


// Slider comienza con imagen principal desde 0
let slides = document.querySelectorAll('.slide-container');
let index = 0;



document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});


