
const fs = require('fs');
const crearArchivo = async  ( base = 5, listar = false, hasta = 10 ) => {
const colors = require('colors');

 try {
  
    let salida ='';
    let aconsola ='';

    for( let i = 1; i <= hasta; i++){
        salida += `${base} ${'x'}  ${i} ${ '='} ${(base * i)}\n`;
        aconsola += `${base} ${'x'.green}  ${i} ${ '='.green} ${(base * i)}\n`;
    }
    if( listar ){
        console.log('======================='.green);
        console.log('TABLA del ',colors.blue(base ));
        console.log('======================='.green);
        console.log(aconsola)
    }

    fs.writeFileSync( `./salida/tabla-${base}.txt`,salida);

    return `tabla-${base}.txt`;
} catch(error) {
    throw  error;
}

}

module.exports = {
    crearArchivo
}




