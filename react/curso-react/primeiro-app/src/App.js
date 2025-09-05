// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Bem vindo ao meu projeto!</h1>
      <Nome/>
      <br/>
      <Nome/>
    </div>
  );
}


// Criando um componente Nome
function Nome(){
  return(
    <span>Bem-vindo: Matheus</span>
  )
}


export default App;
