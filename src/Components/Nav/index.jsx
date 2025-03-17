import { Link } from "react-router-dom";
import "./Nav.css"

export default function ({text, link}) {

    return (
        <div className="Header">
            <a href="/" >
            <img src="src/assets/pokeball.png" alt="Pokeball sprite" width="50" height="50" />
            </a>
            <div className="Nav-Bar">
                <Link to="/pokedexes">Pokedexes</Link>
            </div>
        </div>
    )
}