import { useState } from "react"

const Todo = () => {
  const [todos, setTodos] = useState([])
  //the todos will hold the added todo's and setTodos will be adding the new todos to the existing todo's in the state
  const [newTodo, setNewTodo] = useState("")

  const addTodo = ()=> {
    if(newTodo.trim()){
      setTodos([...todos, newTodo])
      setNewTodo("")
    }

  }
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen">
      <div>
        <input type="text" placeholder="Enter the todo" value={newTodo} onChange={(e)=> setNewTodo(e.target.value)} className="p-2 border border-black" />
        <button className="bg-black text-white p-2 px-8" onClick={addTodo}>Add Task</button>
      </div>
      <div>Your added Todos
        <ul>
          {todos.map((todo, index)=> (
            <li key={index} className="p-1 border border-black m-1">{todo}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Todo
