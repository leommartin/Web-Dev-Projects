import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './components/ToDoList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div style={{padding: '2rem', fontFamily: 'Arial, sans-serif'}}>
      <h1>Minhas tarefas</h1>
      <ToDoList />
    
    </div>

  );
}

export default App;
