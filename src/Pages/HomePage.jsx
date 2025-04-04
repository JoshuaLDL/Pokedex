import Nav from "../Components/Nav";
import PokedexHeader from "../Components/PokedexHeader";
import Pokedexes from "./Pokedexes";
import "./Pages.css";



export default function HomePage(){

  return(
    <div className="homeContainer">
        <img src="assets/Clefairy.png" width="300" height="auto" />
        <div className="homeText">
            <h1>The PokéGrid</h1>
            <p>Welcome, Trainers! 
              <br></br>
              <br></br>
              You've just connected to The PokéGrid, your one-stop destination for all things Pokémon. We've compiled a massive database, organized in an easy-to-use grid, so you can quickly find the information you need. From stats and moves to evolution chains and locations, The PokéGrid is your key to mastering the world of Pokémon. Get ready to explore!</p>
        </div>
    </div>

  )
}