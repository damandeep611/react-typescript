import { TodoItemSmallProps } from "./types";

export default function TodoItemSmall({
  todo,
  toggleTodo,
  deleteTodo,
}: TodoItemSmallProps) {
  return (
    <li className="flex items-center justify-between py-3 px-4 ">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="h-4 w-4 "
        />
        <span className={`ml-3 ${todo.completed ? "line-through" : ""}`}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
