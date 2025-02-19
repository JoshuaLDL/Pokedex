import { useState } from "react"
import "./Pokedex.css"
import { useEffect } from "react"
import SingleEntry from "../SingleEntry"
import PokemonCard from "../SingleEntry"


export default function Pokemon ({name}) {
    const[Pokemon, setPokemon] = useState([])
   
    const [search, setSearch] = useState ("")
    const [type, setType] = useState([])
    const [noPokemon, setNoPokemon] = useState (false)
    const [typeId, setTypeId] = useState(0)
    
    function GetData(typeId = 0) {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=100`;
    
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (!data.results) {
                    setNoPokemon(true)
                    setPokemon([])
                    return
                }

                Promise.all(data.results.map((poke) => fetch(poke.url).then((res) => res.json())))
                    .then((pokemonDetails) => {
                        let filteredPokemon = pokemonDetails
    
                        // Filter by Type if `typeId` is selected
                        if (typeId !== 0) {
                            filteredPokemon = filteredPokemon.filter((p) => 
                                p.types.some((t) => t.type.url.includes(`/type/${typeId}/`))
                        )}

                        setPokemon(filteredPokemon)
                        setNoPokemon(filteredPokemon.length === 0)
                    })
            })

            .catch(() => {
                setNoPokemon(true)
                setPokemon([])
            })
    }
    

        useEffect(() => {
            GetData()
        }, [])

        const filteredPokemon = Pokemon.filter((poke) =>
            poke.name.toLowerCase().includes(search.toLowerCase())
        )
  
        function getTypes() {
            fetch(`https://pokeapi.co/api/v2/type`)
            .then((res) => res.json())
            .then((data) => {
                setType(data.results)
            })
}
  
    useEffect(() => {
        GetData(typeId)
    }, [typeId])
  
    useEffect(() => getTypes(), [])

    return (
        <div className="pokedex">
            <>

                <div className="filterBar">
                    <label htmlFor="type"></label>
                    
                    <select className="filter" onChange={(e) => setTypeId(parseInt(e.target.value))}>
                        <option value={0}>Any</option>
                        {type.map((t) => (
                            <option key={t.name} value={t.url.split("/").slice(-2, -1)[0]}>
                                {t.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* <div>
                    <label htmlFor="search">
                        Search Pokemon:
                    </label>
                    <input
                        type="text"
                        id="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Pokemon..."
                        />
                </div> */}

        
            </>

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
                    })}
                </div>
            </div>

            {noPokemon && <p>No Pokemon Found!</p>}
        </div>
    )
}