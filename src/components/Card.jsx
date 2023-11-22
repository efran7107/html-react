import { getCardData } from "./char-data";
import {Component} from "react"
import '../css/Card.css'

class Card extends Component {
   render(){
    const card = this.props.char;
    const name = card.name;
    const nickName = card.nickName;
    const imageUrl = card.imageUrl;
    const background = card.background;
    return (
        <div className="card">
            <div>
                <h3>{name}</h3>
                <h4>{nickName}</h4>
            </div>
            <img src={imageUrl}/>
            <p>{background}</p>
        </div>
    )
   }
}

function Cards () {
    return (
        <section id="character-cards">
            {getCardData().map((char, index) => {
                return <Card char={char} index={index} key={char.name} />
            })}
        </section>
    )
}

export {Cards}