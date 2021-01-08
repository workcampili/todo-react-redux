
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';







function App() {

  return (
    <div className="App">
      <h1>Todos con Redux</h1>
      <h3>Usando functional components ( useSelector y use Dispatch )</h3>
      <TodoForm />
      <hr/>      
      
      <TodoList />

    </div>
  );
}

export default App;
