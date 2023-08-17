import React, { useState } from "react";
import Wrapper from "../assets/wrappers/AddTodo";

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    // return in case of empty input
    if (!input) return;
    dispatch({
      type: "TODO_ADD",
      payload: {
        id: Date.now(),
        title: input,
        completed: false,
        isEditing: false,
      },
    });
    setInput("");
  };

  return (
    <Wrapper>
      <form onSubmit={handleAddTodo} className="add-section">
        <input
          className="add-todo"
          type="text"
          placeholder="Add a Task"
          value={input}
          onChange={handleChange}
        />
      </form>
    </Wrapper>
  );
};

export default AddTodo;
