
import { Link } from 'react-router-dom';
import './not-found.css';

function Erro()
{
    return (
        <div className="not-found"> 
        
            <p>Not Found - 404 </p>
            <Link to="/">Veja todos os filmes</Link>
        
        </div>

    )
}

export default Erro;