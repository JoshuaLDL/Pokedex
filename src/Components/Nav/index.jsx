import HeaderLink from "../HeaderLink";
import "./Nav.css"

export default function ({text, link}) {

    return (
        <div className="Header">
            <img src="#" alt="Pokeball sprite" />
            <div className="Nav-Bar">
                <HeaderLink text="Example" link="/"/>
                <HeaderLink text="Example" link="/"/>
            </div>
        </div>
    )
}