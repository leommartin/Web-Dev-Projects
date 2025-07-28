const express = require('express');
const tarefasRoutes = require('./src/routes/tarefasRoutes');
const logger = require('./src/middlewares/logger');

const app = express();

// Global middlewares 
app.use(express.json());  // Parse JSON bodies
app.use(logger);          // Log HTTP method and route of incoming requests

// Rotas principais
app.use('/tarefas', tarefasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
