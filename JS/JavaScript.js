


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

