import Icons from './Icons.jsx'

function Footer() {
  return (
    <footer className="w-full bg-red text-white p-4 border-t-2 border-cyan max-[480px]:p-2">
      <div className="flex flex-col md:flex-row items-center justify-around w-full h-auto gap-2 max-[480px]:gap-1">
        {/* Redes sociais */}
        <Icons />
        {/* Links centralizados */}
        <div
          className="flex flex-col sm:flex-row md:flex-row flex-wrap gap-4 text-base text-center font-normal justify-center items-center flex-1 font-[Michroma] max-[480px]:gap-2 max-[480px]:text-xs"
        >
          <a href="#" className="hover:opacity-80">Newsletter</a>
          <a href="#" className="hover:opacity-80">Créditos</a>
          <a href="#" className="hover:opacity-80">Sobre</a>
          <a href="#" className="hover:opacity-80">Suporte</a>
          <a href="#" className="hover:opacity-80">Política de privacidade</a>
        </div>
        {/* Logo à direita */}
        <div className="flex items-center w-auto justify-center mt-4 md:mt-0 max-[480px]:mt-2">
          <img src="/images/Logotipo comprido.png" alt="Aether Lens" className="h-8 sm:h-6 md:h-8 rounded-md shadow max-[480px]:h-5" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;