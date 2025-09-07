
import React, {useEffect, useState} from 'react';
import './style.css';

function App() {

  // Estado para armazenar os dados da API
  // Nesse caso, uma lista de objetos (posts de nutrição)
  // json recebido da API eh uma array/lista, logo nutri eh eh um array/lista
  const [nutri, setNutri] = useState([]);
  
  useEffect(() => {

    function loadAPI() {
      
      // Faz uma requisição HTTP GET nesta URL
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
      .then((res) => res.json()) // Resultado  eh convertido para JSON
      .then((json) => {          
        console.log(json);       // Exibe o resultado no console
        setNutri(json);          // Salva o resultado no estado  
      })
    }

    loadAPI();
  }, []);


  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      { // A partir do useState nutri, faz um map para listar os posts(itens)
        nutri.map((item) => {
        return(
          <article key={item.id} className="post">

            <strong className="titulo">{item.titulo}</strong>

            <img src={item.capa} alt={item.titulo} className="capa"/>

            <p className="subtitulo">
              {item.subtitulo}
            </p>

            <a className="botao">Acessar</a>
          </article>
        )
        })
      }
  
    </div>
  );
}

export default App;
