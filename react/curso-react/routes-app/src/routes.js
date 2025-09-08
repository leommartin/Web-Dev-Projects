import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Header from './components/Header';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                {/* Ao acessar / sem nada, acessa a homepage */}
                <Route path="/" element={ <Home/> } />

                <Route path="/sobre" element={ <Sobre/> } />

                <Route path="/contato" element={ <Contato/> } />

                <Route path="/produto/:id" element={ <Produto/> } />

                {/* Rota para página de erro, caso a rota não exista */}
                <Route path="*" element={ <Erro/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;