
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import FullEntry from "./Components/FullEntry";
import HomePage from "./Pages/HomePage";
import Pokedexes from "./Pages/Pokedexes.jsx";
import Pokemon from "./Components/Pokedex/index.jsx";
import Nav from "./Components/Nav/index.jsx";
import PokedexHeader from "./Components/PokedexHeader/index.jsx";
import ComingSoon from "./Components/ComingSoon/index.jsx";

export default function App() {
  
  return (
    <Router>
      
      <Nav />
        
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/pokedexes" element={<Pokedexes />} />
        <Route path="/pokedex/:pokedexName" element={<Pokemon />} />
        <Route path="/pokedex/:pokedexName" element={<PokedexHeader />} />
        <Route path="/pokemon/:name" element={<FullEntry />} />
        <Route path="/favourites" element={<ComingSoon />} />

      </Routes>
    </Router>
  );
}