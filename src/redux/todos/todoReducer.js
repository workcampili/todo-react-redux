import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './todoTypes'

const initialState = {
  todos: [
    {
      id: 1,
      task: 'Buscar Helados',
      complete: false
    },
    {
      id: 2,
      task: 'Comprar comida',
      complete: false
    }
  ]
}






const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: return {
      ...state,
      todos: [...state.todos, action.payload]
    }
    case DELETE_TODO: return{     
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
    }  
    case TOGGLE_TODO :return{
      ...state,
      todos : state.todos.map((todo)=>
        (todo.id === action.payload) ? {...todo, complete : !todo.complete}:todo)     
      
    } 
    

    default: return state
  }
}

export default todoReducer