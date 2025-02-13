import { useState } from "react";
import "./SingleEntry.css"
import Button from "../Button";


// export default function SingleEntry ({sprites={}, id, name, height, weight, abilities=[], types=[], moves=[], stats=[]}) {

//     return (
       
//         <div className="pokeContent">
//                     <div className="nameType">
//                         <h2>{name}</h2>
//                         <p>{types.map(a => a.type.name).join(", ")}</p>
//                     </div>

//                     <img src={sprites.front_default} alt={name} />
                    
//                     <div className="statsOne">
//                         <p>Abilities: {abilities.map(a => a.ability.name).join(", ")}</p>
//                         <p>Height: {height}</p>
//                         <p>Weight: {weight}</p>
//                         <p>Base Stats: {stats.map(a => a.base_stat).join(", ")}</p>
//                     </div>

//                     <p>Moves: {moves.map(a => a.move.name).join(", ")}</p>
               
//         </div>
//     )
// }


export default function PokemonCard({ name, sprites={}, id, height, weight, abilities=[], types=[], moves=[], stats=[], text, link }) {
    const [isFlipped, setIsFlipped] = useState(false);
    

    

    return (
        <div className="card-container" onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`card ${isFlipped ? "flipped" : ""}`}>
                {/* Front of the Card (Image) */}
                <div className="card-front">
                    <img src={sprites.front_default} alt={name} />
                    <h3>{name}</h3>
                    <p>{types.map(a => a.type.name).join(", ")}</p>
                </div>

                {/* Back of the Card (Info) */}
                <div className="card-back">
                    <p><strong>Height:</strong> {height}</p>
                    <p><strong>Weight:</strong> {weight}</p>
                    <p><strong>Abilities:</strong> {abilities.map(a => a.ability.name).join(", ")}</p>
                    <Button text="Full Entry" link="#"/>
                    {/* <p>Moves: {moves.map(a => a.move.name).join(", ")}</p> */}
                    {/* <p>Base Stats: {stats.map(a => a.base_stat).join(", ")}</p> */}
                </div>
            </div>
        </div>
    );
}