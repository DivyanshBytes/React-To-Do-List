import { useState } from 'react'
import logo from './assets/logo.png'

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInputs] = useState("");

  const addTodo = () => {
    if(input.trim()){
      setTodos([...todos, {id: Date.now(), text:input, completed:false}])
      setInputs("")
    }
  }

  return (
    <>
      <div className='bg-gradient-to-r from-slate-500 to-slate-800 min-h-screen min-w-screen flex items-center justify-center'>
        <div className='bg-white p-16 shadow-2xl rounded-xl flex flex-col gap-7'>

          <div className='flex gap-2'>
            <img className='w-10 h-10' src="/src/assets/logo.png" alt="" />
            <h1 className='text-3xl font-extrabold'>React Tasks</h1>
          </div>

          <div className="flex border border-zinc-400 rounded-md overflow-hidden w-full max-w-md">
            <input 
            value={input} 
            onChange={(e) => setInputs(e.target.value)} 
            onKeyDown={(e) =>{
              if(e.key === "Enter"){
                addTodo();
              }
            }} 
            className="flex-grow px-3 py-2 bg-zinc-300 outline-none" 
            type="text" 
            placeholder="Add a new task"/>
            <button onClick={addTodo} className="bg-blue-400 px-4 py-2 hover:bg-blue-500 text-white cursor-pointer font-bold">ADD</button>
          </div>
          
          <ul>
  {
    todos.map((todo) => (
      <li key={todo.id} 
          className='flex items-center p-3 rounded-lg bg-slate-100 border-gray-200'>

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => setTodos(
            todos.map((t) =>
              t.id === todo.id ? { ...t, completed: !t.completed } : t
            )
          )}
          className='mr-2 h-5 w-5 text-blue-600 cursor-pointer'
        />

        <span className={`flex-grow ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
          {todo.text}
        </span>

        <button
          onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
          className="ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
        >
          Delete
        </button>
      </li>
    ))
  }
</ul>


        </div>
      </div>
    </>
  )
}

export default App
