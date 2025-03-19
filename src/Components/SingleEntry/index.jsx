import { useState } from "react";
import "./SingleEntry.css"
import Button from "../Button";
import FullEntry from "../FullEntry";
import { Link } from "react-router-dom";
import Nav from "../Nav";

export default function PokemonCard({
    name, sprites = {}, id, height, weight, abilities = [], types = [], isFavorite, toggleFavorite }) {
    const [isFlipped, setIsFlipped] = useState(false);

    // console.log(`Pokemon ${name} favorite status:`, isFavorite);

    return (
        
        <div className="card-container" onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`card ${isFlipped ? "flipped" : ""}`}>
                
                {/* Front Side */}
                <div className="card-front">
                    <Link className="pokemonCardLink" to={`/pokemon/${name}`}>
                        <img src={sprites.front_default} alt={name} />
                        </Link>
                        <p>#{id}</p>
                        <h4>{name}</h4>
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
                    <img src={sprites.back_default} alt={name} />
                    <p><strong>Type(s):</strong> {types.map(a => a.type.name).join(", ")}</p>
                    <p><strong>Abilities:</strong> {abilities.map(a => a.ability.name).join(", ")}</p>
                </div>
            </div>
        </div>
    
    );
}