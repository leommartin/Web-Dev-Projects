const tarefas = [
  { id: 1, nome: "Estudar" },
  { id: 2, nome: "Treinar" },
];

function Tarefas() {
    return (
    <ul>
        {tarefas.map((tarefa) => (
            <li key={tarefa.id}> {tarefa.nome} </li>
        ))}

        { 
          // The key prop is used by React to uniquely identify each item in the list.
          //  It also helps React render the page efficiently and update or remove elements when needed.
        }
    </ul>
    );
}

export default Tarefas;  