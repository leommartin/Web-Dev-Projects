
// Here, we just have the value passed from the parent component being displayed by the child component

function DisplayContador({ valor }) {
    return (
        <div style = {{fontSize: '2em', marginBottom: '20px'}}>
            Valor atual: {valor} 
            {/* Display the current value of the counter mantained in the parent component */}
        </div>
    );
}

export default DisplayContador;