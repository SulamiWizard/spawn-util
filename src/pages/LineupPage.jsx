import { useState } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import {
  getMap,
  getSide,
  getUtility,
  getUtilitySpawns,
  getSpawn,
  getSetposCommand,
} from "../data/maps";
import ImageMap from "../components/ImageMap";

function tabLabel(imagePath) {
  return (
    imagePath
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "")
      .replace(/-/g, " ")
      .replace(/\bspawn\d+\s*/i, "")
      .trim() || "View"
  );
}

export default function LineupPage() {
  const { mapId, side, utilityId, spawnId } = useParams();
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const map = getMap(mapId);
  const sideData = getSide(mapId, side);
  const utility = getUtility(mapId, side, utilityId);
  const spawn = getSpawn(mapId, side, utilityId, spawnId);

  if (!map || !sideData || !utility || !spawn) {
    return <Navigate to={`/${mapId}/${side}/${utilityId}`} replace />;
  }

  const spawns = getUtilitySpawns(mapId, side, utilityId);
  const setposCmd = getSetposCommand(mapId, side, utilityId, spawnId);

  function handleSpawnClick(id) {
    setActiveIdx(0);
    navigate(`/${mapId}/${side}/${utilityId}/${id}`);
  }

  function handleCopy() {
    navigator.clipboard.writeText(setposCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
        <Link to={`/${mapId}/${side}/${utilityId}`} className="hover:text-white transition-colors">{utility.label}</Link>
        <span>/</span>
        <span className="text-white">{spawn.label}</span>
      </nav>

      {/* Lineup image */}
      <div className="w-full h-[calc(100vh-14rem)]">
        <img
          src={spawn.images[activeIdx]}
          alt={`${utility.label} — ${spawn.label}`}
          className="w-full h-full object-contain object-left-top rounded-lg"
        />
      </div>

      {/* Controls: image tabs + spawn label + copy button */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="font-semibold">{spawn.label}</span>

        {spawn.images.length > 1 &&
          spawn.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                i === activeIdx
                  ? "bg-orange-500 text-white"
                  : "bg-neutral-700 text-neutral-300 hover:bg-neutral-600"
              }`}
            >
              {tabLabel(img)}
            </button>
          ))}

        {setposCmd && (
          <button
            onClick={handleCopy}
            className="ml-auto px-4 py-1.5 bg-neutral-700 hover:bg-neutral-600 text-sm rounded-md text-neutral-200 transition-colors"
          >
            {copied ? "✓ Copied!" : "Copy setpos"}
          </button>
        )}
      </div>

      {/* Spawn map for navigating between spawns */}
      {sideData.spawnMapImage && (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-neutral-500 uppercase tracking-widest">Switch spawn</p>
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
            activeId={spawnId}
            onAreaClick={handleSpawnClick}
          />
        </div>
      )}
    </div>
  );
}
