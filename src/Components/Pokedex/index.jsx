import { useState } from "react"
import "./Pokedex.css"
import { useEffect } from "react"
import SingleEntry from "../SingleEntry"
import PokemonCard from "../SingleEntry"


export default function Pokemon () {
    const[Pokemon, setPokemon] = useState([])


        function GetData (){
            fetch (`https://pokeapi.co/api/v2/pokemon/`)
            .then (res => res.json())
            .then((data) => {
                Promise.all(
                    data.results.map(poke =>
                        fetch(poke.url).then(res => res.json())
                    )
                ).then(pokemonDetails => {
                    setPokemon(pokemonDetails)
                    console.log(pokemonDetails)
                })
        })
        }

    useEffect(GetData, [])
//     return (
//         <div className="pokemonCard">
//             <ul>
//             {Pokemon.map((poke, id) => (
//                 <li key={id}>
//                     <h3>{poke.name}</h3>
//                     <p>Type: {poke.types.map(a => a.type.name).join(", ")}</p>
//                     <img src={poke.sprites.front_default} alt={poke.name} />
//                     <p>Height: {poke.height}</p>
//                     <p>Weight: {poke.weight}</p>
//                     <p>Base Stats: {poke.stats.map(a => a.base_stat).join(", ")}</p>
//                     <p>Abilities: {poke.abilities.map(a => a.ability.name).join(", ")}</p>
//                     <p>Moves: {poke.moves.map(a => a.move.name).join(", ")}</p>
//                 </li>
//             ))}
//             </ul>
//         </div>
//     )
// }



return (
   <div className="pokemonDeck">
    <div className="pokemonCard">
            
            {Pokemon.map((pokeInfo) => {
                return <PokemonCard 
                    key={pokeInfo.id}
                    name={pokeInfo.name}
                    sprites={pokeInfo.sprites}
                    height={pokeInfo.height}
                    weight={pokeInfo.weight}
                    abilities={pokeInfo.abilities}
                    types={pokeInfo.types}
                    moves={pokeInfo.moves}
                    stats={pokeInfo.stats}
                    />
                
        } )}
        </div>
    </div>

    )
}