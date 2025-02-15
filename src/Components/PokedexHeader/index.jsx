import "./PokedexHeader.css"

export default function PokedexHeader ({image, text, title, alt}) {

    return(
        <div className="pokedexHeaderMain">
            <img src={image} alt={alt} width="100%" height="auto" />
            <div className="pokedexHeaderSub">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>

    )
}