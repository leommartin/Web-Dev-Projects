import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Header from './components/Header';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                {/* Ao acessar / sem nada, acessa a homepage */}
                <Route path="/" element={ <Home/> } />

                <Route path="/sobre" element={ <Sobre/> } />

                <Route path="/contato" element={ <Contato/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;