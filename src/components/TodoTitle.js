import React, { useState } from "react";
import TodoTitleEdit from "./TodoTitleEdit";
import Wrapper from "../assets/wrappers/TodoTitle";

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

  const textContent = isEdit ? (
    <TodoTitleEdit list={list} dispatch={dispatch} handleEdit={handleEdit} />
  ) : (
    <Wrapper>
      <div className="title-section">
        <article className="todo-title" onClick={handleEdit}>
          {list.collection_title}
        </article>
        <div>
          <button onClick={handleEdit}>Edit Title</button>
          <button onClick={handleListDelete}>Delete List</button>
          <button onClick={handleMultipleDelete}>Delete Selected</button>
        </div>
      </div>
    </Wrapper>
  );

  return <>{textContent}</>;
};

export default TodoTitle;
