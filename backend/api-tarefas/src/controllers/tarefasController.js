const { tarefas, idAtual, gerarId } = require('../data/tarefasData');

exports.listarTodas = (req, res) => {
  res.json(tarefas);
};

exports.listarConcluidas = (req, res) => {
  const concluidas = tarefas.filter(t => t.concluida);
  res.json(concluidas);
};

exports.listarNaoConcluidas = (req, res) => {
  const pendentes = tarefas.filter(t => !t.concluida);
  res.json(pendentes);
};

exports.criar = (req, res) => {
  const { titulo, concluida } = req.body;

  if (!titulo) {
    return res.status(400).json({ erro: 'Título é obrigatório' });
  }

  if (tarefas.find(t => t.titulo === titulo)) {
    return res.status(409).json({ erro: 'Título já existe' });
  }

  const novaTarefa = {
    id: gerarId(),
    titulo,
    concluida: concluida !== undefined ? concluida : false
  };

  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
};

exports.atualizar = (req, res) => {
  const { id } = req.params;
  const { titulo, concluida } = req.body;

  const tarefa = tarefas.find(t => t.id === parseInt(id));

  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

  if (titulo !== undefined) tarefa.titulo = titulo;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.json(tarefa);
};

exports.marcarComoConcluida = (req, res) => {
  const { id } = req.params;
  const tarefa = tarefas.find(t => t.id === parseInt(id));

  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

  tarefa.concluida = true;
  res.json(tarefa);
};

exports.deletar = (req, res) => {
  const { id } = req.params;
  const index = tarefas.findIndex(t => t.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

  tarefas.splice(index, 1);
  res.status(204).send();
};
