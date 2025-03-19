import { useState, useEffect } from "react";
import "./FullEntry.css"
import { useParams } from "react-router-dom";
import Pokemon from "../Pokedex";

export default function FullEntry({}) {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams(); 

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
        <div className="FullEntry">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
          <img src={pokemon.forms.url} alt={pokemon.name} />
          <p>Pokedex Number: {pokemon.id}</p>
          <p>Name: {pokemon.name}</p>
          <p>
            Types: {pokemon.types.map((type) => (
              <span key={type.slot}>{type.type.name} </span>
            ))}
          </p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Abilities: {pokemon.abilities.map((ability) => (
              <span key={ability.slot}>{ability.ability.name} </span>
            ))}</p>
          {/* <p>: {pokemon.forms}</p>
          <p>: {pokemon.game_indices}</p> */}

          <p>Stats: {pokemon.stats.map((stat) => (
              <span key={stat.stat.name}>{stat.stat.name}: {stat.base_stat} </span>
            ))}</p>

          {pokemon.moves && <p>Moves: {pokemon.moves.map((move) => <span key={move.move.name}>{move.move.name} </span>)}</p>}
        </div>
      );
}