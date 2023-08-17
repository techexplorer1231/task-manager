import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import Wrapper from "../assets/wrappers/TodoItem";
import TodoEdit from "./TodoEdit";
import { TODO_TOGGLE } from "../constants/actionTypes";
import { TODO_DELETE } from "../constants/actionTypes";
import { TODO_EDIT_ENABLE } from "../constants/actionTypes";

const TodoItem = ({ todo, dispatch }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const isEditing = todo.isEditing;

  const toggleCheckbox = (id) => {
    setIsCompleted(!isCompleted);
    dispatch({ type: TODO_TOGGLE, payload: id });
  };

  const handleEdit = () => {
    dispatch({ type: TODO_EDIT_ENABLE, payload: todo.id });
  };

  const handleDelete = () => {
    dispatch({ type: TODO_DELETE, payload: todo.id });
  };

  const textContent = isEditing ? (
    <TodoEdit todo={todo} dispatch={dispatch} />
  ) : (
    <label
      htmlFor={todo.id}
      className={isCompleted ? "todo-title completed" : "todo-title"}
    >
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
        <div>
          {!isEditing && (
            <button onClick={handleEdit} className="todo-edit-btn">
              <TbEdit />
            </button>
          )}
          {!isEditing && (
            <button className="todo-delete-btn" onClick={handleDelete}>
              <MdDelete />
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default TodoItem;
