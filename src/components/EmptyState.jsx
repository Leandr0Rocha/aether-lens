function EmptyState({ title, message }) {
  return (
    <div className="flex flex-col items-center justify-center text-white mt-12 bg-black/40 rounded-xl p-10 sm:p-6 md:p-10 shadow-lg text-center max-w-2xl mx-auto max-[480px]:p-4">
      <h3 className="text-3xl sm:text-2xl font-bold mb-4 text-cyan-400 max-[480px]:text-lg">
        {title}
      </h3>
      <p className="text-cyan-200 text-lg sm:text-base max-[480px]:text-sm">{message}</p>
    </div>
  );
}

export default EmptyState;