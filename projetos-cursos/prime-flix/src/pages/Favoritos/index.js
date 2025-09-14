import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';
function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    useEffect( () => {

        // recebe a lista em formato de string
        const minhaLista = localStorage.getItem("@primeflix")
        setFilmes(JSON.parse(minhaLista) || []);

    }, [])

    function excluirFilme(id){
        alert("ID clicado: " + id);

        let filtroFilmes = filmes.filter( (item) => item.id !== id);
        // filtro pelo id, todos os ids diferentes permancem na lista
        
        setFilmes(filtroFilmes)
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
    }

    return (
        <div className="meus-filmes">
            <h1>Filmes favoritos</h1>

            {filmes.length === 0 && <span>Você não tem nenhum filme salvo :( </span> }
            <ul>
                { filmes.map( (item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>

                            <div className="buttons">
                                <Link to={`/filme/${item.id}`}> Ver detalhes </Link>
                                <button onClick={ () => excluirFilme(item.id) }> Excluir </button>
                            </div>
                        </li>
                    )
                })}

            </ul>

        </div>

    )
}

export default Favoritos;