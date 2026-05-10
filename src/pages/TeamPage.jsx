import { Link, useParams } from "react-router-dom";
import { getMap, getSide } from "../data/maps";
import CoverCard from "../components/CoverCard";

export default function SidePage() {
  const { mapId, side } = useParams();
  const map = getMap(mapId);
  const sideData = getSide(mapId, side);

  if (!map || !sideData) return <div className="p-8 text-red-400">Not found</div>;

  return (
    <div className="min-h-screen p-8 flex flex-col gap-6">
      <nav className="flex items-center gap-2 text-sm text-neutral-400">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link to={`/${mapId}`} className="hover:text-white transition-colors">{map.label}</Link>
        <span>/</span>
        <span className="text-white">{sideData.label}</span>
      </nav>

      <h1 className="text-3xl font-bold">{sideData.label}</h1>

      {sideData.utilities.length === 0 ? (
        <p className="text-neutral-400">No lineups yet for this side.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl">
          {sideData.utilities.map((utility) => (
            <Link key={utility.id} to={`/${mapId}/${side}/${utility.id}`}>
              <CoverCard name={utility.label} image={utility.coverimage} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
