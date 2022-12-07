import './card.css'
import {useState} from "react";

const Card = () => {
    const [input , setInput] = useState(1);

    const changeHandler = (e) => {
        setInput(e.target.value);
    }
    
    
    return (
        <div>
            <input type="date" onChange={changeHandler}/> 
            <h1>{input}</h1>
        </div>
    )
}

export default Card;