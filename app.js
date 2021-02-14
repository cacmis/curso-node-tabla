//const { option } = require('yargs');
const { crearArchivo } = require ('./Helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

// console.log(process.argv);
  // const [,, arg3 = '5'] = process.argv;
  // const [,base = 5] = arg3.split('=');

  console.clear(); 

  crearArchivo(argv.base,argv.l,argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.green, 'creado'))
    .catch( err => console.log(err));

    


