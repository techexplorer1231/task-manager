import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import Wrapper from "../assets/wrappers/TodoItem";
import TodoEdit from "./TodoEdit";

const TodoItem = ({ todo, dispatch }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [isEditing, setIsEditing] = useState(false);

  const toggleCheckbox = (id) => {
    setIsCompleted(!isCompleted);
    dispatch({ type: "TODO_TOGGLE", payload: id });
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const textContent = isEditing ? (
    <TodoEdit todo={todo} dispatch={dispatch} handleEdit={handleEdit} />
  ) : (
    <label htmlFor={todo.id} className="todo-title">
      {todo.title}
    </label>
  );

  return (
    <Wrapper>
      <div className="todo-item">
        <input
          id={todo.id}
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => toggleCheckbox(todo.id)}
        />
        {textContent}
        {!isEditing && (
          <button onClick={handleEdit} className="todo-edit-btn">
            <MdEdit />
          </button>
        )}
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
