export default function FullEntry({
    name, sprites = {}, id, height, weight, abilities = [], types = [], moves, isFavorite, toggleFavorite }){

    function PokemonDetail() {
        const [pokemon, setPokemon] = useState(null);
        
        useEffect(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((data) => setPokemon(data))
            .catch((err) => console.error("Error fetching Pokémon:", err));
        }, [id]);
        
        if (!pokemon) return <p>Loading Pokémon...</p>;
    }
    
    return(
        <div>
            <p> {sprites} </p>
            <p> {id} </p>
            <p> {name} </p>
            <p> {types} </p>
            <p> {height} </p>
            <p> {weight} </p>
            <p> {abilities} </p>
            <p> {moves} </p>
            <p> {} </p>
        </div>
    )
    
    
}