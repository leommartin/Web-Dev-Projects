import { useState } from 'react';

function Formulario() {
    const [nome, setNome] = useState(''); 
    // useState is a React Hook that allows us to add state to a functional component
    // Here, we are initializing the state variable 'nome' with an empty string
    // setNome is the function that will be used to update the STATE VARIABLE 'nome'
    // Pay attention, useState RETURN the CURRENT STATE and a function to update it

    // nome is the current value of the state (the text typed in the input)
    // setNome is the function that will be used to update the state(value) of variable 'nome'


    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            Input Reativo <br></br>
            < input 
              type = "text"
              placeholder = "Digite seu nome"
              value = {nome} // {} is used to insert a JavaScript expression inside JSX
              onChange={(e) => setNome(e.target.value)} 

              // e is the event object that React provides immediately when the event occurs
              // e.target is the input element that was modified
              // e.target.value is the new value of the input
              // onChange is an event that is triggered when the input value changes
              // So, when the user types in the input, we update the nome state with the new value
            />
            <p> Olá, {nome}! </p>
        </div>
    );
}

export default Formulario;