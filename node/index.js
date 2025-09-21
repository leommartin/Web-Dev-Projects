
// Importar o express
const express = require ('express');

// Criar o servidor
const server = express();

// Criar uma rota /curso
// req => dados da requisição(queryParam, routeParams, body)
// res => dados da resposta (o que eu vou devolver para o frontend/usuário)

// Query params = /?nome=NodeJS
// Route Params = /curso/2
// Request Body = { nome: 'Nodejs', tipo: 'Backend' }

const cursos = ['NodeJS', 'JavaScript', 'React Native'];

// localhost:3000/curso/2
server.get('/curso/:index', (req, res) => {

    // const id = req.params.id;
    // const nome = req.query.nome;
    const { index } = req.params; // desestruturação com parâmetro da rota (único)

    // res.json = enviar uma resposta em json
    // return res.json( { curso : `Aprendendo ${nome}` } );
    // return res.json( { curso : `Curso: ${id}` } );
    return res.json(cursos[index]);

    // "pré-definido" em ingles é ´pre

    // res.send = enviar uma resposta
    // return res.send('Hello World');
    console.log('Acessou a rota!')

})

// Colocar o servidor para rodar
server.listen(3000);
