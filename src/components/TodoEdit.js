import React, { useState } from "react";
import useFocusInput from "../hooks/useFocusInput";
import { TODO_EDIT } from "../constants/actionTypes";

const TodoEdit = ({ todo, dispatch, handleEdit }) => {
  const [title, setTitle] = useState(todo.title);
  const inputRef = useFocusInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: TODO_EDIT,
      payload: { id: todo.id, title },
    });
    handleEdit();
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" value={title} onChange={handleChange} />
    </form>
  );
};

export default TodoEdit;
