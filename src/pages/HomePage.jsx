import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import MapCard from "../components/MapCard.jsx";
import maps from "../data/maps.js";

function Step({ number, title, children }) {
  return (
    <div className="flex gap-4">
      <span className="shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
        {number}
      </span>
      <div>
        <p className="font-semibold text-white mb-1">{title}</p>
        <p>{children}</p>
      </div>
    </div>
  );
}

// function Code({ children }) {
//   return (
//     <code className="px-1.5 py-0.5 bg-neutral-800 rounded text-orange-400 font-mono text-xs">
//       {children}
//     </code>
//   );
// }

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-8 pt-10 pb-6">
        <p className="text-neutral-400 text-sm">
          CS2 spawn lineups — select a map to get started
        </p>
      </header>

      <main className="flex-1 p-8 flex flex-col gap-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl">
          {maps.map((map) => (
            <Link to={`/${map.id}`} key={map.id}>
              <MapCard name={map.label} image={map.coverimage} />
            </Link>
          ))}
        </div>

        <section className="max-w-2xl flex flex-col gap-6">
          <h2 className="text-2xl font-bold">
            How to use SpawnUtil effectively in game
          </h2>
          <div className="flex flex-col gap-4 text-neutral-300 text-sm leading-relaxed">
            <Step number={1} title="Use the Steam Web Overlay">
              Open the steam web overlay and keep this page open. You can
              bookmark this website to get to it quicker.
            </Step>
            <Step number={2} title="Pick a map and utility">
              Select the map you are currently playing then choose which side
              you are on. Then choose the utility you want to throw.
            </Step>
            <Step number={3} title="Click a spawn on the map">
              During the Freeze time, if you don't remember the lineup, use the
              spawn map to figure out which spawn you have, then look at the
              lineup before the round starts. When the round starts, throw your
              instant smoke.
            </Step>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
