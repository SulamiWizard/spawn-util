import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-10 flex items-center h-14 px-6 gap-4 bg-neutral-900 border-b border-neutral-800">
      {!isHome && (
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-neutral-400 hover:text-white transition-colors"
        >
          ← Back
        </button>
      )}
      <Link to="/" className="font-bold text-white">
        SpawnUtil
      </Link>
    </nav>
  );
}
