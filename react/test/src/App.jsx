import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Mensagem from './components/Mensagem'
import Tarefa from './components/Tarefa'
import Contador from './components/Contador'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <Header />
        <p>Este é meu primeiro app em React! </p>
      </div>
      
      <div> 

        {/* Here, we are using the Mensagem component to display messages with props that we pass to it. */}
        {/* App is sending props to Mensagem component, that displays a message with the name and age of the person. */}
        <h1> Exemplo de Props</h1>
        <Mensagem nome="Leonardo" idade={30} /> 
        <Mensagem nome="Maria" idade={25} />

      </div>

      <div>
        <h1> Minhas tarefas </h1>
        <Tarefa titulo="Prop Tarefa (título)" descricao="Utilizando 'style' para estilizar essa 
        div dentro de Tarefa.jsx" prioridade="Alta (uma prop genérica)"/>
      </div>

      <Contador />

      <Formulario />
      
      <Footer />

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App;
