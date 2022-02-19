const express = require('express');
const server  = express();

//Solo una función de prueba para probar el correcto funcionamiento de nodemon
server.get('/', function(req, res){
    res.send('<h1>Hola MUndo</h1>');
    res.end();

});
server.listen(3000,function(){
   console.log('server on port 3000'.green)

} );
