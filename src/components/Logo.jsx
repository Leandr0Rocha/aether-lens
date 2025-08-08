import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/images/Logotipo ilustracao.png"
        alt="Aether Lens Logo"
        className="h-16 w-auto object-contain transition-transform hover:scale-104 motion-reduce:transition-none sm:h-12 md:h-16 max-[480px]:h-10"
        draggable={false}
      />
    </Link>
  );
}

export default Logo;