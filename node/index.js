
// Importar o express
const express = require ('express');

// Criar o servidor
const server = express();

// Permitir que o servidor entenda JSON
server.use(express.json());

// Criar uma rota /curso
// req => dados da requisição(queryParam, routeParams, body)
// res => dados da resposta (o que eu vou devolver para o frontend/usuário)

// Query params = /?nome=NodeJS
// Route Params = /curso/2
// Request Body = { nome: 'Nodejs', tipo: 'Backend' }

const cursos = ['NodeJS', 'JavaScript', 'React Native'];

// ----- Read -----

// Listar todos os cursos
server.get('/cursos', (req, res) => {
    
    // Retornar cursos em formato JSON
    return res.json(cursos);
});

// localhost:3000/curso/2
server.get('/cursos/:index', (req, res) => {

    // const id = req.params.id;
    // const nome = req.query.nome;
    const { index } = req.params; // desestruturação com parâmetro da rota (único)

    // res.json = enviar uma resposta em json
    // return res.json( { curso : `Aprendendo ${nome}` } );
    // return res.json( { curso : `Curso: ${id}` } );
    return res.json(cursos[index]);

    // res.send = enviar uma resposta
    // return res.send('Hello World');
    console.log('Acessou a rota!')

})

// ----- Create -----

// Adicionar um novo curso
server.post('/cursos', (req, res) => {
    
    // JSON já vem com "name" : "valor"
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

// Colocar o servidor para rodar
server.listen(3000);
