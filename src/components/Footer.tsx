import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-6">
      <div className="container mx-auto max-w-6xl px-6">
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <Link to="/about" className="text-xs text-gray-500 hover:text-gray-800 transition-colors">
            この場所について
          </Link>
          <Link to="/community" className="text-xs text-gray-500 hover:text-gray-800 transition-colors">
            運案メッセージ
          </Link>
          <Link to="/column" className="text-xs text-gray-500 hover:text-gray-800 transition-colors">
            FAQ
          </Link>
          <Link to="/about" className="text-xs text-gray-500 hover:text-gray-800 transition-colors">
            お用い合わせ
          </Link>
          <Link to="/about" className="text-xs text-gray-500 hover:text-gray-800 transition-colors">
            両官情報
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
