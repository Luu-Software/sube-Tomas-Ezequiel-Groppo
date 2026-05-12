/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/


boton.addEventListener("click", () => {
  let registrad=registrada.value;
let distance=distancia.value;
let precio;
  if (registrad==="si") {
    if (distance< 3) {
      precio=715.24
    }
    else if (distance < 6) {
        precio=794.74
    }
    else if (distance < 12) {
        precio=855.97
    }
    else{
        precio=917.24
    }
      }
      else{
        
        if (distance< 3) {
          precio=1137.23
        }
        else if (distance < 6) {
            precio=1263.64
        }
        else if (distance < 12) {
            precio=1360.99
        }
        else{
            precio=1458.41
            
        }
      }
      tarifa.innerText=precio;
});




  
