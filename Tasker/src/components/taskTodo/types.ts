export interface TodoTaskSmall {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoItemSmallProps {
  todo: TodoTaskSmall;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export interface TodoListSmallProps {
  todos: TodoTaskSmall[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
