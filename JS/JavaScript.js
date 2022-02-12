// const iva = 21;
 
//  do{
//     var producto = prompt("Escriba el numero 1 para ALINEACION o 2 para BALANCEAR" );
//  }while(producto < 1 ||  producto > 2);
 
//  if(producto == 1){
//     var total = ((2000 * parseInt(iva)) /100) + 2000;
//  }else { 
//      var total = ((3000 * parseInt(iva)) /100) + 3000;
//     }

//  alert("El precio con iva es: $" + total);
//  console.log(total);


// const iva = 21;

//  //array con nuestros productos
// const productos = [
//   {id: 1,nombre: 'Alineacion',precio: 5100},
//   {id: 2,nombre: 'Balanceo',precio: 4100},
//   {id: 3,nombre: 'Alineacion y Balanceo',precio: 10900}
// ]

// var pedido = parseFloat(prompt("Escriba el numero 1 para ALINEACION - 2 para BALANCEAR - 3 para ALINEAR Y BALANCEAR"));

// function imprimir(pedido) {

// if (pedido === productos.find(prod => prod.title == "1")) {
//   var total = ((productos[1] * parseInt(iva)) /100) + 2000;
// } else {
//   return "no va"
// }

// posts.find(post => post. title == "")
// alert("El precio con iva es: $" + total);
//  console.log(total);
// //array vacío que va a contener los productos seleccionados por el cliente
// let productosSeleccionados = [];


// //pusheamos los productos seleccionados por el cliente al array de seleccionados que se encuentra vacío
// function ingresarProductos(producto) {
//   productosSeleccionados.push(producto);
// }

// //agregamos los precios al array vacío
// function agregarPrecios(producto) {
//   precios.push(producto)
// }

// //pedimos que seleccionen los productos ofrecidos en los distintos números
// let seleccionProductos = parseFloat(prompt("Escriba el numero 1 para ALINEACION - 2 para BALANCEAR - 3 para ALINEAR Y BALANCEAR"));




class productos {
  constructor (ID, nombre, precio){
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }

}

const producto1 = new productos (1, "Alinacion", 2500)
const producto2 = new productos (2, "Balanceo", 3500)
const producto3 = new productos (3, "Alinacion y Balanceo", 5500)

const arrProd = [producto1, producto2, producto3];
const Iva = 1.21;
console.log (arrProd);


var producto = prompt("Escriba el numero 1 para ver la pagina o 2 para comprar un servicio" );
  if(producto == 2){
    let comprar = prompt ("Escribi el numero 1 para ALINEAR, 2 para BALANCEO o 3 para ALINEACION Y BALANCEO")
    if (comprar == 1) {
      precio = producto1.precio * Iva;
      alert("Su precio con IVA incluido es :    $" + precio);
    } else if (comprar == 2) {
      precio = producto2.precio * Iva;
      alert("Su precio con IVA incluido es :    $" + precio);
    } else if (comprar == 3) {
      precio = producto3.precio * Iva;
      alert("Su precio con IVA incluido es :    $" + precio);
    } else {
      alert ("Escribiste mal el numero por favor vuelva a elegir");
    }
    
 }else { 
    alert ("Gracias por su visita a la pagina");
    }

