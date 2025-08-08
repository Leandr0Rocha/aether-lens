import Card from './Card';

function Categoria({ titulo, items }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="w-full max-w-7xl mx-auto mb-12 px-2 sm:px-1 md:px-4 max-[480px]:px-1">
      <h3 className="text-xl sm:text-lg md:text-2xl font-bold text-white mb-2 font-[Michroma] animate-slideIn max-[480px]:text-base">
        {titulo}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-8 gap-x-4 max-[480px]:grid-cols-2 max-[480px]:gap-y-4 max-[480px]:gap-x-2 max-[480px]:px-2">
        {items.map(item => (
          <Card movie={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default Categoria;