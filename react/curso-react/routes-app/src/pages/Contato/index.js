

import { Link } from 'react-router-dom';

function Contato() {
  return (
    <div>
      <h1>Contato</h1> <br/>
      <span>Contato da empresa (ddd) xxxx-xxxx </span> <br/>

      <Link to="/">Home</Link> <br/>
      <Link to="/sobre"> Sobre </Link>
    </div>  
    );
}

export default Contato;