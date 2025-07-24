// Child component that changes the counter

// This component receives functions as props to control the counter
// It executes these functions when the buttons are clicked
// Here, we don't have control over the counter value, just the actions to change it


function ControleContador({ aoIncrementar, aoResetar }) {
    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button onClick={aoIncrementar}>Incrementar</button>
            <button onClick={aoResetar}>Resetar</button>
        </div>
    );
}

export default ControleContador;