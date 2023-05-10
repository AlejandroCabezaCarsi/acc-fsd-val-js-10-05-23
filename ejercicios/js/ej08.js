const cuentaLetra = (A, B) => { 
    let contadorLetra = 0;
    for (i=0; i <= A.length ; i++){ 

            let valorPosicion = (A)[i];         
            if (valorPosicion === B){         
                contadorLetra = contadorLetra + 1; 
            }
        }
    return alert(`La letra ${B} se repite ${contadorLetra} veces`)
}
let palabra = prompt('Introduce tu palabra ');
let letra = prompt('Introduce la letra que quieras contar'); 

cuentaLetra(palabra, letra)