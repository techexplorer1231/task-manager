import React from "react";
import Wrapper from "../assets/wrappers/TodoTitleEdit";
import { TODO_EDIT_COLLECTION_TITLE } from "../constants/actionTypes";
import TextInputForm from "./TextInputForm";

const TodoTitleEdit = ({ list, dispatch, handleEdit }) => {
  const handleSubmit = (collectionTitle) => {
    dispatch({
      type: TODO_EDIT_COLLECTION_TITLE,
      payload: { collectionTitle, id: list.collection_id },
    });
    handleEdit();
  };

  return (
    <Wrapper>
      <TextInputForm
        onSubmit={handleSubmit}
        initialValue={list.collection_title}
        formClassName="form-section"
        inputClassName="form-input"
      />
      {/* <form onSubmit={handleSubmit} className="form-section">
        <input
          type="text"
          ref={inputRef}
          value={collectionTitle}
          onChange={handleCollectionEdit}
          className="form-input"
        />
      </form> */}
    </Wrapper>
  );
};

export default TodoTitleEdit;
