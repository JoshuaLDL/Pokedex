import PokedexesContainer from "../Components/PokedexesContainer";
import "./Pages.css"

export default function Pokedexes(){

    return(
        <div className="pokedexesPage">
            <PokedexesContainer url="/pokedex/kanto" image="src/assets/Kanto.png" alt="Kanto" title="Kanto" intro="Test"/>
            <PokedexesContainer url="/pokedex/johto" image="src/assets/Johto.png" alt="Johto" title="Johto" intro="Test"/>
            <PokedexesContainer url="/pokedex/hoenn" image="src/assets/Hoenn.png" alt="Hoenn" title="Hoenn" intro="Test"/>
            <PokedexesContainer url="/pokedex/sinnoh" image="src/assets/Sinnoh.png" alt="Sinnoh" title="Sinnoh" intro="Test"/>
            <PokedexesContainer url="/pokedex/unova" image="src/assets/Unova.png" alt="Unova" title="Unova" intro="Test"/>
        </div>
    )
}