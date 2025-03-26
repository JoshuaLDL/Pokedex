import { Link } from "react-router-dom";
import "./PokedexesContainer.css"
import Image from "../Image";

export default function PokedexesContainer({url, image, alt, title, intro, backgroundImage}){
    const containerStyle = {
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'}
    const handleImageProps = (imageProps) => {
        console.log('Image props received:', imageProps);
    };
    
    return(

        
            <div className="Pokedexes" style={ containerStyle }>
                <Link className="pokedexesContainer" to={url}>
                    <Image src={image} alt={alt} style={{ maxWidth: "300px", height: "auto" }} onProps={handleImageProps} />
                    <div className="ContainerText">
                        <h3>{title}</h3>
                        <p>{intro}</p>
                    </div>
                </Link>
            </div>
      
    )
}