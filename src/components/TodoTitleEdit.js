import React from "react";
import Wrapper from "../assets/wrappers/TodoTitleEdit";
import {
  TODO_EDIT_COLLECTION_TITLE_SUBMIT,
  TODO_EDIT_COLLECTION_TITLE,
} from "../constants/actionTypes";
import TextInputForm from "./TextInputForm";

const TodoTitleEdit = ({ list, dispatch }) => {
  const handleSubmit = (collectionTitle) => {
    dispatch({
      type: TODO_EDIT_COLLECTION_TITLE_SUBMIT,
      payload: { collectionTitle, id: list.collectionId },
    });
  };

  const handleTextChange = (title) => {
    dispatch({
      type: TODO_EDIT_COLLECTION_TITLE,
      payload: { id: list.collectionId, title },
    });
  };

  return (
    <Wrapper>
      <TextInputForm
        onSubmit={handleSubmit}
        initialValue={list.collectionTitle}
        formClassName="form-section"
        inputClassName="form-input"
        onTextChange={handleTextChange}
      />
    </Wrapper>
  );
};

export default TodoTitleEdit;
