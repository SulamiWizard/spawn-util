import { getSpawnData } from "./spawns.js";

// spawnMapImage and spawnMapNaturalSize live at the side level since they
// are shared across all utilities on that side.
//
// Each utility's spawns array contains only lineup-specific data:
//   - spawnId: references the spawn in spawns.js
//   - setang:  the angle for THIS specific lineup from THIS spawn
//   - images:  lineup screenshot(s) from this spawn
//   - video:   webm clip showing how to throw (add when available)

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
            spawns: [
              {
                spawnId: "spawn1",
                setang: "0.00 0.00 0.00",
                images: ["/maps/mirage/t/window-smoke/spawn1.jpg"],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: [
                  "/maps/mirage/t/window-smoke/spawn2.jpg",
                  "/maps/mirage/t/window-smoke/spawn2-zoom.jpg",
                ],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: [
                  "/maps/mirage/t/window-smoke/spawn3.jpg",
                  "/maps/mirage/t/window-smoke/spawn3-zoom.jpg",
                ],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: [
                  "/maps/mirage/t/window-smoke/spawn4.jpg",
                  "/maps/mirage/t/window-smoke/spawn4-zoom.jpg",
                ],
                video: "",
              },
              {
                spawnId: "spawn5",
                setang: "",
                images: [
                  "/maps/mirage/t/window-smoke/spawn5.jpg",
                  "/maps/mirage/t/window-smoke/spawn5-zoom.jpg",
                ],
                video: "",
              },
            ],
          },
          {
            id: "top-mid-smoke",
            label: "Top Mid Smoke",
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["/maps/mirage/t/top-mid-smoke/spawn1.png"],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["/maps/mirage/t/top-mid-smoke/spawn2.png"],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["/maps/mirage/t/top-mid-smoke/spawn3.png"],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["/maps/mirage/t/top-mid-smoke/spawn4.png"],
                video: "",
              },
              {
                spawnId: "spawn5",
                setang: "",
                images: ["/maps/mirage/t/top-mid-smoke/spawn5.png"],
                video: "",
              },
              {
                spawnId: "spawn6",
                setang: "",
                images: ["/maps/mirage/t/top-mid-smoke/spawn6.png"],
                video: "",
              },
              {
                spawnId: "spawn7",
                setang: "",
                images: ["/maps/mirage/t/top-mid-smoke/spawn7.png"],
                video: "",
              },
              {
                spawnId: "spawn8",
                setang: "",
                images: ["/maps/mirage/t/top-mid-smoke/spawn8.png"],
                video: "",
              },
              {
                spawnId: "spawn9",
                setang: "",
                images: ["/maps/mirage/t/top-mid-smoke/spawn9.png"],
                video: "",
              },
              {
                spawnId: "spawn10",
                setang: "",
                images: ["/maps/mirage/t/top-mid-smoke/spawn10.png"],
                video: "",
              },
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
            spawns: [
              {
                spawnId: "spawn11",
                setang: "",
                images: ["/maps/dust2/t/long-corner-smoke/spawn11.jpg"],
                video: "",
              },
              {
                spawnId: "spawn12",
                setang: "",
                images: ["/maps/dust2/t/long-corner-smoke/spawn12.jpg"],
                video: "",
              },
              {
                spawnId: "spawn13",
                setang: "",
                images: ["/maps/dust2/t/long-corner-smoke/spawn13.jpg"],
                video: "",
              },
              {
                spawnId: "spawn14",
                setang: "",
                images: ["/maps/dust2/t/long-corner-smoke/spawn14.jpg"],
                video: "",
              },
              {
                spawnId: "spawn15",
                setang: "",
                images: ["/maps/dust2/t/long-corner-smoke/spawn15.jpg"],
                video: "",
              },
            ],
          },
          {
            id: "mid-door-smoke",
            label: "Mid Door Smoke",
            spawns: [
              {
                spawnId: "spawn11",
                setang: "",
                images: ["/maps/dust2/t/mid-door-smoke/spawn11.jpg"],
                video: "",
              },
              {
                spawnId: "spawn13",
                setang: "",
                images: ["/maps/dust2/t/mid-door-smoke/spawn13.jpg"],
                video: "",
              },
              {
                spawnId: "spawn14",
                setang: "",
                images: ["/maps/dust2/t/mid-door-smoke/spawn14.jpg"],
                video: "",
              },
              {
                spawnId: "spawn15",
                setang: "",
                images: ["/maps/dust2/t/mid-door-smoke/spawn15.jpg"],
                video: "",
              },
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
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["/maps/anubis/t/house-smoke/spawn1.jpg"],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["/maps/anubis/t/house-smoke/spawn2.jpg"],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["/maps/anubis/t/house-smoke/spawn3.jpg"],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["/maps/anubis/t/house-smoke/spawn4.jpg"],
                video: "",
              },
              {
                spawnId: "spawn5",
                setang: "",
                images: ["/maps/anubis/t/house-smoke/spawn5.jpg"],
                video: "",
              },
              {
                spawnId: "spawn6",
                setang: "",
                images: ["/maps/anubis/t/house-smoke/spawn6.jpg"],
                video: "",
              },
              {
                spawnId: "spawn7",
                setang: "",
                images: ["/maps/anubis/t/house-smoke/spawn7.jpg"],
                video: "",
              },
              {
                spawnId: "spawn8",
                setang: "",
                images: ["/maps/anubis/t/house-smoke/spawn8.jpg"],
                video: "",
              },
              {
                spawnId: "spawn9",
                setang: "",
                images: ["/maps/anubis/t/house-smoke/spawn9.jpg"],
                video: "",
              },
              {
                spawnId: "spawn10",
                setang: "",
                images: ["/maps/anubis/t/house-smoke/spawn10.jpg"],
                video: "",
              },
              {
                spawnId: "spawn11",
                setang: "",
                images: ["/maps/anubis/t/house-smoke/spawn11.jpg"],
                video: "",
              },
            ],
          },
          {
            id: "ebox-smoke",
            label: "Ebox Smoke",
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["/maps/anubis/t/ebox-smoke/spawn1.jpg"],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["/maps/anubis/t/ebox-smoke/spawn2.jpg"],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["/maps/anubis/t/ebox-smoke/spawn3.jpg"],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["/maps/anubis/t/ebox-smoke/spawn4.jpg"],
                video: "",
              },
              {
                spawnId: "spawn5",
                setang: "",
                images: ["/maps/anubis/t/ebox-smoke/spawn5.jpg"],
                video: "",
              },
              {
                spawnId: "spawn6",
                setang: "",
                images: ["/maps/anubis/t/ebox-smoke/spawn6.jpg"],
                video: "",
              },
              {
                spawnId: "spawn7",
                setang: "",
                images: ["/maps/anubis/t/ebox-smoke/spawn7.jpg"],
                video: "",
              },
              {
                spawnId: "spawn8",
                setang: "",
                images: ["/maps/anubis/t/ebox-smoke/spawn8.jpg"],
                video: "",
              },
              {
                spawnId: "spawn9",
                setang: "",
                images: ["/maps/anubis/t/ebox-smoke/spawn9.jpg"],
                video: "",
              },
              {
                spawnId: "spawn10",
                setang: "",
                images: ["/maps/anubis/t/ebox-smoke/spawn10.jpg"],
                video: "",
              },
              {
                spawnId: "spawn11",
                setang: "",
                images: ["/maps/anubis/t/ebox-smoke/spawn11.jpg"],
                video: "",
              },
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
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["/maps/anubis/ct/stairs-smoke/spawn1.jpg"],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["/maps/anubis/ct/stairs-smoke/spawn2.jpg"],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["/maps/anubis/ct/stairs-smoke/spawn3.jpg"],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["/maps/anubis/ct/stairs-smoke/spawn4.jpg"],
                video: "",
              },
            ],
          },
          {
            id: "rugs-smoke",
            label: "Rugs Smoke",
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["/maps/anubis/ct/rugs-smoke/spawn1.jpg"],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["/maps/anubis/ct/rugs-smoke/spawn2.jpg"],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["/maps/anubis/ct/rugs-smoke/spawn3.jpg"],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["/maps/anubis/ct/rugs-smoke/spawn4.jpg"],
                video: "",
              },
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
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: [
                  "/maps/ancient/t/red-smoke/spawn1.jpg",
                  "/maps/ancient/t/red-smoke/spawn1-zoom.jpg",
                ],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: [
                  "/maps/ancient/t/red-smoke/spawn2.jpg",
                  "/maps/ancient/t/red-smoke/spawn2-zoom.jpg",
                ],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: [
                  "/maps/ancient/t/red-smoke/spawn3.jpg",
                  "/maps/ancient/t/red-smoke/spawn3-zoom.jpg",
                ],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: [
                  "/maps/ancient/t/red-smoke/spawn4.jpg",
                  "/maps/ancient/t/red-smoke/spawn4-zoom.jpg",
                ],
                video: "",
              },
              {
                spawnId: "spawn5",
                setang: "",
                images: [
                  "/maps/ancient/t/red-smoke/spawn5.jpg",
                  "/maps/ancient/t/red-smoke/spawn5-zoom.jpg",
                ],
                video: "",
              },
            ],
          },
          {
            id: "mid-pressure-smoke",
            label: "Mid Pressure Smoke",
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["/maps/ancient/t/mid-pressure-smoke/spawn1.jpg"],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["/maps/ancient/t/mid-pressure-smoke/spawn2.jpg"],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["/maps/ancient/t/mid-pressure-smoke/spawn3.jpg"],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["/maps/ancient/t/mid-pressure-smoke/spawn4.jpg"],
                video: "",
              },
              {
                spawnId: "spawn5",
                setang: "",
                images: ["/maps/ancient/t/mid-pressure-smoke/spawn5.jpg"],
                video: "",
              },
            ],
          },
          {
            id: "donut-smoke",
            label: "Donut Smoke",
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["/maps/ancient/t/donut-smoke/spawn1.jpg"],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["/maps/ancient/t/donut-smoke/spawn2.jpg"],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["/maps/ancient/t/donut-smoke/spawn3.jpg"],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["/maps/ancient/t/donut-smoke/spawn4.jpg"],
                video: "",
              },
              {
                spawnId: "spawn5",
                setang: "",
                images: ["/maps/ancient/t/donut-smoke/spawn5.jpg"],
                video: "",
              },
            ],
          },
          {
            id: "brollan-molly",
            label: "Brollan Molly",
            spawns: [
              {
                spawnId: "spawn4",
                setang: "",
                images: [
                  "/maps/ancient/t/brollan-molly/spawn4-crouched.jpg",
                  "/maps/ancient/t/brollan-molly/spawn4-stand.jpg",
                ],
                video: "",
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
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["/maps/ancient/ct/b-door-smoke/spawn1.jpg"],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["/maps/ancient/ct/b-door-smoke/spawn2-zoom.jpg"],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["/maps/ancient/ct/b-door-smoke/spawn3-zoom.jpg"],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["/maps/ancient/ct/b-door-smoke/spawn4-zoom.jpg"],
                video: "",
              },
              {
                spawnId: "spawn5",
                setang: "",
                images: ["/maps/ancient/ct/b-door-smoke/spawn5-zoom.jpg"],
                video: "",
              },
            ],
          },
          {
            id: "elbow-smoke",
            label: "Elbow Smoke",
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: [
                  "/maps/ancient/ct/elbow-smoke/spawn1.jpg",
                  "/maps/ancient/ct/elbow-smoke/spawn1-zoom.jpg",
                ],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: [
                  "/maps/ancient/ct/elbow-smoke/spawn2.jpg",
                  "/maps/ancient/ct/elbow-smoke/spawn2-zoom.jpg",
                ],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: [
                  "/maps/ancient/ct/elbow-smoke/spawn3.jpg",
                  "/maps/ancient/ct/elbow-smoke/spawn3-zoom.jpg",
                ],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: [
                  "/maps/ancient/ct/elbow-smoke/spawn4.jpg",
                  "/maps/ancient/ct/elbow-smoke/spawn4-zoom.jpg",
                ],
                video: "",
              },
              {
                spawnId: "spawn5",
                setang: "",
                images: [
                  "/maps/ancient/ct/elbow-smoke/spawn5.jpg",
                  "/maps/ancient/ct/elbow-smoke/spawn5-zoom.jpg",
                ],
                video: "",
              },
            ],
          },
          {
            id: "front-cave-smoke",
            label: "Front Cave Smoke",
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["/maps/ancient/ct/front-cave-smoke/spawn1.jpg"],
                video: "",
              },
            ],
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
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["/maps/train/t/camera-smoke/spawn1.jpg"],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["/maps/train/t/camera-smoke/spawn2.jpg"],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["/maps/train/t/camera-smoke/spawn3.jpg"],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["/maps/train/t/camera-smoke/spawn4.jpg"],
                video: "",
              },
            ],
          },
          {
            id: "hell-smoke",
            label: "Hell Smoke",
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["/maps/train/t/hell-smoke/spawn1.jpg"],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["/maps/train/t/hell-smoke/spawn2.jpg"],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["/maps/train/t/hell-smoke/spawn3.jpg"],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["/maps/train/t/hell-smoke/spawn4.jpg"],
                video: "",
              },
            ],
          },
          {
            id: "sandwich-smoke",
            label: "Sandwich Smoke",
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["/maps/train/t/sandwich-smoke/spawn1.jpg"],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["/maps/train/t/sandwich-smoke/spawn2.jpg"],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["/maps/train/t/sandwich-smoke/spawn3.jpg"],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["/maps/train/t/sandwich-smoke/spawn4.jpg"],
                video: "",
              },
            ],
          },
          {
            id: "z-smoke",
            label: "Z Smoke",
            spawns: [
              {
                spawnId: "spawn2",
                setang: "",
                images: ["/maps/train/t/z-smoke/spawn2.jpg"],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["/maps/train/t/z-smoke/spawn3.jpg"],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["/maps/train/t/z-smoke/spawn4.jpg"],
                video: "",
              },
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
            spawns: [
              {
                spawnId: "spawn2",
                setang: "",
                images: ["/maps/train/ct/t-con-smoke/spawn2.jpg"],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["/maps/train/ct/t-con-smoke/spawn4.jpg"],
                video: "",
              },
              {
                spawnId: "spawn5",
                setang: "",
                images: ["/maps/train/ct/t-con-smoke/spawn5.jpg"],
                video: "",
              },
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
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["/maps/inferno/ct/mid-smoke/spawn1.jpg"],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["/maps/inferno/ct/mid-smoke/spawn2.jpg"],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["/maps/inferno/ct/mid-smoke/spawn3.jpg"],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["/maps/inferno/ct/mid-smoke/spawn4.jpg"],
                video: "",
              },
              {
                spawnId: "spawn5",
                setang: "",
                images: ["/maps/inferno/ct/mid-smoke/spawn5.jpg"],
                video: "",
              },
              {
                spawnId: "spawn6",
                setang: "",
                images: ["/maps/inferno/ct/mid-smoke/spawn6.jpg"],
                video: "",
              },
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
            spawns: [
              {
                spawnId: "spawn1",
                setang: "",
                images: ["/maps/overpass/ct/monster-smoke/spawn1.jpg"],
                video: "",
              },
              {
                spawnId: "spawn2",
                setang: "",
                images: ["/maps/overpass/ct/monster-smoke/spawn2.jpg"],
                video: "",
              },
              {
                spawnId: "spawn3",
                setang: "",
                images: ["/maps/overpass/ct/monster-smoke/spawn3.jpg"],
                video: "",
              },
              {
                spawnId: "spawn4",
                setang: "",
                images: ["/maps/overpass/ct/monster-smoke/spawn4.jpg"],
                video: "",
              },
              {
                spawnId: "spawn5",
                setang: "",
                images: ["/maps/overpass/ct/monster-smoke/spawn5.jpg"],
                video: "",
              },
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

// Returns the lineup entry (setang, images, video) merged with full spawn data (coords, setpos, etc.)
export function getSpawn(mapId, side, utilityId, spawnId) {
  const lineupSpawn =
    getUtility(mapId, side, utilityId)?.spawns.find(
      (s) => s.spawnId === spawnId,
    ) ?? null;
  if (!lineupSpawn) return null;
  const spawnData = getSpawnData(mapId, side, spawnId);
  return { ...spawnData, ...lineupSpawn };
}

// Returns all spawns for a utility, merged with their full spawn data
export function getUtilitySpawns(mapId, side, utilityId) {
  const utility = getUtility(mapId, side, utilityId);
  if (!utility) return [];
  return utility.spawns.map((ls) => ({
    ...getSpawnData(mapId, side, ls.spawnId),
    ...ls,
  }));
}

// Builds the full CS2 console command for a specific spawn + lineup
export function getSetposCommand(mapId, side, utilityId, spawnId) {
  const spawn = getSpawn(mapId, side, utilityId, spawnId);
  if (!spawn?.setpos || !spawn?.setang) return null;
  return `setpos ${spawn.setpos};setang ${spawn.setang}`;
}
