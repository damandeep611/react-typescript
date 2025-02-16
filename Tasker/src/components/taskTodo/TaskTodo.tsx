import { useState } from "react";
import TaskFormSmall from "./TaskForm";
import TodoListSmall from "./TodoList";
import { TodoTaskSmall } from "./types";

export default function TaskTodo() {
  const [todos, setTodos] = useState<TodoTaskSmall[]>([]);

  const addTodo = (text: string) => {
    const newTodo: TodoTaskSmall = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="min-h-screen mx-auto px-4 py-12 ">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center ">
        <h2>Todo basics </h2>
        <div>
          <TaskFormSmall addTodo={addTodo} />
          <TodoListSmall
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}
