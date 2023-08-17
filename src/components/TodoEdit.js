import React from "react";
import { TODO_EDIT } from "../constants/actionTypes";
import TextInputForm from "./TextInputForm";

const TodoEdit = ({ todo, dispatch, handleEdit }) => {
  const handleSubmit = (title) => {
    dispatch({
      type: TODO_EDIT,
      payload: { id: todo.id, title },
    });
    handleEdit();
  };

  return <TextInputForm onSubmit={handleSubmit} initialValue={todo.title} />;
};

export default TodoEdit;
