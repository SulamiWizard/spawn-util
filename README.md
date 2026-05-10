# SpawnUtil

A CS2 spawn lineup reference tool. Look up instant smokes and other utility lineups by map, side, and spawn position.

I made this originally for the sole purpose of having my friends throw smokes such as instant window because the refused to learn lineups.

## Features

- Browse lineups by map → side → utility
- Clickable spawn map showing which spawns have a lineup for the selected utility
- Active spawn highlighted on the map so you can switch between spawns without going back
- Copy `setpos` command to teleport directly to the spawn position in-game
- URL-based navigation — every page is shareable and bookmarkable

## Stack

- React 19 + Vite
- React Router v7
- Tailwind CSS v4

## Getting Started

```bash
npm install
npm run dev
```

## Adding a Lineup

All data lives in two files:

**`src/data/spawns.js`** — spawn positions per map and side. Each spawn has a `label`, clickable area `coords` and `shape` (for the SVG map overlay), and a `setpos` value (the CS2 console command to teleport there).

**`src/data/maps.js`** — lineups per map, side, and utility. Each lineup entry references a `spawnId` from `spawns.js` and provides the `images` array, `setang` (angle for the setpos command), and optionally a `video`.

To add a new lineup:

1. Make sure the spawn exists in `spawns.js` for that map and side
2. Add an entry to the relevant utility's `spawns` array in `maps.js` with the `spawnId`, images, and `setang`
3. Drop the image files in `public/maps/<map>/<side>/<utility>/`

To add a new utility, add an object to the `utilities` array for the correct map and side in `maps.js`.

## Adding Images

Images are served from the `public/` folder. The convention used throughout is:

```
public/maps/<mapId>/<side>/<utilityId>/spawn1.jpg
public/maps/<mapId>/<side>/<utilityId>/spawn1-zoom.jpg
```

Spawn map images (the overhead view used for spawn selection) go at:

```
public/maps/<mapId>/<side>/spawn-map.jpg
```

## Deployment

Deployed on Vercel. The `vercel.json` rewrites all routes to `index.html` for client-side routing.
