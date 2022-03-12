//Crear añadir 

function agregar() {
    let data = localStorage.getItem("Detalle");

    localStorage.setItem('compra', data)
alert('Por favor, dirigete al carrito');

}
// Cargar elementos del carrito cuando la pagina carg
document.addEventListener('DOMContentLoaded', () => {

    let carrito = document.getElementById('contenedor-carrito');
    let response = localStorage.getItem('compra');
    //Parseamos la informacion guardada del localStorag
    let inf_carrito = JSON.parse(response)

    carrito.innerHTML = `
<section class="h-100 h-custom" style="background-color: #eee;">
  <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card shopping-cart" style="border-radius: 15px;">
          <div class="card-body text-black">

            <div class="row">
              <div class="col-lg-6 px-5 py-4">

                <h3 class="mb-5 pt-2 text-center fw-bold text-uppercase">Productos</h3>

                <div class="d-flex align-items-center mb-5">
                  <div class="flex-shrink-0">
                    <img src="${inf_carrito.img.img1}"
                      class="img-fluid" style="width: 150px;" alt="Generic placeholder image">
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <a href="#!" class="float-end text-black"><i class="fas fa-times"></i></a>
                    <h5 class="text-primary">${inf_carrito.name}</h5>
                    <div class="d-flex align-items-center">
                      <p class="fw-bold mb-0 me-5 pe-3">${inf_carrito.price}</p>
                      <div class="def-number-input number-input safari_only">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="minus">-</button>
                        <input class="quantity fw-bold text-black" min="0" name="quantity" value="1"
                          type="number">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="plus">+</button>
                      </div>
                    </div>
                  </div>
                </div>

                <hr class="mb-4" style="height: 2px; background-color: #1266f1; opacity: 1;">

                <div class="d-flex justify-content-between p-2 mb-2" style="background-color: #e1f5fe;">
                  <h5 class="fw-bold mb-0">Total:</h5>
                  <h5 class="fw-bold mb-0">${inf_carrito.price}</h5>
                </div>

              </div>
              <div class="col-lg-6 px-5 py-4">

                <h3 class="mb-5 pt-2 text-center fw-bold text-uppercase">Formulario de Pago</h3>

                <form class="mb-5">

                  <div class="form-outline mb-5">
                    <input type="text" id="tarjeta" class="form-control form-control-lg" siez="17"
                      value="" minlength="19" maxlength="19" />
                    <label class="form-label" for="typeText">N° Tarjeta</label>
                  </div>

                  <div class="form-outline mb-5">
                    <input type="text" id="titular" class="form-control form-control-lg" size="17"
                      value="" />
                    <label class="form-label" for="typeName">Titular Tarjeta</label>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-5">
                      <div class="form-outline">
                        <input type="text" id="expiracion" class="form-control form-control-lg" value=""
                          size="7" id="exp" minlength="7" maxlength="7" required />
                        <label class="form-label" for="typeExp">Expiracion</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-5">
                      <div class="form-outline">
                        <input type="clave" id="password" class="form-control form-control-lg"
                          value="" size="1" minlength="3" maxlength="3" required />
                        <label class="form-label" for="typeText" >Cvv</label>
                      </div>
                    </div>
                  </div>

                  

                  <button type="button" onclick="validacion()" class="btn btn-primary btn-block btn-lg" id = "pagar">Pagar</button>

                  <h5 class="fw-bold mb-5" style="position: absolute; bottom: 0;">
                    <a href="#!"><i class="fas fa-angle-left me-2"></i>Back</a>
                  </h5>

                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>


`

})

//validaciones y confirmar pedido

let pagar_boton = document.getElementById("pagar")

pagar_boton.addEventListener('click', () => {
console.log('validacion')

})


function validacion(){

    let titular = document.getElementById("titular").value;
    let tarjeta = document.getElementById("tarjeta").value;
    let expiracion = document.getElementById("expiracion").value;
    let clave = document.getElementById("clave").value;
   
    

    if (titular.length == 0 || tarjeta.length == 0 || expiracion.length == 0 || clave.length == 0){
        alert('Faltan datos por llenar')
    }else{
    alert(`Se han confirmado pedidos para ${nombre}`)
    }

console.log('validacion')
}






