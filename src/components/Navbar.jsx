import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-surface text-textPrimary shadow-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-2xl font-semibold text-primary hover:text-primary-dark transition duration-300"
          >
            Armonía Integral Psicología
          </Link>
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-textSecondary hover:text-primary font-medium px-4 py-2 rounded-lg hover:bg-primary/5 transition duration-300"
            >
              Inicio
            </Link>
            <Link
              to="/servicios"
              className="text-textSecondary hover:text-primary font-medium px-4 py-2 rounded-lg hover:bg-primary/5 transition duration-300"
            >
              Servicios
            </Link>
            <Link
              to="/equipo"
              className="text-textSecondary hover:text-primary font-medium px-4 py-2 rounded-lg hover:bg-primary/5 transition duration-300"
            >
              Equipo
            </Link>
            <Link
              to="/contacto"
              className="text-textSecondary hover:text-primary font-medium px-4 py-2 rounded-lg hover:bg-primary/5 transition duration-300"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
