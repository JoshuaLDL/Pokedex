import "./SingleEntry.css"


export default function SingleEntry ({sprites={}, id, name, height, weight, abilities=[], types=[], moves=[], stats=[]}) {

    return (
       
        <div className="pokeContent">
                    <div className="nameType">
                        <h2>{name}</h2>
                        <p>{types.map(a => a.type.name).join(", ")}</p>
                    </div>

                    <img src={sprites.front_default} alt={name} />
                    
                    <div className="statsOne">
                        <p>Abilities: {abilities.map(a => a.ability.name).join(", ")}</p>
                        <p>Height: {height}</p>
                        <p>Weight: {weight}</p>
                        <p>Base Stats: {stats.map(a => a.base_stat).join(", ")}</p>
                    </div>

                    <p>Moves: {moves.map(a => a.move.name).join(", ")}</p>
               
        </div>


    //                     <li key={index}>
    //                         <h3>{poke.name}</h3>
    //                         <img src={poke.sprites.front_default} alt={poke.name} />
    //                         <p>Height: {poke.height}</p>
    //                         <p>Weight: {poke.weight}</p>
    //                         <p>Abilities: {poke.abilities.map(a => a.ability.name).join(", ")}</p>
    )
}