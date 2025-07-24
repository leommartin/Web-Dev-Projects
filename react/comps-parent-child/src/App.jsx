import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayContador from './components/DisplayContador.jsx'
import ControleContador from './components/ControleContador.jsx';

function App() {
  const [contador, setContador] = useState(0);
  
  // These functions are passed to the child component as props
  function incrementar() {
    setContador(contador + 1);
  }

  function resetar() {
    setContador(0);
  }

  return (
      <div style={{textAlign: 'center', marginTop: '50px'}}>
        <h1> Parent and Child Example </h1>
        <p> On this page, we have a parent component that maintains the state 
          of a counter and two child components. One component is used to display the
          current value of the counter. The other is used to call the incrementar()/resetar()
          functions that are in the parent component. </p>

        {/* The component below is used to display the current value of the counter */}
        <DisplayContador valor={contador} />

        {/* The component below is used to control the counter (uses the functions from the parent component) */}
        <ControleContador aoIncrementar={incrementar} aoResetar={resetar} />

      </div>
  );
}

export default App;
