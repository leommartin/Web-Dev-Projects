import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                {/* Ao acessar / sem nada, acessa a homepage */}
                <Route path="/" element={ <Home/> } />

                <Route path="/sobre" element={ <Sobre/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;