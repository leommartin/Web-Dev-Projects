let tarefas = [];
let idAtual = 1;

// Function to generate a unique ID for each task
function gerarId() {
  return idAtual++;
}

// module.exports is uded to export the tarefas array, idAtual variable, and gerarId function
module.exports = {
  tarefas,
  idAtual,
  gerarId
};
