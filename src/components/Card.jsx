import { useMovieContext } from "../contexts/MovieContext";

function Card({ movie }) {
  const { adicionarFavorito, isFavorito, removerFavorito } = useMovieContext();
  const favorito = isFavorito(movie.id);

  const aoClicarFavorito = (event) => {
    event.preventDefault();
    favorito ? removerFavorito(movie.id) : adicionarFavorito(movie);
  };

  return (
    <div className="h-auto w-auto relative flex flex-col rounded-sm shadow-lg overflow-hidden transition-transform group hover:scale-102 hover:shadow-2xl m-2 sm:m-1 md:m-2 max-[480px]:m-1 max-[480px]:w-full">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} poster`}
        className="w-full h-auto object-cover object-center sm:max-h-60 md:max-h-none max-[480px]:max-h-48"
        draggable={false}
      />
      <button
        className={`absolute top-2 right-2 z-20 flex items-center justify-center w-10 h-10 p-2 bg-transparent rounded-full transition hover:bg-white/50 focus:outline-none ${favorito ? "text-red-500" : "text-white"} max-[480px]:w-8 max-[480px]:h-8`}
        onClick={aoClicarFavorito}
        aria-label={favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={favorito ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={2}
          className="w-6 h-6 max-[480px]:w-5 max-[480px]:h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </button>
      <div className="bg-gradient-to-r from-cyan-700/80 via-cyan-500/70 to-cyan-400/60 px-2 py-2 flex items-center justify-between gap-2 rounded-b-md shadow-inner max-[480px]:px-1 max-[480px]:py-1">
        <p className="text-yellow font-bold uppercase text-sm overflow-hidden whitespace-pre text-truncate flex-1 drop-shadow-sm tracking-wide cursor-pointer max-[480px]:text-xs" title={movie.title}>{movie.title}</p>
        <span className="rounded text-white text-sm font-semibold max-[480px]:text-xs">{movie.release_date?.split("-")[0]}</span>
      </div>
    </div>
  );
}

export default Card;