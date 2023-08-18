import React from "react";
import { TODO_EDIT_SUBMIT, TODO_EDIT } from "../constants/actionTypes";
import TextInputForm from "./TextInputForm";

const TodoEdit = ({ todo, dispatch }) => {
  const handleSubmit = (title) => {
    dispatch({
      type: TODO_EDIT_SUBMIT,
      payload: { id: todo.id, title },
    });
  };

  const handleTextChange = (title) => {
    dispatch({
      type: TODO_EDIT,
      payload: { id: todo.id, title },
    });
  };

  return (
    <TextInputForm
      onSubmit={handleSubmit}
      initialValue={todo.title}
      onTextChange={handleTextChange}
    />
  );
};

export default TodoEdit;
