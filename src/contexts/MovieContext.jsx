/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favoritos");
        if (storedFavorites) {
            setFavoritos(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
    }, [favoritos]);

    const adicionarFavorito = (filme) => {
        setFavoritos(prev => [
            ...prev,
            filme
        ]);
    }

    const removerFavorito = (id) => {
        setFavoritos(prev => prev.filter(filme => filme.id !== id));
    }

    const isFavorito = (id) => {
        return favoritos.some(filme => filme.id === id);
    }

    const values = {
        favoritos,
        adicionarFavorito,
        removerFavorito,
        isFavorito
    };

    return <MovieContext.Provider value={values}>
        {children}
    </MovieContext.Provider>;
}