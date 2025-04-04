import { useState, useEffect } from "react";
import "./FullEntry.css"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Pokemon from "../Pokedex";

export default function FullEntry({}) {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams(); 
  const location = useLocation()
  const previousPathname = location.state?.previousPathname || '/';

useEffect(() => {
    if (name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then((data) => {
            console.log("Fetched pokemon data:", data)
            setPokemon(data)
        })
        .catch((err) => console.error("Error fetching Pokémon:", err));
    }
  }, [name]);


    if (!pokemon) {
        return (
        <div className="FullEntry">
            <p>Loading Pokémon...</p>
        </div>
        );
    }

  return (
        <div className="FullEntryPage">
            <div className="AllContent">
            <Link className="BackButton" to={previousPathname}>Back</Link>
                <div className="FullEntry">
                    <h1>#{pokemon.id} {pokemon.name}</h1>
                    <div className="FullEntrySprites">
                        <div className="FullEntrySprite">
                            {/* <p>Normal</p> */}
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                            <img src={pokemon.sprites.back_default} alt={pokemon.name} />
                        </div>
                        <div className="FullEntrySprite">
                            {/* <p>Shiny</p> */}
                            <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                            <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
                        </div>
                    </div>
                    {/* <img src={pokemon.forms.url} alt={pokemon.name} /> */}
                    <div className="PokedexData">
                        <div>
                            <h2>Pokédex Data</h2>
                        </div>
                        <div></div>
                        <div>
                            <p><strong>Types: </strong><br></br>{pokemon.types.map((type) => (
                                <span key={type.slot}>{type.type.name} </span>
                                ))}</p>
                            <p><strong>Height: </strong> <br></br>{pokemon.height}</p>
                            <p><strong>Weight: </strong><br></br>{pokemon.weight}</p>
                            <p><strong>Abilities: </strong><br></br>{pokemon.abilities.map((ability) => (
                                <span key={ability.slot}>{ability.ability.name} </span>))}
                            </p>

                            <p><strong>Stats: </strong><br></br>{pokemon.stats.map((stat) => (
                                <span key={stat.stat.name}>{stat.stat.name}: {stat.base_stat} <br></br> </span>))}
                            </p>
                        </div>
                        <div>
                            {pokemon.moves && <p><strong>Moves:</strong><br></br>{pokemon.moves.map((move) => <span key={move.move.name}>{move.move.name}, </span>)}</p>}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      );
}

    {/* <p>: {pokemon.forms}</p>
          <p>: {pokemon.game_indices}</p> */}