


// if (numero % 2 == 0){ 
//     alert('El numero ' + numero + ' es PAR')
// }else { 
//     alert('El numero ' + numero + ' es IMPAR')
// }

const paresImpares = (numero) => { 
    if (numero % 2 == 0){ 
        alert('El numero ' + numero + ' es PAR');
    }else { 
        alert('El numero ' + numero + ' es IMPAR');
    }
} 

let numero = Number(prompt('Introduce un numero'));

paresImpares(numero);