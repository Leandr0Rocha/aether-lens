import { Link } from "react-router-dom";
import { useState } from "react";
import Icons from "./Icons";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative m-4 md:m-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50 text-white rounded-full p-2 shadow-lg focus:outline-none"
        aria-label="Abrir menu"
      >
        <span className="text-4xl sm:text-3xl text-red font-bold">☰</span>
      </button>

      {/* Overlay embaçado */}
      <div
        className={`fixed inset-0 backdrop-blur-sm bg-black/10 bg-opacity-20 z-40 transition-opacity duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setOpen(false)}
      />

      {/* Side menu */}
      <nav
        className={`fixed top-0 left-0 h-full w-92 sm:w-72 md:w-92 z-50 shadow-lg transform transition-transform duration-300 bg-gray ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header com título */}
          <div className="p-4 mb-2 text-center">
            <h1 className="text-red font-bold text-3xl sm:text-2xl tracking-wider font-[Michroma]">AETHER LENS</h1>
          </div>

          {/* Menu items */}
          <ul className="flex flex-col space-y-1 px-4">
            <li>
              <Link
                to="/"
                className="block text-white text-2xl sm:text-xl hover:text-cyan px-4 py-2 rounded transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/favoritos"
                className="block text-white text-2xl sm:text-xl hover:text-cyan px-4 py-2 rounded transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                Favoritos
              </Link>
            </li>
          </ul>

          {/* Área central vazia */}
          <div className="flex-1"></div>

          {/* Ícones de redes sociais */}
          <div className="flex justify-center items-center p-8 sm:p-4">
            <Icons />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;