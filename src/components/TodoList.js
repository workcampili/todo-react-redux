import React from 'react';
import Todo from './Todo';
import {useSelector} from 'react-redux'


export default function TodoList() {

    const todos = useSelector((state)=>state.todos);

    console.log(todos);




    return (
        <div className ="lista-todos">
            
            {todos.map(todo => (
                <Todo key={todo.id} todo = {todo} />
                )
            )}
        </div>
    )
}
