import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import Wrapper from "../assets/wrappers/TodoItem";

const TodoItem = ({ todo, dispatch }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleCheckbox = (id) => {
    setIsCompleted(!isCompleted);
    dispatch({ type: "TODO_TOGGLE", payload: id });
  };

  return (
    <Wrapper>
      <div className="todo-item">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => toggleCheckbox(todo.id)}
        />

        <div className="todo-title">{todo.text}</div>
        <button className="todo-edit-btn">
          <MdEdit />
        </button>
        <button
          className="todo-delete-btn"
          onClick={() => dispatch({ type: "TODO_DELETE", payload: todo.id })}
        >
          <MdDelete />
        </button>
      </div>
    </Wrapper>
  );
};

export default TodoItem;
