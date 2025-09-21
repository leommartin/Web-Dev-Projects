
// Importar o express
const express = require ('express');

// Criar o servidor
const server = express();

// Criar uma rota /curso
// req => dados da requisição(queryParam, routeParams, body)
// res => dados da resposta (o que eu vou devolver para o frontend/usuário)

server.get('/curso', (req, res) => {

    // res.send = enviar uma resposta
    // return res.send('Hello World');

    // res.json = enviar uma resposta em json
    // feat: create 'curso' route, send response
    return res.json( { curso : 'Node.js' } );


    console.log('Acessou a rota!')

})

// Colocar o servidor para rodar
server.listen(3000);
