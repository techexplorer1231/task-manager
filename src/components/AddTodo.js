import React, { useState } from "react";

const AddTodo = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log(input);
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
