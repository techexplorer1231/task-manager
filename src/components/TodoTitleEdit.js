import React, { useState } from "react";
import useFocusInput from "../hooks/useFocusInput";
import Wrapper from "../assets/wrappers/TodoTitleEdit";
import { TODO_EDIT_COLLECTION_TITLE } from "../constants/actionTypes";

const TodoTitleEdit = ({ list, dispatch, handleEdit }) => {
  const [collectionTitle, setCollectionTitle] = useState(list.collection_title);

  const inputRef = useFocusInput();

  const handleCollectionEdit = (e) => {
    setCollectionTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: TODO_EDIT_COLLECTION_TITLE,
      payload: { collectionTitle, id: list.collection_id },
    });
    handleEdit();
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form-section">
        <input
          type="text"
          ref={inputRef}
          value={collectionTitle}
          onChange={handleCollectionEdit}
          className="form-input"
        />
      </form>
    </Wrapper>
  );
};

export default TodoTitleEdit;
