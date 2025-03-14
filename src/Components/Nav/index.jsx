import HeaderLink from "../HeaderLink";
import "./Nav.css"

export default function ({text, link}) {

    return (
        <div className="Header">
            <a href="/" >
            <img src="src/assets/pokeball.png" alt="Pokeball sprite" width="50" height="50" />
            </a>
            <div className="Nav-Bar">
                <HeaderLink text="Pokedexes" link="/pokedexes"/>
                <HeaderLink text="Example" link="/"/>
            </div>
        </div>
    )
}