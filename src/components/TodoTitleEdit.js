import React from "react";
import Wrapper from "../assets/wrappers/TodoTitleEdit";
import { TODO_EDIT_COLLECTION_TITLE } from "../constants/actionTypes";
import TextInputForm from "./TextInputForm";

const TodoTitleEdit = ({ list, dispatch, handleEdit }) => {
  const handleSubmit = (collectionTitle) => {
    dispatch({
      type: TODO_EDIT_COLLECTION_TITLE,
      payload: { collectionTitle, id: list.collectionId },
    });
    handleEdit();
  };

  return (
    <Wrapper>
      <TextInputForm
        onSubmit={handleSubmit}
        initialValue={list.collectionTitle}
        formClassName="form-section"
        inputClassName="form-input"
      />
    </Wrapper>
  );
};

export default TodoTitleEdit;
