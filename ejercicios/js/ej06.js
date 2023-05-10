let letra = prompt('introduce una letra en mayúscula')

    letra = letra.toUpperCase();

const comprobarLetras = (letra) => { 

    let vocales = ['A', 'E', 'I', 'O', 'U'];

    if (vocales.includes(letra)){ 
        console.log('La letra ' + letra + ' es una vocal');
    }else 
    console.log('La letra ' + letra + ' es una consonante');

}

comprobarLetras(letra)