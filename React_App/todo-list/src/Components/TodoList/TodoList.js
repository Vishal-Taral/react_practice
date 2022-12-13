import React from 'react'
import './TodoList.css'
import List from '../List/List'
import {useState} from 'react'
const TodoList = () => {
    const [activity,setActivity] = useState("");
    const [list , setList] = useState([]);

    const changeHandler = (event) => {
        setActivity(event.target.value);
    } 

    const addActivity = () => {
        const upadatedList = [...list , activity];
        setList(upadatedList);
        console.log(upadatedList);
        setActivity('');
        return upadatedList;   
    }

    const removeAct = (i) => {
        const newList = list.filter((elem,index) => {
            return i = index;
            
        });
        setList(newList);
        console.log(newList);
    }
  return (
    <div className='container'>
        <div>
            <h1>TODO LIST</h1>
        </div>

        <div>
            <input className='inputs' type='text' placeholder='Add Activities' value={activity} onChange={changeHandler}/>
            <button className='btn' onClick={addActivity}>ADD</button>
        </div>
        
        <div>
            <List data = {list} toRemove = {removeAct}/>
        </div>
    </div>
  )
}

export default TodoList