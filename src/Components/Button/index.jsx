import "./Button.css"



export default function Button({link, text}) {

    return(
        <button className="Button-One" a href={link}>{text}</button>
    )
}