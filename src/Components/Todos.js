import React from "react";
import {FaCheck} from 'react-icons/fa'
import './Todos.css'
const Todos = ({ todoList, markDone }) => {
    return <div className="list">
        <h4>Todo list:</h4>
        {todoList.map(todo => {
            return <div className="listitem" key={todo.id}><p>{todo.title}</p>
                <FaCheck onClick={() => markDone(todo.id)}></FaCheck>
            </div>
        })}
    </div>
}
export default Todos;