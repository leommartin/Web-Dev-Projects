function Mensagem(props){

    // Here, props is an object that contains the properties passed to the component.
    // We also can use {nome, idade} instead of props if we want to destructure the props.
    return (
        <p>Olá {props.nome}! Você tem {props.idade} anos.</p>
    );
}

export default Mensagem;

