const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getFilmesPopulares = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&adult=false`);
    const data = await response.json();
    return data.results.filter(filme => filme.adult === false);
};

export const getFilmesPorBusca = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=pt-BR&adult=false`);
    const data = await response.json();
    return data.results;
};

export const getGenerosFilmes = async () => {
    const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`);
    const data = await response.json();
    return data.genres;
};

export const getFilmesPorGenero = async (genreId) => {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&adult=false`);
    const data = await response.json();
    return data.results.filter(filme => filme.adult === false);
};