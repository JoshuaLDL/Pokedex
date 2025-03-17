import Nav from "../Components/Nav";
import Pokemon from "../Components/Pokedex";
import PokedexHeader from "../Components/PokedexHeader";


export default function JohtoPokedex(){

    return(
        <>
            <Nav />
            <PokedexHeader title="Johto" text="lorem" image="#"/>
            <Pokemon />
        </>
    )
}