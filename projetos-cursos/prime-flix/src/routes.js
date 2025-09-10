import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Filme from './pages/Filme';
import Erro from './pages/Erro';
import Header from './components/Header';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>

                <Route path="/" element={ <Home/> } />
                <Route path="/filme/:id" element={ <Filme/> } />

                <Route path="*" element={ <Erro/> } />

            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;

// https://api.themoviedb.org/3/movie/now_playing?api_key=5c0ea9a2cb10f51220d40a633eecb9ee
// https://api.themoviedb.org/3/movie/now_playing?api_key=5c0ea9a2cb10f51220d40a633eecb9ee&language=pt-br