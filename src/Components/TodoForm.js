import React, { useState } from 'react'
import './TodoForm.css'
const TodoForm=(props)=>{
    const [todoString,setTodoString]=useState("")
    const textChangeHandler=(event)=>{
        setTodoString(event.target.value)
    }
    const formSubmitHandler=(e)=>{
        e.preventDefault();
        const todo={
            title:todoString,
            id:Math.random(),
        }
        props.onSubmitHandler(todo)
        setTodoString('')
        
    }
    return(
        <div className='todoForm'>
            <form onSubmit={formSubmitHandler}>
                <input className='form' value={todoString} type={'text'} onChange={textChangeHandler}></input>
                <button className='button' type='submit'>Add</button>
            </form>
        </div>
    )
}
export default TodoForm;