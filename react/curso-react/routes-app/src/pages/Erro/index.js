import {Link} from 'react-router-dom';

function Erro(){
    return(
        <div>
            <h1>Ops, página não encontrada!</h1>

            <span>Encontramos essas páginas aqui: </span> <br/>
            <Link to = "/">Home</Link> <br/>
            <Link to = "/sobre">Sobre</Link> <br/>
            <Link to = "/contato">Contato</Link>
        </div>
    )
}

export default Erro;