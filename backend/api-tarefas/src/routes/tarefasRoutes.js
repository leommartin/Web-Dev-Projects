const express = require('express');
const router = express.Router();    // Create a new router instance for task routes
const tarefasController = require('../controllers/tarefasController');

// GET
router.get('/', tarefasController.listarTodas);
router.get('/concluidas', tarefasController.listarConcluidas);
router.get('/nao-concluidas', tarefasController.listarNaoConcluidas);

// POST
router.post('/', tarefasController.criar);

// PUT / PATCH
router.put('/:id', tarefasController.atualizar);
router.patch('/:id/concluir', tarefasController.marcarComoConcluida);

// DELETE
router.delete('/:id', tarefasController.deletar);

module.exports = router;
