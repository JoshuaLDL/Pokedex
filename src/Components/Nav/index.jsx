import { Link } from "react-router-dom";
import "./Nav.css"

export default function ({text, link}) {

    return (
        <div className="Header">
            <a href="/" >
            <img src="assets/pokeball.png" alt="Pokeball sprite" width="50" height="50" />
            </a>
            <div className="Nav-Bar">
                <Link className="HeaderLink" to="/pokedexes">Pokedexes</Link>
                <Link className="HeaderLink" to="/favourites">Favourites</Link>
            </div>
        </div>
    )
}