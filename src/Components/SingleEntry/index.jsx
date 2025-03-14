import { useState } from "react";
import "./SingleEntry.css"
import Button from "../Button";
import FullEntry from "../FullEntry";

// export default function PokemonCard({ name, sprites={}, id, height, weight, abilities=[], types=[], moves=[], stats=[], text, link }) {
//     const [isFlipped, setIsFlipped] = useState(false);
//     const [isFavorite, toggleFavorite] = useState(false);
    
//     return (
//         <div className="card-container" onClick={() => setIsFlipped(!isFlipped)}>
//             <div className={`card ${isFlipped ? "flipped" : ""}`}>
//                 <div className="card-front">
//                     <Button
//                         onClick={() => toggleFavorite(id)}
//                         className={isFavorite ? "Unfavorite" : "Favorite"}
//                         text="Favorite"
//                     />
//                     <img src={sprites.front_default} alt={name} />
//                     <h3>{name}</h3>
//                     <p>{types.map(a => a.type.name).join(", ")}</p>
//                 </div>

//                 <div className="card-back">
//                     <p><strong>Height:</strong> {height}</p>
//                     <p><strong>Weight:</strong> {weight}</p>
//                     <p><strong>Abilities:</strong> {abilities.map(a => a.ability.name).join(", ")}</p>
//                     <Button text="Full Entry" link="#"/>
                    
//                     {/* <p>Moves: {moves.map(a => a.move.name).join(", ")}</p> */}
//                     {/* <p>Base Stats: {stats.map(a => a.base_stat).join(", ")}</p> */}
//                 </div>
//             </div>
//         </div>
//     )
// }

export default function PokemonCard({
    name, sprites = {}, id, height, weight, abilities = [], types = [], isFavorite, toggleFavorite }) {
    const [isFlipped, setIsFlipped] = useState(false);

    console.log(`Pokemon ${name} favorite status:`, isFavorite);

    return (
        <div className="card-container" onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`card ${isFlipped ? "flipped" : ""}`}>
                
                {/* Front Side */}
                <div className="card-front">
                    <Link to={`/pokemon/${id}`}>
                        <img src={sprites.front_default} alt={name} />
                        <p>#{id}</p>
                        <h3>{name}</h3>
                    </Link>
                    <i
                       className="fa-solid fa-heart" 
                            style={{ 
                                color: isFavorite ? "red" : "gray",
                                fontSize: "24px",
                                cursor: "pointer"
                            }}
                       onClick={(e) => {
                           e.stopPropagation();
                           toggleFavorite(id);
                       }}
                    ></i>
                </div>

                {/* Back Side */}
                <div className="card-back">
                    <p><strong>Type(s):</strong> {types.map(a => a.type.name).join(", ")}</p>
                    <p><strong>Abilities:</strong> {abilities.map(a => a.ability.name).join(", ")}</p>
                    <p><strong>Height:</strong> {height}</p>
                    <p><strong>Weight:</strong> {weight}</p>
                    
                </div>
            </div>
        </div>
    );
}