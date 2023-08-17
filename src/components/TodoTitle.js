import React, { useState } from "react";
import TodoTitleEdit from "./TodoTitleEdit";
import Wrapper from "../assets/wrappers/TodoTitle";
import Button from "../assets/wrappers/Button";
import { TODO_DELETE_MULTIPLE } from "../constants/actionTypes";
import { TODO_DELETE_LIST } from "../constants/actionTypes";

const TodoTitle = ({ list, dispatch }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleListDelete = () => {
    dispatch({ type: TODO_DELETE_LIST, payload: list.collectionId });
  };

  const handleMultipleDelete = () => {
    dispatch({ type: TODO_DELETE_MULTIPLE, payload: list.collectionId });
  };

  const listTitle = (
    <Wrapper>
      <div className="title-section">
        <article className="todo-title" onClick={handleEdit}>
          {list.collectionTitle}
        </article>
        <div>
          <Button onClick={handleEdit}>Edit Title</Button>
          <Button onClick={handleListDelete}>Delete List</Button>
          <Button onClick={handleMultipleDelete}>Delete Selected</Button>
        </div>
      </div>
    </Wrapper>
  );

  const textContent = isEdit ? (
    <TodoTitleEdit list={list} dispatch={dispatch} handleEdit={handleEdit} />
  ) : (
    listTitle
  );

  return <>{textContent}</>;
};

export default TodoTitle;
