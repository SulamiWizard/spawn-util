import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { getMap, getSide, getUtility, getUtilitySpawns } from "../data/maps";
import ImageMap from "../components/ImageMap";

export default function SpawnPage() {
  const { mapId, side, utilityId } = useParams();
  const navigate = useNavigate();

  const map = getMap(mapId);
  const sideData = getSide(mapId, side);
  const utility = getUtility(mapId, side, utilityId);

  if (!map || !sideData || !utility) {
    return <Navigate to={`/${mapId}/${side}`} replace />;
  }

  const spawns = getUtilitySpawns(mapId, side, utilityId);

  function handleSpawnClick(spawnId) {
    navigate(`/${mapId}/${side}/${utilityId}/${spawnId}`);
  }

  return (
    <div className="min-h-screen p-8 flex flex-col gap-6">
      <nav className="flex items-center gap-2 text-sm text-neutral-400">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link to={`/${mapId}`} className="hover:text-white transition-colors">{map.label}</Link>
        <span>/</span>
        <Link to={`/${mapId}/${side}`} className="hover:text-white transition-colors">{sideData.label}</Link>
        <span>/</span>
        <span className="text-white">{utility.label}</span>
      </nav>

      <h1 className="text-3xl font-bold">{utility.label}</h1>

      {sideData.spawnMapImage ? (
        <div className="flex flex-col gap-2">
          <p className="text-sm text-neutral-400">Click a spawn to view the lineup</p>
          <ImageMap
            src={sideData.spawnMapImage}
            naturalWidth={sideData.spawnMapNaturalSize.width}
            naturalHeight={sideData.spawnMapNaturalSize.height}
            areas={spawns.map((s) => ({
              id: s.spawnId,
              label: s.label,
              coords: s.coords,
              shape: s.shape,
            }))}
            onAreaClick={handleSpawnClick}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-2 max-w-xs">
          {spawns.map((s) => (
            <button
              key={s.spawnId}
              onClick={() => handleSpawnClick(s.spawnId)}
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-left text-sm transition-colors ring-1 ring-white/10"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
