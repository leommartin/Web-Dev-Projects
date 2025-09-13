import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './filme.css';

function Filme() {

    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    // como acessar o objeto filme pelo id?

    useEffect( () => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "5c0ea9a2cb10f51220d40a633eecb9ee",
                    language: "pt-BR",
                }
            })
            .then( (response) => { // response tem detalhes de config, data, headers, etc...
                // console.log(response.data); // os atributos que queremos estão em .data (id, nome, etc)
                setFilme(response.data);
                setLoading(false);
            })
            .catch( () => {
                console.log("Filme não encontrado");
            })
        }

        loadFilme();

        return () => {
            console.log("Componente foi desmontado");
        }

    }, []);

    if(loading) {
        return(
            <div>
                <h1 className="filme-info">Carregando detalhes do filme...</h1>
            </div>            
        )   
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title} ></img>
            
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação:{filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button>Salvar</button>
                <button>
                    <a href="#">
                        Ver Trailer
                    </a>
                </button>

            </div>
        </div>
    )
}

export default Filme;