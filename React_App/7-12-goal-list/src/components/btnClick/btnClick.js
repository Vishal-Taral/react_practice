import './btnClick.css'
import {useState} from 'react';

const BtnClick = (props) => {
    const [ newName, setNewName ] = useState(props.name);
    

    const clickHandler = () => {
        setNewName("Atharva");
        console.log(newName);
    }
    return(
        <div className='clickable-button'>
            <li>{newName}</li>
            <button onClick={clickHandler}>Click me</button>
        </div>
    );
};

export default BtnClick;