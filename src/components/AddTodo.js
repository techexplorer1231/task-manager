import React, { useState } from "react";

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: "TODO_ADD",
      payload: { id: Date.now(), text: input },
    });
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          className="add-todo"
          type="text"
          placeholder="Add a Task"
          value={input}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default AddTodo;
