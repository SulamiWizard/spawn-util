import { getSpawnData } from "./spawns.js";

// spawnMapImage and spawnMapNaturalSize live at the side level since they
// are shared across all utilities on that side.
//
// Each utility's spawns array contains only lineup-specific data:
//   - spawnId: references the spawn in spawns.js
//   - setang:  the angle for THIS specific lineup from THIS spawn
//   - images:  filenames only — resolved to /maps/{map}/{side}/{utility}/{file}
//   - video:   webm filename (omit when not yet available)

const maps = [
  {
    id: "mirage",
    label: "Mirage",
    coverimage: "/cover-images/mirage.webp",
    sides: {
      t: {
        label: "T Side",
        spawnMapImage: "/maps/mirage/t/spawn-map.png",
        spawnMapNaturalSize: { width: 1920, height: 1080 },
        utilities: [
          {
            id: "window-smoke",
            label: "Window Smoke",
            coverimage: "/maps/mirage/t/window-smoke/cover.webp",
            spawns: [
              {
                spawnId: "spawn1",
                setang: "0.00 0.00 0.00",
                images: ["spawn1.jpg"],
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["spawn2.jpg", "spawn2-zoom.jpg"],
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["spawn3.jpg", "spawn3-zoom.jpg"],
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["spawn4.jpg", "spawn4-zoom.jpg"],
              },
              {
                spawnId: "spawn5",
                setang: "",
                images: ["spawn5.jpg", "spawn5-zoom.jpg"],
              },
            ],
          },
          {
            id: "top-mid-smoke",
            label: "Top Mid Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn1", setang: "", images: ["spawn1.png"] },
              { spawnId: "spawn2", setang: "", images: ["spawn2.png"] },
              { spawnId: "spawn3", setang: "", images: ["spawn3.png"] },
              { spawnId: "spawn4", setang: "", images: ["spawn4.png"] },
              { spawnId: "spawn5", setang: "", images: ["spawn5.png"] },
              { spawnId: "spawn6", setang: "", images: ["spawn6.png"] },
              { spawnId: "spawn7", setang: "", images: ["spawn7.png"] },
              { spawnId: "spawn8", setang: "", images: ["spawn8.png"] },
              { spawnId: "spawn9", setang: "", images: ["spawn9.png"] },
              { spawnId: "spawn10", setang: "", images: ["spawn10.png"] },
            ],
          },
        ],
      },
      ct: {
        label: "CT Side",
        spawnMapImage: null,
        spawnMapNaturalSize: null,
        utilities: [
          {
            id: "top-mid-smoke",
            label: "Top Mid Smoke",
            coverimage: null,
            referenceImage: "/maps/mirage/ct/top-mid-smoke/reference.jpg",
            spawns: [],
          },
        ],
      },
    },
  },

  {
    id: "dust2",
    label: "Dust 2",
    coverimage: "/cover-images/dust2.webp",
    sides: {
      t: {
        label: "T Side",
        spawnMapImage: "/maps/dust2/t/spawn-map.jpg",
        spawnMapNaturalSize: { width: 1920, height: 1080 },
        utilities: [
          {
            id: "long-corner-smoke",
            label: "Long Corner Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn11", setang: "", images: ["spawn11.jpg"] },
              { spawnId: "spawn12", setang: "", images: ["spawn12.jpg"] },
              { spawnId: "spawn13", setang: "", images: ["spawn13.jpg"] },
              { spawnId: "spawn14", setang: "", images: ["spawn14.jpg"] },
              { spawnId: "spawn15", setang: "", images: ["spawn15.jpg"] },
            ],
          },
          {
            id: "mid-door-smoke",
            label: "Mid Door Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn11", setang: "", images: ["spawn11.jpg"] },
              { spawnId: "spawn13", setang: "", images: ["spawn13.jpg"] },
              { spawnId: "spawn14", setang: "", images: ["spawn14.jpg"] },
              { spawnId: "spawn15", setang: "", images: ["spawn15.jpg"] },
            ],
          },
        ],
      },
      ct: {
        label: "CT Side",
        spawnMapImage: null,
        spawnMapNaturalSize: null,
        utilities: [],
      },
    },
  },

  {
    id: "anubis",
    label: "Anubis",
    coverimage: "/cover-images/anubis.webp",
    sides: {
      t: {
        label: "T Side",
        spawnMapImage: "/maps/anubis/t/spawn-map.jpg",
        spawnMapNaturalSize: { width: 1920, height: 1080 },
        utilities: [
          {
            id: "house-smoke",
            label: "House Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn1", setang: "", images: ["spawn1.jpg"] },
              { spawnId: "spawn2", setang: "", images: ["spawn2.jpg"] },
              { spawnId: "spawn3", setang: "", images: ["spawn3.jpg"] },
              { spawnId: "spawn4", setang: "", images: ["spawn4.jpg"] },
              { spawnId: "spawn5", setang: "", images: ["spawn5.jpg"] },
              { spawnId: "spawn6", setang: "", images: ["spawn6.jpg"] },
              { spawnId: "spawn7", setang: "", images: ["spawn7.jpg"] },
              { spawnId: "spawn8", setang: "", images: ["spawn8.jpg"] },
              { spawnId: "spawn9", setang: "", images: ["spawn9.jpg"] },
              { spawnId: "spawn10", setang: "", images: ["spawn10.jpg"] },
              { spawnId: "spawn11", setang: "", images: ["spawn11.jpg"] },
            ],
          },
          {
            id: "ebox-smoke",
            label: "Ebox Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn1", setang: "", images: ["spawn1.jpg"] },
              { spawnId: "spawn2", setang: "", images: ["spawn2.jpg"] },
              { spawnId: "spawn3", setang: "", images: ["spawn3.jpg"] },
              { spawnId: "spawn4", setang: "", images: ["spawn4.jpg"] },
              { spawnId: "spawn5", setang: "", images: ["spawn5.jpg"] },
              { spawnId: "spawn6", setang: "", images: ["spawn6.jpg"] },
              { spawnId: "spawn7", setang: "", images: ["spawn7.jpg"] },
              { spawnId: "spawn8", setang: "", images: ["spawn8.jpg"] },
              { spawnId: "spawn9", setang: "", images: ["spawn9.jpg"] },
              { spawnId: "spawn10", setang: "", images: ["spawn10.jpg"] },
              { spawnId: "spawn11", setang: "", images: ["spawn11.jpg"] },
            ],
          },
        ],
      },
      ct: {
        label: "CT Side",
        spawnMapImage: "/maps/anubis/ct/spawn-map.jpg",
        spawnMapNaturalSize: { width: 1920, height: 1080 },
        utilities: [
          {
            id: "stairs-smoke",
            label: "Stairs Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn1", setang: "", images: ["spawn1.jpg"] },
              { spawnId: "spawn2", setang: "", images: ["spawn2.jpg"] },
              { spawnId: "spawn3", setang: "", images: ["spawn3.jpg"] },
              { spawnId: "spawn4", setang: "", images: ["spawn4.jpg"] },
            ],
          },
          {
            id: "rugs-smoke",
            label: "Rugs Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn1", setang: "", images: ["spawn1.jpg"] },
              { spawnId: "spawn2", setang: "", images: ["spawn2.jpg"] },
              { spawnId: "spawn3", setang: "", images: ["spawn3.jpg"] },
              { spawnId: "spawn4", setang: "", images: ["spawn4.jpg"] },
            ],
          },
        ],
      },
    },
  },

  {
    id: "ancient",
    label: "Ancient",
    coverimage: "/cover-images/ancient.webp",
    sides: {
      t: {
        label: "T Side",
        spawnMapImage: "/maps/ancient/t/spawn-map.jpg",
        spawnMapNaturalSize: { width: 1920, height: 1080 },
        utilities: [
          {
            id: "red-smoke",
            label: "Red/House Smoke",
            coverimage: null,
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["spawn1.jpg", "spawn1-zoom.jpg"],
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["spawn2.jpg", "spawn2-zoom.jpg"],
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["spawn3.jpg", "spawn3-zoom.jpg"],
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["spawn4.jpg", "spawn4-zoom.jpg"],
              },
              {
                spawnId: "spawn5",
                setang: "",
                images: ["spawn5.jpg", "spawn5-zoom.jpg"],
              },
            ],
          },
          {
            id: "mid-pressure-smoke",
            label: "Mid Pressure Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn1", setang: "", images: ["spawn1.jpg"] },
              { spawnId: "spawn2", setang: "", images: ["spawn2.jpg"] },
              { spawnId: "spawn3", setang: "", images: ["spawn3.jpg"] },
              { spawnId: "spawn4", setang: "", images: ["spawn4.jpg"] },
              { spawnId: "spawn5", setang: "", images: ["spawn5.jpg"] },
            ],
          },
          {
            id: "donut-smoke",
            label: "Donut Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn1", setang: "", images: ["spawn1.jpg"] },
              { spawnId: "spawn2", setang: "", images: ["spawn2.jpg"] },
              { spawnId: "spawn3", setang: "", images: ["spawn3.jpg"] },
              { spawnId: "spawn4", setang: "", images: ["spawn4.jpg"] },
              { spawnId: "spawn5", setang: "", images: ["spawn5.jpg"] },
            ],
          },
          {
            id: "brollan-molly",
            label: "Brollan Molly",
            coverimage: null,
            spawns: [
              {
                spawnId: "spawn4",
                setang: "",
                images: ["spawn4-crouched.jpg", "spawn4-stand.jpg"],
              },
            ],
          },
        ],
      },
      ct: {
        label: "CT Side",
        spawnMapImage: "/maps/ancient/ct/spawn-map.jpg",
        spawnMapNaturalSize: { width: 1920, height: 1080 },
        utilities: [
          {
            id: "b-door-smoke",
            label: "B Door Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn1", setang: "", images: ["spawn1.jpg"] },
              { spawnId: "spawn2", setang: "", images: ["spawn2-zoom.jpg"] },
              { spawnId: "spawn3", setang: "", images: ["spawn3-zoom.jpg"] },
              { spawnId: "spawn4", setang: "", images: ["spawn4-zoom.jpg"] },
              { spawnId: "spawn5", setang: "", images: ["spawn5-zoom.jpg"] },
            ],
          },
          {
            id: "elbow-smoke",
            label: "Elbow Smoke",
            coverimage: null,
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["spawn1.jpg", "spawn1-zoom.jpg"],
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["spawn2.jpg", "spawn2-zoom.jpg"],
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["spawn3.jpg", "spawn3-zoom.jpg"],
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["spawn4.jpg", "spawn4-zoom.jpg"],
              },
              {
                spawnId: "spawn5",
                setang: "",
                images: ["spawn5.jpg", "spawn5-zoom.jpg"],
              },
            ],
          },
          {
            id: "front-cave-smoke",
            label: "Front Cave Smoke",
            coverimage: null,
            spawns: [{ spawnId: "spawn1", setang: "", images: ["spawn1.jpg"] }],
          },
        ],
      },
    },
  },

  {
    id: "nuke",
    label: "Nuke",
    coverimage: "/cover-images/nuke.webp",
    sides: {
      t: {
        label: "T Side",
        spawnMapImage: null,
        spawnMapNaturalSize: null,
        utilities: [],
      },
      ct: {
        label: "CT Side",
        spawnMapImage: null,
        spawnMapNaturalSize: null,
        utilities: [],
      },
    },
  },

  {
    id: "train",
    label: "Train",
    coverimage: "/cover-images/train.webp",
    sides: {
      t: {
        label: "T Side",
        spawnMapImage: "/maps/train/t/spawn-map.jpg",
        spawnMapNaturalSize: { width: 1920, height: 1080 },
        utilities: [
          {
            id: "camera-smoke",
            label: "Camera Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn1", setang: "", images: ["spawn1.jpg"] },
              { spawnId: "spawn2", setang: "", images: ["spawn2.jpg"] },
              { spawnId: "spawn3", setang: "", images: ["spawn3.jpg"] },
              { spawnId: "spawn4", setang: "", images: ["spawn4.jpg"] },
            ],
          },
          {
            id: "hell-smoke",
            label: "Hell Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn1", setang: "", images: ["spawn1.jpg"] },
              { spawnId: "spawn2", setang: "", images: ["spawn2.jpg"] },
              { spawnId: "spawn3", setang: "", images: ["spawn3.jpg"] },
              { spawnId: "spawn4", setang: "", images: ["spawn4.jpg"] },
            ],
          },
          {
            id: "sandwich-smoke",
            label: "Sandwich Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn1", setang: "", images: ["spawn1.jpg"] },
              { spawnId: "spawn2", setang: "", images: ["spawn2.jpg"] },
              { spawnId: "spawn3", setang: "", images: ["spawn3.jpg"] },
              { spawnId: "spawn4", setang: "", images: ["spawn4.jpg"] },
            ],
          },
          {
            id: "z-smoke",
            label: "Z Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn2", setang: "", images: ["spawn2.jpg"] },
              { spawnId: "spawn3", setang: "", images: ["spawn3.jpg"] },
              { spawnId: "spawn4", setang: "", images: ["spawn4.jpg"] },
            ],
          },
        ],
      },
      ct: {
        label: "CT Side",
        spawnMapImage: "/maps/train/ct/spawn-map.jpg",
        spawnMapNaturalSize: { width: 1920, height: 1080 },
        utilities: [
          {
            id: "t-con-smoke",
            label: "T Con Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn2", setang: "", images: ["spawn2.jpg"] },
              { spawnId: "spawn4", setang: "", images: ["spawn4.jpg"] },
              { spawnId: "spawn5", setang: "", images: ["spawn5.jpg"] },
            ],
          },
        ],
      },
    },
  },

  {
    id: "inferno",
    label: "Inferno",
    coverimage: "/cover-images/inferno.webp",
    sides: {
      t: {
        label: "T Side",
        spawnMapImage: null,
        spawnMapNaturalSize: null,
        utilities: [],
      },
      ct: {
        label: "CT Side",
        spawnMapImage: "/maps/inferno/ct/spawn-map.jpg",
        spawnMapNaturalSize: { width: 1920, height: 1080 },
        utilities: [
          {
            id: "mid-smoke",
            label: "Mid Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn1", setang: "", images: ["spawn1.jpg"] },
              { spawnId: "spawn2", setang: "", images: ["spawn2.jpg"] },
              { spawnId: "spawn3", setang: "", images: ["spawn3.jpg"] },
              { spawnId: "spawn4", setang: "", images: ["spawn4.jpg"] },
              { spawnId: "spawn5", setang: "", images: ["spawn5.jpg"] },
              { spawnId: "spawn6", setang: "", images: ["spawn6.jpg"] },
            ],
          },
        ],
      },
    },
  },

  {
    id: "overpass",
    label: "Overpass",
    coverimage: "/cover-images/overpass.webp",
    sides: {
      t: {
        label: "T Side",
        spawnMapImage: null,
        spawnMapNaturalSize: null,
        utilities: [],
      },
      ct: {
        label: "CT Side",
        spawnMapImage: "/maps/overpass/ct/spawn-map.jpg",
        spawnMapNaturalSize: { width: 555, height: 483 },
        utilities: [
          {
            id: "monster-smoke",
            label: "Monster Smoke",
            coverimage: null,
            spawns: [
              { spawnId: "spawn1", setang: "", images: ["spawn1.jpg"] },
              { spawnId: "spawn2", setang: "", images: ["spawn2.jpg"] },
              { spawnId: "spawn3", setang: "", images: ["spawn3.jpg"] },
              { spawnId: "spawn4", setang: "", images: ["spawn4.jpg"] },
              { spawnId: "spawn5", setang: "", images: ["spawn5.jpg"] },
            ],
          },
        ],
      },
    },
  },
];

