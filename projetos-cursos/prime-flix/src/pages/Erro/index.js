
import { Link } from 'react-router-dom';
import './style.css';

function Erro()
{
    return (
        <div className="not-found"> 
        
            <p>Not Found 404</p>
            <Link to="/">Ir para Home</Link>
        
        </div>

    )
}

export default Erro;