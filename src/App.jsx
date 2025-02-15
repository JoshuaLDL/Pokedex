import Pokedex from "./Components/Pokedex";
import "./App.css"
import Nav from "./Components/Nav";
import PokedexHeader from "./Components/PokedexHeader";

export default function App(){

  return(
    <>
    <Nav />
    <PokedexHeader title="Kanto" text="lorem" image="src/assets/Image1.png"/>
    <Pokedex />
    </>

  )
}