function Tarefa({ titulo, descricao, prioridade }) {
    
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <p>Prioridade: {prioridade}</p>
        </div>
    )
}

export default Tarefa;