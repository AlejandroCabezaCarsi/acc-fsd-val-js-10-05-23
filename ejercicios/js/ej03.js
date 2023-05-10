
// let numero = Number(prompt('Introduce el numero')); 

// for (let i = 2; i < (numero/2); i++) {
    
//     if (numero % i == 0 ){
//         alert('Es primo')
//     } else {
//         alert('No es primo')
//     }

// }

numero = 4


function esPrimo(numero) {
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return 'NO es primo';
      }
    }
  
    return 'es primo';
  }

console.log(esPrimo(numero))