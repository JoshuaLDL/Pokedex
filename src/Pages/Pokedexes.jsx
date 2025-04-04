import Image from "../Components/Image";
import PokedexesContainer from "../Components/PokedexesContainer";
import "./Pages.css"

export default function Pokedexes(){

    return(
        <div className="pokedexesPage">
            <PokedexesContainer 
                className="PokedexesContainer" 
                url="/pokedex/kanto" 
                image="assets/Kanto.png" 
                alt="A map of Kanto from the Pokemon Red, Blue and Yellow games" 
                title="Kanto" 
                intro="The Kanto region is the setting of Pokémon Red, Blue, and Yellow and their remakes, Pokémon FireRed, LeafGreen. Based on and named after the Kantō region of Japan, this setting started the precedent of basing the geography and culture of the game's region on a real-world setting."
                backgroundImage="url(/assets/Kanto.avif)"
            />
            
            <PokedexesContainer 
                className="PokedexesContainer" 
                url="/pokedex/johto" 
                image="assets/Johto.png" 
                alt="A map of Johto from the Pokemon Gold and Silver games" 
                title="Johto" 
                intro="The Johto region is the setting of the second generation of Pokémon games, which includes Pokémon Gold, Silver, Crystal and their remakes, Pokémon HeartGold and SoulSilver. This game's geography is based upon the Kansai, Tokai and eastern Shikoku areas of Japan. The game setting draws upon the Kansai region's abundance of temples, the architectural design of the Kansai region and its geographical sights, such as Mount Fuji and the Naruto whirlpools."
                backgroundImage="url(/assets/Johto.avif)"
            />

            <PokedexesContainer 
                className="PokedexesContainer" 
                url="/pokedex/hoenn" 
                image="assets/Hoenn.png" 
                alt="A map of Hoenn  from the Pokemon Ruby, Sapphire and Emerald games" 
                title="Hoenn" 
                intro="The Hoenn region is the setting of the third generation of Pokémon games, Pokémon Ruby, Sapphire and Emerald, as well as their remakes Pokémon Omega Ruby and Alpha Sapphire. This time being based on the Japanese island of Kyushu; the real world and game region share an abundance of smaller islands around the main one and a subtropical climate. Like Sinnoh, this region is known to have a large range of various natural environments, such as rainforests and deserts."
                backgroundImage="url(assets/Hoenn.avif)"
            />

            <PokedexesContainer 
                className="PokedexesContainer" 
                url="/pokedex/sinnoh" 
                image="assets/Sinnoh.png" 
                alt="A map of Sinnoh from the Pokemon Diamond and Pearl games" 
                title="Sinnoh" 
                intro="The Sinnoh region is the setting of the fourth generation of Pokémon games, which encompasses the setting of Pokémon Diamond, Pearl and Platinum, as well as their remakes Pokémon Brilliant Diamond and Shining Pearl and Pokémon Legends: Arceus. It is based on the northernmost island of Japan, Hokkaidō. The region was meant to have a 'northern' feel, with some routes being entirely covered in snow."
                backgroundImage="url(/assets/Sinnoh.avif)"
            />
            
            <PokedexesContainer 
                className="PokedexesContainer" 
                url="/pokedex/unova" 
                image="assets/Unova.png" 
                alt="A map of Unova from the Pokemon Black and White games" 
                title="Unova" 
                intro="The Unova region is the setting of the fifth generation of Pokémon games, which encompasses the setting of Pokémon Black and White and their sequels Pokémon Black 2 and White 2. For the first time in the main series, the region was based on a region outside Japan, with Unova taking inspiration from the New York metropolitan area."
                backgroundImage="url(/assets/Unova.avif)"
            />
            
            <PokedexesContainer 
                className="PokedexesContainer" 
                url="/pokedex/kalos" 
                image="assets/Unova.png" 
                alt="A map of Kalos from the Pokemon X and Y games" 
                title="Kalos" 
                intro="The Kalos region is the setting of the sixth generation of Pokémon games, which is where the games Pokémon X and Y take place. This region is inspired almost entirely by the northern half of Metropolitan France, with landmarks such as the Eiffel Tower and the Palace of Versailles having representations here. The Kalos Pokémon League is based on the Notre-Dame de Paris due to its castle/cathedral-like exterior."
                backgroundImage="url(/assets/Kalos_alt.png)"
            />
        </div>
    )
}