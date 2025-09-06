// import logo from './logo.svg';
// import './App.css';

import { useEffect, useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Estudar React'
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    
    // Verifica as tarefas salvas no localStorage 
    const tarefasStorage = localStorage.getItem('@tarefa');

    // Se tiver tarefas no localStorage, carrega elas no estado
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }

  }, []);

  // Salva as tarefas no localStorage sempre que o estado "tarefas" for alterado
  useEffect(() => {

    localStorage.setItem('@tarefa', JSON.stringify(tarefas));
    
  }, [tarefas]);

  function handleRegister(e){
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>

      <h1>Cadastrar Tarefa</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label><br/>
        <input 
          placeholder = "Digite a tarefa"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /><br/>

        <button type="submit">Registrar</button>
      </form>

      <br/><br/>

      <ul>
          {/* Retorno implícito com () */}
          {tarefas.map((tarefa) => (
            <li key={tarefa}>{tarefa}</li>
          ))}
          
          {/* Retorno explícito com {} e return
              Ao abrir o bloco { } é necessário o return
          */}
          {/* 
            {tarefas.map((tarefa) => {
            return <li key={tarefa}>{tarefa}</li>
            })} 
          */}
      </ul>
    </div>
  );
}

export default App;
