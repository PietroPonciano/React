import {useState} from 'react'
import './TodoApp.css'
const TodoApp = () => {

  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();

     if(inputValue.trim() !== ''){
    const newTodo = {
      id: Date.now(),
      text: inputValue
    }
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    setInputValue("");
  }
  }

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

 

  return (
    <div className='app-container'>
      <h1 className='title'>Lista de tarefas</h1>
      <form onSubmit={handleSubmit} className='form-container'>
        <input type="text" placeholder='Adicione uma tarefa' value={inputValue} onChange={(e) => setInputValue(e.target.value)

        }/>
        <button type='submit' className='add-button'>Adicionar</button>
      </form>
      {/*  */}
      {todos.length === 0 && <p className='empty'>Não há tarefas.</p>}


      <ul className='todos-list'>
        {todos.map((todo) => (
          <li key={todo.id} className='todo-item'>
            {todo.text}
            <button className='delete-button' onClick={() => handleDelete(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp