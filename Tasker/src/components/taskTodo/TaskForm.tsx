import React, { useState } from "react";

interface TaskFormSmallProps {
  addTodo: (text: string) => void;
}

export default function TaskFormSmall({ addTodo }: TaskFormSmallProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="py-6">
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your task"
          className="py-2 px-12 text-black dark:text-white dark:bg-blue-950"
        />
        <button type="submit" className="bg-blue-400 text-white px-4 py-2">
          Add
        </button>
      </div>
    </form>
  );
}
