import React ,{useState}from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addTodo} from '../redux/todos/todoActions'



export default function TodoForm() {

    const todos = useSelector((state)=> state.todos)

    const maxId =(todos.reduce((acc,todo) => acc > todo.id ? acc : todo.id,0))+1

    const dispatch = useDispatch();

 

//   console.log(maxId)

    const [todo,setTodo] = useState({});

  

    function handleOnChange(e){
       
       setTodo({
           id:maxId,
           task:e.target.value,
           complete:false
       })
    }

    function handleSubmit(event){
        event.preventDefault();
         if (todo.task)     
        

        dispatch(addTodo(todo))

        setTodo({id:'',task:'',complete:false})
    }

    return (
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleOnChange} value={todo.task}/>
                <button type ="submit">Add Todo</button>
            </form>
            
        </div>
    )
}
