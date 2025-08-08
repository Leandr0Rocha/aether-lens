import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Busca from './pages/Busca';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { MovieProvider } from "./contexts/MovieContext";
import { useState } from 'react';

function App() {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  const handleBuscar = (event) => {
    event.preventDefault();
    if (!busca.trim()) return;
    navigate(`/busca?q=${busca}`);
    setBusca("");
  };

  return (
    <MovieProvider>
      <main className='app flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<Home busca={busca} setBusca={setBusca} buscar={handleBuscar} />} />
          <Route path='/busca' element={<Busca busca={busca} setBusca={setBusca} buscar={handleBuscar} />} />
          <Route path='/favoritos' element={<Favoritos busca={busca} setBusca={setBusca} />} />
          <Route path='*' element={<h1 className="m-auto align-center">Página não encontrada</h1>} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App;