function Arrow({ className, style, onClick, children }) {
  return (
    <div
      className={`${className} before:hidden w-8 h-8 sm:w-7 sm:h-7 md:w-10 md:h-10 flex items-center justify-center bg-black/50 hover:bg-black/80 rounded-full z-10 transition-all duration-300 motion-reduce:transition-none`}
      style={{ ...style }}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label="Navegar"
    >
      {children}
    </div>
  );
}

export default Arrow;