const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

function ListaDeFrutas(){
    return (
        <ul>
            {frutas.map((fruta, index) => (
                <li key={index}>{fruta}</li> 
                // Key is used by React to uniquely identify each item
                // {fruta} is the current item in the array
                // index is the current index of the item in the array
            ))}
        </ul>
    );
}

export default ListaDeFrutas;