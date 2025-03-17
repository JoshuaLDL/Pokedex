import Nav from "../Components/Nav";
import Pokemon from "../Components/Pokedex";
import PokedexHeader from "../Components/PokedexHeader";

export default function KantoPokedex(){

  return(
    <>
      <Nav />
      <PokedexHeader title="Kanto" text="lorem" image="#"/>
      <Pokemon />
    </>

  )
}