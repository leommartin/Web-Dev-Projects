
import { useParams } from "react-router-dom";
// useParams = Pega os parâmetros da URL

function Produto(){

    // Aqui pegamos o id que vem na URL
    const {id} = useParams();

    return(
        <div>
            <h2>Página detalhe do produto</h2>
            <span> Meu produto é: {id}</span>
        </div>
    )
}

export default Produto;