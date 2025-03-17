// import { useState } from "react"
// import "./Pokedex.css"
// import { useEffect } from "react"
// import SingleEntry from "../SingleEntry"
// import PokemonCard from "../SingleEntry"


// export default function Pokemon ({name}) {
//     const[Pokemon, setPokemon] = useState([])
   
//     const [search, setSearch] = useState ("")
//     const [type, setType] = useState([])
//     const [noPokemon, setNoPokemon] = useState (false)
//     const [typeId, setTypeId] = useState(0)
    
//     function GetData(typeId = 0) {
//         let url = `https://pokeapi.co/api/v2/pokemon?limit=100`;
    
//         fetch(url)
//             .then((res) => res.json())
//             .then((data) => {
//                 if (!data.results) {
//                     setNoPokemon(true)
//                     setPokemon([])
//                     return
//                 }

//                 Promise.all(data.results.map((poke) => fetch(poke.url).then((res) => res.json())))
//                     .then((pokemonDetails) => {
//                         let filteredPokemon = pokemonDetails
    
//                         // Filter by Type if `typeId` is selected
//                         if (typeId !== 0) {
//                             filteredPokemon = filteredPokemon.filter((p) => 
//                                 p.types.some((t) => t.type.url.includes(`/type/${typeId}/`))
//                         )}

//                         setPokemon(filteredPokemon)
//                         setNoPokemon(filteredPokemon.length === 0)
//                     })
//             })

//             .catch(() => {
//                 setNoPokemon(true)
//                 setPokemon([])
//             })
//     }
    

//         useEffect(() => {
//             GetData()
//         }, [])

//         const filteredPokemon = Pokemon.filter((poke) =>
//             poke.name.toLowerCase().includes(search.toLowerCase())
//         )
  
//         function getTypes() {
//             fetch(`https://pokeapi.co/api/v2/type`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setType(data.results)
//             })
// }
  
//     useEffect(() => {
//         GetData(typeId)
//     }, [typeId])
  
//     useEffect(() => getTypes(), [])

//     return (
//         <div className="pokedex">
//             <>

//                 <div className="filterBar">
//                     <label htmlFor="type"></label>
                    
//                     <select className="filter" onChange={(e) => setTypeId(parseInt(e.target.value))}>
//                         <option value={0}>Any</option>
//                         {type.map((t) => (
//                             <option key={t.name} value={t.url.split("/").slice(-2, -1)[0]}>
//                                 {t.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* <div>
//                     <label htmlFor="search">
//                         Search Pokemon:
//                     </label>
//                     <input
//                         type="text"
//                         id="search"
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         placeholder="Search Pokemon..."
//                         />
//                 </div> */}

        
//             </>

//             <div className="pokemonDeck">
//                 <div className="pokemonCard">
                        
//                     {Pokemon.map((pokeInfo) => {
//                         return <PokemonCard 
//                             key={pokeInfo.id}
//                             name={pokeInfo.name}
//                             sprites={pokeInfo.sprites}
//                             height={pokeInfo.height}
//                             weight={pokeInfo.weight}
//                             abilities={pokeInfo.abilities}
//                             types={pokeInfo.types}
//                             moves={pokeInfo.moves}
//                             stats={pokeInfo.stats}
//                             />
//                     })}
//                 </div>
//             </div>

//             {noPokemon && <p>No Pokemon Found!</p>}
//         </div>
//     )
// }

import { useState, useEffect } from "react";
import "./Pokedex.css";
import PokemonCard from "../SingleEntry";
import { useParams } from "react-router-dom";

