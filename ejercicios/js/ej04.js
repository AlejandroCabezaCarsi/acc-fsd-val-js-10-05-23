
const DNI = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]





const comprobacionDNI = (A) => {

    
    let resto = A % 23;

    return (DNI)[resto];
    
}
let numero = Number(prompt('Introduce tu número de dni sin la letra'))

alert(comprobacionDNI(numero));