import { Link } from "react-router-dom";

export default function PokedexesContainer({url, image, alt, title, intro}){

    
    return(

        <div className="pokedexesContainer">
            <Link to={url}>
                <img src={image} alt={alt}/>
                <h3>{title}</h3>
                <p>{intro}</p>
            </Link>
        </div>
    )
}