export default function Pokemon() {

    const [pokemon, setPokemon] = useState([]);
    const {pokedexName} = useParams();
    const [search, setSearch] = useState("");
    const [type, setType] = useState([]);
    const [noPokemon, setNoPokemon] = useState(false);
    const [typeId, setTypeId] = useState(0);
    const [favoritePokemon, setFavoritePokemon] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );

    const pokedexLimits = {
        kanto: 151,
        johto: 100,
        hoenn: 135,
        sinnoh: 107,
        unova: 156,
        kalos: 72,
    };

    const pokedexURLs = {
        kanto: "https://pokeapi.co/api/v2/pokedex/2/",
        johto: "https://pokeapi.co/api/v2/pokedex/3/",
        hoenn: "https://pokeapi.co/api/v2/pokedex/4/",
        sinnoh: "https://pokeapi.co/api/v2/pokedex/5/",
        unova: "https://pokeapi.co/api/v2/pokedex/8/",
        kalos: "https://pokeapi.co/api/v2/pokedex/12/",
    };


    function GetData(typeId = 0) {
        let url = pokedexURLs[pokedexName];

        if (!url) {
            setNoPokemon(true);
            setPokemon([]);
            return;
        }
    
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (!data.pokemon_entries) {
                    setNoPokemon(true);
                    setPokemon([]);
                    return;
                }

                Promise.all(
                    data.pokemon_entries.map((entry) =>
                        fetch(`https://pokeapi.co/api/v2/pokemon/${entry.pokemon_species.name}`)
                            .then((res) => {
                                if (!res.ok) {
                                    return null;
                                }
                                return res.json();
                            })
                            .catch((error) => {
                                console.error(`Failed to fetch ${entry.pokemon_species.name}:`, error);
                                return null;
                            })
                    )
                )
                .then((pokemonDetails) => {
                    let filteredPokemon = pokemonDetails.filter(result => result !== null);

                        if (typeId !== 0) {
                            filteredPokemon = filteredPokemon.filter((p) =>
                                p.types.some((t) => t.type.url.includes(`/type/${typeId}/`))
                            );
                        }

                        setPokemon(filteredPokemon);
                        setNoPokemon(filteredPokemon.length === 0);
                    });
            })
    }

    function getTypes() {
        fetch(`https://pokeapi.co/api/v2/type`)
            .then((res) => res.json())
            .then((data) => {
                setType(data.results);
            });
    }

    useEffect(() => {
        GetData();
        getTypes();
    }, [pokedexName])

    // Load Pokémon data on mount
    useEffect(() => {
        GetData();
        getTypes();
    }, []);

    // Refetch data when `typeId` changes
    useEffect(() => {
        GetData(typeId);
    }, [typeId]);

    const filteredPokemon = pokemon.filter((poke) =>
        poke.name.toLowerCase().includes(search.toLowerCase())
    );

    function toggleFavorite(pokeId) {
        setFavoritePokemon((prevFavorites) => {
            const updatedFavorites = prevFavorites.includes(pokeId)
                ? prevFavorites.filter((id) => id !== pokeId)
                : [...prevFavorites, pokeId];

            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    }

    return (
        <div className="pokedex">
            <div className="filterBar">
                <div className="filterContent">
                <label htmlFor="type">Filter by Type:  </label>
                <select className="filter" onChange={(e) => setTypeId(parseInt(e.target.value))}>
                    <option value={0}>Any</option>
                    {type.map((t) => (
                        <option key={t.name} value={t.url.split("/").slice(-2, -1)[0]}>
                            {t.name}
                        </option>
                    ))}
                </select>
                </div>
            </div>

            <div className="pokemonDeck">
                <div className="pokemonCard">
                    {filteredPokemon.map((pokeInfo) => (
                        <PokemonCard
                            key={pokeInfo.id}
                            id={pokeInfo.id}
                            name={pokeInfo.name}
                            sprites={pokeInfo.sprites}
                            height={pokeInfo.height}
                            weight={pokeInfo.weight}
                            abilities={pokeInfo.abilities}
                            types={pokeInfo.types}
                            moves={pokeInfo.moves}
                            stats={pokeInfo.stats}
                            isFavorite={favoritePokemon.includes(pokeInfo.id)}
                            toggleFavorite={toggleFavorite}

                        />
                    ))}
                </div>
            </div>

            {noPokemon && <p>No Pokémon Found!</p>}
        </div>
    );
}