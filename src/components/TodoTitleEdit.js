import React, { useState } from "react";
import useFocusInput from "../hooks/useFocusInput";

const TodoTitleEdit = ({ list, dispatch, handleEdit }) => {
  const [collectionTitle, setCollectionTitle] = useState(list.collection_title);

  const inputRef = useFocusInput();

  const handleCollectionEdit = (e) => {
    setCollectionTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "EDIT_COLLECTION_TITLE",
      payload: { collectionTitle, id: list.collection_id },
    });
    handleEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        value={collectionTitle}
        onChange={handleCollectionEdit}
      />
    </form>
  );
};

export default TodoTitleEdit;
