import { useEffect, useState, useCallback } from "react";
import {
  getGenerosFilmes,
  getFilmesPorGenero,
  getFilmesPopulares,
} from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Categoria from "../components/Categoria";

const GENEROS_DESEJADOS = [
  "Ação",
  "Aventura",
  "Comédia",
  "Terror"
];

function Home({ busca, setBusca, buscar }) {
  const [filmesPorGenero, setFilmesPorGenero] = useState({});
  const [filmesPopulares, setFilmesPopulares] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [populares, todosGeneros] = await Promise.all([
        getFilmesPopulares(),
        getGenerosFilmes(),
      ]);
      setFilmesPopulares(populares);

      const generosMap = new Map(todosGeneros.map(g => [g.name.toLowerCase(), g.id]));

      const promisesFilmesPorGenero = GENEROS_DESEJADOS.map(async (nomeGenero) => {
        const idGenero = generosMap.get(nomeGenero.toLowerCase());
        if (idGenero) {
          const filmes = await getFilmesPorGenero(idGenero);
          return [nomeGenero, filmes];
        }
        return [nomeGenero, []];
      });

      const filmesPorGeneroArray = await Promise.all(promisesFilmesPorGenero);
      setFilmesPorGenero(Object.fromEntries(filmesPorGeneroArray));

    } catch (err) {
      console.error("Falha ao buscar dados:", err);
      setError("Não foi possível carregar os filmes. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header busca={busca} setBusca={setBusca} buscar={buscar} />
      <main className="w-full flex flex-col mx-auto items-center flex-grow">
        {loading && (
          <div className="flex flex-1 items-center justify-center min-h-[50vh]">
            <p className="text-white text-center text-2xl animate-pulse">Carregando...</p>
          </div>
        )}
        {error && (
          <div className="flex flex-1 items-center justify-center min-h-[50vh]">
            <p className="text-red text-center text-2xl animate-pulse">{error}</p>
          </div>
        )}
        {!loading && !error && (
          <div>
            <Categoria titulo="Em alta" items={filmesPopulares} />
            {GENEROS_DESEJADOS.map(nomeGenero => (
              <Categoria
                key={nomeGenero}
                titulo={`${nomeGenero}`}
                items={filmesPorGenero[nomeGenero]}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Home;