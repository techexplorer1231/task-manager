import React, { useState } from "react";
import TodoTitleEdit from "./TodoTitleEdit";
import Wrapper from "../assets/wrappers/TodoTitle";
import Button from "../assets/wrappers/Button";

const TodoTitle = ({ list, dispatch }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleListDelete = () => {
    dispatch({ type: "DELETE_LIST", payload: list.collection_id });
  };

  const handleMultipleDelete = () => {
    dispatch({ type: "TODO_DELETE_MULTIPLE", payload: list.collection_id });
  };

  const listTitle = (
    <Wrapper>
      <div className="title-section">
        <article className="todo-title" onClick={handleEdit}>
          {list.collection_title}
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
