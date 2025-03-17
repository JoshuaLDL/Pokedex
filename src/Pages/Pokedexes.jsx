import PokedexesContainer from "../Components/PokedexesContainer";
import "./Pages.css"

export default function Pokedexes(){

    return(
        <div className="pokedexesPage">
            <PokedexesContainer url="/pokedex/kanto" image="" alt="" title="Kanto" intro="Test"/>
            <PokedexesContainer url="/pokedex/johto" image="" alt="" title="Johto" intro="Test"/>
            <PokedexesContainer url="/pokedex/hoenn" image="" alt="" title="Hoenn" intro="Test"/>
            <PokedexesContainer url="/pokedex/sinnoh" image="" alt="" title="Sinnoh" intro="Test"/>
            <PokedexesContainer url="/pokedex/unova" image="" alt="" title="Unova" intro="Test"/>
        </div>
    )
}