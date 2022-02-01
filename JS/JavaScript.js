const iva = 21;
 
 do{
    var producto = prompt("Escriba el numero 1 para ALINEACION o 2 para BALANCEAR" );
 }while(producto < 1 ||  producto > 2);
 
 if(producto == 1){
    var total = ((2000 * parseInt(iva)) /100) + 2000;
 }else { 
     var total = ((3000 * parseInt(iva)) /100) + 3000;
    }

 alert("El precio con iva es: $" + total);
 console.log(total);