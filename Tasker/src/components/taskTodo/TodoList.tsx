import TodoItemSmall from "./TodoItem";
import { TodoListSmallProps } from "./types";

export default function TodoListSmall({
  todos,
  toggleTodo,
  deleteTodo,
}: TodoListSmallProps) {
  return (
    <ul className="divide-y divide-gray-100">
      {todos.map((todo) => (
        <TodoItemSmall
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
