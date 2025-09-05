// import logo from './logo.svg';
// import './App.css';

import { useState } from 'react';
import Nome from './components/Nome';

function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(0);

  const [user, setUser] = useState({});

  function handleRegister(e){
    e.preventDefault();
    
    alert("Usuário cadastrado com Sucesso!");
    setUser({
      nome: nome, 
      email: email,
      idade: idade
    })

  }

  return (
    <div>

      <h1>Cadastrar Usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome</label><br/>
        <input 
          placeholder = "Digite seu nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        /><br/>

        <label>E-mail</label><br/>
        <input 
          placeholder = "Digite seu e-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>

        <label>Idade</label><br/>
        <input 
          placeholder = "Digite sua idade"
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        /><br/>

        <button type="submit">Registrar</button>
      </form>

      <br/><br/>

      {/* Utilizando user.xxxx, os dados só aparecem depois de cadastrados (após onSubmit) */ }
      {/* Utilizando nome, email e idade os dados aparecem conforme são alterados */}
      <span>Bem vindo: {user.nome}</span><br/>
      <span>Email: {user.email}</span><br/>
      <span>Idade: {user.idade}</span><br/>
    </div>
  );
}

export default App;
