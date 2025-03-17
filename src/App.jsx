
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import FullEntry from "./Components/FullEntry";
import HomePage from "./Pages/HomePage";
import Pokedexes from "./Pages/Pokedexes.jsx";
import KantoPokedex from "./Pages/KantoPokedex.jsx";
import Pokemon from "./Components/Pokedex/index.jsx";
import JohtoPokedex from "./Pages/Johtopokedex.jsx";

export default function App() {
  
  return (
    <Router>
      
      <nav>
        <Link className="menuLinks" to="/">Home</Link>
        <Link to="/pokedexes">Pokedexes</Link>
        
        <Link to="/pokedex/kanto">Kanto</Link>
        <Link to="/pokedex/johto">Johto</Link>
        <Link to="/pokedex/hoenn">Hoenn</Link>
        <Link to="/pokedex/sinnoh">Sinnoh</Link>
        <Link to="/pokedex/unova">Unova</Link>
      </nav>


      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/pokedexes" element={<Pokedexes />} />
        <Route path="/pokedex/:pokedexName" element={<Pokemon />} />
        <Route path="/pokemon/:id" element={<FullEntry />} />

        {/* <Route path="/pokedex/johto" element={<JohtoPokedex />} /> */}

      </Routes>
    </Router>
  );
}