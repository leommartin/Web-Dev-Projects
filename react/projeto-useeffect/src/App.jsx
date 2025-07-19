import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Data from "./components/Data";

function App() {
  const [loading, setLoading] = useState(true); // State that controls if the data is loading
  const [dados, setDados] = useState(null);     // State that holds the data to be displayed

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate the return of an API call
      setDados({
        nome: "Leonardo",
        idade: 25,
        cidade: "Rio de Janeiro"
      });
      setLoading(false);
    }, 3000); // Wait 3 seconds

    // The return of useEffect is a cleanup function (remove the timer if the component unmounts)
    return () => clearTimeout(timer); // Cleanup, good practice to avoid memory leaks

  }, []); // Empty dependency array means this effect runs once time after the initial render
          // In this case, the message will be displayed only once when the component mounts

  // Define what will be displayed on the screen
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Simulador de Carregamento com useEffect</h1>
      {loading ? <Loader /> : <Data dados={dados} />}
    </div>
  );
}

export default App;
