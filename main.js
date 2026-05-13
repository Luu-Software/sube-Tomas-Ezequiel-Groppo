/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/
//0-3 km	$ 968,57	$ 435,85	$ 1.937,14
//3-6 km	$ 1.089,64	$ 490,33	$ 2.179,28
//6-12 km	$ 1.210,71	$ 544,81	$ 2.421,42
//12-27 km	$ 1.452,85	$ 653,78	$ 2.905,70
//más de 27 km	$ 1.708,07	$ 768,63	$ 3.416,14

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
    if (starifa.value==="si"){
      if (distance< 3) {
        precio=435.85
      }
      else if (distance < 6) {
          precio=490.33
      }
      else if (distance < 12) {
          precio=544.81
      }
      else{
          precio=653.78
      }
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




  
