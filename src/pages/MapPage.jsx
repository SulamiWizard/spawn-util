import { Link, useParams } from "react-router-dom";
import { getMap } from "../data/maps";

export default function MapPage() {
  const { mapId } = useParams();
  const map = getMap(mapId);

  if (!map) return <div className="p-8 text-red-400">Map not found</div>;

  return (
    <div className="min-h-screen p-8 flex flex-col gap-6">
      <nav className="flex items-center gap-2 text-sm text-neutral-400">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">{map.label}</span>
      </nav>

      <h1 className="text-3xl font-bold">{map.label}</h1>

      <div className="flex gap-4">
        {Object.entries(map.sides).map(([sideKey, side]) => (
          <Link
            key={sideKey}
            to={`/${mapId}/${sideKey}`}
            className="px-8 py-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg font-semibold transition-colors ring-1 ring-white/10"
          >
            {side.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
