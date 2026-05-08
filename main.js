/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  // COMPLETAR
});

document.getElementById('distancia')

let precio;
let distancia;
let sube_r;
distancia=Math.min(Math.max(distancia,0), 27)
'distancia'=== distancia

let registrada;
registrada===idregistrada

if (registrada===true) {
if (distancia < 3) {
  precio===parseFloat("715.24")
}
else if (distancia > 2 && distancia < 6) {
    precio===parseFloat("794.74")
}
else if (distancia >=6 && distacia < 12) {
    precio===parseFloat("855.97")
}
else{
    precio===parseFloat("917.24")
}
  }
  else{
    if (distancia < 3) {
      precio===parseFloat("1137.23")
    }
    else if (distancia > 2 && distancia < 6) {
        precio===parseFloat("1263.64")
    }
    else if (distancia >=6 && distacia < 12) {
        precio===parseFloat("1360.99")
    }
    else{
        precio===parseFloat("1458.41")
    }
  }

  
