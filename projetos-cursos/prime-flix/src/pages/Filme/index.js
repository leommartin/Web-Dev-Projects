import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

function Filme() {

    const { id } = useParams();
    

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
                console.log(response.data); // os atributos que queremos estão em .data (id, nome, etc)
            })
            .catch( () => {
                console.log("Filme não encontrado");
            })
       }

       loadFilme();

    }, []);

    return (
        <div>
            <h1>Página com detalhes do filme: {id} </h1>
            {/* <article>
                
                <img src="" alt="" />
                <h3>Sinopse</h3>


            </article> */}
        </div>
    )
}

export default Filme;