import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import TodoTitleEdit from "./TodoTitleEdit";

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
    <>
      <h3 className="todo-title" onClick={handleEdit}>
        {list.collection_title}
        <button>
          <TbEdit />
        </button>
      </h3>
      <button onClick={handleListDelete}>Delete List</button>
      <button onClick={handleMultipleDelete}>Delete Selected</button>
    </>
  );

  return <>{textContent}</>;
};

export default TodoTitle;
