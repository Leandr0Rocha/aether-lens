import Card from './Card';

function Categoria({ titulo, items }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="w-full max-w-7xl mx-auto mb-12 px-2 sm:px-1 md:px-4 max-[480px]:px-1">
      <h3 className="text-xl sm:text-lg md:text-2xl font-bold text-white mb-2 font-[Michroma] animate-slideIn max-[480px]:text-base">
        {titulo}
      </h3>
      <div className="flex flex-row flex-nowrap gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-cyan-400 py-4">
        {items.map(item => (
          <div key={item.id} className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px]">
            <Card movie={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categoria;