// import logo from './logo.svg';
// import './App.css';

import { useState } from 'react';
import Nome from './components/Nome';

function App() {

  const [aluno, setAluno] = useState("Leonardo");

  function handleChangeName(nome){
    setAluno(nome);
  }
  return (
    <div className="App">
      <h1> Component App</h1>
      <h2> Olá: {aluno} </h2>
      <button onClick={() => handleChangeName('Lucas Oliveira')}>Mudar nome</button>
    </div>
  );
}

export default App;
