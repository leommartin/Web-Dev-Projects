
import axios from 'axios';

// BASE DA URL:  https://api.themoviedb.org/3/
// URL DA API:   /movie/now_playing?api_key=5c0ea9a2cb10f51220d40a633eecb9ee&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default api;