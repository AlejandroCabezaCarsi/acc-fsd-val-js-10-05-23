const calcularIVA = (A, B) => {
    if (B === undefined || B === 0) {
      B = 21; 
    }
    
  
    let IVA = (B / 100) + 1;
    let multiplicacion = A * IVA;
    return multiplicacion;
  }
  
  let precio = Number(prompt('Introduce el precio de tu producto'));
  let impuesto = Number(prompt('Introduce el IVA. Si no introduces ningún valor se le asignará el 21%'));
  
  alert(calcularIVA(precio, impuesto));
  

// const calcularIVA = (A,B=21) =>{

//     let IVA = (B/100) + 1;

//     let multiplicacion = A * IVA;

//     return multiplicacion; 

// }

// let precio = Number(prompt('Introduce el precio de tu producto')); 

// let impuesto = Number(prompt('Introduce el IVA. Si no introduces ningun valor se le asignara el 21%'));

// alert(calcularIVA(precio,impuesto));

