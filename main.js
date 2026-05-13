/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/
//0-3 km	$ 753,74	$ 339,18	$ 1.198,45
//3-6 km	$ 837,52	$ 376,88	$ 1.331,66
//6-12 km	$ 902,04	$ 405,91	$ 1.434,24
//12-27 km	$ 966,61	$ 434,97	$ 1.536,91
//*0-3 km	$ 968,57	$ 435,85	$ 1.937,14
//3-6 km	$ 1.089,64	$ 490,33	$ 2.179,28
//6-12 km	$ 1.210,71	$ 544,81	$ 2.421,42
//12-27 km	$ 1.452,85	$ 653,78	$ 2.905,70
//más de 27 km	$ 1.708,07	$ 768,63	$ 3.416,14
//0-3 km	$ 700,00	$ 315,00	$ 1.113,00
//3-6 km	$ 779,78	$ 350,90	$ 1.239,85
//6-12 km	$ 839,86	$ 377,93	$ 1.335,38
//12-27 km	$ 899,99	$ 404,99	$ 1.430,98
//más de 27 km	$ 959,71	$ 431,86	$ 1.525,94


boton.addEventListener("click", () => {
  let registrad=registrada.value;
let distance=distancia.value;
let precio;
if (locacion.value==="caba"){
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
        precio=339.18
      }
      else if (distance < 6) {
          precio=376.88
      }
      else if (distance < 12) {
          precio=405.91
      }
      else{
          precio=434.97
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
}
else if (locacion.value==="amba"){
  if (registrad==="si") {
    if (distance< 3) {
      precio=968.57
    }
    else if (distance < 6) {
        precio=1089.64
    }
    else if (distance < 12) {
        precio=1210.71
    }
    else{
        precio=1452.85
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
          precio=1937.14
        }
        else if (distance < 6) {
            precio=2179.28
        }
        else if (distance < 12) {
            precio=2421.42
        }
        else{
            precio=2905.70
            
        }
      }
}
else{
  if (registrad==="si") {
    if (distance< 3) {
      precio=700
    }
    else if (distance < 6) {
        precio=779.78
    }
    else if (distance < 12) {
        precio=839.86
    }
    else{
        precio=899.99
    }
    if (starifa.value==="si"){
      if (distance< 3) {
        precio=315
      }
      else if (distance < 6) {
          precio=350.90
      }
      else if (distance < 12) {
          precio=377.93
      }
      else{
          precio=404.99
      }
    }
      }
      else{
        
        if (distance< 3) {
          precio=1937.14
        }
        else if (distance < 6) {
            precio=2179.28
        }
        else if (distance < 12) {
            precio=2421.42
        }
        else{
            precio=2905.70
            
        }
      }
}
      tarifa.innerText=precio;
});




  
