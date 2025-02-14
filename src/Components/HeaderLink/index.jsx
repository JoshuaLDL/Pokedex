import "./HeaderLink.css"

export default function HeaderLink ({text, link}) {

    return(
        <a className="Header-Link" href={link}>{text}</a>
    )
}