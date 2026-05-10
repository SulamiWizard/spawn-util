import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import TeamPage from "./pages/TeamPage";
import SpawnPage from "./pages/SpawnPage";
import LineupPage from "./pages/LineupPage";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:mapId" element={<MapPage />} />
          <Route path="/:mapId/:side" element={<TeamPage />} />
          <Route path="/:mapId/:side/:utilityId" element={<SpawnPage />} />
          <Route path="/:mapId/:side/:utilityId/:spawnId" element={<LineupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
