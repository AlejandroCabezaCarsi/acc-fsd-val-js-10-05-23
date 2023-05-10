console.log('Hola mundo');

//ENTORNO 
//1-Definir variables 

let userDef = 'admin';
let passwordDef = '1234'; 

// let user = '';
// let password = null;

// let contador = 3;

//2- pedir user y password 


//3-Comprobar user y password

// si no está ok --> mensaje de error + resta de intentos (max-3)

            //Si intentos > max --> bloquea (mensaje)
            // si no está ok --> mensaje de error + resta de intentos (max-3)

            //Si intentos > max --> bloquea (mensaje)

            const login = (userDef='admin', passwordDef='1234') => {

            

                let user = '';
                let password = null;

                let contador = 3;


                do {

                    user = prompt('Introduce tu nombre de usuario'); 
                    password = prompt('Introduce la contrasenya');
    
                    if (userDef == user && passwordDef == password){
                        console.log('login ok');
                        alert('Bienvenido');
                        break; 
    
                    }else{
                        console.log('login erroneo');
                        contador--;
                        alert(`Login erroneo, te quedan ${contador}`);
                        if (contador == 0){ 
                            alert('Numero de intentos agotado');
                        }
                    }
    
    
                } while (contador != 0);

            };


            login(); 


            // do {

            //     user = prompt('Introduce tu nombre de usuario'); 
            //     password = prompt('Introduce la contrasenya');

            //     if (userDef == user && passwordDef == password){
            //         console.log('login ok');
            //         alert('Bienvenido')
            //         break; 

            //     }else{
            //         console.log('login erroneo')
            //         contador--;
            //         alert(`Login erroneo, te quedan ${contador}`);
            //         if (contador == 0){ 
            //             alert('Numero de intentos agotado');
            //         }
            //     }


            // } while (contador != 0);

                
        // si no está ok --> mensaje de error + resta de intentos (max-3)

            //Si intentos > max --> bloquea (mensaje)

//FIN 




