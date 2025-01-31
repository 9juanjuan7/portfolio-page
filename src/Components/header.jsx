import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Jrae</h1>
        <nav>
          <ul className="flex gap-4">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
            <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
