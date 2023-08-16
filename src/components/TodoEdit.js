import React, { useEffect, useRef, useState } from "react";

const TodoEdit = ({ todo, dispatch, handleEdit }) => {
  const [title, setTitle] = useState(todo.title);
  const editInputRef = useRef(null);

  useEffect(() => {
    editInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "TODO_EDIT",
      payload: { id: todo.id, title },
    });
    handleEdit();
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={editInputRef}
        type="text"
        value={title}
        onChange={handleChange}
      />
    </form>
  );
};

export default TodoEdit;
