
let frase = prompt('Introduce tu texto para codificarlo').toUpperCase();


let newFrase = []; 

for( i = 0; i <= frase.length; i++){

    let valorPosicion = (frase)[i];

    switch (valorPosicion) {
        case 'A':
            valorPosicion='4';
            break;
        case 'E':
            valorPosicion='3';
            break;
        case 'I':
            valorPosicion='1';
            break;
        case 'O':
            valorPosicion='0';
            break;
    
        default:

            valorPosicion = valorPosicion

            break;
    }

    newFrase.push(valorPosicion)
        

}

console.log(newFrase);







// const cambio = (frase) => { 

//     let letras = ['A = 4','E','I','O','U']; 

//     if (frase.includes(letras)){



//     }

// }