// Criando um componente Nome

// Usando desestruturação
function Nome({aluno, idade}){
  return(
    <span>Bem-vindo: {aluno} - {idade} anos</span>
  )
}

//  Aqui também poderia ser usado props
/*
    function Nome(props){
    return(
        <span>Bem-vindo: {props.aluno} - {props.idade} anos</span>
    )
    }
*/

export default Nome;