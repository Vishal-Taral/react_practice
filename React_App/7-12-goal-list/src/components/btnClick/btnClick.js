import './btnClick.css'
import {useState} from 'react';

const BtnClick = (props) => {
    const [ newName, setNewName ] = useState(props.name);
    

    const clickHandler = (event) => {
        setNewName("Atharva");
        console.log(newName);
        props.sendData(event)
    }
    
    return(
        <div className='clickable-button'>
            <li>{newName}</li><br />
            <button onClick={clickHandler}>Click me</button>
        </div>
    );
};

export default BtnClick;