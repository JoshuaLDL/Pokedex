import { Link } from "react-router-dom";
import "./PokedexesContainer.css"

export default function PokedexesContainer({url, image, alt, title, intro}){

    
    return(

        <div className='PokedexesGrid'>
            <Link className="pokedexesContainer" to={url}>
                <img src={image} alt={alt} style={{maxWidth:"300px", height:"auto"}}/>
                <h3>{title}</h3>
                <p>{intro}</p>
            </Link>
        </div>
    )
}