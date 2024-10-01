import "./App.css";
import Moviebox from "./components/Moviebox";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Moviestatus from "./components/Moviestatus";
import { Routes, Route } from "react-router-dom";
import Tvshows from "./components/Tvshows";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Moviebox />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/moviestatus/:id" element={<Moviestatus />} />
      </Routes>
    </>
  );
}

export default App;
