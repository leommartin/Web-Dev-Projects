import { useEffect, useState } from 'react';

function TodoList() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [foiCarregado, setFoiCarregado] = useState(false);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    console.log("Carregando tarefas do localStorage:", tarefasSalvas);
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
    setFoiCarregado(true);
  }, []);

  // Save tasks to localStorage whenever they change[]
  // JSON.stringify is used to convert the array to a string
  useEffect(() => {
    if(foiCarregado) {
        console.log("Salvando tarefas no localStorage:", tarefas);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
  }, [tarefas]);

  function adicionarTarefa(e) {
    e.preventDefault();
    if (novaTarefa.trim() === '') return;

    const nova = {
      id: Date.now(), // Unique ID based on current timestamp
      texto: novaTarefa,
    };

    setTarefas([...tarefas, nova]);
    setNovaTarefa('');
  }

  function removerTarefa(id) {
    console.log("Removendo tarefa com ID:", id);
    const atualizadas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(atualizadas);
  }

  return (
    <div>
      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      {/* // Display the list of tasks */}
      <ul>
        {tarefas.length === 0 && <p>Nenhuma tarefa por enquanto.</p>}

        {tarefas.map(tarefa => (
          <li key={tarefa.id}>
            {tarefa.texto}
            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
