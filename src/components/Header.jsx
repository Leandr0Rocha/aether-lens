import Logo from "./Logo";
import Menu from "./Menu";

function Header({ busca, setBusca, buscar }) {
  return (
    <header className="w-full h-24 flex flex-1 items-center justify-around p-4 sm:p-2 md:px-6 relative z-40 max-[480px]:h-20 max-[480px]:p-2 mb-2">
      <Menu />
      <Logo />
      <form
        onSubmit={buscar}
        className="flex flex-row max-w-xl mx-4 gap-x-1 h-12 items-center max-[480px]:h-8"
      >
        <input
          type="text"
          placeholder="Buscar filme..."
          className="bg-black text-white rounded-l-md p-4 h-12 focus:outline-none md:w-64 sm:w-40 shadow hover:bg-gray transition font-[Michroma] max-[480px]:p-2 max-[480px]:text-xs max-[480px]:w-28"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white bold rounded-r-md p-4 h-12 shadow items-center justify-center hover:bg-gray transition max-[480px]:p-2 max-[480px]:text-xs"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="11" cy="11" r="7" strokeWidth="2" stroke="currentColor" fill="none" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
          </svg>
        </button>
      </form>
    </header>
  );
}

export default Header;