export default maps;

// --- Lookup helpers ---

export function getMap(mapId) {
  return maps.find((m) => m.id === mapId) ?? null;
}

export function getSide(mapId, side) {
  return getMap(mapId)?.sides[side] ?? null;
}

export function getUtility(mapId, side, utilityId) {
  return (
    getSide(mapId, side)?.utilities.find((u) => u.id === utilityId) ?? null
  );
}

function resolveImages(mapId, side, utilityId, filenames) {
  return filenames.map((f) => `/maps/${mapId}/${side}/${utilityId}/${f}`);
}

// Returns the lineup entry (setang, images, video) merged with full spawn data (coords, setpos, etc.)
export function getSpawn(mapId, side, utilityId, spawnId) {
  const lineupSpawn =
    getUtility(mapId, side, utilityId)?.spawns.find(
      (s) => s.spawnId === spawnId,
    ) ?? null;
  if (!lineupSpawn) return null;
  const spawnData = getSpawnData(mapId, side, spawnId);
  return {
    ...spawnData,
    ...lineupSpawn,
    images: resolveImages(mapId, side, utilityId, lineupSpawn.images),
  };
}

// Returns all spawns for a utility, merged with their full spawn data
export function getUtilitySpawns(mapId, side, utilityId) {
  const utility = getUtility(mapId, side, utilityId);
  if (!utility) return [];
  return utility.spawns.map((ls) => ({
    ...getSpawnData(mapId, side, ls.spawnId),
    ...ls,
    images: resolveImages(mapId, side, utilityId, ls.images),
  }));
}

// Builds the full CS2 console command for a specific spawn + lineup
export function getSetposCommand(mapId, side, utilityId, spawnId) {
  const spawn = getSpawn(mapId, side, utilityId, spawnId);
  if (!spawn?.setpos || !spawn?.setang) return null;
  return `setpos ${spawn.setpos};setang ${spawn.setang}`;
}
