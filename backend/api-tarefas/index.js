const express = require('express'); // Import the Express framework
const app = express(); // Initialize the Express application, create the app (server)

// Middleware to parse JSON bodies
// Permit the server to understand JSON data sent in requests (POST, PUT, etc.)
// Express.json() is a built-in middleware function in Express
// This transforms the request body into a JavaScript object
app.use(express.json());

// 
let tarefas = []; // Array to store tasks in memory
let concluidas = []; // Array to store tasks that are finished
let idAtual = 1;  // Variable to keep track of the current task ID

// GET: List all tasks
// Returns the list of tasks as a JSON response
app.get('/tarefas', (req, res) => {
    res.json(tarefas); // Send the list of tasks as a JSON response
});

// Route to get completed tasks
app.get('/tarefas/concluidas', (req, res) => {

    const concluidas = tarefas.filter(t => t.concluida);
    res.json(concluidas);

});

// Route to get non-completed tasks
app.get('/tarefas/nao-concluidas', (req, res) => {

    const concluidas = tarefas.filter(t => t.concluida === false);
    res.json(concluidas);

});

// POST: Create a new task
// Receive a task title from the request body and add it to the tasks array
app.post('/tarefas', (req, res) => {

    const {titulo, concluida} = req.body; // Extract the 'titulo' field from the request body

    if(!titulo) {
        return res.status(400).json({erro: 'Título é obrigatório'})
        // status 400 indicates a bad request, meaning the client sent invalid data
    }

    const novaTarefa = {
        id: idAtual++, // Assign a unique ID to the task and increment the ID for the next task
        titulo,
        // concluida: false // Set the task as not completed by default
        concluida: concluida !== undefined ? concluida: false // If 'concluida' is provided, use it; otherwise, default to false
    };

    tarefas.push(novaTarefa); // Add the new task to the tasks array
    res.status(201).json(novaTarefa); // Send the created task as a JSON response with status 201 (Created)
});

// PUT: Find a task by ID and allow updating its title or completion status
app.put('/tarefas/:id', (req, res) => {
  const { id } = req.params;                // Extract the task ID from the request parameters
  const { titulo, concluida } = req.body;   // Extract the 'titulo' and 'concluida' fields from the request body

  const tarefa = tarefas.find(t => t.id === parseInt(id)); // Find the task by ID in the tasks array

  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' }); // If the task is not found, return a 404 Not Found error
  }

  if (titulo !== undefined) tarefa.titulo = titulo; // Update the task title if provided
  if (concluida !== undefined) tarefa.concluida = concluida; // Update the task completion status if provided

  res.json(tarefa); // Send the updated task as a JSON response
});

// DELETE: Delete a task by ID
app.delete('/tarefas/:id', (req, res) => {
  const { id } = req.params; // Extract the task ID from the request parameters

  const index = tarefas.findIndex(t => t.id === parseInt(id)); // Find the index of the task by ID in the tasks array

  if (index === -1) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

    // If the task is found, remove it from the tasks array
  tarefas.splice(index, 1);
  res.status(204).send(); // 204 = No Content
});

// Root route
// app.get is used to define a route that listens for GET requests on the root URL
// res.send is used to send a response back to the client
// app.get('/', (req, res) => {
//     res.send('API de tarefas funcionando!');
// });

const PORT = 3000;
// app.listen is used to start the server on the specified port
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});