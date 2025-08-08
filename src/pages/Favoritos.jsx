import { useMovieContext } from "../contexts/MovieContext";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useMemo } from "react";
import EmptyState from "../components/EmptyState";

function Favoritos({ busca, setBusca }) {
  const { favoritos } = useMovieContext();

  const handleLocalBuscar = (event) => {
    event.preventDefault();
    if (busca.trim()) {
      setBusca("");
    }
  };

  const filmesFiltrados = useMemo(() => {
    const termoBusca = busca.toLowerCase();
    if (!termoBusca) {
      return favoritos;
    }
    return favoritos.filter((filme) =>
      filme.title.toLowerCase().includes(termoBusca)
    );
  }, [busca, favoritos]);

  const hasFavoritos = favoritos && favoritos.length > 0;

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header busca={busca} setBusca={setBusca} buscar={handleLocalBuscar} />
      <main className="w-full max-w-7xl px-4 my-8 mx-auto flex-grow">
        <h2 className="flex items-center gap-2 text-3xl font-bold text-white mb-6 font-[Michroma]">
          Favoritos
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </h2>
        {hasFavoritos ? (
          filmesFiltrados.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-8 gap-x-4 max-[480px]:grid-cols-2 max-[480px]:gap-y-4 max-[480px]:gap-x-2 max-[480px]:px-2">
              {filmesFiltrados.map((movie) => (
                <Card movie={movie} key={movie.id} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="Nenhum resultado encontrado"
              message={`Não encontramos filmes favoritos que correspondam a "${busca}"`}
            />
          )
        ) : (
          <EmptyState
            title="Nenhum filme favorito adicionado ainda."
            message="Seus filmes favoritos estarão aqui após você adicioná-los"
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Favoritos;