import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getFilmesPorBusca } from "../services/api";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmptyState from "../components/EmptyState";

function Busca({ busca, setBusca, buscar }) {
  const [searchParams] = useSearchParams();
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = searchParams.get("q");

  useEffect(() => {
    async function fetchFilmes() {
      if (!query) {
        setFilmes([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const resultados = await getFilmesPorBusca(query);
        setFilmes(resultados);
      } catch (err) {
        console.error("Falha ao buscar filmes:", err);
        setError("Não foi possível realizar a busca. Tente novamente.");
      } finally {
        setLoading(false);
      }
    }

    fetchFilmes();
  }, [query]);

  // Sincroniza o campo de busca com o parâmetro da URL
  useEffect(() => {
    setBusca(query || "");
  }, [query, setBusca]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header busca={busca} setBusca={setBusca} buscar={buscar} />
      <main className="w-full flex-grow">
        <div className="w-full max-w-7xl mx-auto px-4 mt-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-10 tracking-wide font-[Michroma] drop-shadow-lg">
            Resultados para: <span className="text-cyan-400">{query}</span>
          </h2>
          {loading && <p className="text-white text-center text-2xl animate-pulse">Carregando...</p>}
          {error && <p className="text-red text-center text-2xl animate-pulse">{error}</p>}
          {!loading && !error &&
            (filmes.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-8 gap-x-4 max-[480px]:grid-cols-2 max-[480px]:gap-y-4 max-[480px]:gap-x-2 max-[480px]:px-2">
                {filmes.map((movie) => (
                  <Card movie={movie} key={movie.id} />
                ))}
              </div>
            ) : (
              <EmptyState
                title="Nenhum resultado encontrado"
                message={`Não encontramos filmes que correspondam a "${query}"`}
              />
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Busca;