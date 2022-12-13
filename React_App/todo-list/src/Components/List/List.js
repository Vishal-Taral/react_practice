import React from 'react'
import './List.css'
const List = (props) => {
    const onRemoveActivity = () => {
        props.toRemove();
    }
  return (
    <div>
        <strong> Here is Activity List</strong>
        <ul>{props.data.map((activities , index) => {
            return (
                <div className='list-item' key={index}>
                    <li className='act-list'>{activities}</li>
                    <button className='remove-btn' onClick={onRemoveActivity}>Remove</button>
                </div>
                
            )
        })}</ul>
        
    </div>
  )
}

export default List