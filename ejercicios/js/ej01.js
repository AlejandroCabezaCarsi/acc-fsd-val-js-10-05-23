
// let celsius = Number(prompt('Introduce los grados celsius que quieras convertir a grados Fahrenheit'))

// let convertidor = (celsius * 9 / 5) + 32

// console.log(convertidor)

const gradosCelsius = (celsius) => { 
    let convertidor = (celsius * 9 / 5) + 32;
    return convertidor;
}

let celsius = Number(prompt('Introduce los grados celsius que quieras convertir a grados Fahrenheit'))
alert(gradosCelsius(celsius));