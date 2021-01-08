import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteTodo, toggleTodo} from '../redux/todos/todoActions'



export default function Todo({ todo }) {

    const dispatch = useDispatch();
    

    function handleClick(id){

        dispatch(deleteTodo(id))
        
    }

    function handleOnChange(id){
        dispatch(toggleTodo(id))
    }
    return (
        <div className = "todo-item">
            <input onChange={()=>handleOnChange(todo.id)} className="checkbox" type="checkbox" checked={todo.complete}/>
            {`${todo.task}`}
            <button className ="delete" onClick={()=>handleClick(todo.id)}>x</button>
        </div>
    )
}
